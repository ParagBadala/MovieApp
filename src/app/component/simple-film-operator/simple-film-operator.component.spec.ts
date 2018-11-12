import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFilmOperatorComponent } from './simple-film-operator.component';

describe('SimpleFilmOperatorComponent', () => {
  let component: SimpleFilmOperatorComponent;
  let fixture: ComponentFixture<SimpleFilmOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFilmOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFilmOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
