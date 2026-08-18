import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TShirtBoldIcon } from "../bold/t-shirt-bold.icon";
import { TShirtDuotoneIcon } from "../duotone/t-shirt-duotone.icon";
import { TShirtFillIcon } from "../fill/t-shirt-fill.icon";
import { TShirtLightIcon } from "../light/t-shirt-light.icon";
import { TShirtRegularIcon } from "../regular/t-shirt-regular.icon";
import { TShirtThinIcon } from "../thin/t-shirt-thin.icon";

export const TShirtIcon = memo(function TShirt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TShirtBoldIcon,
      duotone: TShirtDuotoneIcon,
      fill: TShirtFillIcon,
      light: TShirtLightIcon,
      regular: TShirtRegularIcon,
      thin: TShirtThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
