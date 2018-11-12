import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplefilmComponent } from './simplefilm.component';

describe('SimplefilmComponent', () => {
  let component: SimplefilmComponent;
  let fixture: ComponentFixture<SimplefilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplefilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplefilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
