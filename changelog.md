#17.1.0
* Add option `dottedMinutesInGap`
* Fix mini-fab appearance (closes [#105](https://github.com/tonysamperi/ngx-mat-timepicker/issues/105))
* Fix hours init (closes [#108](https://github.com/tonysamperi/ngx-mat-timepicker/issues/108))
* Fixed README

#17.0.3
* Remove ripple 

#17.0.2
* Fix time not preserved in picker when "appendToInput" is true (fixes [#93](https://github.com/tonysamperi/ngx-mat-timepicker/issues/93))

#17.0.1
* Fix disabled clock buttons appearance (fixes [#94](https://github.com/tonysamperi/ngx-mat-timepicker/issues/94))

#17.0.0
* Update for Angular 17! 🎉

#16.1.3
* Fix time not preserved in picker when "appendToInput" is true (fixes [#93](https://github.com/tonysamperi/ngx-mat-timepicker/issues/93))

#16.1.2
* Fix weird behaviours caused by multiple pickers in same page (fixes [#29](https://github.com/tonysamperi/ngx-mat-timepicker/issues/29))

#16.1.1
* Add onTouch handler

#16.1.0
* Update for standalone components

#16.0.4
* Fix timeChange not firing on 0 values (fixes [#81](https://github.com/tonysamperi/ngx-mat-timepicker/issues/81))

#16.0.3
* Remove pointless cdkTrapFocusAutoCapture (closes [#77](https://github.com/tonysamperi/ngx-mat-timepicker/issues/77))

#16.0.2
* Fix change Hostlistener behaviour and add check after parse to handle invalid parsed DateTime (fixes [#70](https://github.com/tonysamperi/ngx-mat-timepicker/issues/70)) 

#16.0.1
* Don't emit unless both values are set in ngx-mat-timepicker-field (fixes [#71](https://github.com/tonysamperi/ngx-mat-timepicker/issues/71))

#16.0.0
* Update for Angular 16! 🎉

#15.1.7
* Fix allow empty enableKeyboardInput (coerced) attribute even with strictTemplates enabled

#15.1.6
* Fix ts-luxon version (closes [#60](https://github.com/tonysamperi/ngx-mat-timepicker/issues/60))

#15.1.5
* Reverted behaviour before changes for #49 because it actually makes more difficult writing the value

#15.1.4
* Fixed "Invalid Datetime" on user input when caret is before (fixes [#49](https://github.com/tonysamperi/ngx-mat-timepicker/issues/49))
* Fix appearance of mat-toolbar on keyboard input enabled
* Use of coerceBooleanProperty on @Input enableKeyboardInput for ngx-mat-timepicker 

#15.1.3
* Upgraded ts-luxon version (fixes #51)
* Improved handling of meridiem (fixes #51)
* Improved typings
* Deleted residual legacy files (unused)

#15.1.2
* Tiny performance improvements
* Clarified code docs
* Delete NgxMatTimepickerThemeDirective for good (don't worry it was useless)

#15.1.1
* Handled weird meridiem formats, such as spanish `a. m.` which apparently doesn't work in TSLuxon (yet)
* General performance improved 

#15.1.0
* Fix missing initializer, causing unwanted behaviour when not linking an input and not setting format
* Improve data management for picker dialog
* Misc refactor

#15.0.1
* Fix injection breaking "appendToInput"

#15.0.0
* Update for Angular 15! 🎉

#14.0.6
* Fix missing initializer, causing unwanted behaviour when not linking an input and not setting format
* Improve data management for picker dialog
* Misc refactor

#14.0.5
* Fix dial numbers not disabled when out of min or max range (closes [#42](https://github.com/tonysamperi/ngx-mat-timepicker/issues/42))

#14.0.4
* Fix dial numbers not disabled when out of min or max range

#14.0.3
* Fixed ngx-mat-timepicker-toggle appearance (closes [#41](https://github.com/tonysamperi/ngx-mat-timepicker/issues/41))

#14.0.2
* Making NgxMatTimepickerModule.setLocale optional again (closes [#34](https://github.com/tonysamperi/ngx-mat-timepicker/issues/34))

#14.0.1
* Fixed peer deps (fixes [#32](https://github.com/tonysamperi/ngx-mat-timepicker/issues/32))

#14.0.0
* Update for Angular 14! 🎉

#13.2.3
* Patching accidentally build without refreshing deps (fixes [#35](https://github.com/tonysamperi/ngx-mat-timepicker/issues/35))

#13.2.2 (deprecated)
* Making NgxMatTimepickerModule.setLocale optional again (closes [#34](https://github.com/tonysamperi/ngx-mat-timepicker/issues/34))

#13.2.1
* Version bump (inverted changelog)

#13.2.0
* Dynamic locale implemented (fixes #2)

#13.1.0
* Removed smp-core-utils
* Added coerceBooleanProperty for appendToInput

#13.0.0
* Switched to yarn (dev only)
* Update for Angular 13! 🎉

#12.1.0
* Fixed format 12h breaking on ngx-mat-timepicker-field
* Allowing all angular minor vrs above 12.0.5

#12.0.0
* Upgrade for Angular 12
* Improved appearance (yes, again) of standalone timepicker

#11.0.6
* Improved appearance of standalone timepicker

#11.0.5
* Fixed #9: missing dependency

#11.0.4
* Removed console

#11.0.3
* Fixed focus issue
* Improved focus trap when appendToInput

#11.0.2
* Fix appendToInput option
* Fix #11 demo page + readme
* Moved ts-luxon in dependencies

#11.0.1
* Upgrade for Angular 11

10.0.3
* Fixed #9: missing dependency

#10.0.2
* Removed console

#10.0.1
* Fix appendToInput option
* Fix #11 demo page + readme
* Moved ts-luxon in dependencies

#10.0.0
* Upgrade for Angular 10

#9.1.1
* Fixed peer dependencies

#9.1.0 (deprecated)
* Now using ts-luxon instead of luxon, for best compatibility

#9.0.5
* Fixed issue with `build --prod`
* Refactored horrible things in ngx-mat-timepicker-append-to-input.directive

#9.0.4
* Improved UI for screens up to 360px

#9.0.3
* Resolved an annoying behaviour when using *ngIf on ngx-mat-timepicker directive (but not on the component). 
* Improved period select appearance in ngx-mat-timepicker-field
* Fixed arrows appearance in ngx-mat-timepicker-field
* Removed strict tipe checking on Input "format" allowing to pass in the form `format="24` instead of `[format]="24"`
* Improved demo

#9.0.2
* Version bump to fix travis badge and changelog

#9.0.1
* General improvements: removed useless components and used components from @angular/material instead.
* Solved theming issues, now it behaves correctly with any Material theme (prebuilt, or even custom! 😁)
* Completed demo page 

#9.0.0
* Release compatible with Angular 9
