import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OfficeChairBoldIcon } from "../bold/office-chair-bold.icon";
import { OfficeChairDuotoneIcon } from "../duotone/office-chair-duotone.icon";
import { OfficeChairFillIcon } from "../fill/office-chair-fill.icon";
import { OfficeChairLightIcon } from "../light/office-chair-light.icon";
import { OfficeChairRegularIcon } from "../regular/office-chair-regular.icon";
import { OfficeChairThinIcon } from "../thin/office-chair-thin.icon";

export const OfficeChairIcon = memo(function OfficeChair(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OfficeChairBoldIcon,
      duotone: OfficeChairDuotoneIcon,
      fill: OfficeChairFillIcon,
      light: OfficeChairLightIcon,
      regular: OfficeChairRegularIcon,
      thin: OfficeChairThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
