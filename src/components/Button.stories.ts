import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'src/components'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['auto'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'x',
  },
}

export const Primary2: Story = {
  args: {
    children: 111,
  },
}