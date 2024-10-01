'use strict'

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("OK! Test PASSED.");
    } else {
      console.error("Test FAILED. Try again!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

//問題のオブジェクトを作成
const allQuestions = [
    {
      Number: "001",
      quiz: "平安京へ遷都",
      Year: "794",
      Memorymethods: "鳴くよ(794)ウグイス平安京",
      About:"平安京が置かれた京都は約400年政治の中心として栄えた",
      QuizTaken:0,
      correct:0,
      Incorrect:0
    },
    {
     Number: "002",
    　quiz: "遣唐使の廃止",
    　Year: "894",
    　Memorymethods: "白紙(894)に戻す遣唐使",
    　About:"◎◎",
      QuizTaken:0,
      correct:0,
      Incorrect:0
    },
    {
    　Number: "003",
    　quiz: "室町幕府が成立",
    　Year: "1338",
    　Memorymethods: "いざ都(1338)で幕府を開こう",
    　About:"足利尊氏が室町幕府を開きました",
    　QuizTaken:0,
    　correct:0,
    　Incorrect:0
    },
    {
    　Number: "004",
    　quiz: "昭和の米騒動",
    　Year: "1918",
    　Memorymethods: "遠く富山(1918)で米騒動",
    　About:"◎た",
    　QuizTaken:0,
    　correct:0,
    　Incorrect:0
    },
]


 //テスト開始ボタンを押すとテストをランダムに出題する
 const  randomIndex = Math.floor( Math.random() * allQuestions.length );

 document.getElementById("startButton").addEventListener('click', function() {
  
    // console.log( random );
    // const questionElement = allQestions[randomIndex];

    const questionText = allQuestions[randomIndex].quiz + "は何年でしょうか？（西暦でお答えください)"
    //const userAnswer = question.question;
    // alllQuestions++;
    // クラス名 'question' を持つ要素にテキストを設定
    document.querySelector('.question').innerText = questionText;

  });

  document.getElementById("answerButton").addEventListener('click', function() {
    const userAnswer = document.getElementById("answernum").value//IPデータからの取得はvalueらしい
    let answerText = ""
    if (userAnswer === allQuestions[randomIndex].Year) {
        // correctAnswers++;
      answerText = "正解です！";
      allQuestions[randomIndex].correct = allQuestions[randomIndex].correct +1;
    } else {
      answerText = "不正解です!";
      allQuestions[randomIndex].Incorrect = allQuestions[randomIndex].Incorrect + 1;
    }

  //クイズ回数をカウント
    allQuestions[randomIndex].QuizTaken = allQuestions[randomIndex].QuizTaken + 1;

    document.querySelector(".answerNum").innerText = answerText;

    document.querySelector(".correctYear").innerText = allQuestions[randomIndex].Year + "年"
    document.querySelector(".correctMemory").innerText = "覚え方 : " + allQuestions[randomIndex].Memorymethods
    document.querySelector(".Taken").innerText = "クイズ回数 : " + allQuestions[randomIndex].QuizTaken
    document.querySelector(".correct").innerText = "正解数 : " + allQuestions[randomIndex].correct
    document.querySelector(".incorrect").innerText = "不正解数 : " + allQuestions[randomIndex].Incorrect
    document.querySelector(".per").innerText = "正答率 : " + (allQuestions[randomIndex].correct/allQuestions[randomIndex].QuizTaken * 100) + "%"

    
    // // 現在の内容をクリア
    // gatorContainer.innerHTML = '';
  })
