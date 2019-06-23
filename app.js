let app = angular.module('OmegaXApp', []);

    app.controller('MainController', function ($http,$scope) {
        //distancia basica
        $scope.pos1=0;
        $scope.pos2=0;
        $scope.resultado=0;
        $scope.calcularResultado=function(){
            
            $scope.resultado=Math.abs($scope.pos2-$scope.pos1);
        }
        //distancia en 2 dimensiones
        $scope.posx1=0;
        $scope.posx2=0;
        $scope.posy1=0;
        $scope.posy2=0;
        $scope.distancia2DResultado=0;

        $scope.calcularResultado2d=function(){
          $scope.distancia2DResultado= Math.sqrt(Math.pow($scope.posx2-$scope.posx1,2)+Math.pow($scope.posy2-$scope.posy1,2));
        }
        //distancia en 3 dimensiones
        $scope.pos3dx1=0;
        $scope.pos3dy1=0;
        $scope.pos3dz1=0;
        $scope.pos3dx2=0;
        $scope.pos3dy2=0;
        $scope.pos3dz2=0;
        $scope.distancia3DResultado=0;
        $scope.calcularResultado3D=function(){
          $scope.distancia3DResultado=Math.sqrt(Math.pow($scope.pos3dx2-$scope.pos3dx1,2)+Math.pow($scope.pos3dy2-$scope.pos3dy1,2)+Math.pow($scope.pos3dz2-$scope.pos3dz1,2));
        }
    })