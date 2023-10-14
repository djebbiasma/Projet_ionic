import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnounceDetailsPage } from './announce-details.page';

describe('AnnounceDetailsPage', () => {
  let component: AnnounceDetailsPage;
  let fixture: ComponentFixture<AnnounceDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnnounceDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
