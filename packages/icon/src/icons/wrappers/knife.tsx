import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { KnifeBold } from "../bold";
import { KnifeDuotone } from "../duotone";
import { KnifeFill } from "../fill";
import { KnifeLight } from "../light";
import { KnifeRegular } from "../regular";
import { KnifeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Knife = memo(function Knife(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KnifeBold,
      duotone: KnifeDuotone,
      fill: KnifeFill,
      light: KnifeLight,
      regular: KnifeRegular,
      thin: KnifeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
