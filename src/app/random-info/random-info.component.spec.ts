import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomInfoComponent } from './random-info.component';

describe('RandomInfoComponent', () => {
  let component: RandomInfoComponent;
  let fixture: ComponentFixture<RandomInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
