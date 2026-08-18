import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UniteBoldIcon } from "../bold/unite-bold.icon";
import { UniteDuotoneIcon } from "../duotone/unite-duotone.icon";
import { UniteFillIcon } from "../fill/unite-fill.icon";
import { UniteLightIcon } from "../light/unite-light.icon";
import { UniteRegularIcon } from "../regular/unite-regular.icon";
import { UniteThinIcon } from "../thin/unite-thin.icon";

export const UniteIcon = memo(function Unite(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UniteBoldIcon,
      duotone: UniteDuotoneIcon,
      fill: UniteFillIcon,
      light: UniteLightIcon,
      regular: UniteRegularIcon,
      thin: UniteThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
