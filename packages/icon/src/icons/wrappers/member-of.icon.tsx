import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MemberOfBoldIcon } from "../bold/member-of-bold.icon";
import { MemberOfDuotoneIcon } from "../duotone/member-of-duotone.icon";
import { MemberOfFillIcon } from "../fill/member-of-fill.icon";
import { MemberOfLightIcon } from "../light/member-of-light.icon";
import { MemberOfRegularIcon } from "../regular/member-of-regular.icon";
import { MemberOfThinIcon } from "../thin/member-of-thin.icon";

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
