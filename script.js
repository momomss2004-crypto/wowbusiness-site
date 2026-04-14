
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.endsWith('.html') || href.includes('.html#')) {
      a.addEventListener('click', e => {
        if (e.metaKey || e.ctrlKey || a.target === '_blank') return;
        document.body.classList.add('page-leaving');
      });
    }
  });

  const items = document.querySelectorAll('.fade-on-scroll');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, {threshold:0.1});
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('visible'));
  }
});
