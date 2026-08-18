import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { KnifeBoldIcon } from "../bold/knife-bold.icon";
import { KnifeDuotoneIcon } from "../duotone/knife-duotone.icon";
import { KnifeFillIcon } from "../fill/knife-fill.icon";
import { KnifeLightIcon } from "../light/knife-light.icon";
import { KnifeRegularIcon } from "../regular/knife-regular.icon";
import { KnifeThinIcon } from "../thin/knife-thin.icon";

export const KnifeIcon = memo(function Knife(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KnifeBoldIcon,
      duotone: KnifeDuotoneIcon,
      fill: KnifeFillIcon,
      light: KnifeLightIcon,
      regular: KnifeRegularIcon,
      thin: KnifeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
