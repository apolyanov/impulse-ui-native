import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MopedBoldIcon } from "../bold/moped-bold.icon";
import { MopedDuotoneIcon } from "../duotone/moped-duotone.icon";
import { MopedFillIcon } from "../fill/moped-fill.icon";
import { MopedLightIcon } from "../light/moped-light.icon";
import { MopedRegularIcon } from "../regular/moped-regular.icon";
import { MopedThinIcon } from "../thin/moped-thin.icon";

export const MopedIcon = memo(function Moped(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MopedBoldIcon,
      duotone: MopedDuotoneIcon,
      fill: MopedFillIcon,
      light: MopedLightIcon,
      regular: MopedRegularIcon,
      thin: MopedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
