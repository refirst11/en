// Wallis

const isCurrentLink = (href: string, currentPath: string): boolean => {
  if (href === '/') {
    return href === currentPath;
  }

  return currentPath.includes(href);
};

export default isCurrentLink;
