
// interface IMainViewModel extends ng.IScope {
//    text: any;
// }

// class MainViewModel {
//     constructor($scope: IMainViewModel, $http: ng.IHttpService){
//         $scope.text = " TEst";
//     }
// }

function MainCtrl($scope, $http){
   $scope.text = "test";   
}