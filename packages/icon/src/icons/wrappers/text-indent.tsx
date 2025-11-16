import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextIndentBold } from "../bold";
import { TextIndentDuotone } from "../duotone";
import { TextIndentFill } from "../fill";
import { TextIndentLight } from "../light";
import { TextIndentRegular } from "../regular";
import { TextIndentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextIndent = memo(function TextIndent(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextIndentBold,
      duotone: TextIndentDuotone,
      fill: TextIndentFill,
      light: TextIndentLight,
      regular: TextIndentRegular,
      thin: TextIndentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
