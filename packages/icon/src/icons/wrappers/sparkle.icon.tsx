import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SparkleBoldIcon } from "../bold";
import { SparkleDuotoneIcon } from "../duotone";
import { SparkleFillIcon } from "../fill";
import { SparkleLightIcon } from "../light";
import { SparkleRegularIcon } from "../regular";
import { SparkleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SparkleIcon = memo(function Sparkle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SparkleBoldIcon,
      duotone: SparkleDuotoneIcon,
      fill: SparkleFillIcon,
      light: SparkleLightIcon,
      regular: SparkleRegularIcon,
      thin: SparkleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
