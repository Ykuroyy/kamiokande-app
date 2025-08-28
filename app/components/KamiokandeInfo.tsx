export default function KamiokandeInfo() {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">
        カミオカンデ（1983-1995）
      </h2>

      <section className="bg-blue-800/30 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-yellow-200 mb-3">
          📍 基本情報
        </h3>
        <ul className="space-y-2">
          <li>• 場所：岐阜県神岡鉱山の地下1,000m</li>
          <li>• 大きさ：直径16m、高さ16m</li>
          <li>• 水の量：3,000トン（25mプール約3杯分）</li>
          <li>• 光センサー：1,000個</li>
        </ul>
      </section>

      <section className="bg-purple-800/30 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-yellow-200 mb-3">
          🔬 なぜ地下深く？
        </h3>
        <p className="mb-2">
          地上では宇宙線という邪魔な粒子がたくさん飛び交っています。
          地下1,000mまで潜ることで、これらをシャットアウト！
          ニュートリノだけを観測できるのです。
        </p>
      </section>

      <section className="bg-green-800/30 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-yellow-200 mb-3">
          💡 どうやって観測？
        </h3>
        <div className="space-y-3">
          <p>
            ニュートリノは普通は何にも反応しませんが、
            ごくまれに水の中の粒子とぶつかると、
            「チェレンコフ光」という青白い光を発します。
          </p>
          <p className="bg-blue-600/30 p-3 rounded">
            💫 チェレンコフ光は、粒子が水中で光より速く動くときに出る光。
            青く美しい輝きが特徴です！
          </p>
        </div>
      </section>

      <section className="bg-red-800/30 p-4 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-200 mb-3">
          🏆 偉大な成果
        </h3>
        <div className="space-y-3">
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-semibold">1987年：超新星爆発のニュートリノ観測</h4>
            <p className="text-sm mt-1">
              地球から16万光年離れた超新星爆発からのニュートリノ11個を検出。
              世界で初めて太陽系外からのニュートリノを観測しました！
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-semibold">2002年：小柴昌俊博士がノーベル物理学賞受賞</h4>
            <p className="text-sm mt-1">
              この歴史的な観測が評価され、日本人として4人目のノーベル物理学賞を受賞。
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-lg">
        <p className="text-center font-semibold">
          🚀 カミオカンデの成功により、さらに大きな「スーパーカミオカンデ」の建設が決定！
        </p>
      </div>
    </div>
  );
}