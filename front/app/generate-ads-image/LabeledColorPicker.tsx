import {useState} from 'react';
import {ColorPicker, Text, Box, DEFAULT_THEME} from '@mantine/core';

interface LabeledColorPickerProps {
  label: string
}

const LabeledColorPicker = ({label}: LabeledColorPickerProps) => {

  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');
  return (
      <div>
        <Text className="font-semibold mb-1 mt-10">{label}</Text>
        <Box maw={300}>
          <ColorPicker
              format="hex"
              value={value}
              onChange={onChange}
              withPicker={false}
              fullWidth
              swatches={[
                ...DEFAULT_THEME.colors.red,
                ...DEFAULT_THEME.colors.green,
                ...DEFAULT_THEME.colors.blue,
              ]}
          />
          <Text align="center" mt={5}>
            {value}
          </Text>
        </Box>
      </div>
  )
}

export default LabeledColorPicker;