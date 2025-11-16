import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlaskBold } from "../bold";
import { FlaskDuotone } from "../duotone";
import { FlaskFill } from "../fill";
import { FlaskLight } from "../light";
import { FlaskRegular } from "../regular";
import { FlaskThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Flask = memo(function Flask(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlaskBold,
      duotone: FlaskDuotone,
      fill: FlaskFill,
      light: FlaskLight,
      regular: FlaskRegular,
      thin: FlaskThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
