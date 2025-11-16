import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookOpenBold } from "../bold";
import { BookOpenDuotone } from "../duotone";
import { BookOpenFill } from "../fill";
import { BookOpenLight } from "../light";
import { BookOpenRegular } from "../regular";
import { BookOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BookOpen = memo(function BookOpen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookOpenBold,
      duotone: BookOpenDuotone,
      fill: BookOpenFill,
      light: BookOpenLight,
      regular: BookOpenRegular,
      thin: BookOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
