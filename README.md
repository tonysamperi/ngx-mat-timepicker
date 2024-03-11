# ngx-mat-timepicker

[![npm][badge-npm-version]][url-npm] [![npm][badge-npm-downloads]][url-npm] [![MIT licensed][badge-licence]][url-licence] [![Build state][badge-ci-state]][url-ci-state] [![Size][badge-bundle]][url-bundle] [![Rate this package][badge-openbase]][url-openbase]

A simple time picker module using Angular Material: it provides an Android style dialog for time selection and a handy
input for time selection in Material style.

## VERY IMPORTANT READ THIS

I'm moving this to the top because it appears that people don't get to reading it in the **contribute** section.  
FOR THIS LIBRARY **PLEASE USE ISSUES ONLY FOR BUG REPORTING**. DON'T OPEN ISSUES SUCH AS "I need upgrade for Angular
1745646456" especially if Angular 1745646456 was released a few days ago.  
I **guarantee** that I manage the updates **AS SOON AS POSSIBLE**. But as you understand this is not a paying job, so
you can't get Angular 1745646456 the day it gets released.  
**ISSUES NOT RESPECTING THIS WILL BE DELETED IMMEDIATELY WITHOUT ANY RESPONSE**.  
Thank you.

### Why this project?

The original was nice, but for some reason it didn't adapt to your Material theme.  
So an extra config was necessary to have a nice integration in your app.  
This project **automatically adapts** to your Material theme, even if a custom one (so, for example, if you have a dark
theme, you'll have a dark dialog!).  
By default it will use the primary color.  
You can choose the color scheme among the three **ThemePalette** items, natively provided by
Material: `primary`, `accent`, `warn`.

Also a few components were unnecessary and not in material style, so I got rid of them and integrated Material
components, such as `mat-select` and others.

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

* v9 < Angular/Material < v17

**IMPORTANT**  
Remember to include a Material Theme in your project, example:

```scss  
@use "@angular/material/prebuilt-themes/indigo-pink.css";  
```  

or

```scss  
@use "@angular/material" as mat;

@include mat.all-component-themes($my-theme);  
```  

**IMPORTANT ABOUT MATERIAL V15**
This library uses the new set of Material components, so it doesn't support the **legacy** theming.
Support for legacy components has been considered, but won't be developed.
If you still need the legacy version you can contact me and we'll see what can be done, but a real effort will be put
through only for a huge amount of requests.

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
export class MyModule {
}  
```  

Finally connect the timepicker to an input via a template property:

```html  
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
export class MyModule {
}  
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

| Name               | Type                      | Description                                                                                                                                                         |  
|--------------------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
|                    |                           |                                                                                                                                                                     |
| ngxMatTimepicker   | NgxMatTimepickerComponent | The timepicker that this input is associated with.                                                                                                                  |  
| color              | ThemePalette              | The material palette to use.                                                                                                                                        | 
| disabled           | boolean                   | Weather the timepicker popup should be disabled.                                                                                                                    |  
| value              | string                    | Set a default value and time for a timepicker. The format of the time is in 12 hours notation `11:00 PM` or in 24 hours notation `23:00`. A Date string won't work. |  
| format             | number                    | `12` or `24` . 12h/24h view for hour selection clock . `12` (AM/PM) format by default.                                                                              |  
| min                | string \| DateTime        | Set min time for timepicker (`11:15 pm` )                                                                                                                           |  
| max                | string \| DateTime        | Set max time for timepicker (`11:15 pm` )                                                                                                                           |  
| disableClick       | boolean                   | Set `true` to disable opening timepicker by clicking on the input                                                                                                   |  
| dottedMinutesInGap | boolean                   | Set `true` (or just have the attr, since it's coherced) to have dots where minutes are not printed                                                                  |  

#### NgxMatTimepickerLocaleService (⭐NEW FROM v 13.2.0!!!⭐)

This service allows to **change the locale anytime**.  
You can inject this in your component or extend and provide your version, in order to provide your current locale to all
the pickers!  
At this time is **semi-static**, which means you can't change the locale for pickers that are already opened.  
But **new pickers will always get the updated locale**.

#### NgxMatTimepickerComponent

Component responsible for visualisation the timepicker

Selector: `ngx-mat-timepicker`

**Properties**

| Name                | Type                   | Description                                                                                                                                |  
|---------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|  
| cancelBtnTmpl       | TemplateRef<Node>      | Set if you want to change cancel button to your custom one.                                                                                | | @Input()  
| confirmBtnTmpl      | TemplateRef<Node>      | Set if you want to change confirm button to your custom one.                                                                               |  
| defaultTime         | string                 | Set default time for a timepicker. `12:00 AM` by default                                                                                   |  
| disableAnimation    | boolean                | Set `true` to prevent opening and closing timepicker animation. Uses `false` by default                                                    |  
| editableHintTmpl    | TemplateRef<Node>      | Set if you want to change dial hint to your custom one. Works only if `enableKeyboardInput = true`                                         |  
| enableKeyboardInput | boolean                | To disable or enable changing time through a keyboard on the timepicker dial without interaction with a clock face. Set `false` by default |  
| hoursOnly           | boolean                | Set `true` to prevent switching to minutes automatically once hour is selected. Uses `false` by default                                    |  
| isEsc               | boolean                | Disable or enable closing timepicker by ESC.                                                                                               |  
| minutesGap          | number                 | To define a gap between minutes. Set `1` by default                                                                                        |  
| preventOverlayClick | boolean                | Set `true` to prevent closing the timepicker by overlay click. Uses `false` by default                                                     |  
| timepickerClass     | string                 | To provide a custom css class for the timepicker                                                                                           |  
| timeSet:            | EventEmitter\<string\> | Emits time when that was set.                                                                                                              |  
| opened:             | EventEmitter\<null\>   | Emits after timepicker was opened.                                                                                                         |  
| closed              | EventEmitter\<null\>   | Emits after timepicker was closed.                                                                                                         |  
| hourSelected        | EventEmitter\<number\> | Emits after hour was selected.                                                                                                             |  
| timeChanged         | EventEmitter\<string\> | Emits once time was changed.                                                                                                               |  

#### NgxMatTimepickerFieldComponent

The timepicker as a control.

Selector: `ngx-mat-timepicker-field`

**Properties**

| Name           | Type                             | Description                                                                 |  
|----------------|----------------------------------|-----------------------------------------------------------------------------|  
| disabled:      | boolean                          | Whether the timepicker is disabled                                          |  
| floatLabel     | 'never' \| 'always' \| 'auto'    | Whether the labels of the fields should float, default to never             | 
| toggleIcon     | TemplateRef\<HTMLObjectElement\> | Provide custom `svg` icon for toggle button                                 |  
| buttonAlign    | 'right' \| 'left'                | Positioning toggle button (`right` by default)                              |  
| clockTheme     | NgxMatTimepickerTheme            | Custom css properties which will override timepicker clock                  |  
| controlOnly    | boolean                          | Hide or display toggle button with the timepicker clock                     |  
| format         | number                           | `12` or `24` . Set format for timepicker. `12` (AM/PM) format by default.   |  
| cancelBtnTmpl  | TemplateRef\<Node\>              | Set if you want to change cancel button for timepicker to your custom one.  |
| confirmBtnTmpl | TemplateRef\<Node\>              | Set if you want to change confirm button for timepicker to your custom one. |  
| min            | string \| DateTime               | Set min time for timepicker (`11:15 pm` )                                   |  
| max            | string \| DateTime               | Set max time for timepicker (`11:15 pm` )                                   |  
| timeChanged    | EventEmitter\<string\>           | Emit a new time once it is changed.                                         |  

#### NgxMatTimepickerToggleComponent

Component responsible for opening the timepicker.

Selector: `ngx-mat-timepicker-toggle`

**Properties**

| Name     | Type                      | Description                                     |  
|----------|---------------------------|-------------------------------------------------|  
| for      | NgxMatTimepickerComponent | Timepicker instance that the button will toggle |  
| disabled | boolean                   | Whether the toggle button is disabled           |  

#### NgxMatTimepickerToggleIconDirective

Can be used to override the icon of a `NgxMatTimepickerToggleComponent`.

Selector: `[ngxMatTimepickerToggleIcon]`

**Properties**

| Name                  | Type                  | Description                                            |  
|-----------------------|-----------------------|--------------------------------------------------------|  
| ngxMatTimepickerTheme | NgxMatTimepickerTheme | Custom css properties which will override the defaults |   

### Demo

<a href="https://tonysamperi.github.io/ngx-mat-timepicker/">Demo</a>

```terminal  
 $ npm install $ npm run start  //run example
```  

Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

## Special thanks

Jetbrains is now supporting this library with an open-source license, which will allow a better code! 🎉

![jetbrains-logo](https://user-images.githubusercontent.com/5957244/150580991-863d6fba-1090-4924-b26c-be19c6310f24.svg)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

### Thanks to

[LayZeeDK](https://github.com/LayZeeDK) - For his great work on the unit tests and upgrades for v15 "legacy"

[Agranom](https://github.com/Agranom) for setting up the original repo.

[badge-bundle]: https://img.shields.io/bundlephobia/minzip/ngx-mat-timepicker

[badge-ci-state]: https://github.com/tonysamperi/ngx-mat-timepicker/actions/workflows/main.yml/badge.svg

[badge-licence]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square

[badge-npm-downloads]: https://img.shields.io/npm/dm/ngx-mat-timepicker.svg?style=flat-square

[badge-npm-version]: https://img.shields.io/npm/v/ngx-mat-timepicker.svg?style=flat-square

[badge-openbase]: https://badges.openbase.com/js/rating/ngx-mat-timepicker.svg?token=imNtfVxrKTW3J1VSOlxCqRcyvTG7POhNoOkaljG1DeA=

[initial-author]: https://github.com/TonySamperi

[url-bundle]: https://img.shields.io/bundlephobia/minzip/ngx-mat-timepicker

[url-ci-state]: https://github.com/tonysamperi/ngx-mat-timepicker/actions

[url-licence]: https://github.com/tonysamperi/ngx-mat-timepicker/blob/master/LICENSE

[url-npm]: https://www.npmjs.com/package/ngx-mat-timepicker

[url-openbase]: https://openbase.com/js/ngx-mat-timepicker
