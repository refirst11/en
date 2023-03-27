const layoutAdjuster = () => {
  if (typeof window !== 'undefined') {
    const contentElement = document.getElementsByClassName('pages_root')[0] as HTMLElement;
    if (contentElement) {
      const contentHeight = contentElement.offsetHeight;

      if (contentHeight > window.innerHeight) {
        contentElement.classList.add('layout_margin_top');
        contentElement.classList.remove('layout_center');
      } else {
        contentElement.classList.add('layout_center');
        contentElement.classList.remove('layout_margin_top');
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', layoutAdjuster);
  window.addEventListener('resize', layoutAdjuster);
}

export default layoutAdjuster;
