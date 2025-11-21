import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubtitlesSlashBoldIcon } from "../bold";
import { SubtitlesSlashDuotoneIcon } from "../duotone";
import { SubtitlesSlashFillIcon } from "../fill";
import { SubtitlesSlashLightIcon } from "../light";
import { SubtitlesSlashRegularIcon } from "../regular";
import { SubtitlesSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SubtitlesSlashIcon = memo(function SubtitlesSlash(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubtitlesSlashBoldIcon,
      duotone: SubtitlesSlashDuotoneIcon,
      fill: SubtitlesSlashFillIcon,
      light: SubtitlesSlashLightIcon,
      regular: SubtitlesSlashRegularIcon,
      thin: SubtitlesSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
