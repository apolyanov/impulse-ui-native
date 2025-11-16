import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VirusBold } from "../bold";
import { VirusDuotone } from "../duotone";
import { VirusFill } from "../fill";
import { VirusLight } from "../light";
import { VirusRegular } from "../regular";
import { VirusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Virus = memo(function Virus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VirusBold,
      duotone: VirusDuotone,
      fill: VirusFill,
      light: VirusLight,
      regular: VirusRegular,
      thin: VirusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
