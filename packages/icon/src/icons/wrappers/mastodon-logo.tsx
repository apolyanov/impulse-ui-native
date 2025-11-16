import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MastodonLogoBold } from "../bold";
import { MastodonLogoDuotone } from "../duotone";
import { MastodonLogoFill } from "../fill";
import { MastodonLogoLight } from "../light";
import { MastodonLogoRegular } from "../regular";
import { MastodonLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MastodonLogo = memo(function MastodonLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MastodonLogoBold,
      duotone: MastodonLogoDuotone,
      fill: MastodonLogoFill,
      light: MastodonLogoLight,
      regular: MastodonLogoRegular,
      thin: MastodonLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
