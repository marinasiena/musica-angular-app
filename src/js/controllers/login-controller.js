app.controller( 'LoginController', function( $state, $location, loginService, localStorageService ) {

	this.login = {};
	this.state = $state;
	this.currUser = {};

	this.userLogin = function( username, password ) {
		this.login = {
			username: username,
			password: password,
			login: true
		};
		this.currUser = loginService.userServiceLogin( this.login );
		this.navControl( 'songs' );
		$state.go( 'musicaParent.songsCtrl' );
	};

	this.loggedUser = function() {
		let loggedUser = localStorageService.get( 'login' );
		return loggedUser;
	};

	this.navControl = function( page ) {
		this.pageName = page;
	};

	this.isActive = function() {
		return $location.path();
	};

} );
