import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LassoBold } from "../bold";
import { LassoDuotone } from "../duotone";
import { LassoFill } from "../fill";
import { LassoLight } from "../light";
import { LassoRegular } from "../regular";
import { LassoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lasso = memo(function Lasso(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LassoBold,
      duotone: LassoDuotone,
      fill: LassoFill,
      light: LassoLight,
      regular: LassoRegular,
      thin: LassoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
