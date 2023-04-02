const layoutAdjuster = () => {
  if (typeof window !== 'undefined') {
    const contentElement = document.querySelector('main') as HTMLElement;
    if (contentElement) {
      const contentHeight = contentElement.offsetHeight;

      if (contentHeight > window.innerHeight) {
        contentElement.classList.add('layout_top_content');
        contentElement.classList.remove('layout_center_content');
      } else {
        contentElement.classList.add('layout_center_content');
        contentElement.classList.remove('layout_top_content');
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', layoutAdjuster);
  window.addEventListener('resize', layoutAdjuster);
}

export default layoutAdjuster;
