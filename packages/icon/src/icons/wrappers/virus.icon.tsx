import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VirusBoldIcon } from "../bold";
import { VirusDuotoneIcon } from "../duotone";
import { VirusFillIcon } from "../fill";
import { VirusLightIcon } from "../light";
import { VirusRegularIcon } from "../regular";
import { VirusThinIcon } from "../thin";

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
