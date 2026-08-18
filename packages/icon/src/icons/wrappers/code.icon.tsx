import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CodeBoldIcon } from "../bold/code-bold.icon";
import { CodeDuotoneIcon } from "../duotone/code-duotone.icon";
import { CodeFillIcon } from "../fill/code-fill.icon";
import { CodeLightIcon } from "../light/code-light.icon";
import { CodeRegularIcon } from "../regular/code-regular.icon";
import { CodeThinIcon } from "../thin/code-thin.icon";

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
