import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookOpenTextBold } from "../bold";
import { BookOpenTextDuotone } from "../duotone";
import { BookOpenTextFill } from "../fill";
import { BookOpenTextLight } from "../light";
import { BookOpenTextRegular } from "../regular";
import { BookOpenTextThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BookOpenText = memo(function BookOpenText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookOpenTextBold,
      duotone: BookOpenTextDuotone,
      fill: BookOpenTextFill,
      light: BookOpenTextLight,
      regular: BookOpenTextRegular,
      thin: BookOpenTextThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
