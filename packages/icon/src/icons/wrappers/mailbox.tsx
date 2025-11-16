import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MailboxBold } from "../bold";
import { MailboxDuotone } from "../duotone";
import { MailboxFill } from "../fill";
import { MailboxLight } from "../light";
import { MailboxRegular } from "../regular";
import { MailboxThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Mailbox = memo(function Mailbox(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MailboxBold,
      duotone: MailboxDuotone,
      fill: MailboxFill,
      light: MailboxLight,
      regular: MailboxRegular,
      thin: MailboxThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
