import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RepeatOnceBoldIcon } from "../bold/repeat-once-bold.icon";
import { RepeatOnceDuotoneIcon } from "../duotone/repeat-once-duotone.icon";
import { RepeatOnceFillIcon } from "../fill/repeat-once-fill.icon";
import { RepeatOnceLightIcon } from "../light/repeat-once-light.icon";
import { RepeatOnceRegularIcon } from "../regular/repeat-once-regular.icon";
import { RepeatOnceThinIcon } from "../thin/repeat-once-thin.icon";

export const RepeatOnceIcon = memo(function RepeatOnce(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RepeatOnceBoldIcon,
      duotone: RepeatOnceDuotoneIcon,
      fill: RepeatOnceFillIcon,
      light: RepeatOnceLightIcon,
      regular: RepeatOnceRegularIcon,
      thin: RepeatOnceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
