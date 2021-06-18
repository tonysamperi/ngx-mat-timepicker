# ngx-mat-timepicker

[![npm](https://img.shields.io/npm/v/ngx-mat-timepicker.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mat-timepicker) 
[![npm](https://img.shields.io/npm/dm/ngx-mat-timepicker.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mat-timepicker) 
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tonysamperi/ngx-mat-timepicker/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/tonysamperi/ngx-mat-timepicker.svg?branch=master)](https://travis-ci.com/tonysamperi/ngx-mat-timepicker)
[![Size](https://img.shields.io/bundlephobia/min/ngx-mat-timepicker)](https://unpkg.com/ngx-mat-timepicker@latest/bundles/ngx-mat-timepicker.umd.js)

A simple time picker module using Angular Material: it provides an Android style dialog for time selection and a handy input for time selection in Material style.

### Why this project?
The original was nice, but for some reason it didn't adapt to your Material theme.
So an extra config was necessary to have a nice integration in your app.
This project **automatically adapts** to your Material theme, even if a custom one (so, for example, if you have a dark theme, you'll have a dark dialog!).
By default it will use the primary color.
You can choose the color scheme among the three **ThemePalette** items, natively provided by Material: `primary`, `accent`, `warn`.

Also a few components were unnecessary and not in material style, so I got rid of them and integrated Material components, such as `mat-select` and others.

**Other general improvements**
* Improved clock hand alignments
* Changed clock hand appearance for minutes which aren't multiple of 5 (as in Android timepicker)
* Improved appearance of focused inputs, the toggle and increase/decrease arrows in timepicker-field
* Improved header content disposition when 24h format is enabled
* Used material buttons for dialog actions (CANCEL/OK)
* Added leading zero for the hours in the dialog header (as in Android timepicker)
* More consistent naming
* Removed useless exports from NgxMatTimepickerModule

### Compatibility

* v9 < Angular/Material < v13


**IMPORTANT**
Remember to include a Material Theme in your project, example:

`@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

Refer to the [Angular Material](https://material.angular.io) website for theming options.

## Table of contents
* [Getting started](#getting-started)
* [Internationalization](#internationalization)
* [Documentation](#documentation)
    * [NgxMatTimepicker](#ngxMatTimepicker)
    * [NgxMatTimepickerComponent](#ngxMatTimepickercomponent)
    * [NgxMatTimepickerFieldComponent](#ngxMatTimepickerfieldcomponent)
    * [NgxMatTimepickerToggleComponent](#ngxMatTimepickertogglecomponent)
    * [NgxMatTimepickerToggleIconDirective](#ngxMatTimepickertoggleicondirective)
    * [NgxMatTimepickerThemeDirective (deprecated)](#ngxMatTimepickerthemedirective)
* [Development](#development)
* [Tests](#tests)
* [License](#license)

## Getting started

Install timepicker through npm:
```bash
npm i --save ngx-mat-timepicker
```
Next import the timepicker module into your app's module:
```typescript
import {NgModule} from '@angular/core';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';

@NgModule({
  imports: [NgxMatTimepickerModule]
})
export class MyModule {}
```
Finally connect the timepicker to an input via a template property:
```angular2html
<input [ngxMatTimepicker]="picker">
<ngx-mat-timepicker #picker></ngx-mat-timepicker>
```
The timepicker opens once you click on the input

## Internationalization
Timepicker supports locales in format `BCP 47`. It has `en-US` locale by default.

To override default locale:
```typescript
import {NgModule} from '@angular/core';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';

@NgModule({
  imports: [NgxMatTimepickerModule.setLocale('en-GB')]
})
export class MyModule {}
```
 
## Documentation

#### API reference for Angular Material Timepicker
```typescript
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
```
#### NgxMatTimepicker

Directive responsible for managing the timepicker popup and setting value to input

Selector: `ngxMatTimepicker`

**Properties**

| Name | Description |
|------|-------------|
| @Input()
  ngxMatTimepicker: NgxMatTimepickerComponent | The timepicker that this input is associated with. |
| @Input()
  color: ThemePalette | The material palette to use. | 
| @Input()
  disabled: boolean | Weather the timepicker popup should be disabled. |
| @Input()
  value: string | Set a default value and time for a timepicker. The format of the time is in 12 hours notation `11:00 PM` or in 24 hours notation `23:00`. A Date string won't work. |
| @Input()
  format: number | `12` or `24` . 12h/24h view for hour selection clock . `12` (AM/PM) format by default. |
| @Input()
  min: string or DateTime | Set min time for timepicker (`11:15 pm` ) |
| @Input()
  max: string or DateTime | Set max time for timepicker (`11:15 pm` ) |
| @Input()
  disableClick: boolean | Set `true` to disable opening timepicker by clicking on the input |

  
#### NgxMatTimepickerComponent

Component responsible for visualisation the timepicker

Selector: `ngx-mat-timepicker`

**Properties**


| Name | Description |
|------|-------------|
| @Input()
  cancelBtnTmpl: TemplateRef<Node> |  Set if you want to change cancel button to your custom one. | 
| @Input()
  confirmBtnTmpl: TemplateRef<Node> | Set if you want to change confirm button to your custom one. |
| @Input()
  editableHintTmpl: TemplateRef<Node> | Set if you want to change dial hint to your custom one. Works only if `enableKeyboardInput = true` |
| @Input()
  ESC: boolean | Disable or enable closing timepicker by ESC. |
| @Input()
  enableKeyboardInput: boolean | To disable or enable changing time through a keyboard on the timepicker dial without interaction with a clock face. Set `false` by default |
| @Input()
  minutesGap: number | To define a gap between minutes. Set `1` by default |
| @Input()
  defaultTime: string | Set default time for a timepicker. `12:00 AM` by default |
| @Input()
  preventOverlayClick: boolean | Set `true` to prevent closing the timepicker by overlay click. Uses `false` by default |
| @Input()
  disableAnimation: boolean | Set `true` to prevent opening and closing timepicker animation. Uses `false` by default |
| @Input()
  hoursOnly: boolean | Set `true` to prevent switching to minutes automatically once hour is selected. Uses `false` by default |
| @Input()
  theme: NgxMatTimepickerTheme |  Custom css properties which will override the defaults |
| @Input()
  timepickerClass: string |  To provide a custom css class for the timepicker |
| @Output()
  timeSet: EventEmitter\<string\> | Emits time when that was set. |
| @Output()
  opened: EventEmitter\<null\> | Emits after timepicker was opened. |
| @Output()
  closed: EventEmitter\<null\> | Emits after timepicker was closed. |
| @Output()
  hourSelected: EventEmitter\<number\> | Emits after hour was selected. |
| @Output()
  timeChanged: EventEmitter\<string\> | Emits once time was changed. |
  
#### NgxMatTimepickerFieldComponent

The timepicker as a control.

Selector: `ngx-mat-timepicker-field`

**Properties**


| Name | Description |
|------|-------------|
| @Input()
  disabled: boolean |  Whether the timepicker is disabled |
| @Input()
  floatLabel: 'never' or 'always' or 'auto' |  Whether the labels of the fields should float, default to never  | 
| @Input()
  toggleIcon: TemplateRef\<HTMLObjectElement\> | Provide custom `svg` icon for toggle button |
| @Input()
  buttonAlign: 'right' or 'left' | Positioning toggle button (`right` by default) |
| @Input()
  clockTheme: NgxMatTimepickerTheme | Custom css properties which will override timepicker clock |
| @Input()
  controlOnly: boolean | Hide or display toggle button with the timepicker clock |
| @Input()
  format: number | `12` or `24` . Set format for timepicker. `12` (AM/PM) format by default. |
| @Input()
  cancelBtnTmpl: TemplateRef\<Node\> |  Set if you want to change cancel button for timepicker to your custom one. | 
| @Input()
  confirmBtnTmpl: TemplateRef\<Node\> | Set if you want to change confirm button for timepicker to your custom one. |
| @Input()
  min: string or DateTime | Set min time for timepicker (`11:15 pm` ) |
| @Input()
  max: string or DateTime | Set max time for timepicker (`11:15 pm` ) |
| @Output()
  timeChanged: EventEmitter\<string\> | Emit a new time once it is changed. |

  
#### NgxMatTimepickerToggleComponent

Component responsible for opening the timepicker.

Selector: `ngx-mat-timepicker-toggle`

**Properties**


| Name | Description |
|------|-------------|
| @Input()
  for: NgxMatTimepickerComponent |  Timepicker instance that the button will toggle | 
| @Input()
  disabled: boolean | Whether the toggle button is disabled |
  
#### NgxMatTimepickerToggleIconDirective

Can be used to override the icon of a `NgxMatTimepickerToggleComponent`.

Selector: `[ngxMatTimepickerToggleIcon]`

**Properties**

| Name | Description |
|------|-------------|
| @Input()
  ngxMatTimepickerTheme: NgxMatTimepickerTheme |  Custom css properties which will override the defaults | 
 
### Demo
<a href="https://tonysamperi.github.io/ngx-mat-timepicker/">Demo</a>

### Contribute
  Bug reports and pull requests are welcome.
  **Please don't open feature requests (That includes issues going "Angular v145477896 is out", especially if v145477896 was out a few days ago. I manage the updates as soon as I can), because I have no time bandwidth to handle them.**
   Such issues will be deleted immediately.
  
```terminal
  $ npm install
  $ npm run start  //run example
```

Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

### Thanks to

Agranom for setting up the original repo.
