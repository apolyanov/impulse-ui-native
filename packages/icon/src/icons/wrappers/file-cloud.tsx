import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCloudBold } from "../bold";
import { FileCloudDuotone } from "../duotone";
import { FileCloudFill } from "../fill";
import { FileCloudLight } from "../light";
import { FileCloudRegular } from "../regular";
import { FileCloudThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCloud = memo(function FileCloud(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCloudBold,
      duotone: FileCloudDuotone,
      fill: FileCloudFill,
      light: FileCloudLight,
      regular: FileCloudRegular,
      thin: FileCloudThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
