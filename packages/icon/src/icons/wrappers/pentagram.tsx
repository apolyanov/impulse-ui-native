import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PentagramBold } from "../bold";
import { PentagramDuotone } from "../duotone";
import { PentagramFill } from "../fill";
import { PentagramLight } from "../light";
import { PentagramRegular } from "../regular";
import { PentagramThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pentagram = memo(function Pentagram(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PentagramBold,
      duotone: PentagramDuotone,
      fill: PentagramFill,
      light: PentagramLight,
      regular: PentagramRegular,
      thin: PentagramThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
