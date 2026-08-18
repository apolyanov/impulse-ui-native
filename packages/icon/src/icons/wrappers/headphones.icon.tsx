import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeadphonesBoldIcon } from "../bold/headphones-bold.icon";
import { HeadphonesDuotoneIcon } from "../duotone/headphones-duotone.icon";
import { HeadphonesFillIcon } from "../fill/headphones-fill.icon";
import { HeadphonesLightIcon } from "../light/headphones-light.icon";
import { HeadphonesRegularIcon } from "../regular/headphones-regular.icon";
import { HeadphonesThinIcon } from "../thin/headphones-thin.icon";

export const HeadphonesIcon = memo(function Headphones(
  props: IconWrapperProps,
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
