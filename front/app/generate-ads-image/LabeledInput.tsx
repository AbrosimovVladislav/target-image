import {Input} from '@mantine/core';

interface LabeledInputProps {
  label: string,
  placeholder: string,
  icon: JSX.Element,
  value: string,
  onChange: (value: string) => void;
}

const LabeledInput = ({label, placeholder, icon, value, onChange}: LabeledInputProps) => {
  return (
      <Input.Wrapper
          className="mb-4 w-96"
          label={label}
      >
        <Input
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            icon={icon}/>
      </Input.Wrapper>
  )
}

export default LabeledInput;