import { createIcon } from "../../hocs/create-icon.hoc";
import { AddressBookBoldIcon } from "../bold/address-book-bold.icon";
import { AddressBookDuotoneIcon } from "../duotone/address-book-duotone.icon";
import { AddressBookFillIcon } from "../fill/address-book-fill.icon";
import { AddressBookLightIcon } from "../light/address-book-light.icon";
import { AddressBookRegularIcon } from "../regular/address-book-regular.icon";
import { AddressBookThinIcon } from "../thin/address-book-thin.icon";

export const AddressBookIcon = createIcon("AddressBook", {
  bold: AddressBookBoldIcon,
  duotone: AddressBookDuotoneIcon,
  fill: AddressBookFillIcon,
  light: AddressBookLightIcon,
  regular: AddressBookRegularIcon,
  thin: AddressBookThinIcon,
});
