import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Label,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { FC } from "react";
import { useFetcher } from "react-router-dom";
import { Paragraph } from "../../Typography";
import { FormModal, FormModalProps } from "./FormModal";

const Render: FC<FormModalProps> = (args) => {
  const { Form } = useFetcher();
  return (
    <FormModal {...args}>
      <Form action="/a-silly-place">
        <ModalHeader>Header</ModalHeader>

        <ModalBody>
          <fieldset className="mb-2">
            <Label htmlFor="velocity">
              What is the airspeed velocity of an unladen swallow?
              <span className="text-red-500">*</span>
            </Label>
            <TextInput
              required
              type="text"
              id="velocity"
              name="velocity"
              placeholder={"20.1 miles per hour."}
              inputMode="numeric"
            />
          </fieldset>

          <Paragraph marginBottom>Røtern nik Akten Di</Paragraph>

          <Paragraph marginBottom>Wik</Paragraph>

          <Paragraph marginBottom>Alsø wik</Paragraph>

          <Paragraph marginBottom>Alsø alsø wik</Paragraph>

          <Paragraph marginBottom>
            Wi nøt trei a høliday in Sweden this yer?
          </Paragraph>

          <Paragraph marginBottom>See the løveli lakes</Paragraph>

          <Paragraph marginBottom>The wonderful telephøne system</Paragraph>

          <Paragraph marginBottom>And mani interesting furry animals</Paragraph>

          <Paragraph marginBottom>
            The Producers would like to thank The Forestry Commission Doune
            Admissions Ltd, Keir and Cowdor Estates, Stirling University, and
            the people of Doune for their help in the making of this film. The
            Characters and incidents portrayed and the names used are fictitious
            and any similarity to the names, characters, or history of any
            person is entirely accidental and unintentional. Signed RICHARD M.
            NIXON
          </Paragraph>

          <Paragraph marginBottom>Including the majestic møøse </Paragraph>

          <Paragraph marginBottom>A Møøse once bit my sister ...</Paragraph>

          <Paragraph marginBottom>
            No realli! She was Karving her initials on the møøse with the
            sharpened end of an interspace tøøthbrush given her by Svenge - her
            brother-in-law - an Oslo dentist and star of many Norwegian møvies:
            "The Høt Hands of an Oslo Dentist", "Fillings of Passion", "The Huge
            Mølars of Horst Nordfink".{" "}
          </Paragraph>
        </ModalBody>

        <ModalFooter>
          <div className="space-between flex flex-row gap-2">
            <Button>I don't know that!</Button>
            <Button color="red">Submit</Button>
          </div>
        </ModalFooter>
      </Form>
    </FormModal>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FormModal> = {
  component: FormModal,
  // tags: ["autodocs"], // Do not use autodocs. The React portal breaks container
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    show: true,
    autoFocus: true,
  },
  render: (args) => <Render {...args} />,
};

export default meta;
type Story = StoryObj<typeof FormModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {},
};
