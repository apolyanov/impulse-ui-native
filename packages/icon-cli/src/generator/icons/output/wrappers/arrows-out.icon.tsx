import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsOutBoldIcon } from "../bold";
        import { ArrowsOutDuotoneIcon } from "../duotone";
        import { ArrowsOutFillIcon } from "../fill";
        import { ArrowsOutLightIcon } from "../light";
        import { ArrowsOutRegularIcon } from "../regular";
        import { ArrowsOutThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsOutIcon = memo(function ArrowsOut(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsOutBoldIcon,
            duotone: ArrowsOutDuotoneIcon,
            fill: ArrowsOutFillIcon,
            light: ArrowsOutLightIcon,
            regular: ArrowsOutRegularIcon,
            thin: ArrowsOutThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
