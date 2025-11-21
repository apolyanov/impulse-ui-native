import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThumbsUpBoldIcon } from "../bold";
import { ThumbsUpDuotoneIcon } from "../duotone";
import { ThumbsUpFillIcon } from "../fill";
import { ThumbsUpLightIcon } from "../light";
import { ThumbsUpRegularIcon } from "../regular";
import { ThumbsUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThumbsUpIcon = memo(function ThumbsUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThumbsUpBoldIcon,
      duotone: ThumbsUpDuotoneIcon,
      fill: ThumbsUpFillIcon,
      light: ThumbsUpLightIcon,
      regular: ThumbsUpRegularIcon,
      thin: ThumbsUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
