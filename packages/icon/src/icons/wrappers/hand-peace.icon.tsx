import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandPeaceBoldIcon } from "../bold";
import { HandPeaceDuotoneIcon } from "../duotone";
import { HandPeaceFillIcon } from "../fill";
import { HandPeaceLightIcon } from "../light";
import { HandPeaceRegularIcon } from "../regular";
import { HandPeaceThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandPeaceIcon = memo(function HandPeace(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandPeaceBoldIcon,
      duotone: HandPeaceDuotoneIcon,
      fill: HandPeaceFillIcon,
      light: HandPeaceLightIcon,
      regular: HandPeaceRegularIcon,
      thin: HandPeaceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
