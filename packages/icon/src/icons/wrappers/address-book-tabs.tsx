import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AddressBookTabsBold } from "../bold";
import { AddressBookTabsDuotone } from "../duotone";
import { AddressBookTabsFill } from "../fill";
import { AddressBookTabsLight } from "../light";
import { AddressBookTabsRegular } from "../regular";
import { AddressBookTabsThin } from "../thin";

export const AddressBookTabs = memo(function AddressBookTabs(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AddressBookTabsBold,
      duotone: AddressBookTabsDuotone,
      fill: AddressBookTabsFill,
      light: AddressBookTabsLight,
      regular: AddressBookTabsRegular,
      thin: AddressBookTabsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
