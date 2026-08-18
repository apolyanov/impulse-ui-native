import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EnvelopeSimpleBoldIcon } from "../bold/envelope-simple-bold.icon";
import { EnvelopeSimpleDuotoneIcon } from "../duotone/envelope-simple-duotone.icon";
import { EnvelopeSimpleFillIcon } from "../fill/envelope-simple-fill.icon";
import { EnvelopeSimpleLightIcon } from "../light/envelope-simple-light.icon";
import { EnvelopeSimpleRegularIcon } from "../regular/envelope-simple-regular.icon";
import { EnvelopeSimpleThinIcon } from "../thin/envelope-simple-thin.icon";

export const EnvelopeSimpleIcon = memo(function EnvelopeSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeSimpleBoldIcon,
      duotone: EnvelopeSimpleDuotoneIcon,
      fill: EnvelopeSimpleFillIcon,
      light: EnvelopeSimpleLightIcon,
      regular: EnvelopeSimpleRegularIcon,
      thin: EnvelopeSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
