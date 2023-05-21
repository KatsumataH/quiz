const quiz = [
    {
        question: '今は何年?',
        answers: [
            '2010年',
            '2023年',
            '2022年',
            '2012年'
        ],
        correct: '2023年'
    },{
        question: '「漸く」の読み方は?',
        answers: [
            'ようやく',
            'しばらく',
            'いさぎよく',
            'ひさしく'
        ],
        correct: 'ようやく'
    },{
        question: '133✖️236➗2の答えは?',
        answers: [
            '25410',
            '61879',
            '34219',
            '15694'
        ],
        correct: '15694'
    },{
        question: '新しい一万円札に描かれる人物は?',
        answers: [
            '福沢諭吉',
            '聖徳太子',
            '渋沢栄一',
            '夏目漱石'
        ],
        correct: '渋沢栄一'
    },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解');
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です。');
    }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex++;
};