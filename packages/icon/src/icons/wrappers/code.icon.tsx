import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CodeBoldIcon } from "../bold";
import { CodeDuotoneIcon } from "../duotone";
import { CodeFillIcon } from "../fill";
import { CodeLightIcon } from "../light";
import { CodeRegularIcon } from "../regular";
import { CodeThinIcon } from "../thin";

export const CodeIcon = memo(function Code(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodeBoldIcon,
      duotone: CodeDuotoneIcon,
      fill: CodeFillIcon,
      light: CodeLightIcon,
      regular: CodeRegularIcon,
      thin: CodeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
