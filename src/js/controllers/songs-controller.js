app.controller( 'SongsController', function( $state, $q, data, loginService ) {

	this.songs = [];

	$q.when( data.get( './lib/data/data.json' ) )
		.then( ( response ) => {
			this.songs = response.data;
			for ( i = 0; this.songs.length > i; i++ ) {
				this.songs[ i ].listeners = parseInt( this.songs[ i ].listeners, 10 );
			}
		} );

	this.sort = {
		column: '',
		descending: false
	};

	this.songCount = function() {
		let songCount = this.songs.length;
		return songCount;
	};

	this.changeSort = function( column ) {

		let sort = this.sort;

		if ( sort.column == column ) {
			sort.descending = !sort.descending;
		} else {
			sort.column = column;
			sort.descending = false;
		}
	};
} );
