import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CodeBlockBold } from "../bold";
import { CodeBlockDuotone } from "../duotone";
import { CodeBlockFill } from "../fill";
import { CodeBlockLight } from "../light";
import { CodeBlockRegular } from "../regular";
import { CodeBlockThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CodeBlock = memo(function CodeBlock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodeBlockBold,
      duotone: CodeBlockDuotone,
      fill: CodeBlockFill,
      light: CodeBlockLight,
      regular: CodeBlockRegular,
      thin: CodeBlockThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
