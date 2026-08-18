import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileJsBoldIcon } from "../bold/file-js-bold.icon";
import { FileJsDuotoneIcon } from "../duotone/file-js-duotone.icon";
import { FileJsFillIcon } from "../fill/file-js-fill.icon";
import { FileJsLightIcon } from "../light/file-js-light.icon";
import { FileJsRegularIcon } from "../regular/file-js-regular.icon";
import { FileJsThinIcon } from "../thin/file-js-thin.icon";

export const FileJsIcon = memo(function FileJs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileJsBoldIcon,
      duotone: FileJsDuotoneIcon,
      fill: FileJsFillIcon,
      light: FileJsLightIcon,
      regular: FileJsRegularIcon,
      thin: FileJsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
