import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeadphonesBoldIcon } from "../bold";
import { HeadphonesDuotoneIcon } from "../duotone";
import { HeadphonesFillIcon } from "../fill";
import { HeadphonesLightIcon } from "../light";
import { HeadphonesRegularIcon } from "../regular";
import { HeadphonesThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HeadphonesIcon = memo(function Headphones(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeadphonesBoldIcon,
      duotone: HeadphonesDuotoneIcon,
      fill: HeadphonesFillIcon,
      light: HeadphonesLightIcon,
      regular: HeadphonesRegularIcon,
      thin: HeadphonesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
