import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NewspaperClippingBoldIcon } from "../bold/newspaper-clipping-bold.icon";
import { NewspaperClippingDuotoneIcon } from "../duotone/newspaper-clipping-duotone.icon";
import { NewspaperClippingFillIcon } from "../fill/newspaper-clipping-fill.icon";
import { NewspaperClippingLightIcon } from "../light/newspaper-clipping-light.icon";
import { NewspaperClippingRegularIcon } from "../regular/newspaper-clipping-regular.icon";
import { NewspaperClippingThinIcon } from "../thin/newspaper-clipping-thin.icon";

export const NewspaperClippingIcon = memo(function NewspaperClipping(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NewspaperClippingBoldIcon,
      duotone: NewspaperClippingDuotoneIcon,
      fill: NewspaperClippingFillIcon,
      light: NewspaperClippingLightIcon,
      regular: NewspaperClippingRegularIcon,
      thin: NewspaperClippingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
