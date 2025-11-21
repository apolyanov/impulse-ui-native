import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextIndentBoldIcon } from "../bold";
import { TextIndentDuotoneIcon } from "../duotone";
import { TextIndentFillIcon } from "../fill";
import { TextIndentLightIcon } from "../light";
import { TextIndentRegularIcon } from "../regular";
import { TextIndentThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextIndentIcon = memo(function TextIndent(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextIndentBoldIcon,
      duotone: TextIndentDuotoneIcon,
      fill: TextIndentFillIcon,
      light: TextIndentLightIcon,
      regular: TextIndentRegularIcon,
      thin: TextIndentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
