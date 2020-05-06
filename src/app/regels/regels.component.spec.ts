import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegelsComponent } from './regels.component';

describe('RegelsComponent', () => {
  let component: RegelsComponent;
  let fixture: ComponentFixture<RegelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
