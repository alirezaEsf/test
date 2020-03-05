import { async, TestBed } from '@angular/core/testing';
import { AvatModule } from './avat.module';

describe('AvatModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AvatModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AvatModule).toBeDefined();
  });
});
