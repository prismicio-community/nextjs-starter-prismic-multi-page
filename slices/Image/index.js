import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <Bounded
      as="section"
      className={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
    >
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
    </Bounded>
  );
};

export default Image;
