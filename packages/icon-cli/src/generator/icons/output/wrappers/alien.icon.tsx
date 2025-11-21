import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AlienBoldIcon } from "../bold";
        import { AlienDuotoneIcon } from "../duotone";
        import { AlienFillIcon } from "../fill";
        import { AlienLightIcon } from "../light";
        import { AlienRegularIcon } from "../regular";
        import { AlienThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AlienIcon = memo(function Alien(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AlienBoldIcon,
            duotone: AlienDuotoneIcon,
            fill: AlienFillIcon,
            light: AlienLightIcon,
            regular: AlienRegularIcon,
            thin: AlienThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
