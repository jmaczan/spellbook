import React, { HTMLAttributeAnchorTarget, FC } from 'react';

interface ExternalLinkProps {
  url: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  className?: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({
  url,
  target = '_blank',
  rel = 'noreferrer noopener',
  children,
  className,
}) => (
  <a href={url} target={target} rel={rel} className={className}>
    {children}
  </a>
);
