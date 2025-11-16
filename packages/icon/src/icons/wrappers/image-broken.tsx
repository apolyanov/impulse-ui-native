import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ImageBrokenBold } from "../bold";
import { ImageBrokenDuotone } from "../duotone";
import { ImageBrokenFill } from "../fill";
import { ImageBrokenLight } from "../light";
import { ImageBrokenRegular } from "../regular";
import { ImageBrokenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ImageBroken = memo(function ImageBroken(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImageBrokenBold,
      duotone: ImageBrokenDuotone,
      fill: ImageBrokenFill,
      light: ImageBrokenLight,
      regular: ImageBrokenRegular,
      thin: ImageBrokenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
