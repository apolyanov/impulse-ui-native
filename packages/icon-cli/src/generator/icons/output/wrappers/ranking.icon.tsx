import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RankingBoldIcon } from "../bold";
        import { RankingDuotoneIcon } from "../duotone";
        import { RankingFillIcon } from "../fill";
        import { RankingLightIcon } from "../light";
        import { RankingRegularIcon } from "../regular";
        import { RankingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
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
