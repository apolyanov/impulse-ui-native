import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SparkleBoldIcon } from "../bold/sparkle-bold.icon";
import { SparkleDuotoneIcon } from "../duotone/sparkle-duotone.icon";
import { SparkleFillIcon } from "../fill/sparkle-fill.icon";
import { SparkleLightIcon } from "../light/sparkle-light.icon";
import { SparkleRegularIcon } from "../regular/sparkle-regular.icon";
import { SparkleThinIcon } from "../thin/sparkle-thin.icon";

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
