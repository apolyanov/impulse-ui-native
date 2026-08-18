import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EnvelopeOpenBoldIcon } from "../bold/envelope-open-bold.icon";
import { EnvelopeOpenDuotoneIcon } from "../duotone/envelope-open-duotone.icon";
import { EnvelopeOpenFillIcon } from "../fill/envelope-open-fill.icon";
import { EnvelopeOpenLightIcon } from "../light/envelope-open-light.icon";
import { EnvelopeOpenRegularIcon } from "../regular/envelope-open-regular.icon";
import { EnvelopeOpenThinIcon } from "../thin/envelope-open-thin.icon";

export const EnvelopeOpenIcon = memo(function EnvelopeOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeOpenBoldIcon,
      duotone: EnvelopeOpenDuotoneIcon,
      fill: EnvelopeOpenFillIcon,
      light: EnvelopeOpenLightIcon,
      regular: EnvelopeOpenRegularIcon,
      thin: EnvelopeOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
