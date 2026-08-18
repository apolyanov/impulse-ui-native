import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MopedFrontBoldIcon } from "../bold/moped-front-bold.icon";
import { MopedFrontDuotoneIcon } from "../duotone/moped-front-duotone.icon";
import { MopedFrontFillIcon } from "../fill/moped-front-fill.icon";
import { MopedFrontLightIcon } from "../light/moped-front-light.icon";
import { MopedFrontRegularIcon } from "../regular/moped-front-regular.icon";
import { MopedFrontThinIcon } from "../thin/moped-front-thin.icon";

export const MopedFrontIcon = memo(function MopedFront(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MopedFrontBoldIcon,
      duotone: MopedFrontDuotoneIcon,
      fill: MopedFrontFillIcon,
      light: MopedFrontLightIcon,
      regular: MopedFrontRegularIcon,
      thin: MopedFrontThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
