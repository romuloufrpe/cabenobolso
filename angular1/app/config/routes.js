(function(){
  angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('dashboard', {
        url: "/dashboard",
        templateUrl: "dashboard/dashboard.html"
      }).state('billingCycle', {
        url: "/billingCycles?page",
        templateUrl: "billingCycle/tabs.html"
      }).state('calendar', {
        url: "/calendar",
        templateUrl: "calendar/calendar.html"
      })

      $urlRouterProvider.otherwise('/dashboard')
    }
  ])
})()
