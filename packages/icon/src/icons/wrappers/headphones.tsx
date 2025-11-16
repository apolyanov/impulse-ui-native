import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeadphonesBold } from "../bold";
import { HeadphonesDuotone } from "../duotone";
import { HeadphonesFill } from "../fill";
import { HeadphonesLight } from "../light";
import { HeadphonesRegular } from "../regular";
import { HeadphonesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Headphones = memo(function Headphones(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeadphonesBold,
      duotone: HeadphonesDuotone,
      fill: HeadphonesFill,
      light: HeadphonesLight,
      regular: HeadphonesRegular,
      thin: HeadphonesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
