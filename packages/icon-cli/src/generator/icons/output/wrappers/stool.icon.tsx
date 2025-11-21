import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StoolBoldIcon } from "../bold";
        import { StoolDuotoneIcon } from "../duotone";
        import { StoolFillIcon } from "../fill";
        import { StoolLightIcon } from "../light";
        import { StoolRegularIcon } from "../regular";
        import { StoolThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StoolIcon = memo(function Stool(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StoolBoldIcon,
            duotone: StoolDuotoneIcon,
            fill: StoolFillIcon,
            light: StoolLightIcon,
            regular: StoolRegularIcon,
            thin: StoolThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
