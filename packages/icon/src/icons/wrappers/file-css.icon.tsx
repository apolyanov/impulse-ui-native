import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileCssBoldIcon } from "../bold/file-css-bold.icon";
import { FileCssDuotoneIcon } from "../duotone/file-css-duotone.icon";
import { FileCssFillIcon } from "../fill/file-css-fill.icon";
import { FileCssLightIcon } from "../light/file-css-light.icon";
import { FileCssRegularIcon } from "../regular/file-css-regular.icon";
import { FileCssThinIcon } from "../thin/file-css-thin.icon";

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
