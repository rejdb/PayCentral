import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyloadComponent } from './buyload.component';

describe('BuyloadComponent', () => {
  let component: BuyloadComponent;
  let fixture: ComponentFixture<BuyloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
