const questions = [
    {
        question: "Печатное издание от 8 до 48 (64) полос, состоящее из листов, скрепленных между собой, называется",
        answers: [
            {text: "буклет", correct: false},
            {text: "брошюра", correct: true},
            {text: "книга", correct: false},
        ]
    },
    {
        question: "Дисковые ножи применяются для",
        answers: [
            {text: "резки листов бумаги", correct: false},
            {text: "резки гофрокартона", correct: true},
            {text: "подрезки сшитых блоков ", correct: false},
        ]
    },
    {
        question: "Главное отличие одноножевых резальных машин от прочих способов резания",
        answers: [
            {text: "возможность разрезать сразу стопу листов", correct: true},
            {text: "отсутствие приемного стола", correct: false},
            {text: "возможность автоматизации резки", correct: false},
        ]
    },
    {
        question: "На точность реза не влияет",
        answers: [
            {text: "высота стопы", correct: false},
            {text: "масса 1м2 бумаги", correct: false},
            {text: "длина реза", correct: true},
        ]
    },
    {
        question: "Сталкивание всегда производится",
        answers: [
            {text: "после печати", correct: false},
            {text: "на «верный угол»", correct: true},
            {text: "на вибростоле", correct: false},
        ]
    },
    {
        question: "Металлическая скоба при шитье проволокой может получаться",
        answers: [
            {text: "из сплошного мотка проволоки", correct: false},
            {text: "поставляться в готовом виде", correct: false},
            {text: "оба варианта верны", correct: true},
        ]
    },
    {
        question: "Потетрадное шитье проволокой",
        answers: [
            {text: "является устаревшим способом скрепления", correct: true},
            {text: "используется для реставрации книг", correct: false},
            {text: "используется для изготовления канцелярских книг", correct: false},
        ]
    },
    {
        question: "На прочность шитья проволокой влияет",
        answers: [
            {text: "объем издания", correct: false},
            {text: "количество скоб", correct: true},
            {text: "формат издания", correct: false},
        ]
    },
    {
        question: "Фальцовка – это",
        answers: [
            {text: "обжим тетрадей", correct: false},
            {text: "выравнивание листов бумаги", correct: false},
            {text: "складывание листов бумаги", correct: true},
        ]
    },
    {
        question: "Какие из перечисленных фальцевальных устройств используются для фальцовки листовых материалов",
        answers: [
            {text: "кассетные и ножевые", correct: true},
            {text: "клапанно-барабанные", correct: false},
            {text: "вороночные", correct: false},
        ]
    },
    {
        question: "На качество фальцовки не влияет",
        answers: [
            {text: "тип самонаклада", correct: true},
            {text: "толщина материала", correct: false},
            {text: "климат в цеху", correct: false},
        ]
    },
    {
        question: "На качество прессования бумаги наибольшее значение оказывает",
        answers: [
            {text: "давление при прессовании", correct: false},
            {text: "время прессования", correct: true},
            {text: "режимы фальцовки", correct: false},
        ]
    },
    {
        question: "Комплектовка блока может быть",
        answers: [
            {text: "подборкой", correct: false},
            {text: "вкладкой", correct: false},
            {text: "оба варианта верны", correct: true},
        ]
    },
    {
        question: "КБС – это",
        answers: [
            {text: "способ комплектовки блока", correct: false},
            {text: "способ скрепления листов", correct: true},
            {text: "тип оборудования", correct: false},
        ]
    },
    {
        question: "Главный недостаток полиуретановых клеевых композиций",
        answers: [
            {text: "особенности сушки", correct: true},
            {text: "длительное время полимеризации", correct: false},
            {text: "ограничение по типу бумаг", correct: false},
        ]
    },
    {
        question: "Торшонирование - это",
        answers: [
            {text: "механическая обработка корешка", correct: true},
            {text: "тип КБС", correct: false},
            {text: "тип дополнительное сталкивание листов", correct: false},
        ]
    },
    {
        question: "Самый распространенный тип форзаца",
        answers: [
            {text: "«свой»", correct: false},
            {text: "составной", correct: false},
            {text: "приклейной", correct: true},
        ]
    },
    {
        question: "Какие свойства форзацной бумаги являются наиболее важными?",
        answers: [
            {text: "печатные", correct: true},
            {text: "механические", correct: false},
            {text: "оптические", correct: false},
        ]
    },
    {
        question: "Поблочное шитье ниткой используется",
        answers: [
            {text: "для шитья блоков, скомплектованных вкладкой", correct: true},
            {text: "для реставрации книг", correct: false},
            {text: "не используется", correct: false},
        ]
    },
    {
        question: "Переставной стежок используется для",
        answers: [
            {text: "компенсации утолщения блока в корешке", correct: true},
            {text: "для экономии ниток ", correct: false},
            {text: "из эстетических соображений", correct: false},
        ]
    },
    {
        question: "На качество шитья ниткой наибольшее значение оказывает",
        answers: [
            {text: "способ печати", correct: true},
            {text: "коэффициент спрессованости тетрадей", correct: false},
            {text: "способ комплектовки", correct: false},
        ]
    },
    {
        question: "При потетрадном шитье нитками эта операция обработки блока является необходимой",
        answers: [
            {text: "обжим", correct: false},
            {text: "резка", correct: false},
            {text: "заклейка корешка", correct: true},
        ]
    },
    {
        question: "Какие операции обработки блока повышают прочностные свойства книги?	",
        answers: [
            {text: "резка", correct: false},
            {text: "окантовка", correct: true},
            {text: "приклейка каптала", correct: false},
        ]
    },
    {
        question: "Какой клей не используется для заклейки корешка",
        answers: [
            {text: "ПВАД", correct: false},
            {text: "костный", correct: true},
            {text: "термоклей", correct: false},
        ]
    },
    {
        question: "Особенность интегральной переплетной крышки:",
        answers: [
            {text: "не требует приклейки к блоку", correct: false},
            {text: "состоит из нескольких частей", correct: false},
            {text: "состоит из одной детали", correct: true},
        ]
    },
    {
        question: "Основное требование при раскройке переплетных материалов",
        answers: [
            {text: "машинное направление волокна вдоль корешка", correct: true},
            {text: "декоративные свойства", correct: false},
            {text: "выбор резального оборудования", correct: false},
        ]
    },
    {
        question: "Корешок переплетной крышки называется",
        answers: [
            {text: "отстав", correct: true},
            {text: "расстав", correct: false},
            {text: "кант", correct: false},
        ]
    },
    {
        question: "Завершающим этапом вставки блока в переплетную крышку является",
        answers: [
            {text: "сушка", correct: true},
            {text: "штриховка", correct: false},
            {text: "обжим", correct: false},
        ]
    },
    {
        question: "При упаковке готовой продукции важно учитывать",
        answers: [
            {text: "формат ярлыка", correct: false},
            {text: "вес одной коробки", correct: true},
            {text: "количество коробок на паллете", correct: false},
        ]
    },
    {
        question: "Какая операция отделки не используется при изготовлении упаковки",
        answers: [
            {text: "установка фурнитуры", correct: false},
            {text: "золочение обреза", correct: true},
            {text: "гренирование", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Следующий";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    }

    function showScore(){
        resetState();
        questionElement.innerHTML ='Ваши баллы ' + score + ' из ' + questions.length;
        nextButton.style.display = "block";
    }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
