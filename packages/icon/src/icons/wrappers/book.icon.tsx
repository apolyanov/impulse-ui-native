import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookBoldIcon } from "../bold";
import { BookDuotoneIcon } from "../duotone";
import { BookFillIcon } from "../fill";
import { BookLightIcon } from "../light";
import { BookRegularIcon } from "../regular";
import { BookThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
