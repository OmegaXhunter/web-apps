let app = angular.module('OmegaXApp', []);

    app.controller('MainController', function ($http,$scope) {
        //variables globales
        //visibilidad pestañas
        $scope.mostrarMath=false;
        $scope.mostrarGames=false;
        //distancia basica
        $scope.mostrarD1=false;
        $scope.pos1=0;
        $scope.pos2=0;
        $scope.resultado=0;
        $scope.calcularResultado=function(){
            
            $scope.resultado=Math.abs($scope.pos2-$scope.pos1);
        }
        //distancia en 2 dimensiones
        $scope.mostrarD2=false;
        $scope.posx1=0;
        $scope.posx2=0;
        $scope.posy1=0;
        $scope.posy2=0;
        $scope.distancia2DResultado=0;

        $scope.calcularResultado2d=function(){
          $scope.distancia2DResultado= Math.sqrt(Math.pow($scope.posx2-$scope.posx1,2)+Math.pow($scope.posy2-$scope.posy1,2));
        }
        //distancia en 3 dimensiones
        $scope.mostrarD3=false;
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
        //circulo
        $scope.mostrarCirculo=false;
        $scope.radio=0;
        $scope.diametro=0;
        $scope.circuloAreaResultado=0;
        $scope.circuloPerimetroResultado=0;
        $scope.calcularCirculo=function(){
          $scope.circuloAreaResultado=Math.PI*Math.pow($scope.radio,2);
          $scope.circuloPerimetroResultado=2*Math.PI*$scope.radio;
          $scope.diametro=2*$scope.radio;
        }
       //funciones generales
        $scope.cambiarSubPaginas=function(value){
          if(value=='math'){
            $scope.mostrarMath=true;
            $scope.mostrarGames=false;
          }
          if(value=='games'){
            $scope.mostrarGames=true;
            $scope.mostrarMath=false;
          }
        }
        //
       $scope.mostrarItems=function(value){
        if(value=='distancia'){
          //console.log("entro");
          $scope.mostrarD1=!$scope.mostrarD1;
        }
        if(value=='distancia2D'){
          $scope.mostrarD2=!$scope.mostrarD2;
        }
        if(value=='distancia3D'){
          $scope.mostrarD3=!$scope.mostrarD3;
        }
        if(value=='circulo'){
          $scope.mostrarCirculo=!$scope.mostrarCirculo;
        }
      }

    })