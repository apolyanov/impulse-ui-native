import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ParagraphBold } from "../bold";
import { ParagraphDuotone } from "../duotone";
import { ParagraphFill } from "../fill";
import { ParagraphLight } from "../light";
import { ParagraphRegular } from "../regular";
import { ParagraphThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Paragraph = memo(function Paragraph(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ParagraphBold,
      duotone: ParagraphDuotone,
      fill: ParagraphFill,
      light: ParagraphLight,
      regular: ParagraphRegular,
      thin: ParagraphThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
