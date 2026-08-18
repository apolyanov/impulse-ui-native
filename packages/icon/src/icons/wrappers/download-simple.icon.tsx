import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DownloadSimpleBoldIcon } from "../bold/download-simple-bold.icon";
import { DownloadSimpleDuotoneIcon } from "../duotone/download-simple-duotone.icon";
import { DownloadSimpleFillIcon } from "../fill/download-simple-fill.icon";
import { DownloadSimpleLightIcon } from "../light/download-simple-light.icon";
import { DownloadSimpleRegularIcon } from "../regular/download-simple-regular.icon";
import { DownloadSimpleThinIcon } from "../thin/download-simple-thin.icon";

export const DownloadSimpleIcon = memo(function DownloadSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DownloadSimpleBoldIcon,
      duotone: DownloadSimpleDuotoneIcon,
      fill: DownloadSimpleFillIcon,
      light: DownloadSimpleLightIcon,
      regular: DownloadSimpleRegularIcon,
      thin: DownloadSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
