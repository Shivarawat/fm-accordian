const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');


questions.forEach((question)=>{
    question.addEventListener('click',(e)=>{
        console.log(e.path[2].id);
        answers.forEach((answer)=>{
            answer.classList.add('hide');
        }); 
        answers[e.path[2].id-1].classList.remove('hide'); 
    });
});
