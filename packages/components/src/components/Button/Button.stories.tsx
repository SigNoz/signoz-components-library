import { Meta } from "@storybook/react";

import { Button, ButtonSize, ButtonVariant  } from "./Button"

export default {
  title: "Periscope/Button",
  component: Button,
} as Meta;

const variants:ButtonVariant[] = ['primary', 'secondary', 'danger', 'border', 'warning', 'ghost', 'link']

const sizes:ButtonSize[] = ['xs', 'sm', 'md', 'lg']

export const Buttons = () => {
  return <div key="buttons">
    {variants.map(variant => <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'baseline'}}>
      {sizes.map((size, index) => <Button key={`${size}-${index}`} variant={variant} size={size}>{variant} {size} Button</Button>)}
    </div>
    )}
    <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'baseline'}}>
      {sizes.map((size, index) => <Button key={`${size}-${index}`} variant='border' border='dashed' size={size}>border dashed Button</Button>)}
    </div>
  </div>
}