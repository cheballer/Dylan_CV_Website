const ITEMS = [
  'SQL', 'Python', 'Data Engineering', 'ETL Pipelines',
  'MongoDB', 'SQL Server', 'React', 'Power Automate',
  'Machine Learning', 'RAG Systems', 'Vector Databases',
  'Data Validation', 'Data Analysis', 'System Analysis',
];

export default function Ticker() {
  // Duplicate for seamless infinite scroll
  const all = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {all.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
