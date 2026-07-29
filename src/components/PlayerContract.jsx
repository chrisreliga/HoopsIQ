export default function PlayerContract({ contract }) {
  return (
    <section className="contract-section">
      <h2>Contract</h2>

      <p>Type of Deal: {contract.type}</p>
      <p>Salary: {contract.salary}</p>
      <p>Length: {contract.length} seasons</p>
      <p>
        Contract Term: {contract.startYear}-{contract.endYear}
      </p>
      <p>Total Value: {contract.totalValue}</p>
    </section>
  );
}
