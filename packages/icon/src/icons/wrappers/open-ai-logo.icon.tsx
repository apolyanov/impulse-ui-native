import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OpenAiLogoBoldIcon } from "../bold/open-ai-logo-bold.icon";
import { OpenAiLogoDuotoneIcon } from "../duotone/open-ai-logo-duotone.icon";
import { OpenAiLogoFillIcon } from "../fill/open-ai-logo-fill.icon";
import { OpenAiLogoLightIcon } from "../light/open-ai-logo-light.icon";
import { OpenAiLogoRegularIcon } from "../regular/open-ai-logo-regular.icon";
import { OpenAiLogoThinIcon } from "../thin/open-ai-logo-thin.icon";

export const OpenAiLogoIcon = memo(function OpenAiLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OpenAiLogoBoldIcon,
      duotone: OpenAiLogoDuotoneIcon,
      fill: OpenAiLogoFillIcon,
      light: OpenAiLogoLightIcon,
      regular: OpenAiLogoRegularIcon,
      thin: OpenAiLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
