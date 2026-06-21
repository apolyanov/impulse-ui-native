import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NewspaperBoldIcon } from "../bold";
import { NewspaperDuotoneIcon } from "../duotone";
import { NewspaperFillIcon } from "../fill";
import { NewspaperLightIcon } from "../light";
import { NewspaperRegularIcon } from "../regular";
import { NewspaperThinIcon } from "../thin";

export const NewspaperIcon = memo(function Newspaper(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NewspaperBoldIcon,
      duotone: NewspaperDuotoneIcon,
      fill: NewspaperFillIcon,
      light: NewspaperLightIcon,
      regular: NewspaperRegularIcon,
      thin: NewspaperThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
