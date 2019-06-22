let app = angular.module('OmegaXApp', []);

    app.controller('MainController', function ($http,$scope) {
        $scope.posx1=0;
        $scope.posx2=0;
        $scope.posy1=0;
        $scope.posy2=0;
        $scope.distancia2DResultado=0;

        $scope.calcularResultado2d=function(){
            //console.log($scope.posx1)
            //console.log($scope.posx2)
            //console.log($scope.posy1)
            //console.log($scope.posy2)

            //console.log( Math.sqrt(Math.pow($scope.posx2-$scope.posx1,2)+Math.pow($scope.posy2-$scope.posy1,2))
            //)
            $scope.distancia2DResultado= Math.sqrt(Math.pow($scope.posx2-$scope.posx1,2)+Math.pow($scope.posy2-$scope.posy1,2));
        }

    })