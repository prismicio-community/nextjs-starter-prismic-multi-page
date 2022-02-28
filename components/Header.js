import React from 'react'
import { PrismicText } from '@prismicio/react'
import { SliceZone } from '@prismicio/react'

import Links from './Links'
import * as Slices from 'slices'

const Header = ({ menu = [], doc }) => (
  <header className="site-header">
    <a href="/" className="logo">
      <PrismicText field={menu.data?.title} />
    </a>
    <Links menuLinks={menu.data?.menu_links} />
    <SliceZone
      slices={doc.data.slices1}
      components={{
        faq_slice: Slices.FaqSlice,
      }}
    />
  </header>
)

export default Header
