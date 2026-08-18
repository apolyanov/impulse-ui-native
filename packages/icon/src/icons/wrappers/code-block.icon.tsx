import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CodeBlockBoldIcon } from "../bold/code-block-bold.icon";
import { CodeBlockDuotoneIcon } from "../duotone/code-block-duotone.icon";
import { CodeBlockFillIcon } from "../fill/code-block-fill.icon";
import { CodeBlockLightIcon } from "../light/code-block-light.icon";
import { CodeBlockRegularIcon } from "../regular/code-block-regular.icon";
import { CodeBlockThinIcon } from "../thin/code-block-thin.icon";

export const CodeBlockIcon = memo(function CodeBlock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodeBlockBoldIcon,
      duotone: CodeBlockDuotoneIcon,
      fill: CodeBlockFillIcon,
      light: CodeBlockLightIcon,
      regular: CodeBlockRegularIcon,
      thin: CodeBlockThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
