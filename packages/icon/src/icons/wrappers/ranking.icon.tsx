import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RankingBoldIcon } from "../bold/ranking-bold.icon";
import { RankingDuotoneIcon } from "../duotone/ranking-duotone.icon";
import { RankingFillIcon } from "../fill/ranking-fill.icon";
import { RankingLightIcon } from "../light/ranking-light.icon";
import { RankingRegularIcon } from "../regular/ranking-regular.icon";
import { RankingThinIcon } from "../thin/ranking-thin.icon";

export const RankingIcon = memo(function Ranking(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RankingBoldIcon,
      duotone: RankingDuotoneIcon,
      fill: RankingFillIcon,
      light: RankingLightIcon,
      regular: RankingRegularIcon,
      thin: RankingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
