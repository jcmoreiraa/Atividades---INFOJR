import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";


const components: JSXMapSerializer = {
  heading1: ({children}) => (
    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight font-display text-slate-700">
      {children}
    </h1>),

  paragraph: ({children}) => (
    <p  className="text-2xl text-center font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>)
}
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded>
        <div className="grid grid-cols-1 place-items-center text-center">
          <PrismicRichText field={slice.primary.heading} components={components}/>

          <PrismicRichText field={slice.primary.body} components={components}/>

          <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
            {slice.primary.button_text}
          </Button>
          
          <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-4xl w-full"/>
        </div>
      </Bounded>
    </section>
    
  );
};

export default Hero;
