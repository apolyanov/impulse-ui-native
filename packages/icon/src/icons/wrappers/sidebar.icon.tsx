import { createIcon } from "../../hocs/create-icon.hoc";
import { SidebarBoldIcon } from "../bold/sidebar-bold.icon";
import { SidebarDuotoneIcon } from "../duotone/sidebar-duotone.icon";
import { SidebarFillIcon } from "../fill/sidebar-fill.icon";
import { SidebarLightIcon } from "../light/sidebar-light.icon";
import { SidebarRegularIcon } from "../regular/sidebar-regular.icon";
import { SidebarThinIcon } from "../thin/sidebar-thin.icon";

export const SidebarIcon = createIcon("Sidebar", {
  bold: SidebarBoldIcon,
  duotone: SidebarDuotoneIcon,
  fill: SidebarFillIcon,
  light: SidebarLightIcon,
  regular: SidebarRegularIcon,
  thin: SidebarThinIcon,
});
