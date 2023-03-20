import type { Meta, StoryObj } from "@storybook/vue3";
import TopNav from "./TopNav.vue";
const languages = [
  {
    label: "EN",
    value: "en-US",
  },
  {
    label: "DE",
    value: "de-DE",
  },
  {
    label: "FR",
    value: "fr-FR",
  },
];
const userLanguage = "en-US";
const meta: Meta<typeof TopNav> = {
  title: "App Components/TopNav",
  component: TopNav,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TopNav>;

export const Base: Story = {
  render: (args) => ({
    components: { TopNav },
    setup() {
      return { args };
    },
    template: "<TopNav v-bind='args' />",
  }),
  args: {},
};
