import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NewspaperClippingBold } from "../bold";
import { NewspaperClippingDuotone } from "../duotone";
import { NewspaperClippingFill } from "../fill";
import { NewspaperClippingLight } from "../light";
import { NewspaperClippingRegular } from "../regular";
import { NewspaperClippingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NewspaperClipping = memo(function NewspaperClipping(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NewspaperClippingBold,
      duotone: NewspaperClippingDuotone,
      fill: NewspaperClippingFill,
      light: NewspaperClippingLight,
      regular: NewspaperClippingRegular,
      thin: NewspaperClippingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
