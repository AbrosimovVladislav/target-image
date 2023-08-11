import {NativeSelect} from '@mantine/core';

interface LabeledDropdownProps {
  label: string,
  variants: string[],
  value: string,
  onChange: (value: string) => void;
  icon: JSX.Element
}

const LabeledDropdown = ({label, variants, value, onChange, icon}: LabeledDropdownProps) => {
  return (
      <NativeSelect
          icon={icon}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="mb-4 w-56"
          data={variants}
          label={label}
          radius="md"
      />
  )
}

export default LabeledDropdown;