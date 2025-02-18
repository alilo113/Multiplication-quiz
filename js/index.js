const question = document.getElementById("question");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");

let randomNumber, secoundRandomNumber, rightAnswer;

// Function to generate a new question
function generateQuestion() {
    randomNumber = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10
    secoundRandomNumber = Math.floor(Math.random() * 10) + 1;
    rightAnswer = randomNumber + secoundRandomNumber;  // Multiplication instead of addition
    question.innerHTML = `What is ${randomNumber} +- ${secoundRandomNumber}?`;
    question.classList.add("question")
}

// Initialize the first question
generateQuestion();

submit.onclick = () => {
    if (Number(answer.value) === rightAnswer) {  // Convert input to number
        question.innerHTML = "Correct!";
    } else if (answer.value === "") {
        return null;  // Do nothing if input is empty
    } else {
        question.innerHTML = "Incorrect!";
    }

    setTimeout(() => {
        generateQuestion(); // Generate a new question after showing the result
        answer.value = ""; // Clear input field
    }, 1000); // Wait 1 second before changing the question
};