import { Injectable, Optional } from '@angular/core';
import {
  DataServiceError,
  DefaultDataServiceConfig,
  EntityCollectionDataService,
  HttpMethods,
  QueryParams, RequestData
} from '@osveh/data-kit';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, timeout } from 'rxjs/operators';
import { Update } from '@ngrx/entity';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { SahbaHttpUrlGenerator } from './url-generator';


// tslint:disable-next-line:max-line-length
const token = 'bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0d2JESGJzZ1plMVFvbXJRQU9FZWllWG9GVGQ3SHpjNnEzUXVtdnYzbFFJIn0.eyJqdGkiOiIzMzBmNWQxYi1hMDI3LTRkMmMtYTc0Yy1kNWYwY2JkNjFkMjAiLCJleHAiOjE1Njk5NjIxMDQsIm5iZiI6MCwiaWF0IjoxNTY5OTMzMzA0LCJpc3MiOiJodHRwOi8vMTkyLjE2OC4xMDAuMTExL2F1dGgvcmVhbG1zL1Rlc3QtUmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo5MzBjMzI3ZC01YWZhLTQyZGQtOTJhNi05MjQ3OGY5MWJlNGM6MDZhOTIzNjEtYTBlOC00NjNmLTlhZTYtZDUyZTY1YWExNzQxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidGVzdC1mcm9udGVuZCIsIm5vbmNlIjoiYmUxOWI0ZjEtOTFjNS00OGYwLTkyNGYtNGI2ZDU5MGMwYjgwIiwiYXV0aF90aW1lIjoxNTY5OTMxMTIyLCJzZXNzaW9uX3N0YXRlIjoiMGQyNTQ0YTQtZTk5ZS00NGI5LTg4YTItNWY2Mzg3ZjI1ZTI1IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vMTkyLjE2OC4xMC42Mjo4MDgwIiwiaHR0cDovL2xvY2FsaG9zdDoxMzk3IiwiaHR0cDovLzE5Mi4xNjguMTAuMzE6ODA4MCIsImh0dHA6Ly8xOTIuMTY4LjEwLjQ1OjgwODAiLCJodHRwOi8vMTkyLjE2OC4zMC40NDozMDAwIiwiaHR0cDovLzE5Mi4xNjguMTAuMzg6ODA4MSIsImh0dHA6Ly8xOTIuMTY4LjMwLjQwOjkwMDMiLCJodHRwOi8vMTkyLjE2OC4zMC40MDo5MDA0IiwiaHR0cDovLzE5Mi4xNjguMzAuNDA6OTAwMSIsImh0dHA6Ly8xOTIuMTY4LjMwLjQwOjkwMDIiLCJodHRwOi8vMTkyLjE2OC4xMC43NTo5MDgwIiwiaHR0cDovLzE5Mi4xNjguMzAuNDA6OTAwMCIsImh0dHA6Ly8xOTIuMTY4LjQwLjM4OjgwMDAiLCJodHRwOi8vMTkyLjE2OC4xMDEuMTY0IiwiaHR0cDovLzE5Mi4xNjguMTAuNzM6OTA4MCIsImh0dHA6Ly8xOTIuMTY4LjMwLjQ0OjEzOTciLCJodHRwOi8vMTkyLjE2OC40MC4zNTo3MDAwIiwiaHR0cDovLzE5Mi4xNjguMTAxLjE3MTo4MDAwIiwiaHR0cDovL2xvY2FsaG9zdDo5MDAwIiwiaHR0cDovL2xvY2FsaG9zdDo5MDAxIiwiaHR0cDovLzE5Mi4xNjguMTAuNDk6OTA4MCIsImh0dHA6Ly8xOTIuMTY4LjMwLjQ0OjcwMDAiLCJodHRwOi8vMTkyLjE2OC4zMC40NDo3MDAxIiwiaHR0cDovLzE5Mi4xNjguMzAuNDQ6NzAwMiIsImh0dHA6Ly8xOTIuMTY4LjMwLjQ0OjcwMDMiLCJodHRwOi8vMTkyLjE2OC4zMC40NDo3MDA0IiwiaHR0cDovLzE5Mi4xNjguMzAuNDA6ODAwMCIsImh0dHA6Ly8xOTIuMTY4LjEwMC4xMTE6MTM5NyIsImh0dHA6Ly8xOTIuMTY4LjMwLjIyOjg4OTUiLCJodHRwOi8vMTkyLjE2OC40MC4yNjo4MDAwIiwiaHR0cDovL2xvY2FsaG9zdDo5MDkxLyoiLCJodHRwOi8vMTkyLjE2OC4xMC43Mjo1MDAwIiwiaHR0cDovLzE5Mi4xNjguMTAuNzc6OTA4MCIsImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCIsImh0dHA6Ly9sb2NhbGhvc3Q6MjAyMCIsImh0dHA6Ly8xOTIuMTY4LjEwLjQ5OjgwODAiLCJodHRwOi8vMTkyLjE2OC4xMC40OTo5MDkwIiwiaHR0cDovLzE5Mi4xNjguMzAuNDQ6ODAwMCIsImh0dHA6Ly8xOTIuMTY4LjMwLjQwOjcwMDIiLCJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJodHRwOi8vMTkyLjE2OC4zMC40MDo3MDAxIiwiaHR0cDovLzE5Mi4xNjguMzAuNDA6NzAwNCIsImh0dHA6Ly8xOTIuMTY4LjQwLjM1OjgwMDAiLCJodHRwOi8vMTkyLjE2OC4zMC40MDo3MDAzIiwiaHR0cDovLzE5Mi4xNjguMTAuNTc6ODA4MCIsImh0dHA6Ly8xOTIuMTY4LjEwMS4xOTM6OTA4MSIsImh0dHA6Ly8xOTIuMTY4LjMwLjQwOjcwMDAiLCJodHRwOi8vMTkyLjE2OC4xMDEuMTkzOjkwODIiLCJodHRwOi8vMTkyLjE2OC4xMDEuMTkzOjkwODAiLCJodHRwOi8vMTkyLjE2OC4xMC43ODo5MDgwIiwiaHR0cDovLzE5Mi4xNjguMTAxLjE5NDo5MDgxIiwiaHR0cDovLzE5Mi4xNjguMTAxLjE5NDo5MDgwIiwiaHR0cDovLzEyNy4wLjAuMTo3MDAwIiwiaHR0cDovLzE5Mi4xNjguMTAuODY6ODAwMCIsImh0dHA6Ly8xOTIuMTY4LjMwLjQ1OjcwMDAiLCJodHRwOi8vMTkyLjE2OC4zMC40NDo0MDAwIiwiaHR0cDovLzE5Mi4xNjguMTAuNjE6ODA4MCIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImh0dHA6Ly8xOTIuMTY4LjEwLjcyOjgwMDAiLCJodHRwOi8vbG9jYWxob3N0OjcwMDAiLCJodHRwOi8vMTkyLjE2OC4xMDEuMTYxOjkwODAiLCJodHRwOi8vMTkyLjE2OC4zMC40NDo5MDAwIiwiaHR0cDovLzE5Mi4xNjguMTAwLjExMSIsImh0dHA6Ly8xOTIuMTY4LjMwLjQ0OjkwMDIiLCJodHRwOi8vMTkyLjE2OC4zMC40NDo5MDAxIiwiaHR0cDovLzE5Mi4xNjguMzAuNDQ6OTAwNCIsImh0dHA6Ly8xOTIuMTY4LjMwLjQ0OjkwMDMiLCJodHRwOi8vMTkyLjE2OC4xMDEuMTkxIiwiaHR0cDovLzE5Mi4xNjguMTAxLjE1MCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidGVzdCIsIm9mZmxpbmVfYWNjZXNzIiwiYWRtaW4iLCJ1bWFfYXV0aG9yaXphdGlvbiIsIm5vcm1hbC51c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSIsInBlcnNvbmFsQ29kZSI6IjI4MTk0MSIsInpvbmVpbmZvIjoiIiwid2Vic2l0ZSI6IiIsImJpcnRoZGF0ZSI6IiIsImdlbmRlciI6IiIsInByb2ZpbGUiOiIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImdpdmVuX25hbWUiOiLYp9iv2YXbjNmGIiwibG9jYWxlIjoiZmEtSVIiLCJtaWRkbGVfbmFtZSI6IiIsInVzZXJJZCI6IjUiLCJwaWN0dXJlIjoiIiwib3JnYW5Db2RlIjoiMTAwMDAwMDAwIiwic2VydmVyTWFjIjoiMDA6MDQ6NzU6MGE6NmU6YTYiLCJuaWNrbmFtZSI6IiIsIm5hbWUiOiLYp9iv2YXbjNmGINiz2KfZhdin2YbZhyIsIm9yZ2FuSWQiOiIxIiwiZmFtaWx5X25hbWUiOiLYs9in2YXYp9mG2YcifQ.h61tMkpZfTN0yLKI9XFHxRIwRwyUPhTHgFIoNUQiWaMx44X41iS7_FsqzDinYz-08mJlVF6oD_N0z7CZWadkmflogWdgQyDG-s3HWSsUcQTsWXRlnzmWjH0voZ7Kq2Aw4N4AJuo6VIvVbHT1lskMQDEBPrsaJMqkCoA0AzvSuR0UuZNbUvjsyKMslXVGeXOQmcws9FPdMXa73hTeSgByo-1YhHiOK64ygTNY3-NXDDiq9cXipOA1vHWIonC622d01ORIjhooGwHSyYlb1lzI5ti1whOnA_749WQsfk1l-5Kt_-TQutJSfHT3i5UMbf2ImxcJ8L4wZ2LryV9rkTom0Q';


@Injectable()
export class SahbaDataServiceFactory {
  constructor(
    protected http: HttpClient,
    protected httpUrlGenerator: SahbaHttpUrlGenerator,
    @Optional() protected config?: DefaultDataServiceConfig
  ) {
    this.config = config || {};
    this.httpUrlGenerator.registerHttpResourceUrls(config.entityHttpResourceUrls);
  }
  create<T>(entityName): EntityCollectionDataService<T> {
    return new SahbaDataService<T>(
      entityName,
      this.http,
      this.httpUrlGenerator,
      this.config
    );
  }
}

export class SahbaDataService<T> implements EntityCollectionDataService<T> {
  protected _name: string;
  protected delete404OK: boolean;
  protected entityName: string;
  protected findUrl: string;
  protected createUrl: string;
  protected updateUrl: string;
  protected deleteUrl: string;
  protected itemKey: string;
  protected getDelay = 0;
  protected saveDelay = 0;
  protected timeout = 0;

  get name() {
    return this._name;
  }

  constructor(
    entityName: string,
    protected http: HttpClient,
    protected httpUrlGenerator: SahbaHttpUrlGenerator,
    config?: DefaultDataServiceConfig
  ) {
    this._name = `${entityName} DefaultDataService`;
    this.entityName = entityName;
    const { root = 'api', delete404OK = true, getDelay = 0, saveDelay = 0, timeout: to = 0 } = config || {};
    this.delete404OK = delete404OK;
    this.findUrl = httpUrlGenerator.getFindUrl(entityName, root);
    this.createUrl = httpUrlGenerator.getCreateUrl(entityName, root);
    this.updateUrl = httpUrlGenerator.getUpdateUrl(entityName, root);
    this.deleteUrl = httpUrlGenerator.getDeleteUrl(entityName, root);
    this.itemKey = httpUrlGenerator.getItemKey(entityName);
    this.getDelay = getDelay;
    this.saveDelay = saveDelay;
    this.timeout = to;
  }

  add(entity: T): Observable<T> {
    const entityOrError = entity || new Error(`No "${this.entityName}" entity to add`);
    return this.execute('POST', this.createUrl, entityOrError).pipe(map(i => entity));
  }

  delete(entity: number | string): Observable<number | string> {
    const data = {};
    data[this.itemKey] = entity;
    return this.execute('POST', this.deleteUrl, data).pipe(map(i => entity));
  }

  getAll(): Observable<T[]> {
    return this.execute('GET', this.findUrl).pipe(map(i => i.result));
  }

  getById(key: number | string | object): Observable<T> {
    let err: Error;
    if (key == null) {
      err = new Error(`No "${this.entityName}" key to get`);
    }
    if (key instanceof Object) {
      const qParams = typeof key === 'string' ? { fromString: key } : { fromObject: key };
      const params = new HttpParams();
      return this.execute('GET', this.findUrl, undefined, { params }).pipe(map(i => i.result));

    } else {
      return this.execute('GET', this.findUrl + key, err);
    }
  }


  getWithQuery(queryParams: QueryParams | string): Observable<T[]> {
    const qParams = typeof queryParams === 'string' ? { fromString: queryParams } : { fromObject: queryParams };
    const params = new HttpParams(qParams);
    return this.execute('GET', this.findUrl, undefined, { params }).pipe(map(i => i.result));
  }

  update(update: Update<T>): Observable<T> {
    const id = update && update.id;
    const updateOrError = id == null ? new Error(`No "${this.entityName}" update data or id`) : update.changes;
    return this.execute('POST', this.updateUrl, updateOrError);
  }

  // Important! Only call if the backend service supports upserts as a POST to the target URL
  upsert(entity: T): Observable<T> {
    const entityOrError = entity || new Error(`No "${this.entityName}" entity to upsert`);
    return this.execute('POST', this.updateUrl, entityOrError);
  }

  protected execute(
    method: HttpMethods,
    url: string,
    data?: any, // data, error, or undefined/null
    options?: any
  ): Observable<any> {
    const req: RequestData = { method, url, data, options };

    options = {
      ...options,
      headers: new HttpHeaders()
        .set('Authorization', token)
    };

    if (data instanceof Error) {
      return this.handleError(req)(data);
    }

    let result$: Observable<ArrayBuffer>;

    switch (method) {
      case 'DELETE': {
        result$ = this.http.delete(url, options);
        if (this.saveDelay) {
          result$ = result$.pipe(delay(this.saveDelay));
        }
        break;
      }
      case 'GET': {
        result$ = this.http.get(url, options);
        if (this.getDelay) {
          result$ = result$.pipe(delay(this.getDelay));
        }
        break;
      }
      case 'POST': {
        result$ = this.http.post(url, data, options);
        if (this.saveDelay) {
          result$ = result$.pipe(delay(this.saveDelay));
        }
        break;
      }
      // N.B.: It must return an Update<T>
      case 'PUT': {
        result$ = this.http.put(url, data, options);
        if (this.saveDelay) {
          result$ = result$.pipe(delay(this.saveDelay));
        }
        break;
      }
      default: {
        const error = new Error('Unimplemented HTTP method, ' + method);
        result$ = throwError(error);
      }
    }
    if (this.timeout) {
      result$ = result$.pipe(timeout(this.timeout + this.saveDelay));
    }
    return result$.pipe(catchError(this.handleError(req)));
  }

  private handleError(reqData: RequestData) {
    return (err: any) => {
      const ok = this.handleDelete404(err, reqData);
      if (ok) {
        return ok;
      }
      const error = new DataServiceError(err, reqData);
      return throwError(error);
    };
  }

  private handleDelete404(error: HttpErrorResponse, reqData: RequestData) {
    if (error.status === 404 && reqData.method === 'DELETE' && this.delete404OK) {
      return of({});
    }
    return undefined;
  }
}
