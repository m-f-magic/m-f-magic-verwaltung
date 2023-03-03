import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditExistingInquiryDialogComponent } from './edit-existing-inquiry-dialog.component';

describe('EditExistingInquiryDialogComponent', () => {
  let component: EditExistingInquiryDialogComponent;
  let fixture: ComponentFixture<EditExistingInquiryDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExistingInquiryDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditExistingInquiryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
