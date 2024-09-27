let currentSlide = 0;
 
function showSlide(index) {
    const slides = document.querySelector('.slides');
    
   
    if (index >=2) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide =  1;
    } else {
        currentSlide = index;
    }
 
    const offset = -currentSlide * 100; // Ajusta a posição
    slides.style.transform = `translateX(${offset}%)`;
}
 
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}
 
// Inicializa o carrossel
showSlide(currentSlide);


// -------------------------------------------------

function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
    });
}

function playSound(){
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function submitQuiz(){
    let correctAnswers ={
        q1: "C",
        q2: "A",
        q3: "C",
        q4: "E",
        q5: "B",
        q6: "C",
        q7: "E",
        q8: "C",
        q9: "C",
        q10: "B",

        //Adicione as respostas corretas para as outras perguntas
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for(let key in correctAnswers){
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]){
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`

    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('enviar').setAttribute('disabled', true);

    //Tocar som se todas as respostas estiverem corretas

    if(score===10){
        let successSound = document.getElementById('venceusom');
        successSound.play();

        // document.getElementById('reiniciar').removeAttribute('disabled');
        // document.getElementById('enviar').setAttribute('disabled', true);
    }

    if(score != 10){
        let failSound = document.getElementById('perdeusom');
        failSound.play();
    }

    
}

// 

function responderNovamente() {
    score = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('enviar').removeAttribute('disabled');
    result.innerHTML = " ";
    document.getElementById('quiz-form').reset();

    let options=document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
    

}