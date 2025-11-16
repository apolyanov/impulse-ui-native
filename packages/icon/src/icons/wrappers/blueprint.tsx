import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BlueprintBold } from "../bold";
import { BlueprintDuotone } from "../duotone";
import { BlueprintFill } from "../fill";
import { BlueprintLight } from "../light";
import { BlueprintRegular } from "../regular";
import { BlueprintThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Blueprint = memo(function Blueprint(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BlueprintBold,
      duotone: BlueprintDuotone,
      fill: BlueprintFill,
      light: BlueprintLight,
      regular: BlueprintRegular,
      thin: BlueprintThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
