import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LassoBoldIcon } from "../bold/lasso-bold.icon";
import { LassoDuotoneIcon } from "../duotone/lasso-duotone.icon";
import { LassoFillIcon } from "../fill/lasso-fill.icon";
import { LassoLightIcon } from "../light/lasso-light.icon";
import { LassoRegularIcon } from "../regular/lasso-regular.icon";
import { LassoThinIcon } from "../thin/lasso-thin.icon";

export const LassoIcon = memo(function Lasso(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LassoBoldIcon,
      duotone: LassoDuotoneIcon,
      fill: LassoFillIcon,
      light: LassoLightIcon,
      regular: LassoRegularIcon,
      thin: LassoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
