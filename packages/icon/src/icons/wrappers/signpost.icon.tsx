import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SignpostBoldIcon } from "../bold";
import { SignpostDuotoneIcon } from "../duotone";
import { SignpostFillIcon } from "../fill";
import { SignpostLightIcon } from "../light";
import { SignpostRegularIcon } from "../regular";
import { SignpostThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SignpostIcon = memo(function Signpost(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SignpostBoldIcon,
      duotone: SignpostDuotoneIcon,
      fill: SignpostFillIcon,
      light: SignpostLightIcon,
      regular: SignpostRegularIcon,
      thin: SignpostThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
