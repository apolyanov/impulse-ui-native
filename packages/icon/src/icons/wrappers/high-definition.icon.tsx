import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HighDefinitionBoldIcon } from "../bold/high-definition-bold.icon";
import { HighDefinitionDuotoneIcon } from "../duotone/high-definition-duotone.icon";
import { HighDefinitionFillIcon } from "../fill/high-definition-fill.icon";
import { HighDefinitionLightIcon } from "../light/high-definition-light.icon";
import { HighDefinitionRegularIcon } from "../regular/high-definition-regular.icon";
import { HighDefinitionThinIcon } from "../thin/high-definition-thin.icon";

export const HighDefinitionIcon = memo(function HighDefinition(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HighDefinitionBoldIcon,
      duotone: HighDefinitionDuotoneIcon,
      fill: HighDefinitionFillIcon,
      light: HighDefinitionLightIcon,
      regular: HighDefinitionRegularIcon,
      thin: HighDefinitionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
