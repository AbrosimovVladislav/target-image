import { NativeSelect } from '@mantine/core';

interface LabeledDropdownProps{
  label: string,
  variants:string[],
  icon: JSX.Element
}

const LabeledDropdown = ({label, variants,icon}:LabeledDropdownProps) => {
  return (
      <NativeSelect
          icon={icon}
          className="mb-4 w-56"
          data={variants}
          label={label}
          radius="md"
      />
  )
}

export default LabeledDropdown;