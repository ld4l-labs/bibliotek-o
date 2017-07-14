angular
.module('myApp',['ngSanitize'])
.controller('myCtrl', ['$scope', function($scope) {
        $scope.homePage = function() {
          $scope.homepageView = true;
          $scope.designView = false;
          $scope.patternView = false;
        };
        $scope.readPatterns = function() {
          $scope.homepageView = false;
          $scope.designView = false;
          $scope.patternView = true;

          d3.json("data/models.json", function(error, data) {
            $scope.processModlesJSONData(data);
          });

        };
        $scope.readJSON = function() {
          $scope.homepageView = false;
          $scope.patternView = false;
          $scope.designView = true;
          d3.json("data/modules.json", function(error, data) {
            $scope.processJSONData(data);
          });
        };

        $scope.processJSONData = function(data) {
          console.log("process json data");
          $scope.ontologies = data;
        };
        $scope.processModlesJSONData = function(data) {
          console.log("process models json data");
          $scope.models = data;
        };

        $scope.readJSON();
        $scope.readPatterns();
        $scope.homePage();

        $("#pop").on("click", function() {
            $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
            $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
        });

}]);
