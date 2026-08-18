import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RadicalBoldIcon } from "../bold/radical-bold.icon";
import { RadicalDuotoneIcon } from "../duotone/radical-duotone.icon";
import { RadicalFillIcon } from "../fill/radical-fill.icon";
import { RadicalLightIcon } from "../light/radical-light.icon";
import { RadicalRegularIcon } from "../regular/radical-regular.icon";
import { RadicalThinIcon } from "../thin/radical-thin.icon";

export const RadicalIcon = memo(function Radical(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RadicalBoldIcon,
      duotone: RadicalDuotoneIcon,
      fill: RadicalFillIcon,
      light: RadicalLightIcon,
      regular: RadicalRegularIcon,
      thin: RadicalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
