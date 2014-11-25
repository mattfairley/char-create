(function() {
  var app = angular.module('charCreate', []);

  app.controller('CharController', ['$http',function($http){
    var character = this;
    character.stats = [];
    $http.get('./js/stats.json').success(function(data){
      character.stats = data;
      console.log('data');
    });
  }]);

  app.directive('statTabs', function() {
    return {
      restrict: 'E',
      templateUrl: 'stat-tabs.html',
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: 'tab'
    };
  });

  app.directive('statName', function(){
    return {
      restrict: 'E',
      templateUrl: 'stat-name.html'
    };
  });

  app.directive('statRace', function(){
    return {
      restrict: 'E',
      templateUrl: 'stat-race.html'
    };
  });

  app.directive('statClass', function(){
    return {
      restrict: 'E',
      templateUrl: 'stat-class.html'
    };
  });

  app.directive('statAttributes', function(){
    return {
      restrict: 'E',
      templateUrl: 'stat-attributes.html'
    };
  });

  app.directive('statSkills', function(){
    return {
      restrict: 'E',
      templateUrl: 'stat-skills.html'
    };
  });

  app.directive('statSpells', function(){
    return {
      restrict: 'E',
      templateUrl: 'stat-spells.html'
    };
  });

  app.directive('statWeapons', function(){
    return {
      restrict: 'E',
      templateUrl: 'stat-weapons.html'
    };
  });

  app.directive('statSheet', function(){
    return {
      restrict: 'E',
      templateUrl: 'stat-sheet.html'
    };
  });

})();