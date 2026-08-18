import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NewspaperBoldIcon } from "../bold/newspaper-bold.icon";
import { NewspaperDuotoneIcon } from "../duotone/newspaper-duotone.icon";
import { NewspaperFillIcon } from "../fill/newspaper-fill.icon";
import { NewspaperLightIcon } from "../light/newspaper-light.icon";
import { NewspaperRegularIcon } from "../regular/newspaper-regular.icon";
import { NewspaperThinIcon } from "../thin/newspaper-thin.icon";

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
