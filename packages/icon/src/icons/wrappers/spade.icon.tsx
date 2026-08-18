import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpadeBoldIcon } from "../bold/spade-bold.icon";
import { SpadeDuotoneIcon } from "../duotone/spade-duotone.icon";
import { SpadeFillIcon } from "../fill/spade-fill.icon";
import { SpadeLightIcon } from "../light/spade-light.icon";
import { SpadeRegularIcon } from "../regular/spade-regular.icon";
import { SpadeThinIcon } from "../thin/spade-thin.icon";

export const SpadeIcon = memo(function Spade(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpadeBoldIcon,
      duotone: SpadeDuotoneIcon,
      fill: SpadeFillIcon,
      light: SpadeLightIcon,
      regular: SpadeRegularIcon,
      thin: SpadeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
