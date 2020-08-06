import { TestBed } from '@angular/core/testing';

import { TaskhistoryService } from './taskhistory.service';

describe('TaskhistoryService', () => {
  let service: TaskhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
