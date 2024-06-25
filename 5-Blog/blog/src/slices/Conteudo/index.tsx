import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";


const components: JSXMapSerializer = {
  heading2: ({children}) => (
    <Heading as="h2" size="sm" className="font-semibold text-center mb-8">
      {children}
    </Heading>),

  paragraph: ({children}) => (
    <p  className="text-center text-slate-600 mb-8">
      {children}
    </p>)
}
/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-fuchsia-100 to-purple-100">
        <PrismicRichText components={components} field={slice.primary.heading} />
        <PrismicRichText components={components} field={slice.primary.body} />
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </Bounded>
  );
};

export default CallToAction;
