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

const methods = [
  {
    name: 'isEmail',
    characters: unicodeRanges,
    test: () => true
  },
  {
    name: 'isAsciiEmail',
    characters: '',
    test: (parts) => {
      const labels = parts[1].split('.')
      for (const label of labels) {
        if (label.indexOf('xn--') === 0) {
          return false
        }
      }

      return true
    }
  }
].reduce((methods, { characters, name, test }) => {
  const localAddr = new RegExp(`^[a-z0-9.!#$%&'*+/=?^_\`{|}~${characters}-]+$`, 'i')
  const label = `[a-z0-9${characters}](?:[a-z0-9${characters}-]{0,61}[a-z0-9${characters}])?`
  const domain = new RegExp(`^${label}(?:\\.${label})+$`, 'i')

  methods[name] = (string) => {
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

    return test(parts)
  }

  return methods
}, {})

exports = module.exports = methods.isEmail
exports.isAsciiEmail = methods.isAsciiEmail

exports.isNotEmail = (string) => {
  return !methods.isEmail(string)
}

exports.isNotAsciiEmail = (string) => {
  return !methods.isAsciiEmail(string)
}
