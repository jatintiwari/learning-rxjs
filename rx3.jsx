import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/observable/create';

const observable1 = Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);

  setTimeout(() => { 
    observer.next(5);
  }, 1000);

  setTimeout(() => { 
    observer.next(6);
    observer.complete();
  }, 3000);
});


const timeout = (cb) => setTimeout(cb, 1000);

const subs1 = observable1.subscribe({
  next: (x) => console.log('new value: ', x),
  error: (error) => console.error('error', error),
  complete: (done) => console.log('completed')
})

const subs2 = observable1.subscribe((x) => console.log('new value[2]: ', x));

subs1.add(subs2);