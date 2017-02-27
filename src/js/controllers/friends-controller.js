app.controller( 'FriendsController', function( $state, $q, data, loginService ) {

	this.friends = [];

	$q.when( data.get( './lib/data/friends.json' ) )
		.then( ( response ) => {
			this.friends = response.data;
			console.log( 'friends', this.friends );
		} );

	this.friendCount = function() {
		let friendCount = this.friends.length;
		return friendCount;
	};
} );
