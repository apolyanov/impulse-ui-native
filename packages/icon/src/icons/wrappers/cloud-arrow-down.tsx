import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudArrowDownBold } from "../bold";
import { CloudArrowDownDuotone } from "../duotone";
import { CloudArrowDownFill } from "../fill";
import { CloudArrowDownLight } from "../light";
import { CloudArrowDownRegular } from "../regular";
import { CloudArrowDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudArrowDown = memo(function CloudArrowDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudArrowDownBold,
      duotone: CloudArrowDownDuotone,
      fill: CloudArrowDownFill,
      light: CloudArrowDownLight,
      regular: CloudArrowDownRegular,
      thin: CloudArrowDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
