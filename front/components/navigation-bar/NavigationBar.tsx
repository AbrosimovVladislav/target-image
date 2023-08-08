"use client"

import {Code, Group, Navbar, ScrollArea} from "@mantine/core";
import {LinksGroup} from "@/components/navigation-bar/NavbarLinksGroup";
import {menu} from "@/constants/menu";
import Image from "next/image";


const NavigationBar = () => {

  const links = menu.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
      <div>
        <Navbar className="h-800 min-w-[100%] pb-0" p="md">
          <Navbar.Section className="px-2 pt-1 pb-3 mx-0 mt-2 border-b-2 border-solid border-slate-300">
            <Group position="apart">
              <Image src="/logo.png" width={200} height={200} />
              <Code  className="bg-blue-100" sx={{fontWeight: 700 }}>v0.0.1</Code>
            </Group>
          </Navbar.Section>

          <Navbar.Section grow className="mx-4" component={ScrollArea}>
            <div className="py-8">{links}</div>
          </Navbar.Section>
        </Navbar>
      </div>
  )
}

export default NavigationBar;