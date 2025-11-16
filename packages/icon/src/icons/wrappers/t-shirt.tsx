import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TShirtBold } from "../bold";
import { TShirtDuotone } from "../duotone";
import { TShirtFill } from "../fill";
import { TShirtLight } from "../light";
import { TShirtRegular } from "../regular";
import { TShirtThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TShirt = memo(function TShirt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TShirtBold,
      duotone: TShirtDuotone,
      fill: TShirtFill,
      light: TShirtLight,
      regular: TShirtRegular,
      thin: TShirtThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
