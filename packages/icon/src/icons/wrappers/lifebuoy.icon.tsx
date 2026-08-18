import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LifebuoyBoldIcon } from "../bold/lifebuoy-bold.icon";
import { LifebuoyDuotoneIcon } from "../duotone/lifebuoy-duotone.icon";
import { LifebuoyFillIcon } from "../fill/lifebuoy-fill.icon";
import { LifebuoyLightIcon } from "../light/lifebuoy-light.icon";
import { LifebuoyRegularIcon } from "../regular/lifebuoy-regular.icon";
import { LifebuoyThinIcon } from "../thin/lifebuoy-thin.icon";

export const LifebuoyIcon = memo(function Lifebuoy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LifebuoyBoldIcon,
      duotone: LifebuoyDuotoneIcon,
      fill: LifebuoyFillIcon,
      light: LifebuoyLightIcon,
      regular: LifebuoyRegularIcon,
      thin: LifebuoyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
