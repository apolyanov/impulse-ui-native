import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MoonStarsBold } from "../bold";
import { MoonStarsDuotone } from "../duotone";
import { MoonStarsFill } from "../fill";
import { MoonStarsLight } from "../light";
import { MoonStarsRegular } from "../regular";
import { MoonStarsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MoonStars = memo(function MoonStars(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MoonStarsBold,
      duotone: MoonStarsDuotone,
      fill: MoonStarsFill,
      light: MoonStarsLight,
      regular: MoonStarsRegular,
      thin: MoonStarsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
