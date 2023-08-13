import React from 'react';
import { ExternalLink } from '../external-link/external-link';
import './pricing.scss';

export const Pricing = () => (
  <section className='pricing'>
    <div>✨ Free for personal / non-commercial use</div>
    <div>🔮 To use it in a company / for commercial use, <ExternalLink url={process.env.REACT_APP_PAYMENT_URL || '#'}>pay $10 per year per user</ExternalLink></div>
  </section>
);
