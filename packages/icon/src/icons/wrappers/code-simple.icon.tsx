import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CodeSimpleBoldIcon } from "../bold/code-simple-bold.icon";
import { CodeSimpleDuotoneIcon } from "../duotone/code-simple-duotone.icon";
import { CodeSimpleFillIcon } from "../fill/code-simple-fill.icon";
import { CodeSimpleLightIcon } from "../light/code-simple-light.icon";
import { CodeSimpleRegularIcon } from "../regular/code-simple-regular.icon";
import { CodeSimpleThinIcon } from "../thin/code-simple-thin.icon";

export const CodeSimpleIcon = memo(function CodeSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodeSimpleBoldIcon,
      duotone: CodeSimpleDuotoneIcon,
      fill: CodeSimpleFillIcon,
      light: CodeSimpleLightIcon,
      regular: CodeSimpleRegularIcon,
      thin: CodeSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
