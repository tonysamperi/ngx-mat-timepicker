# ngx-timepicker

A simple time picker component using Angular Material.

### Compatibility

- Angular 9+
- Material 9+

## Installation

```bash
npm i ngx-timepicker
```

## Quickstart

Import **material-time-picker** module in Angular app.

```typescript
import { NgxTimepickerModule } from 'ngx-timepicker';

@NgModule({
  // ...
  imports: [
    NgxTimepickerModule
  ],
   // ...
})
```

#### Usage

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  private exportTime = { hour: 7, minute: 15, meridiem: 'PM', format: 24 };

  onChangeHour(event) {
    console.log('event', event);
  }
}
```

```html
<ngx-timepicker color="primary" 
    label="Hour 2" 
    appearance="standard" 
    [userTime]="exportTime" 
    (change)="onChangeHour($event)"></ngx-timepicker>
```

## Examples

Check the [demo](https://stackblitz.com/edit/material-time-picker).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

