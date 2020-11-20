	(function() {
	  const myQuestions = [
	    {
	      question: " Which of the following option of ls command can be used to view file inode number?",
	      answers: {
	        a: "-l",
	        b: "-o",
	        c: "-i"
	      },
	      correctAnswer: "c"
	    },
	    {
	      question: "________ command is used to remove files?",
	      answers: {
	        a: "rm",
	        b: "rmdir",
	        c: "ls"
	      },
	      correctAnswer: "a"
	    },
	    {
	      question: "Which of the following is not a communication command?",
	      answers: {
	        a: "grep",
	        b: "mail",
	        c: "write",
	        
	      },
	      correctAnswer: "c"
		},
		{
			question: "Which one of the following command is used for searching for a pattern in one or more file(s)?",
			answers: {
			  a: "cp",
			  b: "cd",
			  c: "grep",
			  
			},
			correctAnswer: "c"
		  }
		  ,
		{
			question: "Which one of the following is the correct syntax for grep command?",
			answers: {
			  a: " grep options filename(s)",
			  b: "grep options pattern filename(s)",
			  c: "grep pattern filename",
			  
			},
			correctAnswer: "b"
		  }
		  ,
		  {
			  question: "Which one of the following command will be used for searching “director” in emp.lst?",
			  answers: {
				a: " grep “director”",
				b: "grep -v “director” emp.lst",
				c: "grep -director emp.lst",
				d:"grep “director” emp.lst",
				
			  },
			  correctAnswer: "d"
			}
			,
			{
				question: "When the pattern is not found in a file, grep command silently returns the prompt.",
				answers: {
				  a: "true",
				  b: "false",
				  
				  
				},
				correctAnswer: "b"
			  }
	  ];

	  function buildQuiz() {
	    // we'll need a place to store the HTML output
	    const output = [];

	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
	      // we'll want to store the list of answer choices
	      const answers = [];

	      // and for each available answer...
	      for (letter in currentQuestion.answers) {
	        // ...add an HTML radio button
	        answers.push(
	          `<label>
	             <input type="radio" name="question${questionNumber}" value="${letter}">
	              ${letter} :
	              ${currentQuestion.answers[letter]}
	           </label>`
	        );
	      }

	      // add this question and its answers to the output
	      output.push(
	        `<div class="slide">
	           <div class="question"> ${currentQuestion.question} </div>
	           <div class="answers"> ${answers.join("")} </div>
	         </div>`
	      );
	    });

	    // finally combine our output list into one string of HTML and put it on the page
	    quizContainer.innerHTML = output.join("");
	  }

	  function showResults() {
	    // gather answer containers from our quiz
	    const answerContainers = quizContainer.querySelectorAll(".answers");

	    // keep track of user's answers
	    let numCorrect = 0;

	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
	      // find selected answer
	      const answerContainer = answerContainers[questionNumber];
	      const selector = `input[name=question${questionNumber}]:checked`;
	      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

	      // if answer is correct
	      if (userAnswer === currentQuestion.correctAnswer) {
	        // add to the number of correct answers
	        numCorrect++;

	        // color the answers green
	        answerContainers[questionNumber].style.color = "lightgreen";
	      } else {
	        // if answer is wrong or blank
	        // color the answers red
	        answerContainers[questionNumber].style.color = "red";
	      }
	    });

	    // show number of correct answers out of total
	    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	  }

	  function showSlide(n) {
	    slides[currentSlide].classList.remove("active-slide");
	    slides[n].classList.add("active-slide");
	    currentSlide = n;
	    
	    if (currentSlide === 0) {
	      previousButton.style.display = "none";
	    } else {
	      previousButton.style.display = "inline-block";
	    }
	    
	    if (currentSlide === slides.length - 1) {
	      nextButton.style.display = "none";
	      submitButton.style.display = "inline-block";
	    } else {
	      nextButton.style.display = "inline-block";
	      submitButton.style.display = "none";
	    }
	  }

	  function showNextSlide() {
	    showSlide(currentSlide + 1);
	  }

	  function showPreviousSlide() {
	    showSlide(currentSlide - 1);
	  }

	  const quizContainer = document.getElementById("quiz");
	  const resultsContainer = document.getElementById("results");
	  const submitButton = document.getElementById("submit");

	  // display quiz right away
	  buildQuiz();

	  const previousButton = document.getElementById("previous");
	  const nextButton = document.getElementById("next");
	  const slides = document.querySelectorAll(".slide");
	  let currentSlide = 0;

	  showSlide(0);

	  // on submit, show results
	  submitButton.addEventListener("click", showResults);
	  previousButton.addEventListener("click", showPreviousSlide);
	  nextButton.addEventListener("click", showNextSlide);
	})();