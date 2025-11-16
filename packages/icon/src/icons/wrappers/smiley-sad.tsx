import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileySadBold } from "../bold";
import { SmileySadDuotone } from "../duotone";
import { SmileySadFill } from "../fill";
import { SmileySadLight } from "../light";
import { SmileySadRegular } from "../regular";
import { SmileySadThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileySad = memo(function SmileySad(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileySadBold,
      duotone: SmileySadDuotone,
      fill: SmileySadFill,
      light: SmileySadLight,
      regular: SmileySadRegular,
      thin: SmileySadThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
