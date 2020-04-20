const iconH = document.querySelector('#icon-hamburger');
const close = document.getElementById('close');
const nav = document.querySelector('.nav-list');
iconH.addEventListener('click', () => {
  nav.classList.add('active');
  iconH.style.display = 'none';
});

close.addEventListener('click', () => {
  nav.classList.remove('active');
  iconH.style.display = 'block';
});
/* tabs */
(function (d) {
  const tabs = Array.prototype.slice.apply(d.querySelectorAll('.tab'));
  const panels = Array.prototype.slice.apply(d.querySelectorAll('.tab-panel'));
  panels[0].classList.add('active');
  d.getElementById('tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('tab')) {
      let i = tabs.indexOf(e.target);
      tabs.map((tab) => tab.classList.remove('active'));
      tabs[i].classList.add('active');
      panels.map((panel) => panel.classList.remove('active'));
      panels[i].classList.add('active');
    }
  });
})(document);
