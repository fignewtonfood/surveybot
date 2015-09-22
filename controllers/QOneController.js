surveyBot.controller('QOneController', function QOneCtrl($scope, SurveyFactory){
    $scope.surveys = SurveyFactory.surveys;
    $scope.SurveyFactory = SurveyFactory;
});
