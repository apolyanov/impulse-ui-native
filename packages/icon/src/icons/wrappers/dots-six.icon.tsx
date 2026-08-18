import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotsSixBoldIcon } from "../bold/dots-six-bold.icon";
import { DotsSixDuotoneIcon } from "../duotone/dots-six-duotone.icon";
import { DotsSixFillIcon } from "../fill/dots-six-fill.icon";
import { DotsSixLightIcon } from "../light/dots-six-light.icon";
import { DotsSixRegularIcon } from "../regular/dots-six-regular.icon";
import { DotsSixThinIcon } from "../thin/dots-six-thin.icon";

export const DotsSixIcon = memo(function DotsSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsSixBoldIcon,
      duotone: DotsSixDuotoneIcon,
      fill: DotsSixFillIcon,
      light: DotsSixLightIcon,
      regular: DotsSixRegularIcon,
      thin: DotsSixThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
