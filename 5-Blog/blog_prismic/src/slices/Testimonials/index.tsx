import Heading from "@/app/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-9 text-emerald-800 font-semibold">
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading as="h6" size="md" className=" mb-9 font- text-emerald-800">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-md md:text-1xl font-normal font-body text-emerald-500 mb-8">
      {children}
    </p>
  ),
};

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;
const Testimonials = async ({slice,}: TestimonialProps): Promise<JSX.Element> => {
const client = createClient();
const testimonials = await Promise.all(
  slice.primary.testimonial_items.map((item)=>{
    if(
      isFilled.contentRelationship(item.testimonial) && item.testimonial.uid 
    )
    {
      return client.getByUID("testimonial", item.testimonial.uid)
    }

  })
)

/**
 * Component for "Testimonial" Slices.
 */
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components}field={slice.primary.heading} />
      <div className="grid lg:grid-cols-2 gird-cols 1 gap-8">
        {testimonials.map((item, index)=> item && (
          <div key='index' className="border bg-emerald-50 shadow-lg reunded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
            <PrismicRichText field={item.data.title} components={components}></PrismicRichText>
            <PrismicRichText field={item.data.quote} components={components} /> 
            
            <div className="flex items-center">
            <PrismicNextImage width={56} 
            height={56} 
            field={item.data.avatar}
             className="rounded-full mr-4 flex" 
             imgixParams={{ar:'1:1', fit:'crop'}}/>
             <div>
            <p className="text-base font-medium text-emerald-700"> {item.data.name}</p>
            <p className="text-base text-emerald-600">
                      {item.data.job_title}
            </p>
            </div>
            </div>
            </div>
        ))} 
      </div>
    </Bounded>
  );
};

export default Testimonials;
