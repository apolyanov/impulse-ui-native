import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudArrowDownBoldIcon } from "../bold";
import { CloudArrowDownDuotoneIcon } from "../duotone";
import { CloudArrowDownFillIcon } from "../fill";
import { CloudArrowDownLightIcon } from "../light";
import { CloudArrowDownRegularIcon } from "../regular";
import { CloudArrowDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudArrowDownIcon = memo(function CloudArrowDown(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudArrowDownBoldIcon,
      duotone: CloudArrowDownDuotoneIcon,
      fill: CloudArrowDownFillIcon,
      light: CloudArrowDownLightIcon,
      regular: CloudArrowDownRegularIcon,
      thin: CloudArrowDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
