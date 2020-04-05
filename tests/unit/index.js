const isAsciiEmail = require('../../index').isAsciiEmail
const isEmail = require('../../index')
const isNotAsciiEmail = require('../../index').isNotAsciiEmail
const isNotEmail = require('../../index').isNotEmail

exports.isEmail = {
  'empty': function (test) {
    test.expect(1)
    test.strictEqual(isEmail(''), false, 'Should not accept empty email.')
    test.done()
  },

  'invalid': function (test) {
    test.expect(8)

    const longLabel = new Array(65).join('a')

    test.strictEqual(isEmail('debt'), false,
      'Cannot be local only.')
    test.strictEqual(isEmail('@example.com'), false,
      'Cannot be domain only.')
    test.strictEqual(isEmail('debt@example'), false,
      'Cannot have a domain with only one label.')
    test.strictEqual(isEmail('debt@-example.com'), false,
      'Cannot start domain with a hyphen.')
    test.strictEqual(isEmail('debt@example-.com'), false,
      'Cannot end domain with a hyphen.')
    test.strictEqual(isEmail('debt@example!com'), false,
      'Cannot contain special characters in domain.')
    test.strictEqual(isEmail('debt@' + longLabel + '.com'), false,
      'Cannot contain domain label >63 characters.')
    test.strictEqual(isEmail('debt.@example.com'), false,
      'Cannot end name with dot.')
    test.done()
  },

  'valid': function (test) {
    test.expect(7)

    const longLabel = new Array(64).join('a')

    test.strictEqual(isEmail(longLabel + longLabel + '@example.com'), true,
      'Should accept very long local address.')
    test.strictEqual(isEmail('debt@' + longLabel + '.com'), true,
      'Should accept 63 character domain labels.')
    test.strictEqual(isEmail(".!#$%&'*+/=?^_`{|}~-a9@example.com"), true,
      'Should accept certain special characters in local address.')
    test.strictEqual(isEmail('👋@example.com'), true,
      'Should accept unicode in local address')
    test.strictEqual(isEmail('debt@👋.com'), true,
      'Should accept unicode in domain')
    test.strictEqual(isEmail('debt@xn--wp8h.com'), true,
      'Should accept punycoded domains')
    test.strictEqual(isEmail('debt@billing.👋.com'), true,
      'Should accept unicode in every domain label')
    test.done()
  }
}

exports.isAsciiEmail = {
  'empty': function (test) {
    test.expect(1)
    test.strictEqual(isEmail(''), false, 'Should not accept empty email.')
    test.done()
  },

  'invalid': function (test) {
    test.expect(13)

    const longLabel = new Array(65).join('a')

    test.strictEqual(isAsciiEmail('debt'), false,
      'Cannot be local only.')
    test.strictEqual(isAsciiEmail('@example.com'), false,
      'Cannot be domain only.')
    test.strictEqual(isAsciiEmail('debt@example'), false,
      'Cannot have a domain with only one label.')
    test.strictEqual(isAsciiEmail('debt@-example.com'), false,
      'Cannot start domain with a hyphen.')
    test.strictEqual(isAsciiEmail('debt@example-.com'), false,
      'Cannot end domain with a hyphen.')
    test.strictEqual(isAsciiEmail('debt@example!com'), false,
      'Cannot contain special characters in domain.')
    test.strictEqual(isAsciiEmail('debt@' + longLabel + '.com'), false,
      'Cannot contain domain label >63 characters.')
    test.strictEqual(isAsciiEmail('debt.@example.com'), false,
      'Cannot end name with dot.')
    test.strictEqual(isAsciiEmail('👋@example.com'), false,
      'Should not accept unicode in local address')
    test.strictEqual(isAsciiEmail('debt@👋.com'), false,
      'Should not accept unicode in domain')
    test.strictEqual(isAsciiEmail('debt@xn--wp8h.com'), false,
      'Should not accept punycoded domains')
    test.strictEqual(isAsciiEmail('debt@billing.xn--wp8h.com'), false,
      'Should not accept any punycoded labels')
    test.strictEqual(isAsciiEmail('debt@billing.👋.com'), false,
      'Should not accept unicode in any domain label')
    test.done()
  },

  'valid': function (test) {
    test.expect(3)

    const longLabel = new Array(64).join('a')

    test.strictEqual(isAsciiEmail(longLabel + longLabel + '@example.com'), true,
      'Should accept very long local address.')
    test.strictEqual(isAsciiEmail('debt@' + longLabel + '.com'), true,
      'Should accept 63 character domain labels.')
    test.strictEqual(isAsciiEmail(".!#$%&'*+/=?^_`{|}~-a9@example.com"), true,
      'Should accept certain special characters in local address.')
    test.done()
  }
}

exports.isNotEmail = {
  'empty': function (test) {
    test.expect(1)
    test.strictEqual(isNotEmail(''), true, 'Should not accept empty email.')
    test.done()
  },

  'invalid': function (test) {
    test.expect(8)

    const longLabel = new Array(65).join('a')

    test.strictEqual(isNotEmail('debt'), true,
      'Cannot be local only.')
    test.strictEqual(isNotEmail('@example.com'), true,
      'Cannot be domain only.')
    test.strictEqual(isNotEmail('debt@example'), true,
      'Cannot have a domain with only one label.')
    test.strictEqual(isNotEmail('debt@-example.com'), true,
      'Cannot start domain with a hyphen.')
    test.strictEqual(isNotEmail('debt@example-.com'), true,
      'Cannot end domain with a hyphen.')
    test.strictEqual(isNotEmail('debt@example!com'), true,
      'Cannot contain special characters in domain.')
    test.strictEqual(isNotEmail('debt@' + longLabel + '.com'), true,
      'Cannot contain domain label >63 characters.')
    test.strictEqual(isNotEmail('debt.@example.com'), true,
      'Cannot end name with dot.')
    test.done()
  },

  'valid': function (test) {
    test.expect(7)

    const longLabel = new Array(64).join('a')

    test.strictEqual(isNotEmail(longLabel + longLabel + '@example.com'), false,
      'Should accept very long local address.')
    test.strictEqual(isNotEmail('debt@' + longLabel + '.com'), false,
      'Should accept 63 character domain labels.')
    test.strictEqual(isNotEmail(".!#$%&'*+/=?^_`{|}~-a9@example.com"), false,
      'Should accept certain special characters in local address.')
    test.strictEqual(isNotEmail('👋@example.com'), false,
      'Should accept unicode in local address')
    test.strictEqual(isNotEmail('debt@👋.com'), false,
      'Should accept unicode in domain')
    test.strictEqual(isNotEmail('debt@xn--wp8h.com'), false,
      'Should accept punycoded domains')
    test.strictEqual(isNotEmail('debt@billing.👋.com'), false,
      'Should accept unicode in every domain label')
    test.done()
  }
}

exports.isNotAsciiEmail = {
  'empty': function (test) {
    test.expect(1)
    test.strictEqual(isNotEmail(''), true, 'Should not accept empty email.')
    test.done()
  },

  'invalid': function (test) {
    test.expect(13)

    const longLabel = new Array(65).join('a')

    test.strictEqual(isNotAsciiEmail('debt'), true,
      'Cannot be local only.')
    test.strictEqual(isNotAsciiEmail('@example.com'), true,
      'Cannot be domain only.')
    test.strictEqual(isNotAsciiEmail('debt@example'), true,
      'Cannot have a domain with only one label.')
    test.strictEqual(isNotAsciiEmail('debt@-example.com'), true,
      'Cannot start domain with a hyphen.')
    test.strictEqual(isNotAsciiEmail('debt@example-.com'), true,
      'Cannot end domain with a hyphen.')
    test.strictEqual(isNotAsciiEmail('debt@example!com'), true,
      'Cannot contain special characters in domain.')
    test.strictEqual(isNotAsciiEmail('debt@' + longLabel + '.com'), true,
      'Cannot contain domain label >63 characters.')
    test.strictEqual(isNotAsciiEmail('debt.@example.com'), true,
      'Cannot end name with dot.')
    test.strictEqual(isNotAsciiEmail('👋@example.com'), true,
      'Cannot contain unicode in local address')
    test.strictEqual(isNotAsciiEmail('debt@👋.com'), true,
      'Cannot contain unicode in domain')
    test.strictEqual(isNotAsciiEmail('debt@xn--wp8h.com'), true,
      'Cannot contain punycoded domains')
    test.strictEqual(isNotAsciiEmail('debt@billing.xn--wp8h.com'), true,
      'Cannot contain any punycoded labels')
    test.strictEqual(isNotAsciiEmail('debt@billing.👋.com'), true,
      'Cannot contain unicode in any domain label')
    test.done()
  },

  'valid': function (test) {
    test.expect(3)

    const longLabel = new Array(64).join('a')

    test.strictEqual(isNotAsciiEmail(longLabel + longLabel + '@example.com'), false,
      'Should accept very long local address.')
    test.strictEqual(isNotAsciiEmail('debt@' + longLabel + '.com'), false,
      'Should accept 63 character domain labels.')
    test.strictEqual(isNotAsciiEmail(".!#$%&'*+/=?^_`{|}~-a9@example.com"), false,
      'Should accept certain special characters in local address.')
    test.done()
  }
}
