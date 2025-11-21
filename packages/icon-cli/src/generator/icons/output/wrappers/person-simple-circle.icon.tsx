import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PersonSimpleCircleBoldIcon } from "../bold";
        import { PersonSimpleCircleDuotoneIcon } from "../duotone";
        import { PersonSimpleCircleFillIcon } from "../fill";
        import { PersonSimpleCircleLightIcon } from "../light";
        import { PersonSimpleCircleRegularIcon } from "../regular";
        import { PersonSimpleCircleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PersonSimpleCircleIcon = memo(function PersonSimpleCircle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PersonSimpleCircleBoldIcon,
            duotone: PersonSimpleCircleDuotoneIcon,
            fill: PersonSimpleCircleFillIcon,
            light: PersonSimpleCircleLightIcon,
            regular: PersonSimpleCircleRegularIcon,
            thin: PersonSimpleCircleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
