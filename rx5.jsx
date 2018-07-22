import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

const observable = Observable.ajax({
  url: 'http://localhost:3000/home/delay10',
  progressSubscriber: {
    complete: () => console.log('completed'),
    error: (error) => console.error('[subcription]', error)
  }
});

const observable2 = Observable.ajax({
  url: 'http://localhost:3000/home/delay10',
  progressSubscriber: {
    complete: () => console.log('completed'),
    error: (error) => console.error('[subcription]', error)
  }
});


const subscription = observable.subscribe((xhr) => console.log('[subscription]', xhr.response));
const subscription2 = observable2.subscribe((xhr) => console.log('[subscription]', xhr.response));

/**
 * adding a subscription to another.
 * Cancelling 1 will cancel both
 */
subscription.add(subscription2);

setTimeout(() => {
  console.log('[unsubscribe] completing ...');
  /** removes subscription2 */
  subscription.remove(subscription2);
  // only subscription will be cancelled
  subscription.unsubscribe()
}, 3000);