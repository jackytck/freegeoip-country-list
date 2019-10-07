[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]

[travis-image]: https://travis-ci.org/jackytck/freegeoip-country-list.svg?branch=master
[travis-url]: https://travis-ci.org/jackytck/freegeoip-country-list
[npm-image]: https://img.shields.io/npm/v/freegeoip-country-list.svg
[npm-url]: https://npmjs.org/package/freegeoip-country-list
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com

## Example

``` js
import { getCode, getName } from 'freegeoip-country-list'

console.log(getName('US')) // United States
console.log(getName('US', 'DE')) // USA
console.log(getName('US', 'ES')) // Estados Unidos
console.log(getName('US', 'FR')) // Etats-Unis
console.log(getName('US', 'JA')) // アメリカ合衆国
console.log(getName('US', 'ZHTW')) // 美國
console.log(getCode('Nowhere-to-be-found-land')) // undefined

console.log(getCode('United States')) // US
console.log(getCode('アメリカ合衆国', 'JA')) // US
```

## Methods

Usage:

``` js
import countryList from 'freegeoip-country-list'
```

locale is one of ['DE', 'EN', 'ES', 'FR', 'JA', 'PTBR', 'RU', 'ZHCN', 'ZHTW']

### getName(code, locale)

Expects a two-digit country code.  
Returns the name for that country.  
If not found, it returns `undefined`.  

### getCode(name, locale)

Expects the English country name.  
Returns the code for that country.  
If not found, it returns `undefined`.  

### getPhoneCode(code)

Returns the phone code of a country code.

### getNames(locale)

Returns an array of all country names.

### getCodes()

Returns an array of all country codes.

### getNameList(locale)

Returns a key-value object of all countries using the name as key.

### getCodeList(locale)

Returns a key-value object of all countries using the code as key.

## Install

``` cli
yarn add freegeoip-country-list
```

## Related Projects
 - [jackytck/gen-country-list](https://github.com/jackytck/gen-country-list)

## License

MIT
