exports = module.exports = isEmail
exports.isNotEmail = isNotEmail

// Unicode ranges from RFC 3987
//    ucschar        = %xA0-D7FF / %xF900-FDCF / %xFDF0-FFEF
//       / %x10000-1FFFD / %x20000-2FFFD / %x30000-3FFFD
//       / %x40000-4FFFD / %x50000-5FFFD / %x60000-6FFFD
//       / %x70000-7FFFD / %x80000-8FFFD / %x90000-9FFFD
//       / %xA0000-AFFFD / %xB0000-BFFFD / %xC0000-CFFFD
//       / %xD0000-DFFFD / %xE1000-EFFFD
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
const label = `[a-z0-9${unicodeRanges}](?:[a-z0-9${unicodeRanges}-]{0,61}[a-z0-9${unicodeRanges}])?`
const domain = new RegExp(`^${label}(?:\\.${label})+$`, 'i')

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
