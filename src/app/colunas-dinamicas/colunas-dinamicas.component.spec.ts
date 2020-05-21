import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunasDinamicasComponent } from './colunas-dinamicas.component';

describe('ColunasDinamicasComponent', () => {
  let component: ColunasDinamicasComponent;
  let fixture: ComponentFixture<ColunasDinamicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColunasDinamicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColunasDinamicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
