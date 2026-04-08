const SKILL_WORDS = [
  { word: 'SQL',               size: 'sz-xl', color: 'skill-sun'   },
  { word: 'DATA',              size: 'sz-xl', color: 'skill-white' },
  { word: 'ENGINEERING',       size: 'sz-xl', color: 'skill-dim'   },
  { word: 'PYTHON',            size: 'sz-lg', color: 'skill-fire'  },
  { word: 'ETL',               size: 'sz-lg', color: 'skill-white' },
  { word: 'PIPELINES',         size: 'sz-lg', color: 'skill-sun'   },
  { word: 'C#',                size: 'sz-xl', color: 'skill-dim'   },
  { word: 'JAVA',              size: 'sz-md', color: 'skill-white' },
  { word: 'JAVASCRIPT',        size: 'sz-md', color: 'skill-sun'   },
  { word: 'MONGODB',           size: 'sz-lg', color: 'skill-fire'  },
  { word: 'SQL SERVER',        size: 'sz-lg', color: 'skill-dim'   },
  { word: 'VECTOR DB',         size: 'sz-sm', color: 'skill-white' },
  { word: 'REACT',             size: 'sz-lg', color: 'skill-sun'   },
  { word: 'POWER AUTOMATE',    size: 'sz-md', color: 'skill-dim'   },
  { word: 'RAG SYSTEMS',       size: 'sz-md', color: 'skill-white' },
  { word: 'MACHINE LEARNING',  size: 'sz-sm', color: 'skill-fire'  },
  { word: 'DATA ANALYSIS',     size: 'sz-md', color: 'skill-dim'   },
  { word: 'DATA VALIDATION',   size: 'sz-sm', color: 'skill-sun'   },
  { word: 'GITHUB',            size: 'sz-xs', color: 'skill-dim'   },
  { word: 'AGILE',             size: 'sz-xs', color: 'skill-white' },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="skills-label">// 04 — Skills</p>
      <h2 className="skills-heading">
        What I<br />
        <span className="acc">work with.</span>
      </h2>
      <div className="skills-scatter">
        {SKILL_WORDS.map(({ word, size, color }) => (
          <span key={word} className={`skill-word ${size} ${color}`}>
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}
