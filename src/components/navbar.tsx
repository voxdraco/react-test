import React, { useState } from 'react';
import { Link } from 'gatsby';
import PortalModal from './portalModal';

interface ItemProps {
  url: string;
  text: string;
  name: string;
}

interface Props {
  items: ItemProps[];
}

const Navbar = ({ items }: Props) => (
  <nav className="navbar__container">
    {items.map(({ url, text, name }) => {
      return (
        <Link
          key={name}
          to={url}
          className="navbar__item"
          activeClassName="navbar__item--active"
          data-name={`navbar__${name}`}
          getProps={({ location, isPartiallyCurrent }) => {
            /**
             * This is hideous!
             *
             * The reason it's like this is a well documented issue with Gatsby
             * and reach router, to do with trailing slashes on URLs.
             *
             * Hopefully Gatsby will fix this, because it's horrible :(
             * */
            const className = 'navbar__item navbar__item--active' as const;
            const { pathname } = location;
            if (url === '/' && pathname === '/') return { className };
            else if (isPartiallyCurrent && url !== '/') return { className };
            else return null;
          }}
        >
          {text}
        </Link>
      );
    })}
    <PortalModal styleName="navbar__item" />
  </nav>
);

export default Navbar;
