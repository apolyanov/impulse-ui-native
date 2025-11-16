import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MaskSadBold } from "../bold";
import { MaskSadDuotone } from "../duotone";
import { MaskSadFill } from "../fill";
import { MaskSadLight } from "../light";
import { MaskSadRegular } from "../regular";
import { MaskSadThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MaskSad = memo(function MaskSad(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MaskSadBold,
      duotone: MaskSadDuotone,
      fill: MaskSadFill,
      light: MaskSadLight,
      regular: MaskSadRegular,
      thin: MaskSadThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
