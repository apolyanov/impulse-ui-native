import type { ComponentProps } from "react";
import { memo, useState } from "react";

import { Checkbox } from "@impulse-ui-native/checkbox";
import { FormField } from "@impulse-ui-native/form-field";
import { Switch } from "@impulse-ui-native/switch";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

type FormFieldExampleArgs = Omit<ComponentProps<typeof FormField>, "children">;

interface FormFieldExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: FormFieldExampleArgs;
  control?: "checkbox" | "switch";
}

export const FormFieldExampleDefinitions = [
  {
    name: "Default",
    title: "Field with supporting text",
    description:
      "Use FormField to give a custom control one consistent label and supporting description.",
    props: [
      {
        name: "label",
        value: "Notifications",
        description: "Provides the visible and accessible control name.",
      },
      {
        name: "description",
        value: "Receive updates about your account.",
        description: "Adds supporting guidance before the control.",
      },
    ],
    args: {
      description: "Receive updates about your account.",
      label: "Notifications",
    },
  },
  {
    name: "Required",
    title: "Required field",
    description:
      "Required fields include a visible marker and announce the requirement as part of the accessible label.",
    props: [
      {
        name: "required",
        value: "true",
        description: "Adds the visible and accessible required treatment.",
      },
    ],
    args: {
      description: "Confirm before continuing.",
      label: "Accept the terms",
      required: true,
    },
    control: "checkbox",
  },
  {
    name: "Validation",
    title: "Field with validation feedback",
    description:
      "Validation feedback is rendered once and included in the custom control's accessibility hint.",
    props: [
      {
        name: "error",
        value: "Enable notifications to continue.",
        description: "Displays and announces the current validation message.",
      },
    ],
    args: {
      error: "Enable notifications to continue.",
      label: "Notifications",
      required: true,
    },
  },
  {
    name: "Disabled",
    title: "Disabled field",
    description:
      "The field coordinates disabled label styling, accessibility state, and interaction on the rendered control.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Disables the rendered control and its field treatment.",
      },
    ],
    args: {
      description: "Managed by your organization.",
      disabled: true,
      label: "Product announcements",
    },
  },
  {
    name: "Custom control",
    title: "Field with a custom control",
    description:
      "The render function can wire any compatible custom control without cloning or imposing a value model.",
    props: [
      {
        name: "controlProps",
        value: "accessibility props",
        description:
          "Spreads generated identity, labeling, hint, and disabled props onto the custom control.",
      },
    ],
    args: {
      description: "Choose whether to include archived records.",
      label: "Include archived",
    },
    control: "checkbox",
  },
] satisfies FormFieldExampleDefinition[];

interface FormFieldExampleProps {
  example: FormFieldExampleDefinition;
  elevated?: boolean;
}

export const FormFieldExample = memo(function FormFieldExample({
  example,
  elevated,
}: FormFieldExampleProps) {
  const [checked, setChecked] = useState(false);

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <FormField {...example.args}>
        {({ controlProps }) =>
          example.control === "checkbox" ? (
            <Checkbox
              {...controlProps}
              checked={checked}
              onCheckedChange={(nextChecked) =>
                setChecked(nextChecked === true)
              }
            />
          ) : (
            <Switch
              {...controlProps}
              checked={checked}
              onCheckedChange={setChecked}
            />
          )
        }
      </FormField>
    </StoryExample>
  );
});
