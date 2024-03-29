/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoButtonDeleteAllComponent } from './todoButtonDeleteAll.component';

describe('TodoButtonDeleteAllComponent', () => {
  let component: TodoButtonDeleteAllComponent;
  let fixture: ComponentFixture<TodoButtonDeleteAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoButtonDeleteAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
