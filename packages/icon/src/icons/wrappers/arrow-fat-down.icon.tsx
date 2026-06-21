import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatDownBoldIcon } from "../bold";
import { ArrowFatDownDuotoneIcon } from "../duotone";
import { ArrowFatDownFillIcon } from "../fill";
import { ArrowFatDownLightIcon } from "../light";
import { ArrowFatDownRegularIcon } from "../regular";
import { ArrowFatDownThinIcon } from "../thin";

export const ArrowFatDownIcon = memo(function ArrowFatDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatDownBoldIcon,
      duotone: ArrowFatDownDuotoneIcon,
      fill: ArrowFatDownFillIcon,
      light: ArrowFatDownLightIcon,
      regular: ArrowFatDownRegularIcon,
      thin: ArrowFatDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
