import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowLeftBoldIcon } from "../bold";
        import { ArrowLeftDuotoneIcon } from "../duotone";
        import { ArrowLeftFillIcon } from "../fill";
        import { ArrowLeftLightIcon } from "../light";
        import { ArrowLeftRegularIcon } from "../regular";
        import { ArrowLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowLeftIcon = memo(function ArrowLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowLeftBoldIcon,
            duotone: ArrowLeftDuotoneIcon,
            fill: ArrowLeftFillIcon,
            light: ArrowLeftLightIcon,
            regular: ArrowLeftRegularIcon,
            thin: ArrowLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
