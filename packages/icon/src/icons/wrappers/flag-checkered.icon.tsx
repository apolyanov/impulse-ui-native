import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlagCheckeredBoldIcon } from "../bold/flag-checkered-bold.icon";
import { FlagCheckeredDuotoneIcon } from "../duotone/flag-checkered-duotone.icon";
import { FlagCheckeredFillIcon } from "../fill/flag-checkered-fill.icon";
import { FlagCheckeredLightIcon } from "../light/flag-checkered-light.icon";
import { FlagCheckeredRegularIcon } from "../regular/flag-checkered-regular.icon";
import { FlagCheckeredThinIcon } from "../thin/flag-checkered-thin.icon";

export const FlagCheckeredIcon = memo(function FlagCheckered(
  props: IconWrapperProps,
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
