surveyBot.factory('SurveyFactory', function SurveyFactory(){
    var factory = {};
    factory.surveys = [];

    factory.addSurvey = function() {
        var survey = { questionOne: factory.surveyOne, questionTwo: factory.surveyTwo, questionThree: factory. surveyThree };
        factory.surveys.push(survey);
        factory.surveyOne = null;
        factory.surveyTwo = null;
        factory.surveyThree = null;
    };

    factory.deleteSurvey = function(survey) {
        var index = factory.surveys.indexOf(survey);
        factory.surveys.splice(index, 1);
    };
    return factory;
});
