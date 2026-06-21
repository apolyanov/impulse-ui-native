import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HighHeelBoldIcon } from "../bold";
import { HighHeelDuotoneIcon } from "../duotone";
import { HighHeelFillIcon } from "../fill";
import { HighHeelLightIcon } from "../light";
import { HighHeelRegularIcon } from "../regular";
import { HighHeelThinIcon } from "../thin";

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
