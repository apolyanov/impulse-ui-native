import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AddressBookTabsBoldIcon } from "../bold";
import { AddressBookTabsDuotoneIcon } from "../duotone";
import { AddressBookTabsFillIcon } from "../fill";
import { AddressBookTabsLightIcon } from "../light";
import { AddressBookTabsRegularIcon } from "../regular";
import { AddressBookTabsThinIcon } from "../thin";

export const AddressBookTabsIcon = memo(function AddressBookTabs(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AddressBookTabsBoldIcon,
      duotone: AddressBookTabsDuotoneIcon,
      fill: AddressBookTabsFillIcon,
      light: AddressBookTabsLightIcon,
      regular: AddressBookTabsRegularIcon,
      thin: AddressBookTabsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
