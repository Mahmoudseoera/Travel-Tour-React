"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Mail, Phone } from "lucide-react"
import { useGeneralData, apiService } from "@/lib/api/GeneralApi"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

export default function Navbar() {
  const { data, loading, error } = useGeneralData();

  if (loading) {
    return (
      <div className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-600">
            Error loading navigation: {error}
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={data.logo} alt="Logo" className="h-8 w-auto" />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{data.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{data.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {data.headerCategories.map((category) => (
              <NavigationMenuItem key={category.id}>
                <NavigationMenuTrigger>{category.name.en}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {category.children.map((child) => (
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

// ===================================
// Alternative: Using the service directly without custom hook
// ===================================

// If you prefer to use the service directly without the custom hook:
export function NavbarWithDirectService() {
  const [data, setData] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        setError(null)
        const result = await apiService.getGeneralData()
        setData(result.data.header)
      } catch (err) {
        console.error('Failed to fetch data:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])
}