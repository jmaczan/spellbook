import React from 'react';
import { ExternalLink } from '../external-link/external-link';
import './license.scss';

export const License = () => (
  <section className='license'>
    <div>Each script has its own license.</div>
    <div>Make sure that you use scripts in line with licenses.</div>
    <div className='license__infrigement'>
      If you notice any license infrigement here, please{' '}
      <ExternalLink url='mailto:jedrzejpawel@maczan.pl'>contact me immediately</ExternalLink>
    </div>
  </section>
);
