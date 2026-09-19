import {TimeObject} from "ts-luxon";

export interface NgxMatTimepickerClockFace {
    angle: number;
    disabled?: boolean;
    holeTime?: TimeObject;
    time: number;
    wasHole?: boolean;
}
