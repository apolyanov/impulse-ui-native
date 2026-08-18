import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TennisBallBoldIcon } from "../bold/tennis-ball-bold.icon";
import { TennisBallDuotoneIcon } from "../duotone/tennis-ball-duotone.icon";
import { TennisBallFillIcon } from "../fill/tennis-ball-fill.icon";
import { TennisBallLightIcon } from "../light/tennis-ball-light.icon";
import { TennisBallRegularIcon } from "../regular/tennis-ball-regular.icon";
import { TennisBallThinIcon } from "../thin/tennis-ball-thin.icon";

export const TennisBallIcon = memo(function TennisBall(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TennisBallBoldIcon,
      duotone: TennisBallDuotoneIcon,
      fill: TennisBallFillIcon,
      light: TennisBallLightIcon,
      regular: TennisBallRegularIcon,
      thin: TennisBallThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
