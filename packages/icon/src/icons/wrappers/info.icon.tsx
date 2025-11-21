import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { InfoBoldIcon } from "../bold";
import { InfoDuotoneIcon } from "../duotone";
import { InfoFillIcon } from "../fill";
import { InfoLightIcon } from "../light";
import { InfoRegularIcon } from "../regular";
import { InfoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const InfoIcon = memo(function Info(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: InfoBoldIcon,
      duotone: InfoDuotoneIcon,
      fill: InfoFillIcon,
      light: InfoLightIcon,
      regular: InfoRegularIcon,
      thin: InfoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
