import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TicketBoldIcon } from "../bold/ticket-bold.icon";
import { TicketDuotoneIcon } from "../duotone/ticket-duotone.icon";
import { TicketFillIcon } from "../fill/ticket-fill.icon";
import { TicketLightIcon } from "../light/ticket-light.icon";
import { TicketRegularIcon } from "../regular/ticket-regular.icon";
import { TicketThinIcon } from "../thin/ticket-thin.icon";

export const TicketIcon = memo(function Ticket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TicketBoldIcon,
      duotone: TicketDuotoneIcon,
      fill: TicketFillIcon,
      light: TicketLightIcon,
      regular: TicketRegularIcon,
      thin: TicketThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
