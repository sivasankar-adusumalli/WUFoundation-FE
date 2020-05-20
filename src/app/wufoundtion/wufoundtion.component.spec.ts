import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WufoundtionComponent } from './wufoundtion.component';

describe('WufoundtionComponent', () => {
  let component: WufoundtionComponent;
  let fixture: ComponentFixture<WufoundtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WufoundtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WufoundtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
