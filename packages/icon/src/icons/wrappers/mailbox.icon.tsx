import { createIcon } from "../../hocs/create-icon.hoc";
import { MailboxBoldIcon } from "../bold/mailbox-bold.icon";
import { MailboxDuotoneIcon } from "../duotone/mailbox-duotone.icon";
import { MailboxFillIcon } from "../fill/mailbox-fill.icon";
import { MailboxLightIcon } from "../light/mailbox-light.icon";
import { MailboxRegularIcon } from "../regular/mailbox-regular.icon";
import { MailboxThinIcon } from "../thin/mailbox-thin.icon";

export const MailboxIcon = createIcon("Mailbox", {
  bold: MailboxBoldIcon,
  duotone: MailboxDuotoneIcon,
  fill: MailboxFillIcon,
  light: MailboxLightIcon,
  regular: MailboxRegularIcon,
  thin: MailboxThinIcon,
});
