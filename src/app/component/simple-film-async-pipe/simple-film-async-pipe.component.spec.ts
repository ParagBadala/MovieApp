import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFilmAsyncPipeComponent } from './simple-film-async-pipe.component';

describe('SimpleFilmAsyncPipeComponent', () => {
  let component: SimpleFilmAsyncPipeComponent;
  let fixture: ComponentFixture<SimpleFilmAsyncPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFilmAsyncPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFilmAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
