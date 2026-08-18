import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BaseballBoldIcon } from "../bold/baseball-bold.icon";
import { BaseballDuotoneIcon } from "../duotone/baseball-duotone.icon";
import { BaseballFillIcon } from "../fill/baseball-fill.icon";
import { BaseballLightIcon } from "../light/baseball-light.icon";
import { BaseballRegularIcon } from "../regular/baseball-regular.icon";
import { BaseballThinIcon } from "../thin/baseball-thin.icon";

export const BaseballIcon = memo(function Baseball(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BaseballBoldIcon,
      duotone: BaseballDuotoneIcon,
      fill: BaseballFillIcon,
      light: BaseballLightIcon,
      regular: BaseballRegularIcon,
      thin: BaseballThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
