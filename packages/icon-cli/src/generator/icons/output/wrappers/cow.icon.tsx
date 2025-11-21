import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CowBoldIcon } from "../bold";
        import { CowDuotoneIcon } from "../duotone";
        import { CowFillIcon } from "../fill";
        import { CowLightIcon } from "../light";
        import { CowRegularIcon } from "../regular";
        import { CowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CowIcon = memo(function Cow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CowBoldIcon,
            duotone: CowDuotoneIcon,
            fill: CowFillIcon,
            light: CowLightIcon,
            regular: CowRegularIcon,
            thin: CowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
