# Student Speaking Assessment Report

A clean report page that displays student speaking assessment results similar to SpeechAce/IELTS score reports.

## How to Run the Project

1. Download or clone this repository
2. Open `index.html` in any web browser
3. The report will display immediately

No server or installation required.

## Where the Scores are Stored

All scores are stored in `script.js` at the top of the file:

```javascript
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
```

To change scores, edit the values above and refresh the page.

## How Feedback Logic Works

Feedback is dynamically generated based on score ranges using simple conditions:

| Score Range | Feedback |
|-------------|----------|
| Score >= 8 | Excellent performance with strong control |
| Score 6-7 | Good performance with minor inaccuracies |
| Score < 6 | Needs improvement |

The logic implementation in `script.js`:

```javascript
function getSkillFeedback(score, skillName) {
    if (score >= 8) {
        return 'Excellent performance...';
    }
    else if (score >= 6 && score <= 7) {
        return 'Good performance...';
    }
    else {
        return 'Needs improvement...';
    }
}
```

Feedback updates automatically when score values change.

## Project Structure

```
speaking-assessment-report/
├── index.html   - Main HTML structure
├── style.css    - Styling and layout
├── script.js    - Score data and feedback logic
└── README.md    - Documentation
```

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Outfit)
