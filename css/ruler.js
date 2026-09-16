/* ============================================================
   RULER GENERATOR
   ============================================================
   Fills any <ol class="ruler"> element with tick <li>s sized to
   its own width, so you never hand-author repeated <li> tags.

   Usage:
     <ol class="ruler" data-tick-w="24" data-major-every="5" data-mm-per-tick="10"></ol>
     <script src="ruler.js"></script>

   Attributes (all optional, shown with their defaults):
     data-tick-w        px width of one minor tick   (default 24)
     data-major-every   how many ticks per major mark (default 5)
     data-mm-per-tick   mm value each tick represents (default 10)
   ============================================================ */
(function () {
  function buildRuler(el) {
    var tickW      = parseFloat(el.dataset.tickW) || 24;
    var majorEvery = parseInt(el.dataset.majorEvery, 10) || 5;
    var mmPerTick  = parseFloat(el.dataset.mmPerTick) || 10;

    function render() {
      var width = el.clientWidth || el.parentElement.clientWidth || 0;
      var count = Math.ceil(width / tickW) + 1;

      var frag = document.createDocumentFragment();
      for (var i = 0; i < count; i++) {
        var li = document.createElement('li');
        li.style.setProperty('--tick-w', tickW + 'px');
        if (i % majorEvery === 0) {
          li.classList.add('major');
          li.dataset.mm = i * mmPerTick;
        }
        frag.appendChild(li);
      }
      el.innerHTML = '';
      el.appendChild(frag);
    }

    render();

    // Re-render on resize so the ruler always fills its container
    // without leaving a short last tick or overflowing.
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(render, 120);
    });
  }

  function init() {
    document.querySelectorAll('ol.ruler').forEach(buildRuler);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
