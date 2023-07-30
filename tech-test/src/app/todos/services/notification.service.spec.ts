/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { SharedModule } from 'src/shared/shared.module';

describe('Service: Notification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService],
      imports: [SharedModule]
    });
  });

  it('should ...', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
});
