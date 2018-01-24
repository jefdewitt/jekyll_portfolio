import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOutputComponent } from './app-output.component';

describe('AppOutputComponent', () => {
  let component: AppOutputComponent;
  let fixture: ComponentFixture<AppOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
