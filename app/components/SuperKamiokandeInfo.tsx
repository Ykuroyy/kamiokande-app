export default function SuperKamiokandeInfo() {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">
        スーパーカミオカンデ（1996-現在）
      </h2>

      <section className="bg-blue-800/30 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-yellow-200 mb-3">
          📍 スケールアップした巨大装置
        </h3>
        <ul className="space-y-2">
          <li>• 場所：同じく神岡鉱山の地下1,000m</li>
          <li>• 大きさ：直径39m、高さ42m（15階建てビル相当！）</li>
          <li>• 水の量：5万トン（カミオカンデの約17倍！）</li>
          <li>• 光センサー：11,146個（直径50cmの巨大センサー）</li>
        </ul>
        <p className="mt-3 text-yellow-200">
          🏊 オリンピックプール約20杯分の超純水が入っています！
        </p>
      </section>

      <section className="bg-purple-800/30 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-yellow-200 mb-3">
          💎 超純水の秘密
        </h3>
        <div className="space-y-3">
          <p>
            スーパーカミオカンデの水は、普通の水とは全く違います。
            不純物をほぼ完全に取り除いた「超純水」を使用。
          </p>
          <div className="bg-blue-600/30 p-3 rounded">
            <p className="font-semibold mb-2">どれくらいきれい？</p>
            <p>• 透明度：約100m（普通のプールは数m）</p>
            <p>• きれいすぎて、魚は生きられません</p>
            <p>• 光の検出効率を最大限に高めます</p>
          </div>
        </div>
      </section>

      <section className="bg-green-800/30 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-yellow-200 mb-3">
          🔍 驚異的な観測能力
        </h3>
        <div className="space-y-3">
          <p>
            1日に約30個のニュートリノイベントを観測（カミオカンデの約10倍）
          </p>
          <p>
            太陽からのニュートリノを1日約15個検出できるほどの高感度！
          </p>
          <div className="border-l-4 border-green-400 pl-4 mt-3">
            <p className="font-semibold">リアルタイム観測</p>
            <p className="text-sm mt-1">
              ニュートリノが水とぶつかった瞬間の光のパターンから、
              どの方向から来たか、エネルギーはどれくらいかを瞬時に計算！
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red-800/30 p-4 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-200 mb-3">
          🏆 画期的な発見
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-semibold">1998年：ニュートリノ振動の発見</h4>
            <p className="text-sm mt-1">
              ニュートリノに質量があることを証明！
              それまで質量ゼロと考えられていた常識を覆しました。
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-semibold">2015年：梶田隆章博士がノーベル物理学賞受賞</h4>
            <p className="text-sm mt-1">
              ニュートリノ振動の発見により、東京大学宇宙線研究所の梶田博士が受賞。
              師匠の小柴博士に続く快挙！
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-semibold">現在も続く観測</h4>
            <p className="text-sm mt-1">
              • 超新星爆発の早期警報システム<br/>
              • 暗黒物質の探索<br/>
              • 陽子崩壊の探索（宇宙の終わりの謎に挑戦）
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6 p-4 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-lg">
        <p className="text-center font-semibold">
          🌟 スーパーカミオカンデは今も24時間365日、宇宙の謎に挑み続けています！
        </p>
      </div>
    </div>
  );
}