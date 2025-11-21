import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCSharpBoldIcon } from "../bold";
import { FileCSharpDuotoneIcon } from "../duotone";
import { FileCSharpFillIcon } from "../fill";
import { FileCSharpLightIcon } from "../light";
import { FileCSharpRegularIcon } from "../regular";
import { FileCSharpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCSharpIcon = memo(function FileCSharp(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCSharpBoldIcon,
      duotone: FileCSharpDuotoneIcon,
      fill: FileCSharpFillIcon,
      light: FileCSharpLightIcon,
      regular: FileCSharpRegularIcon,
      thin: FileCSharpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
