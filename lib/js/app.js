'use strict';

var app = angular.module('musica', ['ui.router', 'LocalStorageModule']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider.state('musicaParent', {
		url: '/',
		abstract: true,
		template: '<ui-view></ui-view>'
	}).state('musicaParent.loginCtrl', {
		url: 'login',
		controller: 'LoginController as loginCtrl',
		templateUrl: './templates/login.html'
	}).state('musicaParent.songsCtrl', {
		url: 'songs',
		controller: 'SongsController as songsCtrl',
		templateUrl: './templates/songs.html',
		showNav: true
	}).state('musicaParent.friendsCtrl', {
		url: 'friends',
		controller: 'FriendsController as friendsCtrl',
		templateUrl: './templates/friends.html',
		showNav: true
	}).state('musicaParent.songsExpCtrl', {
		url: 'songsExpanded/:id',
		controller: 'SongsExpController as songsExpCtrl',
		templateUrl: './templates/songs-expanded.html',
		showNav: true
	});
});