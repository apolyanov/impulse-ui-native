import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MailboxBoldIcon } from "../bold/mailbox-bold.icon";
import { MailboxDuotoneIcon } from "../duotone/mailbox-duotone.icon";
import { MailboxFillIcon } from "../fill/mailbox-fill.icon";
import { MailboxLightIcon } from "../light/mailbox-light.icon";
import { MailboxRegularIcon } from "../regular/mailbox-regular.icon";
import { MailboxThinIcon } from "../thin/mailbox-thin.icon";

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
