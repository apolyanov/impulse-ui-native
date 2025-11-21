import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OfficeChairBoldIcon } from "../bold";
import { OfficeChairDuotoneIcon } from "../duotone";
import { OfficeChairFillIcon } from "../fill";
import { OfficeChairLightIcon } from "../light";
import { OfficeChairRegularIcon } from "../regular";
import { OfficeChairThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const OfficeChairIcon = memo(function OfficeChair(
  props: IconWrapperProps
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
