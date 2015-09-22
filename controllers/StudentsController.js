surveyBot.controller('StudentsCtrl', function StudentsCtrl($scope, SurveyFactory){
    $scope.survey = SurveyFactory.students;
    $scope.SurveyFactory = SurveyFactory;
});
