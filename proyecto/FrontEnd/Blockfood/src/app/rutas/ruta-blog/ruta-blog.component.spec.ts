import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBlogComponent } from './ruta-blog.component';

describe('RutaBlogComponent', () => {
  let component: RutaBlogComponent;
  let fixture: ComponentFixture<RutaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
