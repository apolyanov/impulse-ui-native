import { createIcon } from "../../hocs/create-icon.hoc";
import { AddressBookTabsBoldIcon } from "../bold/address-book-tabs-bold.icon";
import { AddressBookTabsDuotoneIcon } from "../duotone/address-book-tabs-duotone.icon";
import { AddressBookTabsFillIcon } from "../fill/address-book-tabs-fill.icon";
import { AddressBookTabsLightIcon } from "../light/address-book-tabs-light.icon";
import { AddressBookTabsRegularIcon } from "../regular/address-book-tabs-regular.icon";
import { AddressBookTabsThinIcon } from "../thin/address-book-tabs-thin.icon";

export const AddressBookTabsIcon = createIcon("AddressBookTabs", {
  bold: AddressBookTabsBoldIcon,
  duotone: AddressBookTabsDuotoneIcon,
  fill: AddressBookTabsFillIcon,
  light: AddressBookTabsLightIcon,
  regular: AddressBookTabsRegularIcon,
  thin: AddressBookTabsThinIcon,
});
