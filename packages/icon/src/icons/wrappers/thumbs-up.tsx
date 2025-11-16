import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThumbsUpBold } from "../bold";
import { ThumbsUpDuotone } from "../duotone";
import { ThumbsUpFill } from "../fill";
import { ThumbsUpLight } from "../light";
import { ThumbsUpRegular } from "../regular";
import { ThumbsUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThumbsUp = memo(function ThumbsUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThumbsUpBold,
      duotone: ThumbsUpDuotone,
      fill: ThumbsUpFill,
      light: ThumbsUpLight,
      regular: ThumbsUpRegular,
      thin: ThumbsUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
