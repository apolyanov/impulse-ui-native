import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotMemberOfBoldIcon } from "../bold";
import { NotMemberOfDuotoneIcon } from "../duotone";
import { NotMemberOfFillIcon } from "../fill";
import { NotMemberOfLightIcon } from "../light";
import { NotMemberOfRegularIcon } from "../regular";
import { NotMemberOfThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotMemberOfIcon = memo(function NotMemberOf(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotMemberOfBoldIcon,
      duotone: NotMemberOfDuotoneIcon,
      fill: NotMemberOfFillIcon,
      light: NotMemberOfLightIcon,
      regular: NotMemberOfRegularIcon,
      thin: NotMemberOfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
