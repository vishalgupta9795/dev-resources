import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedStackComponent } from './shared-stack.component';

describe('SharedStackComponent', () => {
  let component: SharedStackComponent;
  let fixture: ComponentFixture<SharedStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedStackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
