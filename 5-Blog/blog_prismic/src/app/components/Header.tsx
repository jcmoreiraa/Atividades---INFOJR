import { createClient } from "@/prismicio"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";

export default async function Header(){
    const client = createClient();
    const settings = await client.getSingle("settings");



return (
    <Bounded as="header"className="py-4 md:py-6 lg:py-8 bg-emerald-800 drop-shadow-lg   " >
    <div className="flex gap-4 item-center justify-between sm:flex-row flex-col ">
    <Link className='text-white transform hover:scale-105 font-rubik text-4xl drop-shadow-lg italic' href="/">{settings.data.site_title}</Link>

    <nav>
        <ul className="flex">
            {settings.data.navigation.map(({navigation_link,label}) => (
                <li key={label}>
<PrismicNextLink field={navigation_link} className="p-3 text-white font-rubik text-4xl drop-shadow-lg transform hover:scale-105">{label}</PrismicNextLink>

                </li>
                
            ))}
                    <PrismicNextImage field={settings.data.og_image}/>



        </ul>
    </nav>
    </div>
    </Bounded>

)


}