import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatDownBoldIcon } from "../bold/arrow-fat-down-bold.icon";
import { ArrowFatDownDuotoneIcon } from "../duotone/arrow-fat-down-duotone.icon";
import { ArrowFatDownFillIcon } from "../fill/arrow-fat-down-fill.icon";
import { ArrowFatDownLightIcon } from "../light/arrow-fat-down-light.icon";
import { ArrowFatDownRegularIcon } from "../regular/arrow-fat-down-regular.icon";
import { ArrowFatDownThinIcon } from "../thin/arrow-fat-down-thin.icon";

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
