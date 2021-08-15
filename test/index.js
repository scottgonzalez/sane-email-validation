/* eslint-env mocha */

const assert = require('assert')
const isAsciiEmail = require('../index').isAsciiEmail
const isEmail = require('../index')
const isNotAsciiEmail = require('../index').isNotAsciiEmail
const isNotEmail = require('../index').isNotEmail

describe('isEmail', () => {
  it('empty', () => {
    assert.strictEqual(isEmail(''), false, 'Should not accept empty email.')
  })

  it('invalid', () => {
    const longLabel = new Array(65).join('a')

    assert.strictEqual(isEmail('debt'), false,
      'Cannot be local only.')
    assert.strictEqual(isEmail('@example.com'), false,
      'Cannot be domain only.')
    assert.strictEqual(isEmail('debt@example'), false,
      'Cannot have a domain with only one label.')
    assert.strictEqual(isEmail('debt@-example.com'), false,
      'Cannot start domain with a hyphen.')
    assert.strictEqual(isEmail('debt@example-.com'), false,
      'Cannot end domain with a hyphen.')
    assert.strictEqual(isEmail('debt@example!com'), false,
      'Cannot contain special characters in domain.')
    assert.strictEqual(isEmail('debt@' + longLabel + '.com'), false,
      'Cannot contain domain label >63 characters.')
    assert.strictEqual(isEmail('debt.@example.com'), false,
      'Cannot end name with dot.')
  })

  it('valid', () => {
    const longLabel = new Array(64).join('a')

    assert.strictEqual(isEmail(longLabel + longLabel + '@example.com'), true,
      'Should accept very long local address.')
    assert.strictEqual(isEmail('debt@' + longLabel + '.com'), true,
      'Should accept 63 character domain labels.')
    assert.strictEqual(isEmail(".!#$%&'*+/=?^_`{|}~-a9@example.com"), true,
      'Should accept certain special characters in local address.')
    assert.strictEqual(isEmail('👋@example.com'), true,
      'Should accept unicode in local address')
    assert.strictEqual(isEmail('debt@👋.com'), true,
      'Should accept unicode in domain')
    assert.strictEqual(isEmail('debt@xn--wp8h.com'), true,
      'Should accept punycoded domains')
    assert.strictEqual(isEmail('debt@billing.👋.com'), true,
      'Should accept unicode in every domain label')
  })
})

describe('isAsciiEmail', () => {
  it('empty', () => {
    assert.strictEqual(isEmail(''), false, 'Should not accept empty email.')
  })

  it('invalid', () => {
    const longLabel = new Array(65).join('a')

    assert.strictEqual(isAsciiEmail('debt'), false,
      'Cannot be local only.')
    assert.strictEqual(isAsciiEmail('@example.com'), false,
      'Cannot be domain only.')
    assert.strictEqual(isAsciiEmail('debt@example'), false,
      'Cannot have a domain with only one label.')
    assert.strictEqual(isAsciiEmail('debt@-example.com'), false,
      'Cannot start domain with a hyphen.')
    assert.strictEqual(isAsciiEmail('debt@example-.com'), false,
      'Cannot end domain with a hyphen.')
    assert.strictEqual(isAsciiEmail('debt@example!com'), false,
      'Cannot contain special characters in domain.')
    assert.strictEqual(isAsciiEmail('debt@' + longLabel + '.com'), false,
      'Cannot contain domain label >63 characters.')
    assert.strictEqual(isAsciiEmail('debt.@example.com'), false,
      'Cannot end name with dot.')
    assert.strictEqual(isAsciiEmail('👋@example.com'), false,
      'Should not accept unicode in local address')
    assert.strictEqual(isAsciiEmail('debt@👋.com'), false,
      'Should not accept unicode in domain')
    assert.strictEqual(isAsciiEmail('debt@xn--wp8h.com'), false,
      'Should not accept punycoded domains')
    assert.strictEqual(isAsciiEmail('debt@billing.xn--wp8h.com'), false,
      'Should not accept any punycoded labels')
    assert.strictEqual(isAsciiEmail('debt@billing.👋.com'), false,
      'Should not accept unicode in any domain label')
  })

  it('valid', () => {
    const longLabel = new Array(64).join('a')

    assert.strictEqual(isAsciiEmail(longLabel + longLabel + '@example.com'), true,
      'Should accept very long local address.')
    assert.strictEqual(isAsciiEmail('debt@' + longLabel + '.com'), true,
      'Should accept 63 character domain labels.')
    assert.strictEqual(isAsciiEmail(".!#$%&'*+/=?^_`{|}~-a9@example.com"), true,
      'Should accept certain special characters in local address.')
  })
})

describe('isNotEmail', () => {
  it('empty', () => {
    assert.strictEqual(isNotEmail(''), true, 'Should not accept empty email.')
  })

  it('invalid', () => {
    const longLabel = new Array(65).join('a')

    assert.strictEqual(isNotEmail('debt'), true,
      'Cannot be local only.')
    assert.strictEqual(isNotEmail('@example.com'), true,
      'Cannot be domain only.')
    assert.strictEqual(isNotEmail('debt@example'), true,
      'Cannot have a domain with only one label.')
    assert.strictEqual(isNotEmail('debt@-example.com'), true,
      'Cannot start domain with a hyphen.')
    assert.strictEqual(isNotEmail('debt@example-.com'), true,
      'Cannot end domain with a hyphen.')
    assert.strictEqual(isNotEmail('debt@example!com'), true,
      'Cannot contain special characters in domain.')
    assert.strictEqual(isNotEmail('debt@' + longLabel + '.com'), true,
      'Cannot contain domain label >63 characters.')
    assert.strictEqual(isNotEmail('debt.@example.com'), true,
      'Cannot end name with dot.')
  })

  it('valid', () => {
    const longLabel = new Array(64).join('a')

    assert.strictEqual(isNotEmail(longLabel + longLabel + '@example.com'), false,
      'Should accept very long local address.')
    assert.strictEqual(isNotEmail('debt@' + longLabel + '.com'), false,
      'Should accept 63 character domain labels.')
    assert.strictEqual(isNotEmail(".!#$%&'*+/=?^_`{|}~-a9@example.com"), false,
      'Should accept certain special characters in local address.')
    assert.strictEqual(isNotEmail('👋@example.com'), false,
      'Should accept unicode in local address')
    assert.strictEqual(isNotEmail('debt@👋.com'), false,
      'Should accept unicode in domain')
    assert.strictEqual(isNotEmail('debt@xn--wp8h.com'), false,
      'Should accept punycoded domains')
    assert.strictEqual(isNotEmail('debt@billing.👋.com'), false,
      'Should accept unicode in every domain label')
  })
})

describe('isNotAsciiEmail', () => {
  it('empty', () => {
    assert.strictEqual(isNotEmail(''), true, 'Should not accept empty email.')
  })

  it('invalid', () => {
    const longLabel = new Array(65).join('a')

    assert.strictEqual(isNotAsciiEmail('debt'), true,
      'Cannot be local only.')
    assert.strictEqual(isNotAsciiEmail('@example.com'), true,
      'Cannot be domain only.')
    assert.strictEqual(isNotAsciiEmail('debt@example'), true,
      'Cannot have a domain with only one label.')
    assert.strictEqual(isNotAsciiEmail('debt@-example.com'), true,
      'Cannot start domain with a hyphen.')
    assert.strictEqual(isNotAsciiEmail('debt@example-.com'), true,
      'Cannot end domain with a hyphen.')
    assert.strictEqual(isNotAsciiEmail('debt@example!com'), true,
      'Cannot contain special characters in domain.')
    assert.strictEqual(isNotAsciiEmail('debt@' + longLabel + '.com'), true,
      'Cannot contain domain label >63 characters.')
    assert.strictEqual(isNotAsciiEmail('debt.@example.com'), true,
      'Cannot end name with dot.')
    assert.strictEqual(isNotAsciiEmail('👋@example.com'), true,
      'Cannot contain unicode in local address')
    assert.strictEqual(isNotAsciiEmail('debt@👋.com'), true,
      'Cannot contain unicode in domain')
    assert.strictEqual(isNotAsciiEmail('debt@xn--wp8h.com'), true,
      'Cannot contain punycoded domains')
    assert.strictEqual(isNotAsciiEmail('debt@billing.xn--wp8h.com'), true,
      'Cannot contain any punycoded labels')
    assert.strictEqual(isNotAsciiEmail('debt@billing.👋.com'), true,
      'Cannot contain unicode in any domain label')
  })

  it('valid', () => {
    const longLabel = new Array(64).join('a')

    assert.strictEqual(isNotAsciiEmail(longLabel + longLabel + '@example.com'), false,
      'Should accept very long local address.')
    assert.strictEqual(isNotAsciiEmail('debt@' + longLabel + '.com'), false,
      'Should accept 63 character domain labels.')
    assert.strictEqual(isNotAsciiEmail(".!#$%&'*+/=?^_`{|}~-a9@example.com"), false,
      'Should accept certain special characters in local address.')
  })
})
