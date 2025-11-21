import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LassoBoldIcon } from "../bold";
import { LassoDuotoneIcon } from "../duotone";
import { LassoFillIcon } from "../fill";
import { LassoLightIcon } from "../light";
import { LassoRegularIcon } from "../regular";
import { LassoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
