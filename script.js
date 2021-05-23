//First Date Questions by: Mike Vollmer
let questions=[
	"What is your biggest pet peeve?",
	"What type of animal would you be and why?",
	"Do you have any dealbreakers? If so, what are they?",
	"Do you have a bucket list?",
	"What is your go to drink at a coffee shop?",
	"How spicy is too spicy?",
	"If you see a piece of trash on the ground, do you pick it up?",
	"There's three types of people in this world, dog people, cat people, and boring people. Which are you?",
	"What's your most useless party trick?",
	"What is your favorite season?",
	"Do you like to drink beer, wine, or liquor the most?",
	"What's a random fact that you find interesting?",
	"Are manners important to you?",
  "Do you work out?",
	"If you could travel anywhere in the world, where would you go and why?",
	"It's Friday night, do you go out with friends or your significant other?",
	"How did you decide on your profession? Did you ever think of doing something else?",
	"Who is your biggest role model?",
	"Have you always lived here? If not, what made you move and if yes, do you ever plan on leaving?",
	"Have you ever played any sports?",
	"Do you play any instruments?",
	"How many siblings do you have? Do you have a favorite?",
	"Who's your best friend/friends?",
	"What are your biggest goals in life?",
	"Do you have a favorite artist/musician?",
	"Would you rather live near the mountians or near the beach?",
	"Would you rather go cliff diving or bunjee jumping?",
	"Would you rather drink black coffee or no coffee for the rest of your life?",
	"Would you rather lose your hearing or sight?",
];

let answeredQuestions=[
  "What's your favorite color/colors?",
  
];

// Helper functions 
function generateQuestionNum(){
	//Pick number between 0 and size of questions array
	return Math.floor(Math.random() * questions.length);
}

function removeQuestion(questions, questionIndex){
	questions.splice(questionIndex,1);
}

function addQuestion(questions, answeredQuestions, questionIndex){
	answeredQuestions.push(questions[questionIndex]);
}

function changeText(question){
  document.getElementById("questionText").innerHTML = question;
}


// MAIN FUNCTION 
function play(questions, answeredQuestions){

	//get question index
	let questionIndex = generateQuestionNum();

	//get question at current index
	let currentQuestion = questions[questionIndex];

	//DISPLAY QUESTION
  //window.alert(currentQuestion);
  changeText(currentQuestion);

	//add question to answered questions array
	addQuestion(questions, answeredQuestions,questionIndex);

	//remove question from main questions array
	removeQuestion(questions, questionIndex);
}


