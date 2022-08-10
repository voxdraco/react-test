import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

interface TriangleBoxProps {
  headingText: string;
  descriptionText: string | React.ReactNode;
  linkUrl: string;
  linkText: string;
  name: string;
  isDoubleBox?: boolean;
}

interface Props {
  boxes: TriangleBoxProps[];
  noMargin?: boolean;
}

export const TriangleBox = ({
  headingText,
  descriptionText,
  linkUrl,
  linkText,
  name,
  isDoubleBox,
}: TriangleBoxProps) => {
  const isExternalUrl = linkUrl.match('https://|mailto|static');

  const LinkComponent = isExternalUrl
    ? ({ children }) => (
        <OutboundLink
          href={linkUrl}
          aria-label={name}
          data-name={`${name}--trianglebox`}
        >
          {children}
        </OutboundLink>
      )
    : ({ children }) => (
        <Link to={linkUrl} data-name={`${name}--trianglebox`}>
          {children}
        </Link>
      );

  return (
    <div className={isDoubleBox ? 'col-sm-6 col-xs-12' : 'col-sm-4 col-xs-12'}>
      <div className="trianglebox__container" tabIndex={0}>
        <LinkComponent>
          <div>
            <h2 className="trianglebox__heading">{headingText}</h2>
            {typeof descriptionText === 'string' ? (
              <p tabIndex={0}>{descriptionText}</p>
            ) : (
              descriptionText
            )}
          </div>
          <span className="linkbutton__element" tabIndex={0}>
            {linkText}
          </span>
        </LinkComponent>
      </div>
    </div>
  );
};

const TriangleBoxes = ({ boxes, noMargin = false }: Props) => {
  return (
    <div className={`row trianglebox__wrapper ${noMargin ? 'no-margin' : ''}`}>
      {boxes.map(props => (
        <TriangleBox key={props.name} {...props} />
      ))}
    </div>
  );
};

export default TriangleBoxes;
