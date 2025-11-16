import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DownloadSimpleBold } from "../bold";
import { DownloadSimpleDuotone } from "../duotone";
import { DownloadSimpleFill } from "../fill";
import { DownloadSimpleLight } from "../light";
import { DownloadSimpleRegular } from "../regular";
import { DownloadSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DownloadSimple = memo(function DownloadSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DownloadSimpleBold,
      duotone: DownloadSimpleDuotone,
      fill: DownloadSimpleFill,
      light: DownloadSimpleLight,
      regular: DownloadSimpleRegular,
      thin: DownloadSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
