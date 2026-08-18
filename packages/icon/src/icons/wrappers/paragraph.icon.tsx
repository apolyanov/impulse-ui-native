import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ParagraphBoldIcon } from "../bold/paragraph-bold.icon";
import { ParagraphDuotoneIcon } from "../duotone/paragraph-duotone.icon";
import { ParagraphFillIcon } from "../fill/paragraph-fill.icon";
import { ParagraphLightIcon } from "../light/paragraph-light.icon";
import { ParagraphRegularIcon } from "../regular/paragraph-regular.icon";
import { ParagraphThinIcon } from "../thin/paragraph-thin.icon";

export const ParagraphIcon = memo(function Paragraph(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ParagraphBoldIcon,
      duotone: ParagraphDuotoneIcon,
      fill: ParagraphFillIcon,
      light: ParagraphLightIcon,
      regular: ParagraphRegularIcon,
      thin: ParagraphThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
