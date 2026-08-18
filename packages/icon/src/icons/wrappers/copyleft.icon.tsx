import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CopyleftBoldIcon } from "../bold/copyleft-bold.icon";
import { CopyleftDuotoneIcon } from "../duotone/copyleft-duotone.icon";
import { CopyleftFillIcon } from "../fill/copyleft-fill.icon";
import { CopyleftLightIcon } from "../light/copyleft-light.icon";
import { CopyleftRegularIcon } from "../regular/copyleft-regular.icon";
import { CopyleftThinIcon } from "../thin/copyleft-thin.icon";

export const CopyleftIcon = memo(function Copyleft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CopyleftBoldIcon,
      duotone: CopyleftDuotoneIcon,
      fill: CopyleftFillIcon,
      light: CopyleftLightIcon,
      regular: CopyleftRegularIcon,
      thin: CopyleftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
