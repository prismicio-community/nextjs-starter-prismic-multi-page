import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div>
          {prismicH.isFilled.image(image) && (
            <div className="bg-gray-100">
              <NextImage
                src={prismicH.asImageSrc(image, {
                  w: undefined,
                  h: undefined,
                })}
                alt={image.alt}
                width={image.dimensions.width}
                height={image.dimensions.height}
                layout="responsive"
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
