import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CoatHangerBoldIcon } from "../bold";
        import { CoatHangerDuotoneIcon } from "../duotone";
        import { CoatHangerFillIcon } from "../fill";
        import { CoatHangerLightIcon } from "../light";
        import { CoatHangerRegularIcon } from "../regular";
        import { CoatHangerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CoatHangerIcon = memo(function CoatHanger(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CoatHangerBoldIcon,
            duotone: CoatHangerDuotoneIcon,
            fill: CoatHangerFillIcon,
            light: CoatHangerLightIcon,
            regular: CoatHangerRegularIcon,
            thin: CoatHangerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
