import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StandardDefinitionBold } from "../bold";
import { StandardDefinitionDuotone } from "../duotone";
import { StandardDefinitionFill } from "../fill";
import { StandardDefinitionLight } from "../light";
import { StandardDefinitionRegular } from "../regular";
import { StandardDefinitionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StandardDefinition = memo(function StandardDefinition(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StandardDefinitionBold,
      duotone: StandardDefinitionDuotone,
      fill: StandardDefinitionFill,
      light: StandardDefinitionLight,
      regular: StandardDefinitionRegular,
      thin: StandardDefinitionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
