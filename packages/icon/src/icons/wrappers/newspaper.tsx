import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NewspaperBold } from "../bold";
import { NewspaperDuotone } from "../duotone";
import { NewspaperFill } from "../fill";
import { NewspaperLight } from "../light";
import { NewspaperRegular } from "../regular";
import { NewspaperThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Newspaper = memo(function Newspaper(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NewspaperBold,
      duotone: NewspaperDuotone,
      fill: NewspaperFill,
      light: NewspaperLight,
      regular: NewspaperRegular,
      thin: NewspaperThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
