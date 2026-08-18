import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandPeaceBoldIcon } from "../bold/hand-peace-bold.icon";
import { HandPeaceDuotoneIcon } from "../duotone/hand-peace-duotone.icon";
import { HandPeaceFillIcon } from "../fill/hand-peace-fill.icon";
import { HandPeaceLightIcon } from "../light/hand-peace-light.icon";
import { HandPeaceRegularIcon } from "../regular/hand-peace-regular.icon";
import { HandPeaceThinIcon } from "../thin/hand-peace-thin.icon";

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
