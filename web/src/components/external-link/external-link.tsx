import React, { HTMLAttributeAnchorTarget, FC } from 'react';

interface ExternalLinkProps {
  url: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({
  url,
  target = '_blank',
  rel = 'noreferrer noopener',
  children,
}) => (
  <a href={url} target={target} rel={rel}>
    {children}
  </a>
);
