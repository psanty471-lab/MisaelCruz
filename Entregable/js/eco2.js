(function () {
  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');
  const cards = document.querySelectorAll('.product-card');

  function applyFilters() {
    const q = (searchInput?.value || '').toLowerCase();
    const cat = filterSelect?.value || 'all';
    cards.forEach(card => {
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      const category = card.getAttribute('data-category') || 'all';
      const matchQ = !q || name.includes(q);
      const matchCat = cat === 'all' || cat === category;
      card.parentElement.style.display = (matchQ && matchCat) ? '' : 'none';
    });
  }

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (filterSelect) filterSelect.addEventListener('change', applyFilters);
})();
