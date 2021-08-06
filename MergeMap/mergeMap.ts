import { interval, of, range } from 'rxjs';
import { delay, map, mergeMap, switchMap } from 'rxjs/operators';

export function mergeMapOperator() {
  const input$ = of('a', 'b', 'c', 'd', 'e');
  input$
    .pipe(mergeMap((value: number) => range(1, 10).pipe(map(i => value + i))))
    .subscribe(console.log);
}
