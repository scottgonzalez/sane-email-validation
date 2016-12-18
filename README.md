# Sane Email Validation

There are lots of email address validation modules, but none of them seem to check for sane email addresses. This one does. If you don't agree, please [file an issue](https://github.com/scottgonzalez/sane-email-validation/issues/new) and convince me why.

Support this project by [donating on Gittip](https://www.gittip.com/scottgonzalez/).

## Installation

```sh
npm install sane-email-validation
```

## Usage

```js
var isEmail = require( "sane-email-validation" );
var email = "...";

if ( isEmail( email ) ) {
	console.log( email + " is valid." );
} else {
	console.log( email + " is not valid." );
}
```

### `isNotEmail()`

An inverted check is also exposed.

```js
var isNotEmail = require( "sane-email-validation" ).isNotEmail;
var email = "...";

if ( isNotEmail( email ) ) {
  console.log( email + " is not valid." );
} else {
  console.log( email + " is valid." );
}
```

## License

Copyright Scott González. Released under the terms of the MIT license.

---

Support this project by [donating on Gittip](https://www.gittip.com/scottgonzalez/).
