import type { PropsWithChildren } from "react";
import { memo, useMemo } from "react";

import { CalendarDotsIcon } from "@impulse-ui-native/icon/icons/calendar-dots";
import { Control } from "@impulse-ui-native/primitives";

import type { DateControlProps } from "../../types/date-control.types";

export const DateControl = memo(function DateControl({
  PrefixIcon = CalendarDotsIcon,
  Prefix,
  SuffixIcon,
  Suffix,
  children,
  ...props
}: PropsWithChildren<DateControlProps>) {
  const prefix = useMemo(
    () => (Prefix ? <Prefix /> : <Control.Icon icon={PrefixIcon} />),
    [Prefix, PrefixIcon],
  );
  const suffix = useMemo(
    () => {
      if (Suffix) {
        return <Suffix />;
      }

      return SuffixIcon ? <Control.Icon icon={SuffixIcon} /> : null;
    },
    [Suffix, SuffixIcon],
  );

  return (
    <Control.Field {...props} prefix={prefix} suffix={suffix}>
      {children}
    </Control.Field>
  );
});
