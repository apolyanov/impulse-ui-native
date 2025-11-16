import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HighDefinitionBold } from "../bold";
import { HighDefinitionDuotone } from "../duotone";
import { HighDefinitionFill } from "../fill";
import { HighDefinitionLight } from "../light";
import { HighDefinitionRegular } from "../regular";
import { HighDefinitionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HighDefinition = memo(function HighDefinition(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HighDefinitionBold,
      duotone: HighDefinitionDuotone,
      fill: HighDefinitionFill,
      light: HighDefinitionLight,
      regular: HighDefinitionRegular,
      thin: HighDefinitionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
