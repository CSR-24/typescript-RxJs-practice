import { of } from 'rxjs';
import { concatMap, mergeMap, tap } from 'rxjs/operators';
import { mockApiCall } from '../mockCall';

export function sequenceCalls() {
  const urls$ = of('url1', 'url2', 'url3');
  urls$.pipe(concatMap(url => mockApiCall(url))).subscribe(console.log);
}
