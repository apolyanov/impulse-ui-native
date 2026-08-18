import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BaseballCapBoldIcon } from "../bold/baseball-cap-bold.icon";
import { BaseballCapDuotoneIcon } from "../duotone/baseball-cap-duotone.icon";
import { BaseballCapFillIcon } from "../fill/baseball-cap-fill.icon";
import { BaseballCapLightIcon } from "../light/baseball-cap-light.icon";
import { BaseballCapRegularIcon } from "../regular/baseball-cap-regular.icon";
import { BaseballCapThinIcon } from "../thin/baseball-cap-thin.icon";

export const BaseballCapIcon = memo(function BaseballCap(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BaseballCapBoldIcon,
      duotone: BaseballCapDuotoneIcon,
      fill: BaseballCapFillIcon,
      light: BaseballCapLightIcon,
      regular: BaseballCapRegularIcon,
      thin: BaseballCapThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
