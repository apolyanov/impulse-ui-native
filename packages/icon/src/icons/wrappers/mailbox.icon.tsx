import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MailboxBoldIcon } from "../bold";
import { MailboxDuotoneIcon } from "../duotone";
import { MailboxFillIcon } from "../fill";
import { MailboxLightIcon } from "../light";
import { MailboxRegularIcon } from "../regular";
import { MailboxThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MailboxIcon = memo(function Mailbox(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MailboxBoldIcon,
      duotone: MailboxDuotoneIcon,
      fill: MailboxFillIcon,
      light: MailboxLightIcon,
      regular: MailboxRegularIcon,
      thin: MailboxThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
