import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const observable = Observable.create((observer) => {
  let i = 0;
  let interval = setInterval(() => observer.next(++i), 1000);

  return () => {
    clearInterval(interval);
  }
});


const subscription = observable.subscribe((data) => console.log('obserevable [data]', data));

const subject = new Subject();
let j = 0;
subject.subscribe((data) => console.log('[subject] data', data));
setInterval(() => subject.next(j += 1), 1000);