import type { ReactNode } from "react";
import { memo } from "react";

import {
  DatePicker,
  DateRangePicker,
  DatetimePicker,
  DatetimeRangePicker,
  TimePicker,
} from "@impulse-ui-native/datetime";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface DatetimeExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  preview: ReactNode;
}

const start = new Date(2026, 8, 14, 9, 30);
const end = new Date(2026, 8, 18, 17, 0);

export const DatetimeExampleDefinitions = [
  {
    name: "Date",
    title: "Date picker",
    description: "Use DatePicker when a single calendar day is required.",
    props: [
      {
        name: "quickDateOptions",
        value: "QuickDateOption<Date>[]",
        description: "Offers shortcuts alongside the calendar.",
      },
    ],
    preview: (
      <DatePicker
        label="Start date"
        defaultValue={start}
        clearable
        quickDateOptions={[{ label: "Today", value: new Date() }]}
      />
    ),
  },
  {
    name: "DateRange",
    title: "Date range picker",
    description:
      "Use DateRangePicker to select inclusive start and end calendar dates.",
    props: [
      {
        name: "defaultValue",
        value: "{ start, end }",
        description: "Sets the initial uncontrolled range.",
      },
    ],
    preview: (
      <DateRangePicker
        label="Project dates"
        defaultValue={{ start, end }}
        clearable
      />
    ),
  },
  {
    name: "Datetime",
    title: "Date and time picker",
    description:
      "Use DatetimePicker when a calendar date and clock time form one value.",
    props: [
      {
        name: "value",
        value: "Date | null",
        description: "Combines the selected date and time.",
      },
    ],
    preview: (
      <DatetimePicker label="Starts at" defaultValue={start} clearable />
    ),
  },
  {
    name: "DatetimeRange",
    title: "Date and time range",
    description:
      "Use DatetimeRangePicker for ranges whose boundaries include clock times.",
    props: [
      {
        name: "value",
        value: "TimeRange | null",
        description: "Stores optional start and end Date values.",
      },
    ],
    preview: (
      <DatetimeRangePicker
        label="Reservation"
        defaultValue={{ start, end }}
        clearable
      />
    ),
  },
  {
    name: "Time",
    title: "Time picker",
    description:
      "Use TimePicker for hour, minute, and second values without a calendar date.",
    props: [
      {
        name: "defaultValue",
        value: "{ hours, minutes, seconds }",
        description: "Sets the initial uncontrolled time.",
      },
    ],
    preview: (
      <TimePicker
        label="Reminder time"
        defaultValue={{ hours: 9, minutes: 30, seconds: 0 }}
        clearable
      />
    ),
  },
] satisfies DatetimeExampleDefinition[];

interface DatetimeExampleProps {
  example: DatetimeExampleDefinition;
  elevated?: boolean;
}

export const DatetimeExample = memo(function DatetimeExample({
  example,
  elevated,
}: DatetimeExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      {example.preview}
    </StoryExample>
  );
});
