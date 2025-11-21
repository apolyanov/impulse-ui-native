import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CheersBoldIcon } from "../bold";
        import { CheersDuotoneIcon } from "../duotone";
        import { CheersFillIcon } from "../fill";
        import { CheersLightIcon } from "../light";
        import { CheersRegularIcon } from "../regular";
        import { CheersThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CheersIcon = memo(function Cheers(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CheersBoldIcon,
            duotone: CheersDuotoneIcon,
            fill: CheersFillIcon,
            light: CheersLightIcon,
            regular: CheersRegularIcon,
            thin: CheersThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
