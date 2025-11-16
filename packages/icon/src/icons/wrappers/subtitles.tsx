import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubtitlesBold } from "../bold";
import { SubtitlesDuotone } from "../duotone";
import { SubtitlesFill } from "../fill";
import { SubtitlesLight } from "../light";
import { SubtitlesRegular } from "../regular";
import { SubtitlesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Subtitles = memo(function Subtitles(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubtitlesBold,
      duotone: SubtitlesDuotone,
      fill: SubtitlesFill,
      light: SubtitlesLight,
      regular: SubtitlesRegular,
      thin: SubtitlesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
