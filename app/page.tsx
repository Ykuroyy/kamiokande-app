"use client";

import { useState } from "react";
import KamiokandeInfo from "./components/KamiokandeInfo";
import SuperKamiokandeInfo from "./components/SuperKamiokandeInfo";
import HyperKamiokandeInfo from "./components/HyperKamiokandeInfo";
import Quiz from "./components/Quiz";

export default function Home() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-4 animate-pulse">
          カミオカンデ探検
        </h1>
        <p className="text-white text-lg md:text-xl">
          地下深くから宇宙の謎に挑む、日本が誇る巨大観測装置
        </p>
      </header>

      <nav className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { id: "intro", label: "はじめに" },
          { id: "kamiokande", label: "カミオカンデ" },
          { id: "super", label: "スーパーカミオカンデ" },
          { id: "hyper", label: "ハイパーカミオカンデ" },
          { id: "quiz", label: "クイズ" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-yellow-400 text-black shadow-lg transform scale-105"
                : "bg-blue-700 text-white hover:bg-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl">
        {activeTab === "intro" && (
          <div className="text-white space-y-6">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">
              ようこそ！カミオカンデの世界へ
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                🌌 カミオカンデは、岐阜県神岡町の地下深くにある、
                宇宙から飛んでくる「ニュートリノ」という
                目に見えない粒子を観測する巨大な装置です。
              </p>
              <p>
                💫 ニュートリノって何？と思うかもしれません。
                ニュートリノは、太陽や宇宙から常に地球に降り注いでいる、
                とても小さな粒子です。毎秒数百兆個もあなたの体を通り抜けています！
              </p>
              <p>
                🏆 この研究で、小柴昌俊博士と梶田隆章博士が
                ノーベル物理学賞を受賞しました。
              </p>
              <p className="text-yellow-200 font-semibold">
                上のタブをクリックして、カミオカンデの驚くべき世界を探検しましょう！
              </p>
            </div>
          </div>
        )}

        {activeTab === "kamiokande" && <KamiokandeInfo />}
        {activeTab === "super" && <SuperKamiokandeInfo />}
        {activeTab === "hyper" && <HyperKamiokandeInfo />}
        {activeTab === "quiz" && <Quiz />}
      </div>
    </main>
  );
}