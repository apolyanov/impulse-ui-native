import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DogBoldIcon } from "../bold";
        import { DogDuotoneIcon } from "../duotone";
        import { DogFillIcon } from "../fill";
        import { DogLightIcon } from "../light";
        import { DogRegularIcon } from "../regular";
        import { DogThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DogIcon = memo(function Dog(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DogBoldIcon,
            duotone: DogDuotoneIcon,
            fill: DogFillIcon,
            light: DogLightIcon,
            regular: DogRegularIcon,
            thin: DogThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
