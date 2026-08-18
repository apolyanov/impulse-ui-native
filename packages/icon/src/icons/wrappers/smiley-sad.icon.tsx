import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileySadBoldIcon } from "../bold/smiley-sad-bold.icon";
import { SmileySadDuotoneIcon } from "../duotone/smiley-sad-duotone.icon";
import { SmileySadFillIcon } from "../fill/smiley-sad-fill.icon";
import { SmileySadLightIcon } from "../light/smiley-sad-light.icon";
import { SmileySadRegularIcon } from "../regular/smiley-sad-regular.icon";
import { SmileySadThinIcon } from "../thin/smiley-sad-thin.icon";

export const SmileySadIcon = memo(function SmileySad(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileySadBoldIcon,
      duotone: SmileySadDuotoneIcon,
      fill: SmileySadFillIcon,
      light: SmileySadLightIcon,
      regular: SmileySadRegularIcon,
      thin: SmileySadThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
