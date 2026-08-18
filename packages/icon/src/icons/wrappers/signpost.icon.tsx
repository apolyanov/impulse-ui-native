import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SignpostBoldIcon } from "../bold/signpost-bold.icon";
import { SignpostDuotoneIcon } from "../duotone/signpost-duotone.icon";
import { SignpostFillIcon } from "../fill/signpost-fill.icon";
import { SignpostLightIcon } from "../light/signpost-light.icon";
import { SignpostRegularIcon } from "../regular/signpost-regular.icon";
import { SignpostThinIcon } from "../thin/signpost-thin.icon";

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
