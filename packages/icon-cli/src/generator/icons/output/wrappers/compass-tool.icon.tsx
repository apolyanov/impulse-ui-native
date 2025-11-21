import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CompassToolBoldIcon } from "../bold";
        import { CompassToolDuotoneIcon } from "../duotone";
        import { CompassToolFillIcon } from "../fill";
        import { CompassToolLightIcon } from "../light";
        import { CompassToolRegularIcon } from "../regular";
        import { CompassToolThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CompassToolIcon = memo(function CompassTool(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CompassToolBoldIcon,
            duotone: CompassToolDuotoneIcon,
            fill: CompassToolFillIcon,
            light: CompassToolLightIcon,
            regular: CompassToolRegularIcon,
            thin: CompassToolThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
