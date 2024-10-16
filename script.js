// Timer functionality (fixed at 31:14)
let time = 31 * 60 + 14; // 31 minutes and 14 seconds
let currentQuestionIndex = 0;
let currentModuleIndex = 0;
let totalQuestions = 25;
let totalModules = 4;
let userAnswers = [];

// Define questions directly for each module with placeholders
// Define questions directly for each module with space for 25 questions
const modules = [
    { 
        name: 'Reading Module 1', 
        questions: [
            { passage: 'Reading 1 - Passage for Question 1...', question: 'What is the best answer for question 1?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 2...', question: 'What is the best answer for question 2?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'B' },
            { passage: 'Reading 1 - Passage for Question 3...', question: 'What is the best answer for question 3?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'C' },
            { passage: 'Reading 1 - Passage for Question 4...', question: 'What is the best answer for question 4?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 5...', question: 'What is the best answer for question 5?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'D' },
{ passage: 'Reading 1 - Passage for Question 6...', question: 'What is the best answer for question 1?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 7...', question: 'What is the best answer for question 2?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'B' },
            { passage: 'Reading 1 - Passage for Question 8...', question: 'What is the best answer for question 3?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'C' },
            { passage: 'Reading 1 - Passage for Question 9...', question: 'What is the best answer for question 4?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 10...', question: 'What is the best answer for question 5?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'D' },
{ passage: 'Reading 1 - Passage for Question 11...', question: 'What is the best answer for question 1?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 12...', question: 'What is the best answer for question 2?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'B' },
            { passage: 'Reading 1 - Passage for Question 13...', question: 'What is the best answer for question 3?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'C' },
            { passage: 'Reading 1 - Passage for Question 14...', question: 'What is the best answer for question 4?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 15...', question: 'What is the best answer for question 5?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'D' },{ passage: 'Reading 1 - Passage for Question 16...', question: 'What is the best answer for question 1?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 17...', question: 'What is the best answer for question 2?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'B' },
            { passage: 'Reading 1 - Passage for Question 18...', question: 'What is the best answer for question 3?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'C' },
            { passage: 'Reading 1 - Passage for Question 19...', question: 'What is the best answer for question 4?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 20...', question: 'What is the best answer for question 5?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'D' },{ passage: 'Reading 1 - Passage for Question 21...', question: 'What is the best answer for question 1?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 22...', question: 'What is the best answer for question 2?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'B' },
            { passage: 'Reading 1 - Passage for Question 23...', question: 'What is the best answer for question 3?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'C' },
            { passage: 'Reading 1 - Passage for Question 24...', question: 'What is the best answer for question 4?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 1 - Passage for Question 25...', question: 'What is the best answer for question 5?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'D' },
            // Add questions 6 through 25 similarly for Reading Module 1...
        ]
    },
    { 
        name: 'Math Module 1', 
        questions: [
            {
                passage: '<p>An apple falls from a high branch. The height of the apple is modeled by the function f(x) = -x<sup>2</sup> - 2x + 7, where f(x) represents the height of the apple, and x represents the number of seconds since the fall. After how many seconds will the apple reach the ground?</p>',
                question: '<p>After how many seconds will the apple reach the ground?</p>',
                options: ['<p>1.8</p>', '<p>2.1</p>', '<p>2.3</p>', '<p>2.6</p>'],
                correct: 'C'
            },
            {
                passage: `<p>The table below represents the test scores on a chemistry final, as well as the lab grades for the semester:</p> 
                <table border="1" cellpadding="10"> 
                    <tr> 
                        <th>Final Exam</th> 
                        <td>78</td> <td>85</td> <td>91</td> <td>77</td> <td>94</td> <td>83</td> <td>87</td> 
                    </tr> 
                    <tr> 
                        <th>Lab Grade</th> 
                        <td>84</td> <td>86</td> <td>98</td> <td>90</td> <td>97</td> <td>85</td> <td>90</td> 
                    </tr> 
                </table>`,
                question: '<p>What is the difference between the mean and median of the lab grades?</p>',
                options: ['<p>0</p>', '<p>1.5</p>', '<p>3</p>', '<p>4.5</p>'],
                correct: 'A'
            },{
                passage: `
                <p>The given equation relates the molal boiling point elevation constant <em>K</em>, the ideal-gas constant <em>R</em>, the solvent boiling point <em>T</em>, the solvent molecular weight <em>M</em>, and the molal heat of vaporization <em>H</em>. Which equation correctly expresses the solvent boiling point in terms of the other quantities?</p>
                <p>\[ K = \\frac{R T^2 M}{1000 H} \]</p>
                `,
                question: '',
                options: [
                    '<p>\[ T = \\frac{1000^2 H^2 K^2}{R^2 M^2} \]</p>',
                    '<p>\[ T = 10 \\sqrt{\\frac{10 H K}{R M}} \]</p>',
                    '<p>\[ T = \\sqrt{1000 H K - R - M} \]</p>',
                    '<p>\[ T = 1000 \\sqrt{\\frac{H K}{R M}} \]</p>'
                ],
                correct: 'B'
            },

            {
                passage: '<p>In the diagram below, lines <em>p</em> and <em>q</em> are parallel. What is the value of <em>x</em>?</p>',
                question: '',
                options: ['<p>25&deg;</p>', '<p>35&deg;</p>', '<p>45&deg;</p>', '<p>55&deg;</p>'],
                correct: 'C'
            },
            {
                passage: '<p>The following data set represents the number of hours a group of students spent studying for an exam:</p> <p>3, 5, 8, 6, 9, 12, 5, 7, 11, 10</p>',
                question: '<p>What is the median number of hours spent studying by the students in this group?</p>',
                options: ['<p>3</p>', '<p>5</p>', '<p>6.5</p>', '<p>7.5</p>'],
                correct: 'D'
            },
            {
                passage: '<p>The equation <strong>5p + 4c = 60</strong> describes the relationship between the number of pickup trucks, <strong>p</strong>, and passenger cars, <strong>c</strong>, in a parking lot. The total number of parking spaces is 60.</p>',
                question: '<p>If there are 10 passenger cars in the parking lot, how many pickup trucks are there?</p>',
                options: ['<p>4</p>', '<p>8</p>', '<p>40</p>', '<p>60</p>'],
                correct: 'B'
            },{ passage: 'Math 1 - Problem for Question 1: Solve x + 2 = 5', question: 'What is x?', options: ['1', '2', '3', '4'], correct: 'B' },
            { passage: 'Math 1 - Problem for Question 2: 3x - 4 = 5', question: 'What is x?', options: ['1', '3', '5', '2'], correct: 'D' },
            { passage: 'Math 1 - Problem for Question 3: Solve 2x + 4 = 10', question: 'What is x?', options: ['1', '2', '3', '4'], correct: 'C' },
            { passage: 'Math 1 - Problem for Question 4: Solve 5x = 10', question: 'What is x?', options: ['1', '2', '3', '5'], correct: 'B' },
            { passage: 'Math 1 - Problem for Question 5: Find the value of x: 3x + 7 = 19', question: 'What is x?', options: ['4', '5', '6', '7'], correct: 'B' },
            // Add questions 6 through 25 similarly for Math Module 1...
        ] 
    },
    { 
        name: 'Reading Module 2', 
        questions: [
            { passage: 'Reading 2 - Passage for Question 1...', question: 'What is the best answer for question 1?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'C' },
            { passage: 'Reading 2 - Passage for Question 2...', question: 'What is the best answer for question 2?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'A' },
            { passage: 'Reading 2 - Passage for Question 3...', question: 'What is the best answer for question 3?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'D' },
            { passage: 'Reading 2 - Passage for Question 4...', question: 'What is the best answer for question 4?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'B' },
            { passage: 'Reading 2 - Passage for Question 5...', question: 'What is the best answer for question 5?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 'C' },
            // Add questions 6 through 25 similarly for Reading Module 2...
        ]
    },
    { 
        name: 'Math Module 2', 
        questions: [
            { passage: 'Math 2 - Problem for Question 1: If 2x = 6, what is x?', question: 'What is x?', options: ['1', '2', '3', '4'], correct: 'C' },
            { passage: 'Math 2 - Problem for Question 2: Solve for y: 3y + 4 = 10', question: 'What is y?', options: ['1', '2', '4', '6'], correct: 'A' },
            { passage: 'Math 2 - Problem for Question 3: Solve x^2 = 9', question: 'What is x?', options: ['1', '2', '3', '4'], correct: 'C' },
            { passage: 'Math 2 - Problem for Question 4: Solve 5x = 25', question: 'What is x?', options: ['2', '3', '4', '5'], correct: 'D' },
            { passage: 'Math 2 - Problem for Question 5: Solve for z: 2z + 10 = 20', question: 'What is z?', options: ['3', '4', '5', '6'], correct: 'C' },
            // Add questions 6 through 25 similarly for Math Module 2...
        ]
    }
];

function loadQuestion() {
    const module = modules[currentModuleIndex];
    const question = module.questions[currentQuestionIndex];
    
    document.getElementById('section-name').innerText = module.name;
    document.getElementById('passage').innerHTML = question.passage;
    document.getElementById('question-text').innerText = question.question;
    document.querySelectorAll('label').forEach((label, index) => {
        label.innerHTML = `<input type="radio" name="answer" value="${String.fromCharCode(65 + index)}"> ${String.fromCharCode(65 + index)}) ${question.options[index]}`;
    });
    document.getElementById('question-count').innerText = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
}

function startTimer() {
    const timerElement = document.getElementById('time');
    const timerInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerInterval);
            timerElement.innerHTML = 'Time\'s up!';
        } else {
            time--;
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}

startTimer();

// Hide button functionality
document.getElementById('hide-btn').addEventListener('click', () => {
    const timerElement = document.getElementById('time');
    const hideBtn = document.getElementById('hide-btn');
    if (timerElement.style.display === 'none') {
        timerElement.style.display = 'inline';
        hideBtn.innerHTML = 'Hide';
    } else {
        timerElement.style.display = 'none';
        hideBtn.innerHTML = 'Show';
    }
});

// Navigation between questions
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else if (currentModuleIndex < totalModules - 1) {
        // Move to the next module
        currentModuleIndex++;
        currentQuestionIndex = 0;
        loadQuestion();
    } else {
        // All modules are done, show results
        showResults();
    }
});

// Show the navigator popup with 25 questions
document.getElementById('question-navigator').addEventListener('click', () => {
    const navigatorPopup = document.getElementById('navigator-popup');
    const navigatorOptions = document.querySelector('.navigator-options');
    navigatorOptions.innerHTML = ''; // Clear previous options

    for (let i = 0; i < totalQuestions; i++) {
        const button = document.createElement('button');
        button.innerText = i + 1;
        button.addEventListener('click', () => {
            currentQuestionIndex = i;
            loadQuestion();
            navigatorPopup.style.display = 'none';
        });
        navigatorOptions.appendChild(button);
    }

    navigatorPopup.style.display = 'block';
});

document.getElementById('close-navigator').addEventListener('click', () => {
    document.getElementById('navigator-popup').style.display = 'none';
});

function showResults() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    document.getElementById('results-text').innerText = `You completed the test. Total score: X/100.`;
}

document.getElementById('restart-btn').addEventListener('click', () => {
    location.reload();
});

// Initialize with the first question
loadQuestion();
