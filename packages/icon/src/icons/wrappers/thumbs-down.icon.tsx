import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ThumbsDownBoldIcon } from "../bold/thumbs-down-bold.icon";
import { ThumbsDownDuotoneIcon } from "../duotone/thumbs-down-duotone.icon";
import { ThumbsDownFillIcon } from "../fill/thumbs-down-fill.icon";
import { ThumbsDownLightIcon } from "../light/thumbs-down-light.icon";
import { ThumbsDownRegularIcon } from "../regular/thumbs-down-regular.icon";
import { ThumbsDownThinIcon } from "../thin/thumbs-down-thin.icon";

export const ThumbsDownIcon = memo(function ThumbsDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThumbsDownBoldIcon,
      duotone: ThumbsDownDuotoneIcon,
      fill: ThumbsDownFillIcon,
      light: ThumbsDownLightIcon,
      regular: ThumbsDownRegularIcon,
      thin: ThumbsDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
