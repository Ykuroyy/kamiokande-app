"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question: "カミオカンデはどこの地下にありますか？",
    options: ["富士山", "岐阜県神岡町", "東京", "大阪"],
    correct: 1,
    explanation: "カミオカンデは岐阜県神岡町の鉱山の地下1,000mにあります。地下深くにあることで、宇宙線などのノイズを遮断できます。"
  },
  {
    question: "ニュートリノを観測する時に発生する光の名前は？",
    options: ["レーザー光", "チェレンコフ光", "蛍光", "太陽光"],
    correct: 1,
    explanation: "チェレンコフ光は、粒子が水中で光より速く動くときに発生する青白い光です。この光を検出することでニュートリノを観測します。"
  },
  {
    question: "スーパーカミオカンデに入っている水の量は？",
    options: ["500トン", "5,000トン", "5万トン", "50万トン"],
    correct: 2,
    explanation: "スーパーカミオカンデには5万トンの超純水が入っています。これはオリンピックプール約20杯分に相当します。"
  },
  {
    question: "カミオカンデ関連でノーベル物理学賞を受賞した日本人は何人？",
    options: ["1人", "2人", "3人", "4人"],
    correct: 1,
    explanation: "小柴昌俊博士（2002年）と梶田隆章博士（2015年）の2人がカミオカンデ関連の研究でノーベル物理学賞を受賞しました。"
  },
  {
    question: "ハイパーカミオカンデの稼働開始予定は？",
    options: ["2025年", "2027年", "2030年", "2035年"],
    correct: 1,
    explanation: "ハイパーカミオカンデは2027年の稼働開始を目指して建設が進められています。スーパーカミオカンデの約5倍の大きさになる予定です。"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setAnswers(new Array(questions.length).fill(null));
  };

  if (quizComplete) {
    return (
      <div className="text-white space-y-6">
        <h2 className="text-3xl font-bold text-yellow-300 mb-6 text-center">
          クイズ完了！
        </h2>
        
        <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-6 rounded-lg text-center">
          <p className="text-5xl font-bold mb-4">
            {score} / {questions.length}
          </p>
          <p className="text-2xl mb-4">
            {score === questions.length ? "🏆 完璧です！" : 
             score >= 3 ? "👏 よくできました！" : 
             "📚 もう一度チャレンジ！"}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-200">答え合わせ</h3>
          {questions.map((q, idx) => (
            <div key={idx} className="bg-blue-800/30 p-4 rounded-lg">
              <p className="font-semibold mb-2">
                問題{idx + 1}: {q.question}
              </p>
              <p className={answers[idx] === q.correct ? "text-green-400" : "text-red-400"}>
                あなたの答え: {answers[idx] !== null ? q.options[answers[idx]] : "未回答"}
              </p>
              {answers[idx] !== q.correct && (
                <p className="text-yellow-300">
                  正解: {q.options[q.correct]}
                </p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={resetQuiz}
          className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all"
        >
          もう一度挑戦する
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">
        カミオカンデクイズ
      </h2>

      <div className="bg-blue-800/30 p-4 rounded-lg mb-4">
        <div className="flex justify-between mb-4">
          <span className="text-yellow-200">
            問題 {currentQuestion + 1} / {questions.length}
          </span>
          <span className="text-green-400">
            スコア: {score}
          </span>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h3 className="text-xl font-semibold mb-6">
          {q.question}
        </h3>

        <div className="space-y-3">
          {q.options.map((option, idx) => {
            const isCorrect = idx === q.correct;
            const isSelected = idx === selectedAnswer;
            
            return (
              <button
                key={idx}
                onClick={() => !showResult && handleAnswer(idx)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  showResult
                    ? isCorrect
                      ? "bg-green-600"
                      : isSelected
                      ? "bg-red-600"
                      : "bg-gray-700"
                    : "bg-blue-700 hover:bg-blue-600 cursor-pointer"
                } ${showResult ? "cursor-not-allowed" : ""}`}
              >
                {option}
                {showResult && isCorrect && " ✓"}
                {showResult && isSelected && !isCorrect && " ✗"}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-6 p-4 bg-purple-800/30 rounded-lg">
            <p className="text-yellow-200 font-semibold mb-2">
              {selectedAnswer === q.correct ? "正解！" : "残念..."}
            </p>
            <p className="text-sm">
              {q.explanation}
            </p>
          </div>
        )}

        {showResult && (
          <button
            onClick={nextQuestion}
            className="w-full mt-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all"
          >
            {currentQuestion < questions.length - 1 ? "次の問題へ" : "結果を見る"}
          </button>
        )}
      </div>
    </div>
  );
}