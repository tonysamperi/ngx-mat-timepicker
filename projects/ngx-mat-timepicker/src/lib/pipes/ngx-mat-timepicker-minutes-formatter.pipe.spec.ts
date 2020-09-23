import {NgxMatTimepickerMinutesFormatterPipe} from './ngx-mat-timepicker-minutes-formatter.pipe';

describe('NgxMatTimepickerMinutesFormatterPipe', () => {
    let pipe: NgxMatTimepickerMinutesFormatterPipe;

    beforeEach(() => {
        pipe = new NgxMatTimepickerMinutesFormatterPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return undefined or null without formatting', () => {
        expect(pipe.transform(undefined)).toBeUndefined();
        expect(pipe.transform(null)).toBeNull();
    });

    it('should return minute', () => {
        expect(pipe.transform(3, 3)).toBe(3);
    });

    it('should return empty string', () => {
        expect(pipe.transform(3)).toBe('');
    });
});
