import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

type TextWithImageProps = SliceComponentProps<Content.TextWithImageSlice>;

const TextWithImage: FC<TextWithImageProps> = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <PrismicRichText field={slice.primary.text} />
          {slice.variation === "withButton" && slice.primary.buttonLink ? (
            <PrismicNextLink
              field={slice.primary.buttonLink}
              className="font-semibold"
            >
              {slice.primary.buttonText || "Learn more"}
            </PrismicNextLink>
          ) : null}
        </div>
        <div>
          {isFilled.image(image) && (
            <div className="bg-gray-100">
              <PrismicNextImage
                field={image}
                sizes="100vw"
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
