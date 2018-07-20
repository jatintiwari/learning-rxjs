import { Observable } from 'rxjs/Observable';
import { scan } from 'rxjs/operators';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/scan';

const button1 = document.getElementById('button1');

export default Observable.fromEvent(button1, 'click')
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));