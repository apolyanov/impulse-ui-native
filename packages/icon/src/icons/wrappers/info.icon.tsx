import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { InfoBoldIcon } from "../bold/info-bold.icon";
import { InfoDuotoneIcon } from "../duotone/info-duotone.icon";
import { InfoFillIcon } from "../fill/info-fill.icon";
import { InfoLightIcon } from "../light/info-light.icon";
import { InfoRegularIcon } from "../regular/info-regular.icon";
import { InfoThinIcon } from "../thin/info-thin.icon";

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
