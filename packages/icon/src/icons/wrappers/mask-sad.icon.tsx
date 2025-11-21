import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MaskSadBoldIcon } from "../bold";
import { MaskSadDuotoneIcon } from "../duotone";
import { MaskSadFillIcon } from "../fill";
import { MaskSadLightIcon } from "../light";
import { MaskSadRegularIcon } from "../regular";
import { MaskSadThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MaskSadIcon = memo(function MaskSad(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MaskSadBoldIcon,
      duotone: MaskSadDuotoneIcon,
      fill: MaskSadFillIcon,
      light: MaskSadLightIcon,
      regular: MaskSadRegularIcon,
      thin: MaskSadThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
