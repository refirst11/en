const currentActive = (href: string, currentPath: string) => {
  if (href === '/') {
    return href === currentPath;
  }

  return currentPath.includes(href);
};

export default currentActive;
