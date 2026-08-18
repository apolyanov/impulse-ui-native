import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SubtitlesBoldIcon } from "../bold/subtitles-bold.icon";
import { SubtitlesDuotoneIcon } from "../duotone/subtitles-duotone.icon";
import { SubtitlesFillIcon } from "../fill/subtitles-fill.icon";
import { SubtitlesLightIcon } from "../light/subtitles-light.icon";
import { SubtitlesRegularIcon } from "../regular/subtitles-regular.icon";
import { SubtitlesThinIcon } from "../thin/subtitles-thin.icon";

export const SubtitlesIcon = memo(function Subtitles(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubtitlesBoldIcon,
      duotone: SubtitlesDuotoneIcon,
      fill: SubtitlesFillIcon,
      light: SubtitlesLightIcon,
      regular: SubtitlesRegularIcon,
      thin: SubtitlesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
