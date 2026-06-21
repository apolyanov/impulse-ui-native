import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileCssBoldIcon } from "../bold";
import { FileCssDuotoneIcon } from "../duotone";
import { FileCssFillIcon } from "../fill";
import { FileCssLightIcon } from "../light";
import { FileCssRegularIcon } from "../regular";
import { FileCssThinIcon } from "../thin";

export const FileCssIcon = memo(function FileCss(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCssBoldIcon,
      duotone: FileCssDuotoneIcon,
      fill: FileCssFillIcon,
      light: FileCssLightIcon,
      regular: FileCssRegularIcon,
      thin: FileCssThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
