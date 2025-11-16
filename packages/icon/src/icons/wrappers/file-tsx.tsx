import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileTsxBold } from "../bold";
import { FileTsxDuotone } from "../duotone";
import { FileTsxFill } from "../fill";
import { FileTsxLight } from "../light";
import { FileTsxRegular } from "../regular";
import { FileTsxThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileTsx = memo(function FileTsx(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileTsxBold,
      duotone: FileTsxDuotone,
      fill: FileTsxFill,
      light: FileTsxLight,
      regular: FileTsxRegular,
      thin: FileTsxThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
