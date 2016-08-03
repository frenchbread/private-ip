import test from 'ava';
import isPrivate from './';

const publicIps = [
  '164.101.185.82',
  '226.84.185.150',
  '255.38.207.121',
  '71.12.102.112',
  '250.29.143.180',
  '223.231.138.242',
  '156.238.194.84',
  '101.0.26.90',
  '44.37.112.180',
  '46.192.247.73',
  '227.202.96.196',
  '111.211.73.40'
];

const privateIps = [
  '10.0.0.0',
  '10.1.1.1',
  '10.255.255.255',
  '172.16.0.0',
  '172.31.255.255',
  '192.168.0.0',
  '192.168.255.255'
];

publicIps.forEach((ip) => {
  test('IP should be public', (t) => {

    t.falsy(isPrivate(ip));
  });
});

privateIps.forEach((ip) => {
  test('IP should be private', (t) => {

    t.truthy(isPrivate(ip), true);
  });
});
