import { PrismicLink, PrismicText } from "@prismicio/react";

export const Header = ({ menu }) => (
  <header className="relative -mb-px border-b border-neutral-200 bg-white px-6 py-4">
    <div className="mx-auto flex max-w-5xl items-baseline md:items-center">
      <PrismicLink href="/" className="relative -m-4 p-4 text-xl font-black">
        <PrismicText field={menu.data?.title} />
      </PrismicLink>
      <nav className="flex-grow">
        <ul className="-ml-5 -mt-5 flex justify-end">
          {menu.data?.menuLinks.map((menuLink) => (
            <li key={menuLink.label} className="pt-5 pl-5">
              <PrismicLink field={menuLink.link} className="text-neutral-500">
                <PrismicText field={menuLink.label} />
              </PrismicLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
