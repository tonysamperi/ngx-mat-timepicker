import { TimeFormatterPipe } from './time-formatter.pipe';
import { NgxTimepickerUnits } from '../models/ngx-timepicker-units.enum';

describe('TimeFormatterPipe', () => {
    let pipe: TimeFormatterPipe;

    beforeEach(() => {
        pipe = new TimeFormatterPipe();
    });

    it('should do nothing if time undefined', () => {
        expect(pipe.transform(undefined, NgxTimepickerUnits.HOUR)).toBeUndefined();
        expect(pipe.transform(null, NgxTimepickerUnits.HOUR)).toBeNull();
        expect(pipe.transform('', NgxTimepickerUnits.HOUR)).toBe('');
    });

    it('should transform hour \'5\' to \'05\'', () => {
        expect(pipe.transform(5, NgxTimepickerUnits.HOUR)).toBe('05');
    });

    it('should transform minute \'9\' to \'09\'', () => {
        expect(pipe.transform(9, NgxTimepickerUnits.MINUTE)).toBe('09');
    });

    it('should throw error if unknown NgxTimepickerUnits', () => {
        expect(() => pipe.transform(20, 2)).toThrowError('no such time unit');
    });
});
