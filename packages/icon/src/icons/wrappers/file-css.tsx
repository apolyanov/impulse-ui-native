import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCssBold } from "../bold";
import { FileCssDuotone } from "../duotone";
import { FileCssFill } from "../fill";
import { FileCssLight } from "../light";
import { FileCssRegular } from "../regular";
import { FileCssThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCss = memo(function FileCss(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCssBold,
      duotone: FileCssDuotone,
      fill: FileCssFill,
      light: FileCssLight,
      regular: FileCssRegular,
      thin: FileCssThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
