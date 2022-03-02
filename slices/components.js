import dynamic from "next/dynamic";

export const components = {
  banner_slice: dynamic(() => import("./BannerSlice")),
  featured_image: dynamic(() => import("./FeaturedImage")),
  full_width_image: dynamic(() => import("./FullWidthImage")),
  image_gallery: dynamic(() => import("./ImageGallery")),
  quote_slice: dynamic(() => import("./QuoteSlice")),
  text_slice: dynamic(() => import("./TextSlice")),
};
