import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FunctionBold } from "../bold";
import { FunctionDuotone } from "../duotone";
import { FunctionFill } from "../fill";
import { FunctionLight } from "../light";
import { FunctionRegular } from "../regular";
import { FunctionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Function = memo(function Function(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunctionBold,
      duotone: FunctionDuotone,
      fill: FunctionFill,
      light: FunctionLight,
      regular: FunctionRegular,
      thin: FunctionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
