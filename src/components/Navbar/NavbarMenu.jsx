import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { castles } from "@/api/Products"


const NavbarMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Information</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-148 grid grid-cols-2">
              <ListItem href="/risk-assessments" title="Risk Assessment">
                Learn about safety and risk management for our inflatables.
              </ListItem>
              <ListItem href="/terms-and-conditions" title="Terms & Conditions">
                Review our rental terms and conditions for a smooth experience.
              </ListItem>
              <ListItem href="/gallery" title="Gallery">
                Browse photos of our bouncy castles in action at various events.
              </ListItem>
              <ListItem href="/payments" title="Payments">
                Explore our payment options and policies for hassle-free rentals.
              </ListItem>
              <ListItem href="/bad-weather-policy" title="Weather">
                Understand our weather policy for outdoor rentals.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Inflatables</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {castles.map((castle) => (
                <ListItem
                  key={castle.name}
                  title={castle.name}
                  href={`/bouncy-castle/${castle.slug}`}
                >
                  {castle.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/contact">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = ({ title, href, children }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
}


export default NavbarMenu;