import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdminAddComponent } from './form-admin-add.component';

describe('FormAdminAddComponent', () => {
  let component: FormAdminAddComponent;
  let fixture: ComponentFixture<FormAdminAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdminAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
