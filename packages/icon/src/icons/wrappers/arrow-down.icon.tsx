import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowDownBoldIcon } from "../bold/arrow-down-bold.icon";
import { ArrowDownDuotoneIcon } from "../duotone/arrow-down-duotone.icon";
import { ArrowDownFillIcon } from "../fill/arrow-down-fill.icon";
import { ArrowDownLightIcon } from "../light/arrow-down-light.icon";
import { ArrowDownRegularIcon } from "../regular/arrow-down-regular.icon";
import { ArrowDownThinIcon } from "../thin/arrow-down-thin.icon";

export const ArrowDownIcon = memo(function ArrowDown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowDownBoldIcon,
      duotone: ArrowDownDuotoneIcon,
      fill: ArrowDownFillIcon,
      light: ArrowDownLightIcon,
      regular: ArrowDownRegularIcon,
      thin: ArrowDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
