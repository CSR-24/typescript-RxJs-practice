import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const mockApiCall = url => {
  return of(`Sending call to ${url}`).pipe(delay(Math.random() * 1000));
};
