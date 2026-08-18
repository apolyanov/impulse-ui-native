import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowElbowLeftDownBoldIcon } from "../bold/arrow-elbow-left-down-bold.icon";
import { ArrowElbowLeftDownDuotoneIcon } from "../duotone/arrow-elbow-left-down-duotone.icon";
import { ArrowElbowLeftDownFillIcon } from "../fill/arrow-elbow-left-down-fill.icon";
import { ArrowElbowLeftDownLightIcon } from "../light/arrow-elbow-left-down-light.icon";
import { ArrowElbowLeftDownRegularIcon } from "../regular/arrow-elbow-left-down-regular.icon";
import { ArrowElbowLeftDownThinIcon } from "../thin/arrow-elbow-left-down-thin.icon";

export const ArrowElbowLeftDownIcon = memo(function ArrowElbowLeftDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowLeftDownBoldIcon,
      duotone: ArrowElbowLeftDownDuotoneIcon,
      fill: ArrowElbowLeftDownFillIcon,
      light: ArrowElbowLeftDownLightIcon,
      regular: ArrowElbowLeftDownRegularIcon,
      thin: ArrowElbowLeftDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
