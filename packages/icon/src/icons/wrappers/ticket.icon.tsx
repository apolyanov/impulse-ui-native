import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TicketBoldIcon } from "../bold";
import { TicketDuotoneIcon } from "../duotone";
import { TicketFillIcon } from "../fill";
import { TicketLightIcon } from "../light";
import { TicketRegularIcon } from "../regular";
import { TicketThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
