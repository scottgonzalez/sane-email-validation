var isEmail = require( "../../index" );

exports.isEmail = {
	"empty": function( test ) {
		test.expect( 1 );
		test.strictEqual( isEmail( "" ), false, "Should not accept empty email." );
		test.done();
	},

	"invalid": function( test ) {
		test.expect( 7 );

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
		test.done();
	},

	"valid": function( test ) {
		test.expect( 3 );

		var longLabel = new Array( 64 ).join( "a" );

		test.ok( isEmail( longLabel + longLabel + "@example.com" ),
			"Should accept very long local address." );
		test.ok( isEmail( "debt@" + longLabel + ".com" ),
			"Should accept 63 character domain labels." );
		test.ok( isEmail( ".!#$%&'*+/=?^_`{|}~-a9@example.com" ),
			"Should accept certain special characters in local address." );
		test.done();
	}
};
