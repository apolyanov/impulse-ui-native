import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MemberOfBoldIcon } from "../bold";
import { MemberOfDuotoneIcon } from "../duotone";
import { MemberOfFillIcon } from "../fill";
import { MemberOfLightIcon } from "../light";
import { MemberOfRegularIcon } from "../regular";
import { MemberOfThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MemberOfIcon = memo(function MemberOf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MemberOfBoldIcon,
      duotone: MemberOfDuotoneIcon,
      fill: MemberOfFillIcon,
      light: MemberOfLightIcon,
      regular: MemberOfRegularIcon,
      thin: MemberOfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
