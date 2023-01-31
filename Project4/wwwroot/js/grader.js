$("#buttonSubmit").click(function () {
    // percentages for each assignment category as put in by the user
    // assigns each value to a new variable
    let assignments = $("#assignments").val();
    let quizzes = $("#quizzes").val();
    let intex = $("#intex").val();
    let groupprojects = $("#groupprojects").val();
    let exams = $("#exams").val();

    // Weight of assignment categories

    // Assignments: 53.76%
    let weightAssignment = 0.50;
    // Group: 5.38%
    let weightGroupProject = 0.10;
    // Quizzes: 8.6%
    let weightQuizzes = 0.10;
    // INTEX: 10.75%
    let weightIntex = 0.10;
    // Exams: 21.51%
    let weightExams = 0.10;

    // calculating the total percentage earned in the class
    let totalPercentage = (assignments * weightAssignment) + (quizzes * weightQuizzes) + (intex * weightIntex) + (groupprojects * weightGroupProject) + (exams * weightExams);

    // outputting the results of the calculation above
    $("#percentgrade").text(totalPercentage + "%");

    let lettergrade = 'N';
    // Based on grade percentage, determine a letter grade

    if (totalPercentage >= 94) {
        lettergrade = 'A';
    }
    else if (totalPercentage >= 90) {
        lettergrade = 'A-';
    }
    else if (totalPercentage >= 87) {
        lettergrade = 'B+';
    }
    else if (totalPercentage >= 84) {
        lettergrade = 'B';
    }
    else if (totalPercentage >= 80) {
        lettergrade = 'B-';
    }
    else if (totalPercentage >= 77) {
        lettergrade = 'C+';
    }
    else if (totalPercentage >= 74) {
        lettergrade = 'C';
    }
    else if (totalPercentage >= 70) {
        lettergrade = 'C-';
    }
    else if (totalPercentage >= 67) {
        lettergrade = 'D+';
    }
    else if (totalPercentage >= 64) {
        lettergrade = 'D';
    }
    else if (totalPercentage >= 60) {
        lettergrade = 'D-';
    }
    else if (totalPercentage >= 0) {
        lettergrade = 'E'
    }

    // output the letter grade determined in the above if statement block
    $("#lettergrade").text(lettergrade);
});
