import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerlandingComponent } from './eagerlanding.component';

describe('EagerlandingComponent', () => {
  let component: EagerlandingComponent;
  let fixture: ComponentFixture<EagerlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
