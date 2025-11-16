import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BaseballHelmetBold } from "../bold";
import { BaseballHelmetDuotone } from "../duotone";
import { BaseballHelmetFill } from "../fill";
import { BaseballHelmetLight } from "../light";
import { BaseballHelmetRegular } from "../regular";
import { BaseballHelmetThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BaseballHelmet = memo(function BaseballHelmet(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BaseballHelmetBold,
      duotone: BaseballHelmetDuotone,
      fill: BaseballHelmetFill,
      light: BaseballHelmetLight,
      regular: BaseballHelmetRegular,
      thin: BaseballHelmetThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
