import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BaseballHelmetBoldIcon } from "../bold/baseball-helmet-bold.icon";
import { BaseballHelmetDuotoneIcon } from "../duotone/baseball-helmet-duotone.icon";
import { BaseballHelmetFillIcon } from "../fill/baseball-helmet-fill.icon";
import { BaseballHelmetLightIcon } from "../light/baseball-helmet-light.icon";
import { BaseballHelmetRegularIcon } from "../regular/baseball-helmet-regular.icon";
import { BaseballHelmetThinIcon } from "../thin/baseball-helmet-thin.icon";

export const BaseballHelmetIcon = memo(function BaseballHelmet(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BaseballHelmetBoldIcon,
      duotone: BaseballHelmetDuotoneIcon,
      fill: BaseballHelmetFillIcon,
      light: BaseballHelmetLightIcon,
      regular: BaseballHelmetRegularIcon,
      thin: BaseballHelmetThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
