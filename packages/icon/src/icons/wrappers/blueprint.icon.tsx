import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BlueprintBoldIcon } from "../bold";
import { BlueprintDuotoneIcon } from "../duotone";
import { BlueprintFillIcon } from "../fill";
import { BlueprintLightIcon } from "../light";
import { BlueprintRegularIcon } from "../regular";
import { BlueprintThinIcon } from "../thin";

export const BlueprintIcon = memo(function Blueprint(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BlueprintBoldIcon,
      duotone: BlueprintDuotoneIcon,
      fill: BlueprintFillIcon,
      light: BlueprintLightIcon,
      regular: BlueprintRegularIcon,
      thin: BlueprintThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
