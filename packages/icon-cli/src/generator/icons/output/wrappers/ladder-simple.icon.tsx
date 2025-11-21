import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LadderSimpleBoldIcon } from "../bold";
        import { LadderSimpleDuotoneIcon } from "../duotone";
        import { LadderSimpleFillIcon } from "../fill";
        import { LadderSimpleLightIcon } from "../light";
        import { LadderSimpleRegularIcon } from "../regular";
        import { LadderSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LadderSimpleIcon = memo(function LadderSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LadderSimpleBoldIcon,
            duotone: LadderSimpleDuotoneIcon,
            fill: LadderSimpleFillIcon,
            light: LadderSimpleLightIcon,
            regular: LadderSimpleRegularIcon,
            thin: LadderSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
