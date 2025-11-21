import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FunctionBoldIcon } from "../bold";
import { FunctionDuotoneIcon } from "../duotone";
import { FunctionFillIcon } from "../fill";
import { FunctionLightIcon } from "../light";
import { FunctionRegularIcon } from "../regular";
import { FunctionThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
