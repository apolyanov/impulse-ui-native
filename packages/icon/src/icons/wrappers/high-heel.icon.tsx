import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HighHeelBoldIcon } from "../bold/high-heel-bold.icon";
import { HighHeelDuotoneIcon } from "../duotone/high-heel-duotone.icon";
import { HighHeelFillIcon } from "../fill/high-heel-fill.icon";
import { HighHeelLightIcon } from "../light/high-heel-light.icon";
import { HighHeelRegularIcon } from "../regular/high-heel-regular.icon";
import { HighHeelThinIcon } from "../thin/high-heel-thin.icon";

export const HighHeelIcon = memo(function HighHeel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HighHeelBoldIcon,
      duotone: HighHeelDuotoneIcon,
      fill: HighHeelFillIcon,
      light: HighHeelLightIcon,
      regular: HighHeelRegularIcon,
      thin: HighHeelThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
