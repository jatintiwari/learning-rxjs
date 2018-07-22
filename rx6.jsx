import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/multicast';

//unicast subscription
const observable = Observable.ajax('http://localhost:3000/home/message');

const subject = new Subject();

//multicast subscription
const subscription = observable.subscribe(subject);

// const multicasted = observable.multicast(subject);
/** 
 * connect does the observable.subscribe under the hood
 * connect returns a subscription
 * as same as observable.subscribe(subject)
 */
// multicasted.connect();

// first observor
subject.subscribe({
  next: xhr => console.log('[multicast subscription]', xhr.response)
});
// second observor
subject.subscribe({
  next: xhr => console.log('[multicast subscription2]', xhr.response)
});
// third observor
subject.subscribe(xhr => console.log('[multicast subscription3]', xhr.response));


observable.subscribe(xhr => console.log('[observable]', xhr.response));
observable.subscribe(xhr => console.log('[observable2]', xhr.response));
observable.subscribe(xhr => console.log('[observable3]', xhr.response));