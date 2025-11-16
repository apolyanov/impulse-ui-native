import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TennisBallBold } from "../bold";
import { TennisBallDuotone } from "../duotone";
import { TennisBallFill } from "../fill";
import { TennisBallLight } from "../light";
import { TennisBallRegular } from "../regular";
import { TennisBallThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TennisBall = memo(function TennisBall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TennisBallBold,
      duotone: TennisBallDuotone,
      fill: TennisBallFill,
      light: TennisBallLight,
      regular: TennisBallRegular,
      thin: TennisBallThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
