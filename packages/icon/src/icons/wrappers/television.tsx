import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TelevisionBold } from "../bold";
import { TelevisionDuotone } from "../duotone";
import { TelevisionFill } from "../fill";
import { TelevisionLight } from "../light";
import { TelevisionRegular } from "../regular";
import { TelevisionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Television = memo(function Television(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TelevisionBold,
      duotone: TelevisionDuotone,
      fill: TelevisionFill,
      light: TelevisionLight,
      regular: TelevisionRegular,
      thin: TelevisionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
