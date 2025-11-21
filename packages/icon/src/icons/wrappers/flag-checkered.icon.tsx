import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlagCheckeredBoldIcon } from "../bold";
import { FlagCheckeredDuotoneIcon } from "../duotone";
import { FlagCheckeredFillIcon } from "../fill";
import { FlagCheckeredLightIcon } from "../light";
import { FlagCheckeredRegularIcon } from "../regular";
import { FlagCheckeredThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlagCheckeredIcon = memo(function FlagCheckered(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagCheckeredBoldIcon,
      duotone: FlagCheckeredDuotoneIcon,
      fill: FlagCheckeredFillIcon,
      light: FlagCheckeredLightIcon,
      regular: FlagCheckeredRegularIcon,
      thin: FlagCheckeredThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
