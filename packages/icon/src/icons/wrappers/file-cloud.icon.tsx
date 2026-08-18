import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileCloudBoldIcon } from "../bold/file-cloud-bold.icon";
import { FileCloudDuotoneIcon } from "../duotone/file-cloud-duotone.icon";
import { FileCloudFillIcon } from "../fill/file-cloud-fill.icon";
import { FileCloudLightIcon } from "../light/file-cloud-light.icon";
import { FileCloudRegularIcon } from "../regular/file-cloud-regular.icon";
import { FileCloudThinIcon } from "../thin/file-cloud-thin.icon";

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
