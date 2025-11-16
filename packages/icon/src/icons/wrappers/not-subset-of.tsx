import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotSubsetOfBold } from "../bold";
import { NotSubsetOfDuotone } from "../duotone";
import { NotSubsetOfFill } from "../fill";
import { NotSubsetOfLight } from "../light";
import { NotSubsetOfRegular } from "../regular";
import { NotSubsetOfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotSubsetOf = memo(function NotSubsetOf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotSubsetOfBold,
      duotone: NotSubsetOfDuotone,
      fill: NotSubsetOfFill,
      light: NotSubsetOfLight,
      regular: NotSubsetOfRegular,
      thin: NotSubsetOfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
