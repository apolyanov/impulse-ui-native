import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OfficeChairBold } from "../bold";
import { OfficeChairDuotone } from "../duotone";
import { OfficeChairFill } from "../fill";
import { OfficeChairLight } from "../light";
import { OfficeChairRegular } from "../regular";
import { OfficeChairThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const OfficeChair = memo(function OfficeChair(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OfficeChairBold,
      duotone: OfficeChairDuotone,
      fill: OfficeChairFill,
      light: OfficeChairLight,
      regular: OfficeChairRegular,
      thin: OfficeChairThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
