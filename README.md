# private-ip

> Check if IP address is private.

[![NPM](https://nodei.co/npm/private-ip.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/private-ip/)

[![NPM](https://nodei.co/npm-dl/private-ip.png)](https://nodei.co/npm/private-ip/)



### Installation

```bash
$ npm install private-ip --save

or

$ yarn add private-ip
```

### Usage

```js

import isIpPrivate from 'private-ip';

isIpPrivate('10.0.0.0');
// => true

isIpPrivate('101.0.26.90');
// => false

```

### Dev

##### Tests

```bash
$ npm run test
```

##### Build

```bash
$ npm run build
```

### Author

- Damir Mustafin [@frenchbread](https://github.com/frenchbread)

### License
[MIT](https://github.com/frenchbread/private-ip/blob/master/LICENSE)
