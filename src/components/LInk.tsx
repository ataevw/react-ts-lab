import React from 'react';

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

const Link = ({ to, children }: LinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // предотвращаем перезагрузку.  
    window.history.pushState(null, '', to); // меняем URL
    window.dispatchEvent(new Event('popstate')); // уведомляем роутер
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;