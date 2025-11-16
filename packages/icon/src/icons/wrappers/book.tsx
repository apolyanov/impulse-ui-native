import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookBold } from "../bold";
import { BookDuotone } from "../duotone";
import { BookFill } from "../fill";
import { BookLight } from "../light";
import { BookRegular } from "../regular";
import { BookThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Book = memo(function Book(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookBold,
      duotone: BookDuotone,
      fill: BookFill,
      light: BookLight,
      regular: BookRegular,
      thin: BookThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
