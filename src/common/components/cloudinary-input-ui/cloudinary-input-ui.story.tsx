import type { Meta, StoryObj } from "@storybook/react";
import { CloudinaryInputUi } from "./cloudinary-input-ui.component";

import { theme } from "@app/core/theme";
import { ThemeProvider } from "react-admin";

const meta: Meta<typeof CloudinaryInputUi> = {
  title: "Common/Cloudinary Input",
  component: CloudinaryInputUi,
};

export default meta;
type Story = StoryObj<typeof CloudinaryInputUi>;

export const Primary: Story = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <CloudinaryInputUi {...args} />
    </ThemeProvider>
  ),
  args: {
    label: "Головне Зображення",
  },
};
