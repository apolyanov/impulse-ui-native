import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LightbulbFilamentBold } from "../bold";
import { LightbulbFilamentDuotone } from "../duotone";
import { LightbulbFilamentFill } from "../fill";
import { LightbulbFilamentLight } from "../light";
import { LightbulbFilamentRegular } from "../regular";
import { LightbulbFilamentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LightbulbFilament = memo(function LightbulbFilament(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightbulbFilamentBold,
      duotone: LightbulbFilamentDuotone,
      fill: LightbulbFilamentFill,
      light: LightbulbFilamentLight,
      regular: LightbulbFilamentRegular,
      thin: LightbulbFilamentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
