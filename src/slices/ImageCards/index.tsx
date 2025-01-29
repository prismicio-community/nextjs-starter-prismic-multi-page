import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicText, type SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { PrismicRichText } from "@/components/PrismicRichText";

type ImageCardProps = {
  card: Content.ImageCardsSliceDefaultPrimaryCardsItem;
};

const ImageCard: FC<ImageCardProps> = ({ card }) => {
  const image = card.image;

  return (
    <li className="grid gap-8">
      {isFilled.image(image) && (
        <div className="bg-gray-100">
          <ConditionalWrap
            condition={isFilled.link(card.buttonLink)}
            wrap={({ children }) => (
              <PrismicNextLink field={card.buttonLink} tabIndex={-1}>
                {children}
              </PrismicNextLink>
            )}
          >
            <PrismicNextImage field={image} sizes="100vw" className="w-full" />
          </ConditionalWrap>
        </div>
      )}
      <div className="leading-relaxed">
        <PrismicRichText field={card.text} />
      </div>
      {isFilled.link(card.buttonLink) && (
        <div>
          <PrismicNextLink field={card.buttonLink} className="font-semibold">
            {card.buttonText || "More Info"}
          </PrismicNextLink>
        </div>
      )}
    </li>
  );
};

type ImageCardsProps = SliceComponentProps<Content.ImageCardsSlice>;

const ImageCards = ({ slice }: ImageCardsProps) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          {slice.primary.cards.map((card) => (
            <ImageCard key={card.image.url} card={card} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ImageCards;
