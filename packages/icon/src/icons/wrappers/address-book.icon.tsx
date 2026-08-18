import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AddressBookBoldIcon } from "../bold/address-book-bold.icon";
import { AddressBookDuotoneIcon } from "../duotone/address-book-duotone.icon";
import { AddressBookFillIcon } from "../fill/address-book-fill.icon";
import { AddressBookLightIcon } from "../light/address-book-light.icon";
import { AddressBookRegularIcon } from "../regular/address-book-regular.icon";
import { AddressBookThinIcon } from "../thin/address-book-thin.icon";

export const AddressBookIcon = memo(function AddressBook(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AddressBookBoldIcon,
      duotone: AddressBookDuotoneIcon,
      fill: AddressBookFillIcon,
      light: AddressBookLightIcon,
      regular: AddressBookRegularIcon,
      thin: AddressBookThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
