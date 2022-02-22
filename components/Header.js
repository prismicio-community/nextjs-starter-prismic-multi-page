import React from 'react'
import { PrismicText, PrismicLink } from '@prismicio/react'

const Header = ({ menu = [] }) => (
  <header className="site-header">
    <a href="/" className="logo">
      <PrismicText field={menu.data?.title} />
    </a>
    <Links menuLinks={menu.data?.menu_links} />
    <style jsx>{`
        .site-header {
          height: 30px;
          padding: 20px 0;
          color: #484d52;
          font-weight: 700;
        }
        .site-header a {
          color: #484d52;
          font-weight: 700;
        }
        .site-header a:hover {
          color: #72767B;
        }
        .site-header .logo {
          display: inline-block;
          font-size: 22px;
          font-weight: 900;
        }
        @media (max-width: 1060px) {
          .site-header {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
        }
        @media (max-width: 767px) {
          .site-header {
            position: absolute;
            left: 0;
            right: 0;
          }
          .site-header .logo {
            display: block;
            text-align: center;
          }
        `}</style>
  </header>
)

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
        <style jsx>{`
          nav {
            float: right;
          }
          nav ul {
            margin: 0;
            padding-left: 0;
          }
          nav li {
            display: inline-block;
            margin-left: 40px;
          }
          nav li a {
            color: #484d52;
            font-weight: 700;
          }
          nav li a:hover {
            color: #72767b;
          }
          @media (max-width: 767px) {
            nav {
              float: none;
              text-align: center;
            }
            nav li {
              display: inline-block;
              margin-left: 10px;
              margin-right: 10px;
            }
          }
        `}</style>
      </nav>
    )
  }
  return null
}

export default Header
