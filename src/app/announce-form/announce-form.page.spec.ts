import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnounceFormPage } from './announce-form.page';

describe('AnnounceFormPage', () => {
  let component: AnnounceFormPage;
  let fixture: ComponentFixture<AnnounceFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnnounceFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


