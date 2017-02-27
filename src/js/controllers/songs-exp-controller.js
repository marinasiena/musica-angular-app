app.controller( 'SongsExpController', function( $stateParams, $q, data, $state ) {

	const songId = $stateParams.id;

	$q.when( data.get( './lib/data/data.json' ) )
		.then( ( response ) => {
			const songs = response.data;
			songs.forEach( ( song ) => {
				if ( song.Id === songId ) {
					this.currSong = song;
				}
			} );
		} );

} );
