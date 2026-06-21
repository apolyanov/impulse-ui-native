import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { KnifeBoldIcon } from "../bold";
import { KnifeDuotoneIcon } from "../duotone";
import { KnifeFillIcon } from "../fill";
import { KnifeLightIcon } from "../light";
import { KnifeRegularIcon } from "../regular";
import { KnifeThinIcon } from "../thin";

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
