angular.module('svcApp').service('ourSvc', function () {
    this.saySomething = "I'm giving up on you";
});

// Service never has a $scope. It's never paired with any html