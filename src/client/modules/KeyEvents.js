import { of, fromEvent, merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
// import { buildLoggers } from './Log';
// const { log } = buildLoggers('KeyEvents');

class KeyEvents {
  observable$;

  constructor() {
    const keydown$ = of(typeof document === 'undefined').pipe(
      filter((bool) => !bool), // checking if document is available or not
      switchMap(() => fromEvent(document, 'keydown')),
    );

    const keyup$ = of(typeof document === 'undefined').pipe(
      filter((bool) => !bool), // checking if document is available or not
      switchMap(() => fromEvent(document, 'keyup')),
    );

    this.observable$ = merge(keydown$, keyup$).pipe(
      map((event) => {
        const { type, key, which } = event;
        return { type, key: key || which, event };
      }),
    );
  }
}

// create a single instance
export default new KeyEvents();
