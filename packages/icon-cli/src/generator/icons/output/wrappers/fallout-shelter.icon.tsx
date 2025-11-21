import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FalloutShelterBoldIcon } from "../bold";
        import { FalloutShelterDuotoneIcon } from "../duotone";
        import { FalloutShelterFillIcon } from "../fill";
        import { FalloutShelterLightIcon } from "../light";
        import { FalloutShelterRegularIcon } from "../regular";
        import { FalloutShelterThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FalloutShelterIcon = memo(function FalloutShelter(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FalloutShelterBoldIcon,
            duotone: FalloutShelterDuotoneIcon,
            fill: FalloutShelterFillIcon,
            light: FalloutShelterLightIcon,
            regular: FalloutShelterRegularIcon,
            thin: FalloutShelterThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
