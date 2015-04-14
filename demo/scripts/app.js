/**
 * Created by roy on 15/3/25.
 */

var App = angular.module('App',[
    'ngRoute',
    'ngCookies',
    'chieffancypants.loadingBar',
    'angularFileUpload',
    'ngMaterial',
    'ngAnimate',
    'ng.ueditor',
    'ngResource'
]);
App.config(['$routeProvider',function ($routeProvider) {

    //路由
    $routeProvider.when('/ActivityList', {
        templateUrl: 'ActivityList.html',
        controller: 'ActivityListCtl'
    })
        .when('/RecordList/:id', {
            templateUrl: 'RecordList.html',
            controller: 'RecordListCtl'
        }).when('/HotRecordList', {
            templateUrl: 'HotRecordList.html',
            controller: 'HotRecordListCtl'
        })
        .when('/AddActivity', {
            templateUrl: 'AddActivity.html',
            controller: 'AddActivityCtl'
        })
        .when('/restful', {
            templateUrl: 'restful.html',
            controller: 'restfulCtl'
        })
        .when('/mater', {
            templateUrl: 'mater.html',
            controller: 'materUICtl'
        })
        .otherwise({
            redirectTo: '/ActivityList'
        });
}]);
