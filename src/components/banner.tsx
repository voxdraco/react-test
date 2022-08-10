import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import useBannerImage from './bannerImageQuery';

interface Props {
  imageName: string;
  children: React.ReactNode;
}

const Banner = ({ children, imageName }: Props) => {
  const fluidImage = useBannerImage(imageName);

  return (
    <BackgroundImage
      className="banner__background"
      fluid={fluidImage}
      durationFadeIn={50}
    >
      <div className="banner__content">
        {children}
        <svg
          className="banner__triangle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 10,10, 0,10" strokeWidth="0" />
        </svg>
      </div>
    </BackgroundImage>
  );
};

export default Banner;
