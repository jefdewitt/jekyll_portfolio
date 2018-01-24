import { TestBed, inject } from '@angular/core/testing';

import { GoalTrackService } from './goal-track.service';

describe('GoalTrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoalTrackService]
    });
  });

  it('should be created', inject([GoalTrackService], (service: GoalTrackService) => {
    expect(service).toBeTruthy();
  }));
});
