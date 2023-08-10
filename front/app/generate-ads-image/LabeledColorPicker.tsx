import {useState} from 'react';
import {ColorPicker,Badge,Text, Box, DEFAULT_THEME} from '@mantine/core';

interface LabeledColorPickerProps {
  label: string
}

const LabeledColorPicker = ({label}: LabeledColorPickerProps) => {

  const [value, onChange] = useState('#dee2e6');
  return (
      <div className="my-8">
        <div className="flex flex-row">
          <Text className=" mr-3">{label}</Text>
          <Badge style={{backgroundColor: value, color:'black'}}>
            {value}
          </Badge>
        </div>

        <Box maw={300}>
          <ColorPicker
              format="hex"
              value={value}
              onChange={onChange}
              withPicker={false}
              fullWidth
              swatches={[
                ...DEFAULT_THEME.colors.gray.slice(3,4),
                ...DEFAULT_THEME.colors.gray.slice(7,8),
                ...DEFAULT_THEME.colors.red.slice(3,4),
                ...DEFAULT_THEME.colors.red.slice(7,8),
                ...DEFAULT_THEME.colors.grape.slice(3,4),
                ...DEFAULT_THEME.colors.grape.slice(7,8),
                ...DEFAULT_THEME.colors.violet.slice(3,4),
                ...DEFAULT_THEME.colors.violet.slice(7,8),
                ...DEFAULT_THEME.colors.blue.slice(3,4),
                ...DEFAULT_THEME.colors.blue.slice(7,8),
                ...DEFAULT_THEME.colors.cyan.slice(3,4),
                ...DEFAULT_THEME.colors.cyan.slice(7,8),
                ...DEFAULT_THEME.colors.teal.slice(3,4),
                ...DEFAULT_THEME.colors.teal.slice(7,8),
                ...DEFAULT_THEME.colors.green.slice(3,4),
                ...DEFAULT_THEME.colors.green.slice(7,8),
                ...DEFAULT_THEME.colors.yellow.slice(3,4),
                ...DEFAULT_THEME.colors.yellow.slice(7,8),
                ...DEFAULT_THEME.colors.orange.slice(3,4),
                ...DEFAULT_THEME.colors.orange.slice(7,8),
              ]}
          />
        </Box>
      </div>
  )
}

export default LabeledColorPicker;