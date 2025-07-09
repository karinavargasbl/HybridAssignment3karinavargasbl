# HybridAssignment3karinavargasbl
Karina Del Mar Vargas Bula
Student ID: 90541140462
Hybrid Assignment 3 Music Quiz

I created a quiz app using React and Vite that shows 5 random multiple-choice questions from the Open Trivia Database, using the Entertainment Music category and easy difficulty. The quiz has a soft and colorful design with pastel pink and blue tones, and it's fully responsive so it works on all screen sizes.

I used App.jsx as the main wrapper and added a key to restart the quiz by resetting the state. All the main logic of the quiz — fetching questions, handling answers, and showing results — is inside Quiz.jsx.

To keep the code clean and organized, I created two extra components:

Question.jsx : shows a single question and its answers.

QuizResults.jsx : displays the final score, shows the user's answers, and highlights the correct ones with ✅ and the incorrect ones with ❌.

I used state to keep track of the questions, selected answers, and whether the results should be shown. I also used props to pass that data to the Question and QuizResults components.

To run and debug the project, I use npm run dev, which opens the app in the browser and refreshes automatically when I make changes.
