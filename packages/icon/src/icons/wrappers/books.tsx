import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BooksBold } from "../bold";
import { BooksDuotone } from "../duotone";
import { BooksFill } from "../fill";
import { BooksLight } from "../light";
import { BooksRegular } from "../regular";
import { BooksThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Books = memo(function Books(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BooksBold,
      duotone: BooksDuotone,
      fill: BooksFill,
      light: BooksLight,
      regular: BooksRegular,
      thin: BooksThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
