:root {
  --bg: #0c0a09;
  --surface: #17130f;
  --surface-raised: #221c17;
  --border: #322a22;
  --rust: #b8452f;
  --rust-bright: #d65a3f;
  --gold: #c9a24b;
  --text: #ece4d6;
  --text-muted: #948577;
  --font-display: 'Cinzel', serif;
  --font-body: 'IBM Plex Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}

body {
  margin: 0;
  background: var(--bg);
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -10%, rgba(184, 69, 47, 0.16), transparent),
    radial-gradient(ellipse 60% 40% at 90% 10%, rgba(201, 162, 75, 0.06), transparent);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.5;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.embers {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    radial-gradient(1.5px 1.5px at 10% 20%, rgba(201,162,75,0.35), transparent),
    radial-gradient(1.5px 1.5px at 80% 60%, rgba(184,69,47,0.35), transparent),
    radial-gradient(1px 1px at 40% 80%, rgba(201,162,75,0.25), transparent),
    radial-gradient(1px 1px at 65% 15%, rgba(184,69,47,0.25), transparent),
    radial-gradient(1.5px 1.5px at 25% 55%, rgba(201,162,75,0.2), transparent);
  animation: drift 30s linear infinite;
}

@keyframes drift {
  from { background-position: 0 0, 0 0, 0 0, 0 0, 0 0; }
  to { background-position: 0 -400px, 0 -600px, 0 -300px, 0 -500px, 0 -350px; }
}

.hero {
  position: relative;
  z-index: 1;
  padding: 6rem 1.5rem 4rem;
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.hero-inner { max-width: 640px; margin: 0 auto; }

.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 1rem;
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2.4rem, 7vw, 4rem);
  letter-spacing: 0.04em;
  margin: 0;
  color: var(--text);
  text-shadow: 0 0 40px rgba(184, 69, 47, 0.35);
}

.wordmark span {
  display: block;
  font-weight: 500;
  font-size: 0.42em;
  letter-spacing: 0.5em;
  color: var(--rust-bright);
  margin-top: 0.3em;
}

.tagline {
  color: var(--text-muted);
  font-size: 1rem;
  max-width: 480px;
  margin: 1.5rem auto 2.5rem;
}

.search-form {
  display: flex;
  gap: 0.6rem;
  max-width: 520px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}

#account-input {
  flex: 1 1 260px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.85rem 1.1rem;
  font-family: var(--font-mono);
  font-size: 0.95rem;
  border-radius: 3px;
  outline: none;
  transition: border-color 0.15s ease;
}

#account-input::placeholder { color: var(--text-muted); }

#account-input:focus {
  border-color: var(--rust-bright);
}

#realm-select {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.85rem 0.8rem;
  font-family: var(--font-body);
  border-radius: 3px;
  outline: none;
}

#realm-select:focus { border-color: var(--rust-bright); }

#search-btn {
  background: linear-gradient(180deg, var(--rust-bright), var(--rust));
  color: #fff;
  border: none;
  padding: 0.85rem 1.6rem;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

#search-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(184,69,47,0.35); }
#search-btn:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
#search-btn:active { transform: translateY(0); }
#search-btn:disabled { opacity: 0.6; cursor: progress; transform: none; box-shadow: none; }

.hint {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 1.25rem 0 0;
}

.hint strong { color: var(--gold); font-weight: 600; }

main {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
}

.status {
  text-align: center;
  padding: 1.5rem;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.status.error {
  color: #f0a08e;
  background: rgba(184, 69, 47, 0.1);
  border: 1px solid rgba(184, 69, 47, 0.3);
}

.status.loading { color: var(--gold); }

.results-head {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1rem;
}

.results-head h2 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  margin: 0;
  color: var(--text);
}

.count-badge {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.char-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 1.25rem;
  position: relative;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.char-card:hover {
  border-color: var(--rust);
  transform: translateY(-2px);
}

.card-top {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1rem;
}

.seal {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--gold);
  background: radial-gradient(circle, rgba(201,162,75,0.12), transparent);
}

.card-titles h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--text);
}

.class-line {
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-top: 1px solid var(--border);
  padding-top: 0.75rem;
}

.league-badge {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  padding: 0.25rem 0.6rem;
  border-radius: 3px;
  background: rgba(184, 69, 47, 0.15);
  color: var(--rust-bright);
  border: 1px solid rgba(184, 69, 47, 0.3);
}

.league-badge.hardcore {
  background: rgba(200, 60, 60, 0.18);
  color: #ff8a7a;
  border-color: rgba(200,60,60,0.4);
}

.league-badge.standard {
  background: rgba(80, 120, 160, 0.15);
  color: #8fb8d9;
  border-color: rgba(80,120,160,0.3);
}

.xp-line {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.empty-state {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--text-muted);
}

.rune {
  font-size: 2rem;
  color: var(--gold);
  margin-bottom: 1rem;
  opacity: 0.7;
}

.site-footer {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem 1.5rem 3rem;
  color: var(--text-muted);
  font-size: 0.78rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 480px) {
  .search-form { flex-direction: column; }
  #search-btn { width: 100%; }
}
