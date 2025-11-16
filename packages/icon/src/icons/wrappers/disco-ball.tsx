import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiscoBallBold } from "../bold";
import { DiscoBallDuotone } from "../duotone";
import { DiscoBallFill } from "../fill";
import { DiscoBallLight } from "../light";
import { DiscoBallRegular } from "../regular";
import { DiscoBallThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiscoBall = memo(function DiscoBall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiscoBallBold,
      duotone: DiscoBallDuotone,
      fill: DiscoBallFill,
      light: DiscoBallLight,
      regular: DiscoBallRegular,
      thin: DiscoBallThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
