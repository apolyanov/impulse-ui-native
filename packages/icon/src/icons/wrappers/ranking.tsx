import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RankingBold } from "../bold";
import { RankingDuotone } from "../duotone";
import { RankingFill } from "../fill";
import { RankingLight } from "../light";
import { RankingRegular } from "../regular";
import { RankingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Ranking = memo(function Ranking(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RankingBold,
      duotone: RankingDuotone,
      fill: RankingFill,
      light: RankingLight,
      regular: RankingRegular,
      thin: RankingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
