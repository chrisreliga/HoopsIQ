export default function PlayerAnalysis({ analysis }) {
  return (
    <section>
      <h2>Deep Dive</h2>

      <h3>{analysis.headline}</h3>
      <p>Contract Rating: {analysis.contractRating}</p>
      <p>{analysis.summary}</p>
      <p>{analysis.deepDive}</p>
    </section>
  );
}
