import Image from "next/image";
import { ModeToggle } from "@/components/ui/toggleView";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

export default function Nav() {
return(
    <header>
            <ul className="flex items-center justify-between">
                <li>
                <a
                            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              className="dark:invert"
                              src="/vercel2.svg"
                              alt="Vercel logomark"
                              width={100}
                              height={20}
                            />
                          </a>
                </li>
                <li>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link2</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                </li>
                <li><ModeToggle /></li>
            </ul>    
    </header>
)
}