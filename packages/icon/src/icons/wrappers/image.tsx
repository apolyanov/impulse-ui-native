import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ImageBold } from "../bold";
import { ImageDuotone } from "../duotone";
import { ImageFill } from "../fill";
import { ImageLight } from "../light";
import { ImageRegular } from "../regular";
import { ImageThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Image = memo(function Image(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImageBold,
      duotone: ImageDuotone,
      fill: ImageFill,
      light: ImageLight,
      regular: ImageRegular,
      thin: ImageThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
