import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlaskBoldIcon } from "../bold/flask-bold.icon";
import { FlaskDuotoneIcon } from "../duotone/flask-duotone.icon";
import { FlaskFillIcon } from "../fill/flask-fill.icon";
import { FlaskLightIcon } from "../light/flask-light.icon";
import { FlaskRegularIcon } from "../regular/flask-regular.icon";
import { FlaskThinIcon } from "../thin/flask-thin.icon";

export const FlaskIcon = memo(function Flask(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlaskBoldIcon,
      duotone: FlaskDuotoneIcon,
      fill: FlaskFillIcon,
      light: FlaskLightIcon,
      regular: FlaskRegularIcon,
      thin: FlaskThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
