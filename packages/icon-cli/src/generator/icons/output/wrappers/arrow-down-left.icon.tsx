import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowDownLeftBoldIcon } from "../bold";
        import { ArrowDownLeftDuotoneIcon } from "../duotone";
        import { ArrowDownLeftFillIcon } from "../fill";
        import { ArrowDownLeftLightIcon } from "../light";
        import { ArrowDownLeftRegularIcon } from "../regular";
        import { ArrowDownLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowDownLeftIcon = memo(function ArrowDownLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowDownLeftBoldIcon,
            duotone: ArrowDownLeftDuotoneIcon,
            fill: ArrowDownLeftFillIcon,
            light: ArrowDownLeftLightIcon,
            regular: ArrowDownLeftRegularIcon,
            thin: ArrowDownLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
