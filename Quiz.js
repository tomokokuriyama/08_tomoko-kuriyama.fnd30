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
    　About:"菅原道真によって廃止された",
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
    　About:"米の価格急騰に伴う暴動事件",
    　QuizTaken:0,
    　correct:0,
    　Incorrect:0
    },
    {
      　Number: "005",
      　quiz: "昭和の米騒動",
      　Year: "1549",
      　Memorymethods: "以後よく(1549)広まるキリスト教",
      　About:"スペイン人のザビエルが伝えた",
      　QuizTaken:0,
      　correct:0,
      　Incorrect:0
      },
      {
    　Number: "006",
    　quiz: "コロンブスのアメリカ大陸発見",
    　Year: "1492",
    　Memorymethods: "意欲に(1492)満ちたコロンブス",
    　About:"東方見聞録を読みジパング（日本）を目指した",
    　QuizTaken:0,
    　correct:0,
    　Incorrect:0
    },
      {
    　Number: "007",
    　quiz: "ベルリンの壁崩壊",
    　Year: "1989",
    　Memorymethods: "行くわ崩しに(1989)ベルリンの壁",
    　About:"これにより東西間の隔たりが解消され、冷戦締結につながった",
    　QuizTaken:0,
    　correct:0,
    　Incorrect:0
    },
    {
    　Number: "008",
    　quiz: "昭和の米騒動",
    　Year: "1918",
    　Memorymethods: "遠く富山(1918)で米騒動",
    　About:"米の価格急騰に伴う暴動事件",
    　QuizTaken:0,
    　correct:0,
    　Incorrect:0
    },

    {
    　Number: "009",
    　quiz: "本能寺の変",
    　Year: "1582",
    　Memorymethods: "一行(15)パニック(82)、本能寺",
    　About:"明智光秀の謀反により織田信長が自害",
    　QuizTaken:0,
    　correct:0,
    　Incorrect:0
      },
]

 let  randomIndex 
 document.getElementById("startButton").addEventListener('click', function() {
    randomIndex = Math.floor( Math.random() * allQuestions.length );

    document.getElementById("correctYear").innerText = '';//初期化
    document.getElementById("correctMemory").innerText = '';//初期化
    document.getElementById("Taken").innerText = '';//初期化
    document.getElementById("correct").innerText = '';//初期化
    document.getElementById("incorrect").innerText = '';//初期化
    document.getElementById("per").innerText = '';//初期化
    document.getElementById("ipNum").value = '';//初期化
    const questionText = allQuestions[randomIndex].quiz + "は何年でしょうか？（西暦でお答えください)"
    
    // クラス名 'question' を持つ要素にテキストを設定
    document.getElementById("question").innerText = questionText;

  });

  document.getElementById("answerButton").addEventListener('click', function() {
    const userAnswer = document.getElementById("ipNum").value//IPデータからの取得はvalueらしい
    let answerText = ""
    if (userAnswer === allQuestions[randomIndex].Year) {
      answerText = "正解です！";
      allQuestions[randomIndex].correct = allQuestions[randomIndex].correct +1;
    } else {
      answerText = "不正解です!";
      allQuestions[randomIndex].Incorrect = allQuestions[randomIndex].Incorrect + 1;
    }

    //クイズ回数をカウント
    allQuestions[randomIndex].QuizTaken = allQuestions[randomIndex].QuizTaken + 1;

    document.getElementById("rightOrWrong").innerText = answerText;

    document.getElementById("correctYear").innerText = allQuestions[randomIndex].Year + "年"
    document.getElementById("correctMemory").innerText  = "覚え方 : " + allQuestions[randomIndex].Memorymethods
    document.getElementById("Taken").innerText  = "クイズ回数 : " + allQuestions[randomIndex].QuizTaken
    document.getElementById("correct").innerText  = "正解数 : " + allQuestions[randomIndex].correct
    document.getElementById("incorrect").innerText  = "不正解数 : " + allQuestions[randomIndex].Incorrect
    document.getElementById("per").innerText  = "正答率 : " + (allQuestions[randomIndex].correct/allQuestions[randomIndex].QuizTaken * 100).toFixed(0) + "%"
    

  });
