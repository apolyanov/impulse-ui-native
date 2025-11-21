import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLineDownBoldIcon } from "../bold";
import { ArrowFatLineDownDuotoneIcon } from "../duotone";
import { ArrowFatLineDownFillIcon } from "../fill";
import { ArrowFatLineDownLightIcon } from "../light";
import { ArrowFatLineDownRegularIcon } from "../regular";
import { ArrowFatLineDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLineDownIcon = memo(function ArrowFatLineDown(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineDownBoldIcon,
      duotone: ArrowFatLineDownDuotoneIcon,
      fill: ArrowFatLineDownFillIcon,
      light: ArrowFatLineDownLightIcon,
      regular: ArrowFatLineDownRegularIcon,
      thin: ArrowFatLineDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
