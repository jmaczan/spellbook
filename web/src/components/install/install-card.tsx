import React from 'react';
import './install-card.scss';

interface InstallCardProps {
  icon: string;
  title: string;
  children?: React.ReactNode;
}

export const InstallCard = ({ icon, title, children }: InstallCardProps) => (
  <div className='install-card'>
    <div className='install-card__icon-container'>
      <span className='install-card__icon'>{icon}</span>
    </div>
    <div className='install-card__title'>{title}</div>
    {children}
  </div>
);
