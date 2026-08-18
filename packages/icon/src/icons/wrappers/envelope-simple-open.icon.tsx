import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EnvelopeSimpleOpenBoldIcon } from "../bold/envelope-simple-open-bold.icon";
import { EnvelopeSimpleOpenDuotoneIcon } from "../duotone/envelope-simple-open-duotone.icon";
import { EnvelopeSimpleOpenFillIcon } from "../fill/envelope-simple-open-fill.icon";
import { EnvelopeSimpleOpenLightIcon } from "../light/envelope-simple-open-light.icon";
import { EnvelopeSimpleOpenRegularIcon } from "../regular/envelope-simple-open-regular.icon";
import { EnvelopeSimpleOpenThinIcon } from "../thin/envelope-simple-open-thin.icon";

export const EnvelopeSimpleOpenIcon = memo(function EnvelopeSimpleOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeSimpleOpenBoldIcon,
      duotone: EnvelopeSimpleOpenDuotoneIcon,
      fill: EnvelopeSimpleOpenFillIcon,
      light: EnvelopeSimpleOpenLightIcon,
      regular: EnvelopeSimpleOpenRegularIcon,
      thin: EnvelopeSimpleOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
