import { createIcon } from "../../hocs/create-icon.hoc";
import { SidebarSimpleBoldIcon } from "../bold/sidebar-simple-bold.icon";
import { SidebarSimpleDuotoneIcon } from "../duotone/sidebar-simple-duotone.icon";
import { SidebarSimpleFillIcon } from "../fill/sidebar-simple-fill.icon";
import { SidebarSimpleLightIcon } from "../light/sidebar-simple-light.icon";
import { SidebarSimpleRegularIcon } from "../regular/sidebar-simple-regular.icon";
import { SidebarSimpleThinIcon } from "../thin/sidebar-simple-thin.icon";

export const SidebarSimpleIcon = createIcon("SidebarSimple", {
  bold: SidebarSimpleBoldIcon,
  duotone: SidebarSimpleDuotoneIcon,
  fill: SidebarSimpleFillIcon,
  light: SidebarSimpleLightIcon,
  regular: SidebarSimpleRegularIcon,
  thin: SidebarSimpleThinIcon,
});
