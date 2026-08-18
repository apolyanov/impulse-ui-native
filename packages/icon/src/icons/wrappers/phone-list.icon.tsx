import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneListBoldIcon } from "../bold/phone-list-bold.icon";
import { PhoneListDuotoneIcon } from "../duotone/phone-list-duotone.icon";
import { PhoneListFillIcon } from "../fill/phone-list-fill.icon";
import { PhoneListLightIcon } from "../light/phone-list-light.icon";
import { PhoneListRegularIcon } from "../regular/phone-list-regular.icon";
import { PhoneListThinIcon } from "../thin/phone-list-thin.icon";

export const PhoneListIcon = memo(function PhoneList(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneListBoldIcon,
      duotone: PhoneListDuotoneIcon,
      fill: PhoneListFillIcon,
      light: PhoneListLightIcon,
      regular: PhoneListRegularIcon,
      thin: PhoneListThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
