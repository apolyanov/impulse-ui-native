import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LightbulbFilamentBoldIcon } from "../bold/lightbulb-filament-bold.icon";
import { LightbulbFilamentDuotoneIcon } from "../duotone/lightbulb-filament-duotone.icon";
import { LightbulbFilamentFillIcon } from "../fill/lightbulb-filament-fill.icon";
import { LightbulbFilamentLightIcon } from "../light/lightbulb-filament-light.icon";
import { LightbulbFilamentRegularIcon } from "../regular/lightbulb-filament-regular.icon";
import { LightbulbFilamentThinIcon } from "../thin/lightbulb-filament-thin.icon";

export const LightbulbFilamentIcon = memo(function LightbulbFilament(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightbulbFilamentBoldIcon,
      duotone: LightbulbFilamentDuotoneIcon,
      fill: LightbulbFilamentFillIcon,
      light: LightbulbFilamentLightIcon,
      regular: LightbulbFilamentRegularIcon,
      thin: LightbulbFilamentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
