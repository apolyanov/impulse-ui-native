import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EyeglassesBoldIcon } from "../bold";
        import { EyeglassesDuotoneIcon } from "../duotone";
        import { EyeglassesFillIcon } from "../fill";
        import { EyeglassesLightIcon } from "../light";
        import { EyeglassesRegularIcon } from "../regular";
        import { EyeglassesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EyeglassesIcon = memo(function Eyeglasses(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EyeglassesBoldIcon,
            duotone: EyeglassesDuotoneIcon,
            fill: EyeglassesFillIcon,
            light: EyeglassesLightIcon,
            regular: EyeglassesRegularIcon,
            thin: EyeglassesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
