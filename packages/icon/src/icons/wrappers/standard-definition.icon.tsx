import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StandardDefinitionBoldIcon } from "../bold";
import { StandardDefinitionDuotoneIcon } from "../duotone";
import { StandardDefinitionFillIcon } from "../fill";
import { StandardDefinitionLightIcon } from "../light";
import { StandardDefinitionRegularIcon } from "../regular";
import { StandardDefinitionThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StandardDefinitionIcon = memo(function StandardDefinition(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StandardDefinitionBoldIcon,
      duotone: StandardDefinitionDuotoneIcon,
      fill: StandardDefinitionFillIcon,
      light: StandardDefinitionLightIcon,
      regular: StandardDefinitionRegularIcon,
      thin: StandardDefinitionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
