#13.2.7
* Upgraded ts-luxon version (fixes [#51](https://github.com/tonysamperi/ngx-mat-timepicker/issues/56))
* Fixed appearance of picker header when keyboard input is enabled
* Added coerceBooleanProperty on keyboardInputEnabled input
* Refactored timepicker adapter (performance boost)

#13.2.6 
* Fix wrong variable ref causing stack overflow

#13.2.5
* Fix dial numbers not disabled when out of min or max range
* Fix wrong type in NgxMatTimepickerDialComponent (expected number, but got string)
* Fix wrong type in NgxMatTimepickerConfig (number => 12 | 24)
* Fix dial numbers not disabled when out of min or max range (closes [#42](https://github.com/tonysamperi/ngx-mat-timepicker/issues/42))

#13.2.4
* Fixed ngx-mat-timepicker-toggle appearance (closes [#41](https://github.com/tonysamperi/ngx-mat-timepicker/issues/41))

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
