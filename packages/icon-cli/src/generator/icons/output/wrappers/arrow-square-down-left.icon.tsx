import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowSquareDownLeftBoldIcon } from "../bold";
        import { ArrowSquareDownLeftDuotoneIcon } from "../duotone";
        import { ArrowSquareDownLeftFillIcon } from "../fill";
        import { ArrowSquareDownLeftLightIcon } from "../light";
        import { ArrowSquareDownLeftRegularIcon } from "../regular";
        import { ArrowSquareDownLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowSquareDownLeftIcon = memo(function ArrowSquareDownLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowSquareDownLeftBoldIcon,
            duotone: ArrowSquareDownLeftDuotoneIcon,
            fill: ArrowSquareDownLeftFillIcon,
            light: ArrowSquareDownLeftLightIcon,
            regular: ArrowSquareDownLeftRegularIcon,
            thin: ArrowSquareDownLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
