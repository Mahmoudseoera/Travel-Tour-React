"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { cn } from "../lib/utils"
import { Icons } from "./icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

export default function Navbar() {
  const [data, setData] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('https://www.wondertravelegypt.com/api/general')
        const result = await response.json()
        setData(result.data)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch data:', err)
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!data) return null

  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={data.header.logo} alt="Logo" className="h-8 w-auto" />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{data.header.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{data.header.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {data.header.headerCategories.map((category: any) => (
              <NavigationMenuItem key={category.id}>
                <NavigationMenuTrigger>{category.name.en}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {category.children.map((child: any) => (
                      <ListItem
                        key={child.id}
                        title={child.name.en}
                        href={`/${category.slug}/${child.slug}`}
                      >
                        {child.name.en}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

