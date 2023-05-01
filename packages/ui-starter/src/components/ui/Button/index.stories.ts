import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton, { colorToClasses, elevationToClasses, sizeToClasses } from './index.vue'

const meta: Meta<typeof UiButton> = {
  title: 'Ui/Button',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: Array.from(colorToClasses.keys()),
    },
    size: {
      control: 'select',
      options: Array.from(sizeToClasses.keys()),
    },
    elevation: {
      control: 'select',
      options: Array.from(elevationToClasses.keys()),
    },
  },
}
export default meta

type Story = StoryObj<typeof UiButton>

export const Primary: Story = {
  render: args => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind=\'args\'>Primary</UiButton>',
  }),
  args: {
    color: 'primary',
    size: 'md',
    elevation: 'sm',
  },
}

export const Secondary: Story = {
  render: args => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind=\'args\'>Secondary</UiButton>',
  }),
  args: {
    color: 'secondary',
    size: 'md',
  },
}

export const Danger: Story = {
  render: args => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind=\'args\'>Danger</UiButton>',
  }),
  args: {
    color: 'danger',
    size: 'md',
  },
}

export const Success: Story = {
  render: args => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind=\'args\'>Succes</UiButton>',
  }),
  args: {
    color: 'success',
    size: 'md',
  },
}

export const Warning: Story = {
  render: args => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind=\'args\'>Warning</UiButton>',
  }),
  args: {
    color: 'warning',
    size: 'md',
  },
}

export const Large: Story = {
  render: args => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind=\'args\'>Large</UiButton>',
  }),
  args: {
    color: 'primary',
    size: 'lg',
  },
}

export const Medium: Story = {
  render: args => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind=\'args\'>Medium</UiButton>',
  }),
  args: {
    color: 'primary',
    size: 'md',
  },
}

export const Small: Story = {
  render: args => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind=\'args\'>Small</UiButton>',
  }),
  args: {
    color: 'primary',
    size: 'sm',
  },
}
