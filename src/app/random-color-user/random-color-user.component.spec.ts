import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomColorUserComponent } from './random-color-user.component';

describe('RandomColorUserComponent', () => {
  let component: RandomColorUserComponent;
  let fixture: ComponentFixture<RandomColorUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomColorUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomColorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
