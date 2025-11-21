import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChalkboardTeacherBoldIcon } from "../bold";
        import { ChalkboardTeacherDuotoneIcon } from "../duotone";
        import { ChalkboardTeacherFillIcon } from "../fill";
        import { ChalkboardTeacherLightIcon } from "../light";
        import { ChalkboardTeacherRegularIcon } from "../regular";
        import { ChalkboardTeacherThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChalkboardTeacherIcon = memo(function ChalkboardTeacher(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChalkboardTeacherBoldIcon,
            duotone: ChalkboardTeacherDuotoneIcon,
            fill: ChalkboardTeacherFillIcon,
            light: ChalkboardTeacherLightIcon,
            regular: ChalkboardTeacherRegularIcon,
            thin: ChalkboardTeacherThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
