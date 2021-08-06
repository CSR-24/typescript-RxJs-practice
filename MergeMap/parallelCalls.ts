import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { mockApiCall } from '../mockCall';

export function paralleCalls() {
  const urls$ = of('url1', 'url2', 'url3', 'url4');
  urls$.pipe(mergeMap(url => mockApiCall(url))).subscribe(console.log);
}
