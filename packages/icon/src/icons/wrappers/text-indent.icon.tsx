import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextIndentBoldIcon } from "../bold/text-indent-bold.icon";
import { TextIndentDuotoneIcon } from "../duotone/text-indent-duotone.icon";
import { TextIndentFillIcon } from "../fill/text-indent-fill.icon";
import { TextIndentLightIcon } from "../light/text-indent-light.icon";
import { TextIndentRegularIcon } from "../regular/text-indent-regular.icon";
import { TextIndentThinIcon } from "../thin/text-indent-thin.icon";

export const TextIndentIcon = memo(function TextIndent(
  props: IconWrapperProps,
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
