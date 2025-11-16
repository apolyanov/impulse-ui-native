import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ForkKnifeBold } from "../bold";
import { ForkKnifeDuotone } from "../duotone";
import { ForkKnifeFill } from "../fill";
import { ForkKnifeLight } from "../light";
import { ForkKnifeRegular } from "../regular";
import { ForkKnifeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ForkKnife = memo(function ForkKnife(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ForkKnifeBold,
      duotone: ForkKnifeDuotone,
      fill: ForkKnifeFill,
      light: ForkKnifeLight,
      regular: ForkKnifeRegular,
      thin: ForkKnifeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
