import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CropBold } from "../bold";
import { CropDuotone } from "../duotone";
import { CropFill } from "../fill";
import { CropLight } from "../light";
import { CropRegular } from "../regular";
import { CropThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Crop = memo(function Crop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CropBold,
      duotone: CropDuotone,
      fill: CropFill,
      light: CropLight,
      regular: CropRegular,
      thin: CropThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
