import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TentBoldIcon } from "../bold/tent-bold.icon";
import { TentDuotoneIcon } from "../duotone/tent-duotone.icon";
import { TentFillIcon } from "../fill/tent-fill.icon";
import { TentLightIcon } from "../light/tent-light.icon";
import { TentRegularIcon } from "../regular/tent-regular.icon";
import { TentThinIcon } from "../thin/tent-thin.icon";

export const TentIcon = memo(function Tent(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TentBoldIcon,
      duotone: TentDuotoneIcon,
      fill: TentFillIcon,
      light: TentLightIcon,
      regular: TentRegularIcon,
      thin: TentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
