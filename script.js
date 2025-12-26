document.addEventListener('DOMContentLoaded', loadReport);

var studentData = {
    name: "S Rohit",
    date: "June 18, 2024",
    testType: "IELTS",
    overallScore: 7,
    maxScore: 9,
    pronunciation: 8,
    fluency: 7,
    vocabulary: 6,
    grammar: 5
};

function loadReport() {
    document.getElementById('candidate-name').innerText = studentData.name;
    document.getElementById('test-date').innerText = studentData.date;
    document.getElementById('test-type').innerText = studentData.testType;
    document.getElementById('overall-score').innerText = studentData.overallScore;
    document.getElementById('overall-max').innerText = studentData.maxScore;
    showSkills();
    showFeedback();
}

function showSkills() {
    var container = document.getElementById('skills-container');
    var skills = [
        { name: 'Pronunciation', score: studentData.pronunciation },
        { name: 'Fluency', score: studentData.fluency },
        { name: 'Vocabulary', score: studentData.vocabulary },
        { name: 'Grammar', score: studentData.grammar }
    ];

    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];
        var percentage = (skill.score / studentData.maxScore) * 100;
        var color = getColorForScore(skill.score);

        var html = '<div class="skill-row">';
        html += '<div class="skill-name">' + skill.name + '</div>';
        html += '<div class="progress-bar">';
        html += '<div class="progress-fill" style="width:' + percentage + '%; background-color:' + color + ';"></div>';
        html += '</div>';
        html += '<div class="skill-score" style="color:' + color + ';">' + skill.score + ' / ' + studentData.maxScore + '</div>';
        html += '</div>';
        container.innerHTML += html;
    }
}

function showFeedback() {
    var container = document.getElementById('feedback-container');
    container.innerHTML += makeFeedbackBox('Overall Performance', studentData.overallScore, getOverallFeedback(studentData.overallScore));
    container.innerHTML += makeFeedbackBox('Pronunciation', studentData.pronunciation, getSkillFeedback(studentData.pronunciation, 'pronunciation'));
    container.innerHTML += makeFeedbackBox('Fluency', studentData.fluency, getSkillFeedback(studentData.fluency, 'fluency'));
    container.innerHTML += makeFeedbackBox('Vocabulary', studentData.vocabulary, getSkillFeedback(studentData.vocabulary, 'vocabulary'));
    container.innerHTML += makeFeedbackBox('Grammar', studentData.grammar, getSkillFeedback(studentData.grammar, 'grammar'));
}

function getColorForScore(score) {
    if (score >= 8) return '#4CAF50';
    else if (score >= 6 && score <= 7) return '#FF9800';
    else return '#F44336';
}

function getSkillFeedback(score, skillName) {
    if (score >= 8) {
        return 'Excellent performance in ' + skillName + ' with strong control and minimal errors. The candidate demonstrates consistent accuracy and natural expression in this area. There is clear evidence of advanced proficiency suitable for professional and academic contexts.';
    }
    else if (score >= 6 && score <= 7) {
        return 'Good performance in ' + skillName + ' with minor inaccuracies that do not impede communication. The candidate shows competent ability with generally clear and effective expression. With continued practice, this skill can reach an advanced level.';
    }
    else {
        return skillName.charAt(0).toUpperCase() + skillName.slice(1) + ' needs improvement. There are noticeable gaps that may affect communication clarity. Focus on targeted practice and structured learning activities to strengthen this skill area.';
    }
}

function getOverallFeedback(score) {
    if (score >= 8) {
        return 'Excellent overall speaking performance. The candidate demonstrates strong command of the English language with natural fluency, accurate pronunciation, rich vocabulary, and proper grammar usage. Communication is highly effective and suitable for professional and academic contexts.';
    }
    else if (score >= 6 && score <= 7) {
        return 'Good overall speaking performance with minor areas for improvement. The candidate shows competent language skills with generally clear communication. There is effective use of vocabulary and grammar with occasional minor errors that do not impede understanding. Focus on refining specific skills will help achieve advanced proficiency.';
    }
    else {
        return 'Speaking skills require further development. While basic communication is achieved, there are noticeable gaps in fluency, pronunciation, vocabulary, or grammar that may affect clarity. A structured improvement plan with regular practice is recommended to build confidence and proficiency.';
    }
}

function makeFeedbackBox(title, score, text) {
    var color = getColorForScore(score);
    var html = '<div class="feedback-block">';
    html += '<div class="feedback-header">';
    html += '<span class="feedback-title">' + title + '</span>';
    html += '<span class="feedback-score-badge" style="background:' + color + '20; color:' + color + ';">' + score + ' / ' + studentData.maxScore + '</span>';
    html += '</div>';
    html += '<p class="feedback-text">' + text + '</p>';
    html += '</div>';
    return html;
}
