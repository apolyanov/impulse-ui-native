import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextOutdentBoldIcon } from "../bold";
import { TextOutdentDuotoneIcon } from "../duotone";
import { TextOutdentFillIcon } from "../fill";
import { TextOutdentLightIcon } from "../light";
import { TextOutdentRegularIcon } from "../regular";
import { TextOutdentThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextOutdentIcon = memo(function TextOutdent(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextOutdentBoldIcon,
      duotone: TextOutdentDuotoneIcon,
      fill: TextOutdentFillIcon,
      light: TextOutdentLightIcon,
      regular: TextOutdentRegularIcon,
      thin: TextOutdentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
