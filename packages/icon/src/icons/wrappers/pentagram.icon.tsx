import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PentagramBoldIcon } from "../bold";
import { PentagramDuotoneIcon } from "../duotone";
import { PentagramFillIcon } from "../fill";
import { PentagramLightIcon } from "../light";
import { PentagramRegularIcon } from "../regular";
import { PentagramThinIcon } from "../thin";

export const PentagramIcon = memo(function Pentagram(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PentagramBoldIcon,
      duotone: PentagramDuotoneIcon,
      fill: PentagramFillIcon,
      light: PentagramLightIcon,
      regular: PentagramRegularIcon,
      thin: PentagramThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
