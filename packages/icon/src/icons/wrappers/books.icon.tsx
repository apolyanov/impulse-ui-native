import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BooksBoldIcon } from "../bold/books-bold.icon";
import { BooksDuotoneIcon } from "../duotone/books-duotone.icon";
import { BooksFillIcon } from "../fill/books-fill.icon";
import { BooksLightIcon } from "../light/books-light.icon";
import { BooksRegularIcon } from "../regular/books-regular.icon";
import { BooksThinIcon } from "../thin/books-thin.icon";

export const BooksIcon = memo(function Books(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BooksBoldIcon,
      duotone: BooksDuotoneIcon,
      fill: BooksFillIcon,
      light: BooksLightIcon,
      regular: BooksRegularIcon,
      thin: BooksThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
