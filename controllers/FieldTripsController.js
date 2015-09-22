surveyBot.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, SurveyFactory){
    $scope.survey = SurveyFactory.students;
    $scope.addStudentWithPermissionSlip = function(student) {
        student.permissionSlip = true;
    };
});
