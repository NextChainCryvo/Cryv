// ─── DROPDOWN NAVIGATION ───────────────────────────────────────────────────

let current = null;

const map = {
  sobre:    { drop: 'drop-sobre',    nav: 'ni-sobre' },
  produtos: { drop: 'drop-produtos', nav: 'ni-produtos' },
  cont:     { drop: 'drop-cont',     nav: 'ni-cont' },
  duvidas:  { drop: 'drop-duvidas',  nav: 'ni-duvidas' },
};

function toggleDrop(key) {
  if (current === key) {
    closeAll();
    return;
  }
  closeAll(false);
  current = key;
  document.getElementById(map[key].drop).classList.add('visible');
  document.getElementById(map[key].nav).classList.add('open');
  document.getElementById('overlay').classList.add('active');
}

function closeAll(reset = true) {
  Object.values(map).forEach(v => {
    document.getElementById(v.drop).classList.remove('visible');
    document.getElementById(v.nav).classList.remove('open');
  });
  document.getElementById('overlay').classList.remove('active');
  if (reset) current = null;
}

// ─── PRODUCTS FILTER ───────────────────────────────────────────────────────

function filterP(btn, cat) {
  document.querySelectorAll('.ptab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');

  document.querySelectorAll('.pcard').forEach(card => {
    const cats = card.dataset.c || '';
    card.style.display = (cat === 'all' || cats.includes(cat)) ? 'block' : 'none';
  });
}
