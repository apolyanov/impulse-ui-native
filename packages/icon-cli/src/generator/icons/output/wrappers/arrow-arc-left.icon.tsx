import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowArcLeftBoldIcon } from "../bold";
        import { ArrowArcLeftDuotoneIcon } from "../duotone";
        import { ArrowArcLeftFillIcon } from "../fill";
        import { ArrowArcLeftLightIcon } from "../light";
        import { ArrowArcLeftRegularIcon } from "../regular";
        import { ArrowArcLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowArcLeftIcon = memo(function ArrowArcLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowArcLeftBoldIcon,
            duotone: ArrowArcLeftDuotoneIcon,
            fill: ArrowArcLeftFillIcon,
            light: ArrowArcLeftLightIcon,
            regular: ArrowArcLeftRegularIcon,
            thin: ArrowArcLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
