import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileCBoldIcon } from "../bold/file-c-bold.icon";
import { FileCDuotoneIcon } from "../duotone/file-c-duotone.icon";
import { FileCFillIcon } from "../fill/file-c-fill.icon";
import { FileCLightIcon } from "../light/file-c-light.icon";
import { FileCRegularIcon } from "../regular/file-c-regular.icon";
import { FileCThinIcon } from "../thin/file-c-thin.icon";

export const FileCIcon = memo(function FileC(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCBoldIcon,
      duotone: FileCDuotoneIcon,
      fill: FileCFillIcon,
      light: FileCLightIcon,
      regular: FileCRegularIcon,
      thin: FileCThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
