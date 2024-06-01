import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Children } from "react";
import Bounded from "@/app/components/Bounded";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";



const components: JSXMapSerializer = {
  heading1: ({children})=> (<Heading as='h1' 
  size='xl' className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0 mb:pl-10 max-w-7xl text-emerald-900 flex justify-center "  >
    {children}</Heading>),
 
 paragraph: ({children}) => (<p className="text-1xl font-normal leading-2 font-body text-slate-600 mb-4 md:mb-8"> {children}</p>),
 heading5: ({children})=> (<Heading as='h5' 
  size='md' className="md:mb-8 mb-4 mt-12 text-emerald-900 first:mt-0 last:mb-0"  >
    {children}</Heading>),


}

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'default' && (

<Bounded 
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}>
 <PrismicRichText field={slice.primary.heading} components={components} />

<div className="grid grid-cols-1 max-w-full md:place-items-center md:flex md:gap-10 md:justify-center">
  <div className="flex-col md:max-w-xl">
    <PrismicRichText field={slice.primary.subtitle} components={components} />
    <PrismicRichText field={slice.primary.body} components={components} />
  </div>
  <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-md w-full" />
</div>

<div className="flex md:justify-center mt-2 md:mt-0 max-w-8xl xl:ml-10">
  <PrismicRichText field={slice.primary.second_body} components={components} />
</div>

<div className="grid grid-cols-1 max-w-10xl place-items-center xl:flex gap-10 md:justify-center md:ml-10">
  <PrismicNextImage field={slice.primary.double_image} className="" />
  <PrismicNextImage field={slice.primary.triple_image} className="" />
</div>

<div className="flex md:justify-center max-w-full xl:ml-10 md:mt-10 mt-2">
  <PrismicRichText field={slice.primary.third_body} components={components} />
</div>

</Bounded>
  )}
  {slice.variation === 'horizontal' && (

    <Bounded 
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  
>      


<PrismicRichText  field={slice.primary.heading} components={components} />

  <div className="grid grid-cols-1 md:grid-cols-2 place-items-center max-w-full">
    <div className="order-2 md:order-1 grid grid-rows-[1fr,auto,auto] h-fit">
      <PrismicRichText field={slice.primary.subtitle} components={components}/>
      <PrismicRichText field={slice.primary.body} components={components} />
      <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
        {slice.primary.button_text}
      </Button>
    </div>
    <div className="order-1 md:order-2  max-w-4xl">
      <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl w-lg" />
    </div>
  </div>
    </Bounded>
      )}
    </>
  );
};

export default Hero;
