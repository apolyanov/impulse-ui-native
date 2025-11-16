import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SparkleBold } from "../bold";
import { SparkleDuotone } from "../duotone";
import { SparkleFill } from "../fill";
import { SparkleLight } from "../light";
import { SparkleRegular } from "../regular";
import { SparkleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sparkle = memo(function Sparkle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SparkleBold,
      duotone: SparkleDuotone,
      fill: SparkleFill,
      light: SparkleLight,
      regular: SparkleRegular,
      thin: SparkleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
