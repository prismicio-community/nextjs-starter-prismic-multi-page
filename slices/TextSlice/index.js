import { PrismicRichText } from "@prismicio/react";

const TextSlice = ({ slice }) => {
  return (
    <section className="bg-white px-6 py-12 md:py-16">
      <div
        className={`mx-auto max-w-5xl leading-relaxed ${
          slice.variation === "twoColumn" ? "columns-2" : ""
        }`}
      >
        <PrismicRichText
          field={slice.primary.text}
          components={{
            heading1: ({ children }) => (
              <h2 className="text-tight mb-5 text-4xl font-bold leading-snug last:mb-0 md:text-5xl">
                {children}
              </h2>
            ),
            heading2: ({ children }) => (
              <h2 className="text-tight mb-5 text-3xl font-bold leading-snug last:mb-0">
                {children}
              </h2>
            ),
            paragraph: ({ children }) => (
              <h2 className="mb-5 text-neutral-600 last:mb-0">{children}</h2>
            ),
            oList: ({ children }) => (
              <ol className="mb-5 pl-4 last:mb-0 md:pl-6">{children}</ol>
            ),
            oListItem: ({ children }) => (
              <li className="mb-4 list-decimal pl-1 last:mb-0 md:pl-2">
                {children}
              </li>
            ),
            list: ({ children }) => (
              <ul className="mb-5 pl-4 last:mb-0 md:pl-6">{children}</ul>
            ),
            listItem: ({ children }) => (
              <li className="mb-4 list-disc pl-1 last:mb-0 md:pl-2">
                {children}
              </li>
            ),
            strong: ({ children }) => (
              <strong className="font-bold">{children}</strong>
            ),
          }}
        />
      </div>
    </section>
  );
};

export default TextSlice;
