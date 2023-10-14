import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAnnouncesPage } from './my-announces.page';

describe('MyAnnouncesPage', () => {
  let component: MyAnnouncesPage;
  let fixture: ComponentFixture<MyAnnouncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyAnnouncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
