import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ThumbsUpBoldIcon } from "../bold/thumbs-up-bold.icon";
import { ThumbsUpDuotoneIcon } from "../duotone/thumbs-up-duotone.icon";
import { ThumbsUpFillIcon } from "../fill/thumbs-up-fill.icon";
import { ThumbsUpLightIcon } from "../light/thumbs-up-light.icon";
import { ThumbsUpRegularIcon } from "../regular/thumbs-up-regular.icon";
import { ThumbsUpThinIcon } from "../thin/thumbs-up-thin.icon";

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
