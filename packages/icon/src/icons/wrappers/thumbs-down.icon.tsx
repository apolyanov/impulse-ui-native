import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ThumbsDownBoldIcon } from "../bold";
import { ThumbsDownDuotoneIcon } from "../duotone";
import { ThumbsDownFillIcon } from "../fill";
import { ThumbsDownLightIcon } from "../light";
import { ThumbsDownRegularIcon } from "../regular";
import { ThumbsDownThinIcon } from "../thin";

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
