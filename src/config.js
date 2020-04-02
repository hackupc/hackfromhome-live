/* eslint-disable */
import schedule from '../public/data/schedule.json';

export default {
  // If you don't want to test, just comment the fakeTime field
  // fakeTime: new Date('2020-04-04 20:59:55'), // year, month, day, time
  notificationTitle: 'HackFromHome Round2',
  notificationIcon: 'favicon.ico',
  baseTimeOffset: -120 * 60,
  hackathon_duration_hours: 12,
  schedule: schedule,
};
