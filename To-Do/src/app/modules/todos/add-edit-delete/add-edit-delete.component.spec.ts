import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteComponent } from './add-edit-delete.component';

describe('AddEditDeleteComponent', () => {
  let component: AddEditDeleteComponent;
  let fixture: ComponentFixture<AddEditDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDeleteComponent]
    });
    fixture = TestBed.createComponent(AddEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
