import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CropBoldIcon } from "../bold/crop-bold.icon";
import { CropDuotoneIcon } from "../duotone/crop-duotone.icon";
import { CropFillIcon } from "../fill/crop-fill.icon";
import { CropLightIcon } from "../light/crop-light.icon";
import { CropRegularIcon } from "../regular/crop-regular.icon";
import { CropThinIcon } from "../thin/crop-thin.icon";

export const CropIcon = memo(function Crop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CropBoldIcon,
      duotone: CropDuotoneIcon,
      fill: CropFillIcon,
      light: CropLightIcon,
      regular: CropRegularIcon,
      thin: CropThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
