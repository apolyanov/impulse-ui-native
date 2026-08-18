import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudArrowDownBoldIcon } from "../bold/cloud-arrow-down-bold.icon";
import { CloudArrowDownDuotoneIcon } from "../duotone/cloud-arrow-down-duotone.icon";
import { CloudArrowDownFillIcon } from "../fill/cloud-arrow-down-fill.icon";
import { CloudArrowDownLightIcon } from "../light/cloud-arrow-down-light.icon";
import { CloudArrowDownRegularIcon } from "../regular/cloud-arrow-down-regular.icon";
import { CloudArrowDownThinIcon } from "../thin/cloud-arrow-down-thin.icon";

export const CloudArrowDownIcon = memo(function CloudArrowDown(
  props: IconWrapperProps,
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
