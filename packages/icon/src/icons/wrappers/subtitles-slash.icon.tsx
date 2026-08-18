import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SubtitlesSlashBoldIcon } from "../bold/subtitles-slash-bold.icon";
import { SubtitlesSlashDuotoneIcon } from "../duotone/subtitles-slash-duotone.icon";
import { SubtitlesSlashFillIcon } from "../fill/subtitles-slash-fill.icon";
import { SubtitlesSlashLightIcon } from "../light/subtitles-slash-light.icon";
import { SubtitlesSlashRegularIcon } from "../regular/subtitles-slash-regular.icon";
import { SubtitlesSlashThinIcon } from "../thin/subtitles-slash-thin.icon";

export const SubtitlesSlashIcon = memo(function SubtitlesSlash(
  props: IconWrapperProps,
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
