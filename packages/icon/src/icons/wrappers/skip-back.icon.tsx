import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SkipBackBoldIcon } from "../bold/skip-back-bold.icon";
import { SkipBackDuotoneIcon } from "../duotone/skip-back-duotone.icon";
import { SkipBackFillIcon } from "../fill/skip-back-fill.icon";
import { SkipBackLightIcon } from "../light/skip-back-light.icon";
import { SkipBackRegularIcon } from "../regular/skip-back-regular.icon";
import { SkipBackThinIcon } from "../thin/skip-back-thin.icon";

export const SkipBackIcon = memo(function SkipBack(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkipBackBoldIcon,
      duotone: SkipBackDuotoneIcon,
      fill: SkipBackFillIcon,
      light: SkipBackLightIcon,
      regular: SkipBackRegularIcon,
      thin: SkipBackThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
