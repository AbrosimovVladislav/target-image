import {Code, Group, Navbar} from "@mantine/core";
import Image from "next/image";


const Logo = () => {
  return (
      <Navbar.Section className="px-3 pt-2 pb-5 mx-0 my-5 border-b-2 border-solid border-slate-300">
        <Group position="apart">
          <Image src="/logo.png" width={200} height={200} />
          <Code  className="bg-green-100" sx={{fontWeight: 700 }}>v0.0.1</Code>
        </Group>
      </Navbar.Section>
  )
}

export default Logo;