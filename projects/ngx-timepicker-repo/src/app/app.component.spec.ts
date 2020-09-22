import { TestBed, async } from '@angular/core/testing';
import { NgxTimepickerAppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgxTimepickerAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NgxTimepickerAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-timepicker-repo'`, () => {
    const fixture = TestBed.createComponent(NgxTimepickerAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngx-timepicker-repo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NgxTimepickerAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ngx-timepicker-repo app is running!');
  });
});
