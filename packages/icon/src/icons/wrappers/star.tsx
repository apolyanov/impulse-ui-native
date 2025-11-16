import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StarBold } from "../bold";
import { StarDuotone } from "../duotone";
import { StarFill } from "../fill";
import { StarLight } from "../light";
import { StarRegular } from "../regular";
import { StarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Star = memo(function Star(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarBold,
      duotone: StarDuotone,
      fill: StarFill,
      light: StarLight,
      regular: StarRegular,
      thin: StarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
