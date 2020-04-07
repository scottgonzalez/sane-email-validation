exports = module.exports = isEmail
exports.isNotEmail = isNotEmail
exports.isAsciiEmail = isAsciiEmail
exports.isNotAsciiEmail = isNotAsciiEmail

// Unicode ranges from RFC 3987, section 2.2
const unicodeRanges = [
  '\u00A0-\uD7FF',
  '\uF900-\uFDCF',
  '\uFDF0-\uFFEF',
  '\u10000-\u1FFFD',
  '\u20000-\u2FFFD',
  '\u30000-\u3FFFD',
  '\u40000-\u4FFFD',
  '\u50000-\u5FFFD',
  '\u60000-\u6FFFD',
  '\u70000-\u7FFFD',
  '\u80000-\u8FFFD',
  '\u90000-\u9FFFD',
  '\uA0000-\uAFFFD',
  '\uB0000-\uBFFFD',
  '\uC0000-\uCFFFD',
  '\uD0000-\uDFFFD',
  '\uE1000-\uEFFFD'
].join('')
const localAddr = new RegExp(`^[a-z0-9.!#$%&'*+/=?^_\`{|}~${unicodeRanges}-]+$`, 'i')
const asciiLocalAddr = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i
const label = `[a-z0-9${unicodeRanges}](?:[a-z0-9${unicodeRanges}-]{0,61}[a-z0-9${unicodeRanges}])?`
const asciiLabel = '[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?'
const domain = new RegExp(`^${label}(?:\\.${label})+$`, 'i')
const asciiDomain = new RegExp(`^${asciiLabel}(?:\\.${asciiLabel})+$`, 'i')

function isEmail (string) {
  const parts = string.split('@')

  if (parts.length !== 2) {
    return false
  }

  if (!localAddr.test(parts[0])) {
    return false
  }

  if (!domain.test(parts[1])) {
    return false
  }

  if (parts[ 0 ].substr(-1) === '.') {
    return false
  }

  return true
}

function isNotEmail (string) {
  return !isEmail(string)
}

function isAsciiEmail (string) {
  const parts = string.split('@')

  if (parts.length !== 2) {
    return false
  }

  if (!asciiLocalAddr.test(parts[0])) {
    return false
  }

  if (!asciiDomain.test(parts[1])) {
    return false
  }

  if (parts[ 0 ].substr(-1) === '.') {
    return false
  }

  const labels = parts[1].split('.')
  for (const label of labels) {
    if (label.indexOf('xn--') === 0) {
      return false
    }
  }

  return true
}

function isNotAsciiEmail (string) {
  return !isAsciiEmail(string)
}
