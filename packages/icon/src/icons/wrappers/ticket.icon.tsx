import { createIcon } from "../../hocs/create-icon.hoc";
import { TicketBoldIcon } from "../bold/ticket-bold.icon";
import { TicketDuotoneIcon } from "../duotone/ticket-duotone.icon";
import { TicketFillIcon } from "../fill/ticket-fill.icon";
import { TicketLightIcon } from "../light/ticket-light.icon";
import { TicketRegularIcon } from "../regular/ticket-regular.icon";
import { TicketThinIcon } from "../thin/ticket-thin.icon";

export const TicketIcon = createIcon("Ticket", {
  bold: TicketBoldIcon,
  duotone: TicketDuotoneIcon,
  fill: TicketFillIcon,
  light: TicketLightIcon,
  regular: TicketRegularIcon,
  thin: TicketThinIcon,
});
