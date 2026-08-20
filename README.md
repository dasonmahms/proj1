const form = document.getElementById('search-form');
const input = document.getElementById('account-input');
const realmSelect = document.getElementById('realm-select');
const searchBtn = document.getElementById('search-btn');
const statusEl = document.getElementById('status');
const resultsEl = document.getElementById('results');
const emptyStateEl = document.getElementById('empty-state');
const cardGrid = document.getElementById('card-grid');
const resultsAccount = document.getElementById('results-account');
const resultsCount = document.getElementById('results-count');
const cardTemplate = document.getElementById('card-template');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const account = input.value.trim();
  if (!account) return;
  const realm = realmSelect.value;
  await fetchCharacters(account, realm);
});

async function fetchCharacters(account, realm) {
  setLoading(true);
  showStatus(`Searching the ledger for ${account}…`, 'loading');
  resultsEl.hidden = true;
  emptyStateEl.hidden = true;

  try {
    const url = `/api/characters?account=${encodeURIComponent(account)}&realm=${encodeURIComponent(realm)}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Something went wrong.');
    }

    const characters = data.characters || [];

    if (characters.length === 0) {
      showStatus(`No public characters found for ${account}.`, 'error');
      return;
    }

    hideStatus();
    renderResults(account, characters);
  } catch (err) {
    showStatus(err.message || 'Failed to load characters. Please try again.', 'error');
  } finally {
    setLoading(false);
  }
}

function renderResults(account, characters) {
  // Sort by level descending so the most-progressed character leads.
  const sorted = [...characters].sort((a, b) => (b.level || 0) - (a.level || 0));

  resultsAccount.textContent = account;
  resultsCount.textContent = `${sorted.length} character${sorted.length === 1 ? '' : 's'}`;
  cardGrid.innerHTML = '';

  for (const char of sorted) {
    const node = cardTemplate.content.cloneNode(true);
    node.querySelector('[data-field="level"]').textContent = char.level ?? '?';
    node.querySelector('[data-field="name"]').textContent = char.name || 'Unnamed';
    node.querySelector('[data-field="class"]').textContent = char.class || 'Unknown class';

    const leagueEl = node.querySelector('[data-field="league"]');
    const league = char.league || 'Unknown league';
    leagueEl.textContent = league;
    if (/hardcore/i.test(league)) {
      leagueEl.classList.add('hardcore');
    } else if (/standard/i.test(league)) {
      leagueEl.classList.add('standard');
    }

    const xpEl = node.querySelector('[data-field="xp"]');
    xpEl.textContent = typeof char.experience === 'number'
      ? `${formatNumber(char.experience)} XP`
      : '';

    cardGrid.appendChild(node);
  }

  resultsEl.hidden = false;
}

function formatNumber(n) {
  return n.toLocaleString('en-US');
}

function showStatus(message, kind) {
  statusEl.textContent = message;
  statusEl.className = `status ${kind}`;
  statusEl.hidden = false;
}

function hideStatus() {
  statusEl.hidden = true;
}

function setLoading(isLoading) {
  searchBtn.disabled = isLoading;
  searchBtn.querySelector('.btn-label').textContent = isLoading ? 'Searching…' : 'Reveal';
}
