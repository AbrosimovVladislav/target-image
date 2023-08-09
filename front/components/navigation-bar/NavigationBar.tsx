"use client"

import {Box, NavLink} from '@mantine/core';
import {IconVersions, IconHome, IconAd} from '@tabler/icons-react';
import Logo from "@/components/navigation-bar/Logo";
import {JSX, useState} from "react";
import { usePathname } from 'next/navigation'

interface MenuItem{
  label:string,
  icon?: JSX.Element,
  href?: string,
  children?: MenuItem[],
}

const NavigationBar = () => {

  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState<string>(pathname);

  const menu: MenuItem[] = [
    {
      label: "Main Page",
      icon: <IconHome color="teal" size="1.5rem" stroke={1.5}/>,
      href: "/"
    },
    {
      label: "Generate Ads Image",
      icon: <IconAd color="teal" size="1.5rem" stroke={1.5}/>,
      href: "/generate-ads-image"
    },
    {
      label: "Release Versions",
      icon: <IconVersions color="teal" size="1.5rem" stroke={1.5}/>,
      children: [
        {
          label: "Version 0.0.1",
          href: "/v/0.0.1"
        },
        {
          label: "Version 0.0.2",
          href: "/v/0.0.1"
        },
        {
          label: "Version 0.0.3",
          children: [
            {
              label: "Version 0.0.3.1",
              href: "/v/0.0.3.1"
            },
            {
              label: "Version 0.0.3.2",
              href: "/v/0.0.3.2"
            },
            {
              label: "Version 0.0.3.3",
              href: "/v/0.0.3.3"
            },
          ]
        },
      ]
    }
  ]

  const menuRendering = (array: MenuItem[]): JSX => {
    return array.map(item => {
          return <NavLink
              className={activeItem==item.href
                  ? "text-gray-900 bg-green-50"
                  : "text-gray-700 hover:text-gray-900 hover:bg-green-100"}
              component="a"
              label={item.label}
              icon={item.icon}
              href={item.href}
              onClick={() => setActiveItem(item.href ? item.href : "/")}>
            {item.children && menuRendering(item.children)}
          </NavLink>
        }
    )
  }

  return (
      <div className="min-h-screen min-w-[21%] border-r-2 border-solid border-slate-300">
        <Logo/>
        <Box className="w-240 p-30">
          {
            menuRendering(menu)
          }
        </Box>
      </div>
  )
}

export default NavigationBar;