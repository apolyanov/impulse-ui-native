import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCloudBoldIcon } from "../bold";
import { FileCloudDuotoneIcon } from "../duotone";
import { FileCloudFillIcon } from "../fill";
import { FileCloudLightIcon } from "../light";
import { FileCloudRegularIcon } from "../regular";
import { FileCloudThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCloudIcon = memo(function FileCloud(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCloudBoldIcon,
      duotone: FileCloudDuotoneIcon,
      fill: FileCloudFillIcon,
      light: FileCloudLightIcon,
      regular: FileCloudRegularIcon,
      thin: FileCloudThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
