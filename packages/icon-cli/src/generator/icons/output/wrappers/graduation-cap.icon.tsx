import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GraduationCapBoldIcon } from "../bold";
        import { GraduationCapDuotoneIcon } from "../duotone";
        import { GraduationCapFillIcon } from "../fill";
        import { GraduationCapLightIcon } from "../light";
        import { GraduationCapRegularIcon } from "../regular";
        import { GraduationCapThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GraduationCapIcon = memo(function GraduationCap(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GraduationCapBoldIcon,
            duotone: GraduationCapDuotoneIcon,
            fill: GraduationCapFillIcon,
            light: GraduationCapLightIcon,
            regular: GraduationCapRegularIcon,
            thin: GraduationCapThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
