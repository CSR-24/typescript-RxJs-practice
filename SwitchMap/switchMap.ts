import { interval, of, range } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export function switchMapOperator() {
  const input$ = of(1, 2, 3, 4, 5);
  input$
    .pipe(switchMap((value: number) => range(1, value)))
    .subscribe(console.log);
}
