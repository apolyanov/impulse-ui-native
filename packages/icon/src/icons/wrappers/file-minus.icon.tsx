import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileMinusBoldIcon } from "../bold/file-minus-bold.icon";
import { FileMinusDuotoneIcon } from "../duotone/file-minus-duotone.icon";
import { FileMinusFillIcon } from "../fill/file-minus-fill.icon";
import { FileMinusLightIcon } from "../light/file-minus-light.icon";
import { FileMinusRegularIcon } from "../regular/file-minus-regular.icon";
import { FileMinusThinIcon } from "../thin/file-minus-thin.icon";

export const FileMinusIcon = memo(function FileMinus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileMinusBoldIcon,
      duotone: FileMinusDuotoneIcon,
      fill: FileMinusFillIcon,
      light: FileMinusLightIcon,
      regular: FileMinusRegularIcon,
      thin: FileMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
