import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";

export default async function Footer(){
    const client = createClient();
    const settings = await client.getSingle("settings");




return(
    <Bounded as= 'footer' className="bg-emerald-800">
         <div className="flex sm:flex-row flex-col justify-between items-center gap-6 ">
        
        <Link className=" text-white font-rubik text-4xl drop-shadow-lg transform hover:scale-105"href="/">{settings.data.site_title}</Link>
   
    <p className="text-xm  text-white font-rubik text-4xl drop-shadow-lg"> {new Date().getFullYear()  }</p>
    <ul className="flex">
            {settings.data.navigation.map(({navigation_link,label}) => (
                <li key={label}>
                    <PrismicNextLink field={navigation_link} className="p-3  text-white font-rubik text-4xl drop-shadow-lg">{label}</PrismicNextLink>

                </li>
            ))}


        </ul>
        </div>
    </Bounded>










)




}



