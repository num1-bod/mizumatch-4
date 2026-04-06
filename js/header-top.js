/**
 * サイドメニュー全体の開閉制御
 */
function toggleMenu() {
  const menu = document.getElementById('side-menu');
  const overlay = document.getElementById('menu-overlay');

  if (!menu || !overlay) return;

  // activeクラスの切り替え
  menu.classList.toggle('active');
  overlay.classList.toggle('active');

  // メニューが開いているときは背面のスクロールを禁止
  if (menu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
    // メニューを閉じる時にスマホのアコーディオン状態もリセットする
    resetAccordion();
  }
}

/**
 * スマホ用アコーディオンのリセット（すべて閉じる）
 */
function resetAccordion() {
  const openItems = document.querySelectorAll('.side-menu-sp li.is-open');
  openItems.forEach(item => {
    item.classList.remove('is-open');
  });
}

/**
 * スマホ版：排他的アコーディオン制御
 * ひとつを開くと他の開いている項目が閉じます
 */
document.addEventListener('DOMContentLoaded', () => {
  const accordionTriggers = document.querySelectorAll('.side-menu-sp .accordion-trigger');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      // スマホサイズ(767px以下)の時のみ動作させる
      if (window.innerWidth <= 767) {
        e.preventDefault(); // リンク動作をキャンセル
        
        const parentLi = this.parentElement;
        const wasOpen = parentLi.classList.contains('is-open');

        // 1. まず全ての項目の 'is-open' を外して閉じる
        resetAccordion();

        // 2. クリックされた項目が「元々閉じていた」場合のみ開く
        if (!wasOpen) {
          parentLi.classList.add('is-open');
        }
      }
    });
  });
});