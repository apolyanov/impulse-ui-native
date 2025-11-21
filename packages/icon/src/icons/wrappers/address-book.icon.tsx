import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AddressBookBoldIcon } from "../bold";
import { AddressBookDuotoneIcon } from "../duotone";
import { AddressBookFillIcon } from "../fill";
import { AddressBookLightIcon } from "../light";
import { AddressBookRegularIcon } from "../regular";
import { AddressBookThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AddressBookIcon = memo(function AddressBook(
  props: IconWrapperProps
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
