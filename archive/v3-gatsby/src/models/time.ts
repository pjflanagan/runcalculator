
import { Distance } from "./distance";

export namespace Time {

  type calcTimeArgs = {
    timeIn: number;
    raceName: string;
    distance: number;
    distanceMode: boolean;
    splitName: string;
    paceMode: boolean;
    unit: 'm' | 'k';
  };

  export const calcTime = ({
    timeIn,
    raceName,
    distance: distanceIn,
    distanceMode,
    splitName,
    paceMode,
    unit
  }: calcTimeArgs): number => {
    let factor = 0;
    let distance = 0;

    const splitDistance = Distance.getSplit(splitName).distance;
    const eventDistance = Distance.getEvent(raceName).distance;

    if (!distanceMode) {
      factor = (!paceMode)
        ? splitDistance / eventDistance
        : eventDistance / splitDistance;
    } else {
      distance = (unit === 'k')
        ? distanceIn * 1000
        : Distance.convertMilesToMeters(distanceIn);
      factor = (!paceMode)
        ? splitDistance / distance
        : distance / splitDistance;
    }

    if (factor > 1 && !paceMode) {
      return 0;
    }

    return timeIn * factor;
  }

  // TODO: rename to just DisplayTime
  export type DisplayTime = [number, number, number, number, number, string];

  export const makeDisplayTime = (time: number): DisplayTime => {

    // let hourmode = false;
    // if (rm10 >= 6) {
    //   hourmode = true;
    // }

    let h1 = Math.floor(time / 60 / 60);
    let m10 = Math.floor(time / 60 % 60 / 10);
    let m1 = Math.floor(time / 60 % 60 % 10);
    let s10 = Math.floor(time % 60 / 10);
    let s1 = Math.floor(time % 60 % 10);
    let d = ((Math.round(time % 60 % 10 % 1) + "").substr(2) + "000").substr(0, 3);

    // if (hourmode) {
    //   dec = ":" + rs10 + "" + rs1;
    //   rs10 = rm10 % 6;
    //   rs1 = rm1;
    //   rm10 = Math.floor(time / 60 / 60 / 10);
    //   if (rm10 >= 10) return [0, 0, 0, 0, '.000'];

    //   rm1 = Math.floor(time / 60 / 60 % 10);
    // }

    // TODO: always include the hour and decide what to do with it
    // don't do hour mode, do that on display end

    return [h1, m10, m1, s10, s1, d];
  }

  // TODO: this might go unused
  type DisplayTimeIn = [number, number, number, number, number];
  export const makeTimeFromDisplayTime = (displayTime: DisplayTimeIn) => {

    let [h1, m10, m1, s10, s1] = displayTime;

    h1 = h1 * 60 * 60;
    m10 = m10 * 60 * 10;
    m1 = m1 * 60;
    s10 = s10 * 10;

    return h1 + m1 + m10 + s10 + s1;
  }
}