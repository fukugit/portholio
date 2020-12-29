import {StopWatch} from './timer';

{
  const stopwatch = new StopWatch();
  let time = document.getElementById('time');
  time.textContent = stopwatch.getNow();
}
