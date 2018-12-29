var isEmail = require( "../../index" );
var isNotEmail = require( "../../index" ).isNotEmail;

exports.isEmail = {
	"empty": function( test ) {
		test.expect( 1 );
		test.strictEqual( isEmail( "" ), false, "Should not accept empty email." );
		test.done();
	},

	"invalid": function( test ) {
		test.expect( 8 );

		var longLabel = new Array( 65 ).join( "a" );

		test.strictEqual( isEmail( "debt" ), false,
			"Cannot be local only." );
		test.strictEqual( isEmail( "@example.com" ), false,
			"Cannot be domain only." );
		test.strictEqual( isEmail( "debt@example" ), false,
			"Cannot have a domain with only one label." );
		test.strictEqual( isEmail( "debt@-example.com" ), false,
			"Cannot start domain with a hyphen." );
		test.strictEqual( isEmail( "debt@example-.com" ), false,
			"Cannot end domain with a hyphen." );
		test.strictEqual( isEmail( "debt@example!com" ), false,
			"Cannot contain special characters in domain." );
		test.strictEqual( isEmail( "debt@" + longLabel + ".com" ), false,
			"Cannot contain domain label >63 characters." );
		test.strictEqual( isEmail( "debt.@example.com" ), false,
			"Cannot end name with dot." );
		test.done();
	},

	"valid": function( test ) {
		test.expect( 3 );

		var longLabel = new Array( 64 ).join( "a" );

		test.strictEqual( isEmail( longLabel + longLabel + "@example.com" ), true,
			"Should accept very long local address." );
		test.strictEqual( isEmail( "debt@" + longLabel + ".com" ), true,
			"Should accept 63 character domain labels." );
		test.strictEqual( isEmail( ".!#$%&'*+/=?^_`{|}~-a9@example.com" ), true,
			"Should accept certain special characters in local address." );
		test.done();
	}
};

exports.isNotEmail = {
	"empty": function( test ) {
		test.expect( 1 );
		test.strictEqual( isNotEmail( "" ), true, "Should not accept empty email." );
		test.done();
	},

	"invalid": function( test ) {
		test.expect( 8 );

		var longLabel = new Array( 65 ).join( "a" );

		test.strictEqual( isNotEmail( "debt" ), true,
			"Cannot be local only." );
		test.strictEqual( isNotEmail( "@example.com" ), true,
			"Cannot be domain only." );
		test.strictEqual( isNotEmail( "debt@example" ), true,
			"Cannot have a domain with only one label." );
		test.strictEqual( isNotEmail( "debt@-example.com" ), true,
			"Cannot start domain with a hyphen." );
		test.strictEqual( isNotEmail( "debt@example-.com" ), true,
			"Cannot end domain with a hyphen." );
		test.strictEqual( isNotEmail( "debt@example!com" ), true,
			"Cannot contain special characters in domain." );
		test.strictEqual( isNotEmail( "debt@" + longLabel + ".com" ), true,
			"Cannot contain domain label >63 characters." );
		test.strictEqual( isNotEmail( "debt.@example.com" ), true,
			"Cannot end name with dot." );
		test.done();
	},

	"valid": function( test ) {
		test.expect( 3 );

		var longLabel = new Array( 64 ).join( "a" );

		test.strictEqual( isNotEmail( longLabel + longLabel + "@example.com" ), false,
			"Should accept very long local address." );
		test.strictEqual( isNotEmail( "debt@" + longLabel + ".com" ), false,
			"Should accept 63 character domain labels." );
		test.strictEqual( isNotEmail( ".!#$%&'*+/=?^_`{|}~-a9@example.com" ), false,
			"Should accept certain special characters in local address." );
		test.done();
	}
};
