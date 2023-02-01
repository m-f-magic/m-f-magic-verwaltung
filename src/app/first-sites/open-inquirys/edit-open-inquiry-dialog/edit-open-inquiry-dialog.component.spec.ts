import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditOpenInquiryDialogComponent } from './edit-open-inquiry-dialog.component';

describe('EditOpenInquiryDialogComponent', () => {
  let component: EditOpenInquiryDialogComponent;
  let fixture: ComponentFixture<EditOpenInquiryDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOpenInquiryDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditOpenInquiryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
