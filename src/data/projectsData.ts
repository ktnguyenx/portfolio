export const profile = {
  name: "Lorraine (Khanh) Nguyen", 
  school: "Bryn Mawr College", 
  grad: "Class of 2028", 
  major: "Computer Science Major, Statistics Minor", 
  github: "https://github.com/ktnguyenx", 
  linkedin: "https://linkedin.com/in/ktnguyenx", 
  email: "khanhnta.work@gmail.com" 
};

export const projects = [
  {
    id: "algoart",
    title: "AlgoArt Creator Studio", 
    tech: ["HTML5 Canvas", "JavaScript", "Bootstrap"], 
    description: "Web-based creative coding suite featuring session history snapshots and a local storage auto-save engine to preserve active workspaces.", 
    metrics: "Achieved O(1) constant-time lookups for color mapping using pre-generated hex dictionaries and drastically reduced memory footprints with Uint8Array.", 
    link: "https://github.com/Algorithmically-Generated-Artwork/Drawing-Program"
  },
  {
    id: "resume-analyzer",
    title: "Automated Resume Keyword Analyzer",
    tech: ["Python", "Streamlit", "spaCy", "NLTK"], 
    description: "NLP document-parsing and concept-matching tool to build structured text parsing and fuzzy-matching pipelines.", 
    link: "https://github.com/ktnguyenx/resume-keyword-analyzer"
  },
  {
    id: "obsidian-plugin",
    title: "Obsidian Phrase Linker Plugin", 
    tech: ["TypeScript", "Node.js", "Obsidian API"], 
    description: "Developer tooling automating bi-directional relationship mapping across 500+ markdown files.", 
    metrics: "Optimized caching performance by approximately 30%.", 
    link: "https://github.com/ktnguyenx/obsidian-phrase-linker" 
  }
];