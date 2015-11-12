var Home_App = angular.module('Home_App',['angular-timeline']);


Home_App.controller('Home_Cntrl_', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);


Home_App.controller('Home_Cntrl_NavHandler', ['$scope', function($scope) {
  $scope.menuItems = ["Home", "Experience","Projects","Coding"];
  $scope.rightItems = ["Contact"];
  $scope.page = page;
}]);

Home_App.controller('HomeCntrl_Resume', ['$scope', function($scope) {
  $scope.ProfessionalToolKit = Professional_TK;
  $scope.Experience = Experience;
}]);

Home_App.controller('HomeCntrl_Professional_TK', ['$scope', function($scope) {
  $scope.ProfessionalToolKit = Professional_TK;
}]);
