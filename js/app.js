'use strict';
// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var app = angular.module('app', ['ngRoute', 'ngAnimate']);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            // route for articles
            .when('/articles_01_header', {
                templateUrl : 'pages/articles_01_header.html',
                controller  : 'articleController'
            })

            .when('/articles_02_product_page', {
                templateUrl : 'pages/articles_02_product_page.html',
                controller  : 'articleController'
            })

            .when('/articles_03_CI_corner', {
                templateUrl : 'pages/articles_03_CI_corner.html',
                controller  : 'articleController'
            })

            .when('/articles_04_process_breadcrumb', {
                templateUrl : 'pages/articles_04_ci_breadcrumb.html',
                controller  : 'articleController'
            })

            .when('/articles_05_fullwidth_article', {
                templateUrl : 'pages/articles_05_fullwidth_article.html',
                controller  : 'articleController'
            });

    });

// CONTROLLERS ============================================
// home page controller
app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
    
});

// about page controller
app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// contact page controller
app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

// article controller
app.controller('articleController', function($scope) {
    $scope.pageClass = 'page-article';
});





