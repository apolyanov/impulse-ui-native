import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AddressBookBold } from "../bold";
import { AddressBookDuotone } from "../duotone";
import { AddressBookFill } from "../fill";
import { AddressBookLight } from "../light";
import { AddressBookRegular } from "../regular";
import { AddressBookThin } from "../thin";

export const AddressBook = memo(function AddressBook(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AddressBookBold,
      duotone: AddressBookDuotone,
      fill: AddressBookFill,
      light: AddressBookLight,
      regular: AddressBookRegular,
      thin: AddressBookThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
