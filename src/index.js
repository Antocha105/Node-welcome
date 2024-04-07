'use strict'

const _ = require('lodash')

const randomNumber = Number(_.random(1,10,false).toFixed(2))

console.log(randomNumber);

const div = document.querySelector('#root')

div.append('HELLO WEBPACK')