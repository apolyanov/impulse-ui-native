import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BookBoldIcon } from "../bold/book-bold.icon";
import { BookDuotoneIcon } from "../duotone/book-duotone.icon";
import { BookFillIcon } from "../fill/book-fill.icon";
import { BookLightIcon } from "../light/book-light.icon";
import { BookRegularIcon } from "../regular/book-regular.icon";
import { BookThinIcon } from "../thin/book-thin.icon";

export const BookIcon = memo(function Book(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookBoldIcon,
      duotone: BookDuotoneIcon,
      fill: BookFillIcon,
      light: BookLightIcon,
      regular: BookRegularIcon,
      thin: BookThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
