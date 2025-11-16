import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BaseballBold } from "../bold";
import { BaseballDuotone } from "../duotone";
import { BaseballFill } from "../fill";
import { BaseballLight } from "../light";
import { BaseballRegular } from "../regular";
import { BaseballThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Baseball = memo(function Baseball(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BaseballBold,
      duotone: BaseballDuotone,
      fill: BaseballFill,
      light: BaseballLight,
      regular: BaseballRegular,
      thin: BaseballThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
