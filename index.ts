import { switchMap } from 'rxjs/operators';
import { sequenceCalls } from './ConcatMap/sequencialCall';
import { mergeMapOperator } from './MergeMap/mergeMap';
import { paralleCalls } from './MergeMap/parallelCalls';
import { scanOperator } from './Scan/scan';
import { switchMapOperator } from './SwitchMap/switchMap';

//scanOperator();
//switchMapOperator();
//mergeMapOperator();
//paralleCalls();
sequenceCalls();
