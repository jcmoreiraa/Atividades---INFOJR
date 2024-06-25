import { createClient } from "@/prismicio"; 
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";

export default async function Header() {

    const client = createClient();

    const settings = await client.getSingle("settings");


    return (
    <Bounded as="header" className="text-pink-900 py-4 md:py-6 lg:py-8">

    <div className="flex gap-4 items-center justify-between sm:flex-row flex col">
        <Link href="/">
            <PrismicNextImage field={settings.data.og_image} />
        </Link>

        <nav>
            <ul className="flex">
                {settings.data.navigation.map(({link, label}) => (
                    <li key={label}>
                        <PrismicNextLink field={link} className="p-3">
                            {label}
                        </PrismicNextLink>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    </Bounded>
    )
}