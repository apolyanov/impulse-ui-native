import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DownloadBold } from "../bold";
import { DownloadDuotone } from "../duotone";
import { DownloadFill } from "../fill";
import { DownloadLight } from "../light";
import { DownloadRegular } from "../regular";
import { DownloadThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Download = memo(function Download(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DownloadBold,
      duotone: DownloadDuotone,
      fill: DownloadFill,
      light: DownloadLight,
      regular: DownloadRegular,
      thin: DownloadThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
