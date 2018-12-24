import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaywalzComponent } from './haywalz.component';

describe('HaywalzComponent', () => {
  let component: HaywalzComponent;
  let fixture: ComponentFixture<HaywalzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaywalzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaywalzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
