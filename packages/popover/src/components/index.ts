import { PopoverComponent } from "./popover";
import { PopoverClose } from "./popover-close";
import { PopoverContent } from "./popover-content";
import { PopoverDescription } from "./popover-description";
import { PopoverFooter } from "./popover-footer";
import { PopoverHeader } from "./popover-header";
import { PopoverRoot } from "./popover-root";
import { PopoverTitle } from "./popover-title";
import { PopoverTrigger } from "./popover-trigger";

export const Popover = Object.assign(PopoverComponent, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Header: PopoverHeader,
  Footer: PopoverFooter,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
});

export { Tooltip } from "./tooltip";
