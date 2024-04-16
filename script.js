const questions=[
    {
       questions: "Inside which HTML element do we put the JavaScript? ",
        answers:[
            {text: "javascript", correct: false},
            {text: "script", correct: true},
            {text: "scripting", correct: false},
            {text: "js", correct: false},
        ]
    },
    {
        questions: "Where is the correct place to insert a JavaScript?",
        answers:[
            {text: "The body section", correct: false},
            {text: "both body and head section", correct:true},
            {text: "The title section", correct: false},
            {text: "after body section", correct: false},
        ]   
    },
    {
        questions: "What is the correct syntax for referring to an external script called xxx.js ?",
        answers:[
            {text:"script href xxx.js ", correct: false},
            {text:"script name xxx.js ", correct: false},
            {text:"script src xxx.js", correct: true},
        ]
    } ,
    {
        questions: "How do you create a function in JavaScript?",

        answers:[
            {text:"function myFunction", correct: true},
            {text:"function myFunction", correct: false},
            {text:"function  myFunction", correct: false},
        ]
    }  

    ];

    const questionElement= document.getElementById("question");

    const answersButtons= document.getElementById("answers-btn");
    
    const nextButton=document.getElementById("next-btn");
    

let currentquestionIndex=0;
let score=0;

function startQuiz(){
    currentquestionIndex=0;
    score=0;
    showQuestion();
}

function showQuestion(){

    resetState();

       let currentquestion=questions[currentquestionIndex];
       let questionNo=currentquestionIndex + 1;
       questionElement.innerHTML=questionNo + '.' + currentquestion.questions;

       
       currentquestion.answers.forEach(answer =>{
        const button=document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answersButtons.appendChild('button');
        button.addEventListener('click',selectAns);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

       });
}

function resetState(){
nextButton.style.display='none';
 while(answersButtons.firstChild){
    answersButtons.removeChild(answersButtons.firstChild);

 }
}

function selectAns(){
  

}
startQuiz();

