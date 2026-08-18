import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VirusBoldIcon } from "../bold/virus-bold.icon";
import { VirusDuotoneIcon } from "../duotone/virus-duotone.icon";
import { VirusFillIcon } from "../fill/virus-fill.icon";
import { VirusLightIcon } from "../light/virus-light.icon";
import { VirusRegularIcon } from "../regular/virus-regular.icon";
import { VirusThinIcon } from "../thin/virus-thin.icon";

export const VirusIcon = memo(function Virus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VirusBoldIcon,
      duotone: VirusDuotoneIcon,
      fill: VirusFillIcon,
      light: VirusLightIcon,
      regular: VirusRegularIcon,
      thin: VirusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
