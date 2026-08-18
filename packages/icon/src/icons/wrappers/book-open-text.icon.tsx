import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BookOpenTextBoldIcon } from "../bold/book-open-text-bold.icon";
import { BookOpenTextDuotoneIcon } from "../duotone/book-open-text-duotone.icon";
import { BookOpenTextFillIcon } from "../fill/book-open-text-fill.icon";
import { BookOpenTextLightIcon } from "../light/book-open-text-light.icon";
import { BookOpenTextRegularIcon } from "../regular/book-open-text-regular.icon";
import { BookOpenTextThinIcon } from "../thin/book-open-text-thin.icon";

export const BookOpenTextIcon = memo(function BookOpenText(
  props: IconWrapperProps,
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
