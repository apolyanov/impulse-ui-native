import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CodeSimpleBold } from "../bold";
import { CodeSimpleDuotone } from "../duotone";
import { CodeSimpleFill } from "../fill";
import { CodeSimpleLight } from "../light";
import { CodeSimpleRegular } from "../regular";
import { CodeSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CodeSimple = memo(function CodeSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodeSimpleBold,
      duotone: CodeSimpleDuotone,
      fill: CodeSimpleFill,
      light: CodeSimpleLight,
      regular: CodeSimpleRegular,
      thin: CodeSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
