import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowLeftDownBoldIcon } from "../bold";
import { ArrowElbowLeftDownDuotoneIcon } from "../duotone";
import { ArrowElbowLeftDownFillIcon } from "../fill";
import { ArrowElbowLeftDownLightIcon } from "../light";
import { ArrowElbowLeftDownRegularIcon } from "../regular";
import { ArrowElbowLeftDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowLeftDownIcon = memo(function ArrowElbowLeftDown(
  props: IconWrapperProps
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
