# private-ip

> Check if IP address is private.

[![NPM](https://nodei.co/npm/private-ip.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/private-ip/)

### Installation

```
$ npm install private-ip --save
```

### Usage

```js

import isPrivate from 'private-ip';

isPrivate('10.0.0.0');
// => true

isPrivate('101.0.26.90');
// => false

```

### Tests

```
$ npm test
```

### License
[MIT](https://github.com/frenchbread/private-ip/blob/master/LICENSE)
