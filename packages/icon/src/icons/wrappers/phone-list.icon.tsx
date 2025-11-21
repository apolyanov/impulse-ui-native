import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneListBoldIcon } from "../bold";
import { PhoneListDuotoneIcon } from "../duotone";
import { PhoneListFillIcon } from "../fill";
import { PhoneListLightIcon } from "../light";
import { PhoneListRegularIcon } from "../regular";
import { PhoneListThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
