import { Type } from '@angular/core';

export interface HttpResult<T> {
  responseCode?: number;
  responseMessage?: string;
  result?: T[];
}

export interface HttpUrls {
  name: string;
  find: string;
  create: string;
  update: string;
  delete: string;
  itemKey?: string;
}
