surveyBot.controller('QTwoController', function QTwoCtrl($scope, SurveyFactory){
    $scope.surveys = SurveyFactory.surveys;
    $scope.SurveyFactory = SurveyFactory;
});
