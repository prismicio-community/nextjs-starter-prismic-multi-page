import React from "react";
import { RichText, Link } from 'prismic-reactjs'

const Header = ({ menu = [] }) => (
    <header className="site-header">
      <a href="/" className="logo">
        {RichText.asText(menu.data.title)}
      </a>
      <Links menuLinks={menu.data.menu_links} />
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
            padding-left: 20px;
            padding-right: 20px;
          }
        }
        @media (max-width: 767px) {
          .site-header {
            height: auto;
          }
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
);

const Links = ({menuLinks}) => {
  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <a href={Link.url(menuLink.link)}>
                {RichText.asText(menuLink.label)}
              </a>
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
            color: #72767B;
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

export default Header;
