import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EnvelopeBoldIcon } from "../bold/envelope-bold.icon";
import { EnvelopeDuotoneIcon } from "../duotone/envelope-duotone.icon";
import { EnvelopeFillIcon } from "../fill/envelope-fill.icon";
import { EnvelopeLightIcon } from "../light/envelope-light.icon";
import { EnvelopeRegularIcon } from "../regular/envelope-regular.icon";
import { EnvelopeThinIcon } from "../thin/envelope-thin.icon";

export const EnvelopeIcon = memo(function Envelope(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeBoldIcon,
      duotone: EnvelopeDuotoneIcon,
      fill: EnvelopeFillIcon,
      light: EnvelopeLightIcon,
      regular: EnvelopeRegularIcon,
      thin: EnvelopeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
