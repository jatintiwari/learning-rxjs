import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';


const subscription = Observable.ajax({
  url: 'http://localhost:3000/home/delay10',
  progressSubscriber: {
    complete: () => console.log('completed'),
    error: (error) => console.error('[subcription]', error)
  },

});

const subscriber = subscription.subscribe((xhr) => console.log('[subscription]', xhr.response));

setTimeout(() => {
  console.log('[unsubscribe] completing ...');
  // subscriber.complete()
}, 3000);