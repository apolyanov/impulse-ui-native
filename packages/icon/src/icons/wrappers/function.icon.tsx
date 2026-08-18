import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FunctionBoldIcon } from "../bold/function-bold.icon";
import { FunctionDuotoneIcon } from "../duotone/function-duotone.icon";
import { FunctionFillIcon } from "../fill/function-fill.icon";
import { FunctionLightIcon } from "../light/function-light.icon";
import { FunctionRegularIcon } from "../regular/function-regular.icon";
import { FunctionThinIcon } from "../thin/function-thin.icon";

export const FunctionIcon = memo(function Function(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunctionBoldIcon,
      duotone: FunctionDuotoneIcon,
      fill: FunctionFillIcon,
      light: FunctionLightIcon,
      regular: FunctionRegularIcon,
      thin: FunctionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
