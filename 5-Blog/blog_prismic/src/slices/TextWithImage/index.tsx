import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";


export type TextWithSliceProps =
  SliceComponentProps<Content.TextWithSliceSlice>;


  const components: JSXMapSerializer = {
    heading2: ({ children }) => (
      <Heading as="h2" size="md" className="">
        {children}
      </Heading>
    ),
    paragraph: ({ children }) => (
      <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
    ),
  };
const TextWithSlice = ({ slice }: TextWithSliceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-10 md:flex md:justify-center place-items-center border bg-emerald-50 shadow-lg rounded-xl px-8 md:px-0 py-10 ">
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            "rounded-lg",
            slice.variation === "imageRight" && "md:order-2"
          )}
        />

        <div className="grid gap-4">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithSlice;
