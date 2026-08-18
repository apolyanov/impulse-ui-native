import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ForkKnifeBoldIcon } from "../bold/fork-knife-bold.icon";
import { ForkKnifeDuotoneIcon } from "../duotone/fork-knife-duotone.icon";
import { ForkKnifeFillIcon } from "../fill/fork-knife-fill.icon";
import { ForkKnifeLightIcon } from "../light/fork-knife-light.icon";
import { ForkKnifeRegularIcon } from "../regular/fork-knife-regular.icon";
import { ForkKnifeThinIcon } from "../thin/fork-knife-thin.icon";

export const ForkKnifeIcon = memo(function ForkKnife(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ForkKnifeBoldIcon,
      duotone: ForkKnifeDuotoneIcon,
      fill: ForkKnifeFillIcon,
      light: ForkKnifeLightIcon,
      regular: ForkKnifeRegularIcon,
      thin: ForkKnifeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
