/**
 * Using the scan operator.
 *
 */

import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

export function scanOperator() {
  fromEvent(document, 'click')
    .pipe(scan(acc => acc + 1, 0))
    .subscribe(console.log);
}
