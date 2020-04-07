# Sane Email Validation

There are lots of email address validation modules, but none of them seem to check for sane email addresses. This one does. If you don't agree, please [file an issue](https://github.com/scottgonzalez/sane-email-validation/issues/new) and convince me why.

## Installation

```sh
npm install sane-email-validation
```

## Usage

```js
const isEmail = require('sane-email-validation')
const email = '...'

if (isEmail(email)) {
  console.log(`${email} is valid.`)
} else {
  console.log(`${email} is not valid.`)
}
```

### `isNotEmail()`

An inverted check is also exposed.

```js
const isNotEmail = require('sane-email-validation').isNotEmail
const email = '...'

if (isNotEmail(email)) {
  console.log(`${email} is not valid.`)
} else {
  console.log(`${email} is valid.`)
}
```

### `isAsciiEmail()`

An ASCII only version of the validator.

Since internationalized email addresses are not fully supported by all infrastructure, some systems may want to limit what they consider valid. See [International email](https://en.wikipedia.org/wiki/International_email) and the [Email Address Internationalization](https://en.wikipedia.org/wiki/Email_address#Internationalization) on Wikipedia for more information.

```js
const isAsciiEmail = require('sane-email-validation').isAsciiEmail
const email = '...'

if (isAsciiEmail(email)) {
  console.log(`${email} is valid.`)
} else {
  console.log(`${email} is not valid.`)
}
```

### `isNotAsciiEmail()`

An inverted check is also exposed for the ASCII only version.

```js
const isNotAsciiEmail = require('sane-email-validation').isNotAsciiEmail
const email = '...'

if (isNotAsciiEmail(email)) {
  console.log(`${email} is not valid.`)
} else {
  console.log(`${email} is valid.`)
}
```

## License

Copyright Sane Email Validation contributors. Released under the terms of the MIT license.
