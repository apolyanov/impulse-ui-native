import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BooksBoldIcon } from "../bold";
import { BooksDuotoneIcon } from "../duotone";
import { BooksFillIcon } from "../fill";
import { BooksLightIcon } from "../light";
import { BooksRegularIcon } from "../regular";
import { BooksThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
