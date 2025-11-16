import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ImagesBold } from "../bold";
import { ImagesDuotone } from "../duotone";
import { ImagesFill } from "../fill";
import { ImagesLight } from "../light";
import { ImagesRegular } from "../regular";
import { ImagesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Images = memo(function Images(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ImagesBold,
      duotone: ImagesDuotone,
      fill: ImagesFill,
      light: ImagesLight,
      regular: ImagesRegular,
      thin: ImagesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
