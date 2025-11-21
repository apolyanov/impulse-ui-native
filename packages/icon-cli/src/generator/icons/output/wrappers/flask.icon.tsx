import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FlaskBoldIcon } from "../bold";
        import { FlaskDuotoneIcon } from "../duotone";
        import { FlaskFillIcon } from "../fill";
        import { FlaskLightIcon } from "../light";
        import { FlaskRegularIcon } from "../regular";
        import { FlaskThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FlaskIcon = memo(function Flask(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FlaskBoldIcon,
            duotone: FlaskDuotoneIcon,
            fill: FlaskFillIcon,
            light: FlaskLightIcon,
            regular: FlaskRegularIcon,
            thin: FlaskThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
