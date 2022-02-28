import React from 'react'
import { PrismicText, PrismicLink } from '@prismicio/react'

const Links = ({ menuLinks }) => {
  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <PrismicLink field={menuLink.link}>
                <PrismicText field={menuLink.label} />
              </PrismicLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  return null
}

export default Links
