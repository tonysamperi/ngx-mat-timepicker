import { NgxMatTimepickerTimeFormatterPipe } from './ngx-mat-timepicker-time-formatter.pipe';
import { NgxMatTimepickerUnits } from '../models/ngx-mat-timepicker-units.enum';

describe('NgxMatTimepickerTimeFormatterPipe', () => {
    let pipe: NgxMatTimepickerTimeFormatterPipe;

    beforeEach(() => {
        pipe = new NgxMatTimepickerTimeFormatterPipe();
    });

    it('should do nothing if time undefined', () => {
        expect(pipe.transform(undefined, NgxMatTimepickerUnits.HOUR)).toBeUndefined();
        expect(pipe.transform(null, NgxMatTimepickerUnits.HOUR)).toBeNull();
        expect(pipe.transform('', NgxMatTimepickerUnits.HOUR)).toBe('');
    });

    it('should transform hour \'5\' to \'05\'', () => {
        expect(pipe.transform(5, NgxMatTimepickerUnits.HOUR)).toBe('05');
    });

    it('should transform minute \'9\' to \'09\'', () => {
        expect(pipe.transform(9, NgxMatTimepickerUnits.MINUTE)).toBe('09');
    });

    it('should throw error if unknown NgxMatTimepickerUnits', () => {
        expect(() => pipe.transform(20, 2)).toThrowError('no such time unit');
    });
});
