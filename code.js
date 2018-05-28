var app=angular.module('app',["ngRoute"]);
app.controller('myCtrl',function($scope, $location, $http,$timeout, $interval){
	$scope.fname="sanket";
	$scope.lname="naik";
	$scope.points=[1,2,3,4];
	$scope.person=[{fname:'san', lname:'naik'},
					{fname:'sunny', lname:'gounkr'},
					{fname:'sam', lname:'nayak'}]

	$scope.val="hello boy"
    $scope.demo=function(){
    	$scope.val="hii sanket"
    }

    $scope.getdata=function(){
    	return $scope.name="hello func"
    }

    $scope.con = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];

       $scope.data = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
//to get the locationof file
$scope.myUrl=$location.absUrl();

//timeout
$scope.myheader="hello world"; 
$timeout(function(){
	$scope.myheader="how are you today";
},2000);
//interval
$scope.time=new Date().toLocaleTimeString(); 
$interval(function(){
	$scope.time=new Date().toLocaleTimeString();
},1000);

//get method
$http.get("photos.html").then(function(response){
	//first func handles success
	$scope.content=response.data;
	$scope.statuscode=response.status;
	$scope.statustext=response.statusText;
},function(response){ //second func handles error
	$scope.content="somethin went wrong";
});


//geting json data
$http.get("https://www.w3schools.com/angular/customers.php").then(function(response){
	$scope.jsondata=response.data.records;
})

$scope.val1=0;

$scope.count=function(){
	$scope.val1++;
}

$scope.showMe=false

$scope.myd=function(){
	$scope.showMe=!$scope.showMe;
}




});
//creating a directive
app.directive('myDirective',function(){
 	return{
 		template:"<h1>hello this is directive {{abcd}}</h1>"
 	};
 });

//ruites 
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html",
        controller:"indexcontroller"
    })
    .when("/photos", {
        templateUrl : "photos.html",
        controller:"pcontroller"
    });

   
});

app.controller('pcontroller',function($scope){
	$scope.cource=['java','csharp','nodejs','angualrjs'];
	$scope.name="sanket";
});

