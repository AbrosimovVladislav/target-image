import {Input, Text} from '@mantine/core';
import {IconAt} from '@tabler/icons-react';

interface LabeledInputProps {
  label: string,
  placeholder: string,
  icon: JSX.Element
}

const LabeledInput = ({label, placeholder}: LabeledInputProps) => {
  return (
      <Input.Wrapper
          className="mb-4 w-96"
          label={label}
      >
        <Input placeholder={placeholder} icon={<IconAt />} />
      </Input.Wrapper>
  )
}

export default LabeledInput;