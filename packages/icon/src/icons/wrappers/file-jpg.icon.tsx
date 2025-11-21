import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileJpgBoldIcon } from "../bold";
import { FileJpgDuotoneIcon } from "../duotone";
import { FileJpgFillIcon } from "../fill";
import { FileJpgLightIcon } from "../light";
import { FileJpgRegularIcon } from "../regular";
import { FileJpgThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileJpgIcon = memo(function FileJpg(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileJpgBoldIcon,
      duotone: FileJpgDuotoneIcon,
      fill: FileJpgFillIcon,
      light: FileJpgLightIcon,
      regular: FileJpgRegularIcon,
      thin: FileJpgThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
