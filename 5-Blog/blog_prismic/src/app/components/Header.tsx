import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";

export default async function Header(){
    const client = createClient();
    const settings = await client.getSingle("settings");



return (
    <Bounded as="header"className="py-4 md:py-6 lg:py-8">
    <div className="flex gap-4 item-center justify-between sm:flex-row flex-col ">
    <Link href="/">{settings.data.site_title}</Link>

    <nav>
        <ul className="flex">
            {settings.data.navigation.map(({navigation_link,label}) => (
                <li key={label}>
                    <PrismicNextLink field={navigation_link} className="p-3">{label}</PrismicNextLink>

                </li>
            ))}


        </ul>
    </nav>
    </div>
    </Bounded>

)


}