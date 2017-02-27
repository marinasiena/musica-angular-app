
app.service( 'loginService', function(localStorageService) {

this.currLogin = {};

	function userServiceLogin( login ) {

		this.currLogin = {
			username: login.username,
			password: login.password,
			login: true
		};
		console.log('localstg', this.currLogin);
		localStorageService.set( 'login', this.currLogin );
		return this.currLogin;
	}

	return {
		userServiceLogin:userServiceLogin,
	};

});
