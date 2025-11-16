import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThumbsDownBold } from "../bold";
import { ThumbsDownDuotone } from "../duotone";
import { ThumbsDownFill } from "../fill";
import { ThumbsDownLight } from "../light";
import { ThumbsDownRegular } from "../regular";
import { ThumbsDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThumbsDown = memo(function ThumbsDown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThumbsDownBold,
      duotone: ThumbsDownDuotone,
      fill: ThumbsDownFill,
      light: ThumbsDownLight,
      regular: ThumbsDownRegular,
      thin: ThumbsDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
