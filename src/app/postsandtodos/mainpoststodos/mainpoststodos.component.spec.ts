import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpoststodosComponent } from './mainpoststodos.component';

describe('MainpoststodosComponent', () => {
  let component: MainpoststodosComponent;
  let fixture: ComponentFixture<MainpoststodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpoststodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpoststodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
