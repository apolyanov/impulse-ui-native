import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MaskSadBoldIcon } from "../bold/mask-sad-bold.icon";
import { MaskSadDuotoneIcon } from "../duotone/mask-sad-duotone.icon";
import { MaskSadFillIcon } from "../fill/mask-sad-fill.icon";
import { MaskSadLightIcon } from "../light/mask-sad-light.icon";
import { MaskSadRegularIcon } from "../regular/mask-sad-regular.icon";
import { MaskSadThinIcon } from "../thin/mask-sad-thin.icon";

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
