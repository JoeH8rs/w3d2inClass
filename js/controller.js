angular.module('svcApp').controller('mainControl',
    function ($scope, ourSvc) {
        $scope.items = [];
        $scope.words = ourSvc.saySomething;
		// comming from service.js
        
        $scope.$watch('ourData', function (newValue, oldValue) {
            // $watch = when ourData changes call this function.
            var newItem = newValue;
            if (newItem && newItem[newItem.length - 1] === ',') {
                var withoutComma = newItem.substring(0, newItem.length - 1);
                $scope.items.push(withoutComma);
                $scope.ourData = '';
            }
        });
        
        // This contorler makes requestes. it deligates. 
	

	});