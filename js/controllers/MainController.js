app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
    { 
      icon: 'resources/photo1.jpg', 
      name: 'MOVE', 
      owner: 'MOVE, Inc.', 
      adress: 'Warsaw'
    }, 
    { 
      icon: 'resources/photo2.jpg', 
      name: 'Shutterbugg', 
      owner: 'Chico Dusty', 
      adress: 'Warsaw' 
    },
    {
      icon: 'resources/photo3.jpg',
      name: 'Gameboard',
      owner: 'Armando P.',
      adress: 'Warsaw'
    }
    ,
    {
      icon: 'resources/photo4.jpg',
      name: 'Forecast',
      owner: 'John Smith',
      adress: 'Warsaw'
    },
    {
      icon: 'resources/photo5.jpg',
      name: 'Jake',
      owner: 'Jack Black',
      adress: 'Warsaw'
    },
    {
      icon: 'resources/photo6.jpg',
      name: 'Toby',
      owner: 'Robert DeNiro',
      adress: 'Warsaw'
    },
    {
      icon: 'resources/photo7.jpg',
      name: 'Blake',
      owner: 'Adam Sandler',
      adress: 'Warsaw'
    },
    {
      icon: 'resources/photo8.jpg',
      name: 'Fiter',
      owner: 'Jason Smith',
      adress: 'Warsaw'
    }

  ];
}]);