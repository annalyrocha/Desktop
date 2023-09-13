
const questions = [
  {
    question: "What is your favorite color?",
    choices: ["Pink", "Red", "Blue", "Yellow"]
  },
  {
    question: "How would you describe your personality?",
    choices: ["Playful and outgoing", "Kind and caring", "Creative and artistic", "Adventurous and energetic"]
  },
  {
    question: "Which accessory would you choose to wear?",
    choices: ["Bow", "Headband", "Necklace", "Bracelet"]
  },
  {
    question: "What is your favorite type of activity?",
    choices: ["Shopping and fashion", "Outdoor adventures", "Cooking and baking", "Arts and crafts"]
  },
  {
    question: "Which word best describes you?",
    choices: ["Cute", "Sweet", "Fashionable", "Fun-loving"]
  }
];


const characterMappings = {
  "Pink": "Hello Kitty",
  "Red": "Dear Daniel",
  "Blue": "Badtz-Maru",
  "Yellow": "My Melody",
  "Playful and outgoing": "Cinnamoroll",
  "Kind and caring": "Pompompurin",
  "Creative and artistic": "Kuromi",
  "Adventurous and energetic": "Keroppi",
  "Bow": "Mimmy",
  "Headband": "Chococat",
  "Necklace": "My Sweet Piano",
  "Bracelet": "Tuxedosam",
  "Shopping and fashion": "Little Twin Stars",
  "Outdoor adventures": "Hangyodon",
  "Cooking and baking": "Pochacco",
  "Arts and crafts": "Pekkle",
  "Cute": "Charmmy Kitty",
  "Sweet": "Sugarbunnies",
  "Fashionable": "Jewelpet",
  "Fun-loving": "Kiki and Lala"
};


let userAnswers = [];


function renderQuiz() {
  const quizContainer = document.getElementById('quiz');

  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
      <h3>${question.question}</h3>
      ${renderChoices(question.choices, index)}
    `;
    quizContainer.appendChild(questionElement);
  });
}

function renderChoices(choices, questionIndex) {
  let choicesHTML = '';

  choices.forEach((choice, index) => {
    choicesHTML += `
      <div class="choice">
        <input type="radio" id="q${questionIndex}_choice${index}" name="q${questionIndex}" value="${choice}" />
        <label for="q${questionIndex}_choice${index}">
          <span class="bubble"></span>
          ${choice}
        </label>
      </div>
    `;
  });

  return choicesHTML;
}


function getUserSelections() {
  const userSelections = [];

  questions.forEach((_, questionIndex) => {
    const selectedOption = document.querySelector(`input[name="q${questionIndex}"]:checked`);
    if (selectedOption) {
      userSelections.push(selectedOption.value);
    }
  });
  
  return userSelections;
  }
  
  function calculateResult() {
  const resultContainer = document.getElementById('result');
  const userSelections = getUserSelections();
  
  const resultCounts = {
    "Pink": 0,
    "Red": 0,
    "Blue": 0,
    "Yellow": 0,
    "Playful and outgoing": 0,
    "Kind and caring": 0,
    "Creative and artistic": 0,
    "Adventurous and energetic": 0,
    "Bow": 0,
    "Headband": 0,
    "Necklace": 0,
    "Bracelet": 0,
    "Shopping and fashion": 0,
    "Outdoor adventures": 0,
    "Cooking and baking": 0,
    "Arts and crafts": 0,
    "Cute": 0,
    "Sweet": 0,
    "Fashionable": 0,
    "Fun-loving": 0
  };
  
  userSelections.forEach((selection) => {
    resultCounts[selection]++;
  });
  
  let maxCount = 0;
  let result = "";
  
  for (const [character, count] of Object.entries(resultCounts)) {
    if (count > maxCount) {
      maxCount = count;
      result = characterMappings[character];
    }
  }
  
  resultContainer.textContent = `Your Hello Kitty character is: ${result}`;
  }
  

  window.addEventListener('DOMContentLoaded', () => {
  renderQuiz();
  });
  

  const submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', () => {
  calculateResult();
  });
  
  