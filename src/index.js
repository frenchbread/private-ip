const Netmask = require('netmask').Netmask;
const ipRegex = require('ip-regex');

function ipv4Check (params) {
  let privateRanges = [
    '0.0.0.0/8',
    '10.0.0.0/8',
    '100.64.0.0/10',
    '127.0.0.0/8',
    '169.254.0.0/16',
    '172.16.0.0/12',
    '192.0.0.0/24',
    '192.0.0.0/29',
    '192.0.0.8/32',
    '192.0.0.9/32',
    '192.0.0.10/32',
    '192.0.0.170/32',
    '192.0.0.171/32',
    '192.0.2.0/24',
    '192.31.196.0/24',
    '192.52.193.0/24',
    '192.88.99.0/24',
    '192.168.0.0/16',
    '192.175.48.0/24',
    '198.18.0.0/15',
    '198.51.100.0/24',
    '203.0.113.0/24',
    '240.0.0.0/4',
    '255.255.255.255/32'
  ].map(b => new Netmask(b))
  for (let r of privateRanges) {
    if (r.contains(params)) return true;
  }
  return false;
}

function ipv6Check (params) {
  return /^::$/.test(params) ||
    /^::1$/.test(params) ||
    /^::f{4}:([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(params) ||
    /^::f{4}:0.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(params) ||
    /^64:ff9b::([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(params) ||
    /^100::([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(params) ||
    /^2001::([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(params) ||
    /^2001:2[0-9a-fA-F]:([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(params) ||
    /^2001:db8:([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(params) ||
    /^2002:([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(params) ||
    /^f[c-d]([0-9a-fA-F]{2,2}):/i.test(params) ||
    /^fe[8-9a-bA-B][0-9a-fA-F]:/i.test(params) ||
    /^ff([0-9a-fA-F]{2,2}):/i.test(params)
}

export default (ip) => {
  if(ipRegex.v6().test(ip)){
    return ipv6Check(ip);
  }
  else if (ipRegex().test(ip) || ip.startsWith('0')){
    return ipv4Check(ip);
  }else{
    return false;
  }
}
