import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookOpenTextBoldIcon } from "../bold";
import { BookOpenTextDuotoneIcon } from "../duotone";
import { BookOpenTextFillIcon } from "../fill";
import { BookOpenTextLightIcon } from "../light";
import { BookOpenTextRegularIcon } from "../regular";
import { BookOpenTextThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BookOpenTextIcon = memo(function BookOpenText(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookOpenTextBoldIcon,
      duotone: BookOpenTextDuotoneIcon,
      fill: BookOpenTextFillIcon,
      light: BookOpenTextLightIcon,
      regular: BookOpenTextRegularIcon,
      thin: BookOpenTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
