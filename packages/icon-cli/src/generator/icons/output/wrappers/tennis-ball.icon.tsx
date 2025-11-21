import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TennisBallBoldIcon } from "../bold";
        import { TennisBallDuotoneIcon } from "../duotone";
        import { TennisBallFillIcon } from "../fill";
        import { TennisBallLightIcon } from "../light";
        import { TennisBallRegularIcon } from "../regular";
        import { TennisBallThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TennisBallIcon = memo(function TennisBall(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TennisBallBoldIcon,
            duotone: TennisBallDuotoneIcon,
            fill: TennisBallFillIcon,
            light: TennisBallLightIcon,
            regular: TennisBallRegularIcon,
            thin: TennisBallThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
