/* ============================================================
   MIZUMATCH Footer Navigation Control
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.toggle-check');

  toggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
      if (this.checked) {
        // 他のチェックボックスをすべてオフにする
        toggles.forEach(other => {
          if (other !== this) {
            other.checked = false;
          }
        });
      }
    });
  });
});