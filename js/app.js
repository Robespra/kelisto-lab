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
            .when('/articles_01_introduction', {
                templateUrl : 'pages/articles_01_introduction.html',
                controller  : 'articleController'
            })

            .when('/articles_02_premieres_traces', {
                templateUrl : 'pages/articles_02_premieres_traces.html',
                controller  : 'articleController'
            })

            .when('/articles_03_definition', {
                templateUrl : 'pages/articles_03_definition.html',
                controller  : 'articleController'
            })

            .when('/articles_04_avant_daller', {
                templateUrl : 'pages/articles_04_avant_daller.html',
                controller  : 'articleController'
            })

            .when('/articles_05_premiere_phase', {
                templateUrl : 'pages/articles_05_premiere_phase.html',
                controller  : 'articleController'
            })

            .when('/articles_06_seconde_phase', {
                templateUrl : 'pages/articles_06_seconde_phase.html',
                controller  : 'articleController'
            })

            .when('/articles_07_troisieme_phase', {
                templateUrl : 'pages/articles_07_troisieme_phase.html',
                controller  : 'articleController'
            })

            .when('/articles_08_quatrieme_phase', {
                templateUrl : 'pages/articles_08_quatrieme_phase.html',
                controller  : 'articleController'
            })

            .when('/articles_09_solitude_creation', {
                templateUrl : 'pages/articles_09_solitude_creation.html',
                controller  : 'articleController'
            })

            .when('/articles_10_cinquieme_phase', {
                templateUrl : 'pages/articles_10_cinquieme_phase.html',
                controller  : 'articleController'
            })

            .when('/articles_11_imagination', {
                templateUrl : 'pages/articles_11_imagination.html',
                controller  : 'articleController'
            })

            .when('/articles_12_creativite_sexualite', {
                templateUrl : 'pages/articles_12_creativite_sexualite.html',
                controller  : 'articleController'
            })

            .when('/articles_13_sensibilite', {
                templateUrl : 'pages/articles_13_sensibilite.html',
                controller  : 'articleController'
            })

            .when('/articles_14_netotchka', {
                templateUrl : 'pages/articles_14_netotchka.html',
                controller  : 'articleController'
            })

            .when('/articles_15_emotion_intuition', {
                templateUrl : 'pages/articles_15_emotion_intuition.html',
                controller  : 'articleController'
            })

            .when('/articles_16_paradoxes', {
                templateUrl : 'pages/articles_16_paradoxes.html',
                controller  : 'articleController'
            })
            .when('/articles_17_hierarchie', {
                templateUrl : 'pages/articles_17_hierarchie.html',
                controller  : 'articleController'
            })

            .when('/articles_18_creativite_perdue', {
                templateUrl : 'pages/articles_18_creativite_perdue.html',
                controller  : 'articleController'
            })

            .when('/articles_19_creativite_perdue2', {
                templateUrl : 'pages/articles_19_creativite_perdue2.html',
                controller  : 'articleController'
            })

            .when('/articles_20_peintre_vie_moderne', {
                templateUrl : 'pages/articles_20_peintre_vie_moderne.html',
                controller  : 'articleController'
            })

            .when('/articles_21_capacites_facteurs', {
                templateUrl : 'pages/articles_21_capacites_facteurs.html',
                controller  : 'articleController'
            })

            .when('/articles_22_gilles_disait', {
                templateUrl : 'pages/articles_22_gilles_disait.html',
                controller  : 'articleController'
            })

            .when('/articles_23_empathie', {
                templateUrl : 'pages/articles_23_empathie.html',
                controller  : 'articleController'
            })

            .when('/articles_24_reapprendre_regarder', {
                templateUrl : 'pages/articles_24_reapprendre_regarder.html',
                controller  : 'articleController'
            })

            .when('/articles_25_nature_inspiration', {
                templateUrl : 'pages/articles_25_nature_inspiration.html',
                controller  : 'articleController'
            })

            .when('/articles_26_flanerie', {
                templateUrl : 'pages/articles_26_flanerie.html',
                controller  : 'articleController'
            })

            .when('/articles_27_google', {
                templateUrl : 'pages/articles_27_google.html',
                controller  : 'articleController'
            })

            .when('/articles_28_cadre', {
                templateUrl : 'pages/articles_28_cadre.html',
                controller  : 'articleController'
            })

            .when('/articles_29_drogues', {
                templateUrl : 'pages/articles_29_drogues.html',
                controller  : 'articleController'
            })

            .when('/articles_30_motivations', {
                templateUrl : 'pages/articles_30_motivations.html',
                controller  : 'articleController'
            })

            .when('/articles_31_folie', {
                templateUrl : 'pages/articles_31_folie.html',
                controller  : 'articleController'
            })

            .when('/articles_32_cerveau', {
                templateUrl : 'pages/articles_32_cerveau.html',
                controller  : 'articleController'
            })

            .when('/articles_33_mosaique', {
                templateUrl : 'pages/articles_33_mosaique.html',
                controller  : 'articleController'
            })

            .when('/articles_34_conclucreoergosum', {
                templateUrl : 'pages/articles_34_conclucreoergosum.html',
                controller  : 'articleController'
            })

            .when('/articles_35_bibliographie', {
                templateUrl : 'pages/articles_35_bibliographie.html',
                controller  : 'articleController'
            })

            .when('/articles_partners_01', {
                templateUrl : 'pages/articles_partners_01.html',
                controller  : 'articleController'
            })

            .when('/articles_partners_02', {
                templateUrl : 'pages/articles_partners_02.html',
                controller  : 'articleController'
            })

            .when('/articles_partners_03', {
                templateUrl : 'pages/articles_partners_03.html',
                controller  : 'articleController'
            })

            .when('/articles_partners_04', {
                templateUrl : 'pages/articles_partners_04.html',
                controller  : 'articleController'
            })

            .when('/articles_partners_05', {
                templateUrl : 'pages/articles_partners_05.html',
                controller  : 'articleController'
            })

            .when('/articles_partners_06', {
                templateUrl : 'pages/articles_partners_06.html',
                controller  : 'articleController'
            })

            .when('/articles_partners_07', {
                templateUrl : 'pages/articles_partners_07.html',
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





