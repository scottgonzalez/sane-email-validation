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

## License

Copyright Scott González. Released under the terms of the MIT license.
