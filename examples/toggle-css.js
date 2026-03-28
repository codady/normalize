(function () {
  function initCssToggle(options = {}) {
    const {
      cssId = 'normalax-css',
      cssHref = '../src/normalax.css',
      buttonTextOn = '✅ 已加载 normalax.css',
      buttonTextOff = '❌ 已移除 normalax.css'
    } = options;

    // 创建按钮
    const btn = document.createElement('button');
    btn.className = 'css-toggle';
    btn.textContent = buttonTextOn;

    // 按钮基础样式（避免依赖外部CSS）
    Object.assign(btn.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 9999,
      padding: '10px 14px',
      fontSize: '14px',
      border: 'none',
      borderRadius: '999px',
      cursor: 'pointer',
      background: '#111',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,.2)',
      transition: '.2s'
    });

    document.body.appendChild(btn);

    // 点击事件
    btn.addEventListener('click', () => {
      const link = document.getElementById(cssId);

      if (link) {
        link.remove();
        btn.textContent = buttonTextOff;
        btn.style.background = '#b91c1c';
      } else {
        const newLink = document.createElement('link');
        newLink.id = cssId;
        newLink.rel = 'stylesheet';
        newLink.href = cssHref;
        document.head.appendChild(newLink);

        btn.textContent = buttonTextOn;
        btn.style.background = '#111';
      }
    });
  }

  // 自动初始化（默认）
  document.addEventListener('DOMContentLoaded', () => {
    initCssToggle();
  });

  // 暴露给全局（可手动调用）
  window.initCssToggle = initCssToggle;
})();