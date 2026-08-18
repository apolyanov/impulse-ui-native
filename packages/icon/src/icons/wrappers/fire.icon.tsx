import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FireBoldIcon } from "../bold/fire-bold.icon";
import { FireDuotoneIcon } from "../duotone/fire-duotone.icon";
import { FireFillIcon } from "../fill/fire-fill.icon";
import { FireLightIcon } from "../light/fire-light.icon";
import { FireRegularIcon } from "../regular/fire-regular.icon";
import { FireThinIcon } from "../thin/fire-thin.icon";

export const FireIcon = memo(function Fire(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FireBoldIcon,
      duotone: FireDuotoneIcon,
      fill: FireFillIcon,
      light: FireLightIcon,
      regular: FireRegularIcon,
      thin: FireThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
