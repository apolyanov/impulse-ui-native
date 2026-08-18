import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DownloadBoldIcon } from "../bold/download-bold.icon";
import { DownloadDuotoneIcon } from "../duotone/download-duotone.icon";
import { DownloadFillIcon } from "../fill/download-fill.icon";
import { DownloadLightIcon } from "../light/download-light.icon";
import { DownloadRegularIcon } from "../regular/download-regular.icon";
import { DownloadThinIcon } from "../thin/download-thin.icon";

export const DownloadIcon = memo(function Download(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DownloadBoldIcon,
      duotone: DownloadDuotoneIcon,
      fill: DownloadFillIcon,
      light: DownloadLightIcon,
      regular: DownloadRegularIcon,
      thin: DownloadThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
