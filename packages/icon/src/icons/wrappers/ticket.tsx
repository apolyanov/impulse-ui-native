import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TicketBold } from "../bold";
import { TicketDuotone } from "../duotone";
import { TicketFill } from "../fill";
import { TicketLight } from "../light";
import { TicketRegular } from "../regular";
import { TicketThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Ticket = memo(function Ticket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TicketBold,
      duotone: TicketDuotone,
      fill: TicketFill,
      light: TicketLight,
      regular: TicketRegular,
      thin: TicketThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
