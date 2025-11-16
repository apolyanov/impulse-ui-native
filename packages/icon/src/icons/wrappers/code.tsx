import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CodeBold } from "../bold";
import { CodeDuotone } from "../duotone";
import { CodeFill } from "../fill";
import { CodeLight } from "../light";
import { CodeRegular } from "../regular";
import { CodeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Code = memo(function Code(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodeBold,
      duotone: CodeDuotone,
      fill: CodeFill,
      light: CodeLight,
      regular: CodeRegular,
      thin: CodeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
