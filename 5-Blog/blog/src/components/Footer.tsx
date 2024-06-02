import { createClient } from "@/prismicio"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import Link from "next/link"
import Bounded from "@/components/Bounded"

export default async function Footer() {
    const client = createClient()

    const settings = await client.getSingle("settings")

    return (
        <Bounded as="footer" className="text-pink-900">
            <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
                <Link href="/">
                    <PrismicNextImage field={settings.data.og_image} />
                </Link>

                <p className="text-xs">
                    ©{new Date().getFullYear()} {settings.data.title}
                </p>

                <ul className="flex">
                    {settings.data.navigation.map(({link, label}) => (
                        <li key={label}>
                            <PrismicNextLink field={link} className="p-3">
                                {label}
                            </PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </div>
        </Bounded>
    )
}