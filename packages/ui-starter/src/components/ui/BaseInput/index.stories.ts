import type { Meta, StoryObj } from "@storybook/vue3";
import { userEvent, within } from "@storybook/testing-library";

import UiBaseInput from "./index.vue";
import { string } from "zod";
const schema = string().min(3).max(5);

const meta: Meta<typeof UiBaseInput> = {
  title: "Ui/BaseInput",
  component: UiBaseInput,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof UiBaseInput>;

export const Base: Story = {
  render: (args) => ({
    components: { UiBaseInput },
    setup() {
      return { args };
    },
    template:
      "<UiBaseInput v-bind='args' ><template #label>Label</template></UiBaseInput",
  }),
  args: {
    name: "base-input",
    modelValue: "",
    placeholder: "input something",
    type: "text",
    fieldSchema: schema,
  },
};

export const Success: Story = {
  render: (args) => ({
    components: { UiBaseInput },
    setup() {
      return { args };
    },
    template:
      "<UiBaseInput v-bind='args' ><template #label>Valid Input</template></UiBaseInput",
  }),
  args: {
    name: "valid-input",
    modelValue: "",
    placeholder: "input something",
    type: "text",
    fieldSchema: schema,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("input");
    await userEvent.type(input, "valid");
  },
};

export const Error: Story = {
  render: (args) => ({
    components: { UiBaseInput },
    setup() {
      return { args };
    },
    template:
      "<UiBaseInput v-bind='args' ><template #label>Error Input</template></UiBaseInput",
  }),
  args: {
    name: "error-input",
    modelValue: "",
    placeholder: "input something",
    type: "text",
    fieldSchema: schema,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("input");
    await userEvent.type(input, "this input is not valid");
  },
};
