import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCSharpBold } from "../bold";
import { FileCSharpDuotone } from "../duotone";
import { FileCSharpFill } from "../fill";
import { FileCSharpLight } from "../light";
import { FileCSharpRegular } from "../regular";
import { FileCSharpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCSharp = memo(function FileCSharp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCSharpBold,
      duotone: FileCSharpDuotone,
      fill: FileCSharpFill,
      light: FileCSharpLight,
      regular: FileCSharpRegular,
      thin: FileCSharpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
