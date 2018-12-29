exports = module.exports = isEmail;
exports.isNotEmail = isNotEmail;

var localAddr = /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+$/i;
var domain = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

function isEmail( str ) {
	var parts = str.split( "@" );
	if ( parts.length !== 2 ) {
		return false;
	}

	if ( !localAddr.test( parts[ 0 ] ) ) {
		return false;
	}

	if ( !domain.test( parts[ 1 ] ) ) {
		return false;
	}

	if ( parts[ 0 ].substr( -1 ) === "." ) {
		return false;
	}

	return true;
}

function isNotEmail( str ) {
	return !isEmail( str )
}
