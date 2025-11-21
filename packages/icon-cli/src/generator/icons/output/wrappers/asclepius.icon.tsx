import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AsclepiusBoldIcon } from "../bold";
        import { AsclepiusDuotoneIcon } from "../duotone";
        import { AsclepiusFillIcon } from "../fill";
        import { AsclepiusLightIcon } from "../light";
        import { AsclepiusRegularIcon } from "../regular";
        import { AsclepiusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AsclepiusIcon = memo(function Asclepius(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AsclepiusBoldIcon,
            duotone: AsclepiusDuotoneIcon,
            fill: AsclepiusFillIcon,
            light: AsclepiusLightIcon,
            regular: AsclepiusRegularIcon,
            thin: AsclepiusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
