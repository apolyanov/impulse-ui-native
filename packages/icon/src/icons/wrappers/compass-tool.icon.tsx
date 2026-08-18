import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CompassToolBoldIcon } from "../bold/compass-tool-bold.icon";
import { CompassToolDuotoneIcon } from "../duotone/compass-tool-duotone.icon";
import { CompassToolFillIcon } from "../fill/compass-tool-fill.icon";
import { CompassToolLightIcon } from "../light/compass-tool-light.icon";
import { CompassToolRegularIcon } from "../regular/compass-tool-regular.icon";
import { CompassToolThinIcon } from "../thin/compass-tool-thin.icon";

export const CompassToolIcon = memo(function CompassTool(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CompassToolBoldIcon,
      duotone: CompassToolDuotoneIcon,
      fill: CompassToolFillIcon,
      light: CompassToolLightIcon,
      regular: CompassToolRegularIcon,
      thin: CompassToolThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
