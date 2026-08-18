import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BlueprintBoldIcon } from "../bold/blueprint-bold.icon";
import { BlueprintDuotoneIcon } from "../duotone/blueprint-duotone.icon";
import { BlueprintFillIcon } from "../fill/blueprint-fill.icon";
import { BlueprintLightIcon } from "../light/blueprint-light.icon";
import { BlueprintRegularIcon } from "../regular/blueprint-regular.icon";
import { BlueprintThinIcon } from "../thin/blueprint-thin.icon";

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
