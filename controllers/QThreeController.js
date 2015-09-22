surveyBot.controller('QThreeController', function QThreeCtrl($scope, SurveyFactory){
    $scope.surveys = SurveyFactory.surveys;
    $scope.SurveyFactory = SurveyFactory;
});
