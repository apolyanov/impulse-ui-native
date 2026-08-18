import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StandardDefinitionBoldIcon } from "../bold/standard-definition-bold.icon";
import { StandardDefinitionDuotoneIcon } from "../duotone/standard-definition-duotone.icon";
import { StandardDefinitionFillIcon } from "../fill/standard-definition-fill.icon";
import { StandardDefinitionLightIcon } from "../light/standard-definition-light.icon";
import { StandardDefinitionRegularIcon } from "../regular/standard-definition-regular.icon";
import { StandardDefinitionThinIcon } from "../thin/standard-definition-thin.icon";

export const StandardDefinitionIcon = memo(function StandardDefinition(
  props: IconWrapperProps,
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
