import { TestBed, async } from '@angular/core/testing';
import { NgxMatTimepickerAppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgxMatTimepickerAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NgxMatTimepickerAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-mat-timepicker-repo'`, () => {
    const fixture = TestBed.createComponent(NgxMatTimepickerAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngx-mat-timepicker-repo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NgxMatTimepickerAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ngx-mat-timepicker-repo app is running!');
  });
});
