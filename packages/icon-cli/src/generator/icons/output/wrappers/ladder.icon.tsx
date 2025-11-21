import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LadderBoldIcon } from "../bold";
        import { LadderDuotoneIcon } from "../duotone";
        import { LadderFillIcon } from "../fill";
        import { LadderLightIcon } from "../light";
        import { LadderRegularIcon } from "../regular";
        import { LadderThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LadderIcon = memo(function Ladder(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LadderBoldIcon,
            duotone: LadderDuotoneIcon,
            fill: LadderFillIcon,
            light: LadderLightIcon,
            regular: LadderRegularIcon,
            thin: LadderThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
