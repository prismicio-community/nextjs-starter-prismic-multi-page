import Image from "next/image";

const FullWidthImage = ({ slice }) => (
  <section className="bg-white py-12 md:py-16">
    <div className="mx-auto max-w-5xl">
      <Image
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
        width={slice.primary.image.dimensions.width}
        height={slice.primary.image.dimensions.height}
        layout="responsive"
      />
    </div>
  </section>
);

export default FullWidthImage;
