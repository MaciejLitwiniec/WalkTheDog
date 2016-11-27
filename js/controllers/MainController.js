app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
    { 
      icon: 'resources/photo1.jpg', 
      title: 'MOVE', 
      developer: 'MOVE, Inc.', 
      price: 0.99 
    }, 
    { 
      icon: 'resources/photo2.jpg', 
      title: 'Shutterbugg', 
      developer: 'Chico Dusty', 
      price: 2.99 
    },
    {
      icon: 'resources/photo3.jpg',
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    }
    /*,
    {
      icon: 'resources/photo4.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    },
    {
      icon: 'resources/photo5.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    },
    {
      icon: 'resources/photo6.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    },
    {
      icon: 'resources/photo7.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    },
    {
      icon: 'resources/photo8.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    }*/

  ];
}]);