$("#start").on("click", function(){
	game.start();
	});

$(document).on("click","#end",function(){
	game.done();
})

		//list of question objects in an array
		//need to pay attention to this, apply for future use

		var questions = [{
				question: "A panda's daily diet consists almost entirely of what plant?",
				answers: ["pineapple", "pine tree", "flower", "bamboo"],
				correctAnswer: "bamboo"
			}, {
				question: "Which of the traditional five senses are dolphins believed not to possess?",
				answers: ["smell", "hear", "taste", "sight"],
				correctAnswer: "smell"
			}, {
				question: "The Van Gogh museum is located in what European capital city?",
				answers: ["Paris", "Berlin","Barcelona","Amsterdamo"],
				correctAnswer: "Amsterdamo"
			}, {
				question: "What color do you get when you mix yellow and blue?",
				answers: ["brown","green","purple","red"],
				correctAnswer: "green"
			}, {
				question: "Diamonds are made up almost entirely of what element?",
				answers: ["carbon","silicon","hydrogen","francium"],
				correctAnswer: "carbon"
			}, {
				question: "What is the most abundant element in the earth's atmosphere?",
				answers: ["hydrogen","oxygen","nitrogen","carbon"],
				correctAnswer: "nitrogen"
			}, {
				question: "In China, what number is considered unlucky because its pronunciation is similar to that for the word 'death'?",
				answers: ["four","six","eight","nine"],
				correctAnswer: "four"
			}, {
				question: "Which is the most widely spoken language in the world?",
				answers: ["English","Chinese","Spanish","French"],
				correctAnswer: "Chinese"
			}, {
				question: "To be legally sold as bourbon, a whiskey's mash must contain at least 51% of what grain?",
				answers: ["oat","wheat","corn","rice"],
				correctAnswer: "corn"
			}, {
				question: "SpaceX was founded by what South African-born inventor?",
				answers: ["Alain Aspect","Martin Karplus","Robert Marks II","Elon Musk"],
				correctAnswer: "Elon Musk"
			}
		]

		//make game object that has several properties
		var game = {

			correctAnswerCount: 0,
			incorrectAnswerCount: 0,

			counter: 120,
			countdown: function(){
				game.counter--;
				$("#timer").html("<h2>Time Remaining: "+ game.counter + " seconds</h2>");
				if(game.counter<=0){
					console.log("Time's up!");
					game.done();
				}
			},

			start: function(){
				$("#start").remove();
				timer = setInterval(game.countdown, 1000);
				for(var i=0; i<questions.length; i++){
					$("#questions").append("<h2>" + questions[i].question + "</h2>");
					for(var j=0; j<questions[i].answers.length; j++){
						$("#questions").append("<input type = 'radio' name = 'question-"+i+"' value = '"+questions[i].answers[j]+"'>" + questions[i].answers[j]);
					}
				}
				$("#subwrapper").append('<button id="end">DONE</button>');
			},

			done: function(){
				
				$.each($('input[name="question-0"]:checked'), function(){
					if($(this).val()==questions[0].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});
				$.each($('input[name="question-1"]:checked'), function(){
					if($(this).val()==questions[1].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});
				$.each($('input[name="question-2"]:checked'), function(){
					if($(this).val()==questions[2].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});
				$.each($('input[name="question-3"]:checked'), function(){
					if($(this).val()==questions[3].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});
				$.each($('input[name="question-4"]:checked'), function(){
					if($(this).val()==questions[4].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});
				$.each($('input[name="question-5"]:checked'), function(){
					if($(this).val()==questions[5].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});
				$.each($('input[name="question-6"]:checked'), function(){
					if($(this).val()==questions[6].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});
				$.each($('input[name="question-7"]:checked'), function(){
					if($(this).val()==questions[7].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});
				$.each($('input[name="question-8"]:checked'), function(){
					if($(this).val()==questions[8].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});
				$.each($('input[name="question-9"]:checked'), function(){
					if($(this).val()==questions[9].correctAnswer){
						game.correctAnswerCount++;
					}else{
						game.incorrectAnswerCount++;
					}
				});

				game.result();
			},
				result: function(){
					clearInterval(timer);
					$("#timer").remove();
					$("#questions").remove();
					$("#subwrapper").html("<h2>All done!</h2>");
					$("#subwrapper").append("<h2>Correct Answers: " + this.correctAnswerCount+"</h2>");
					$("#subwrapper").append("<h2>Incorrect Answers: " + this.incorrectAnswerCount+"</h2>");
					$("#subwrapper").append("<h2>Unanswered: " + (questions.length-this.correctAnswerCount-this.incorrectAnswerCount+"</h2>"));
				}
		}
		
		



