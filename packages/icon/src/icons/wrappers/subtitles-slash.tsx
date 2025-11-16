import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubtitlesSlashBold } from "../bold";
import { SubtitlesSlashDuotone } from "../duotone";
import { SubtitlesSlashFill } from "../fill";
import { SubtitlesSlashLight } from "../light";
import { SubtitlesSlashRegular } from "../regular";
import { SubtitlesSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SubtitlesSlash = memo(function SubtitlesSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubtitlesSlashBold,
      duotone: SubtitlesSlashDuotone,
      fill: SubtitlesSlashFill,
      light: SubtitlesSlashLight,
      regular: SubtitlesSlashRegular,
      thin: SubtitlesSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
