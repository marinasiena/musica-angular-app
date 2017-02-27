angular.module( 'musica' ).service( 'data',  dataService );

function dataService( $http ) {
	function getData( url ) {
		return $http( {
			method: 'GET',
			url: url
		} );
	}

	return {
		get: getData
	};
}
