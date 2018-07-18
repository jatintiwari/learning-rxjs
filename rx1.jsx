import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export default range(1, 200)
	.pipe(filter(x => x % 2 === 0), map(x => x + 1))
	.subscribe(console.log.bind(console));
