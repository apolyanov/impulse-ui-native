import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BookOpenBoldIcon } from "../bold/book-open-bold.icon";
import { BookOpenDuotoneIcon } from "../duotone/book-open-duotone.icon";
import { BookOpenFillIcon } from "../fill/book-open-fill.icon";
import { BookOpenLightIcon } from "../light/book-open-light.icon";
import { BookOpenRegularIcon } from "../regular/book-open-regular.icon";
import { BookOpenThinIcon } from "../thin/book-open-thin.icon";

export const BookOpenIcon = memo(function BookOpen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookOpenBoldIcon,
      duotone: BookOpenDuotoneIcon,
      fill: BookOpenFillIcon,
      light: BookOpenLightIcon,
      regular: BookOpenRegularIcon,
      thin: BookOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
