/* eslint-disable import/first */

console.log("Hello World! ('-')");

// We import the server singleton first to ensure it is always available
import './singletons/moopsy-server';

import './api/index';
