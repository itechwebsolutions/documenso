import React from 'react';

import '../../styles/custom.css';

// Make sure the path is correct

export type LogoProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const Logo = (props: LogoProps) => {
  const imageUrl = getAssetUrl('/static/logo-tm.jpg');

  return <img src={imageUrl} {...props} alt="Logo" className="topLogo" />;
};

function getAssetUrl(path: string): string {
  const basePath = 'https://sign.tofes-mekovan.co.il/';
  return `${basePath}${path}`;
}
