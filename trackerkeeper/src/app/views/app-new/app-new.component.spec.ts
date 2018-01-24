import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewComponent } from './app-new.component';

describe('AppNewComponent', () => {
  let component: AppNewComponent;
  let fixture: ComponentFixture<AppNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
