import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SealCheckBoldIcon } from "../bold";
        import { SealCheckDuotoneIcon } from "../duotone";
        import { SealCheckFillIcon } from "../fill";
        import { SealCheckLightIcon } from "../light";
        import { SealCheckRegularIcon } from "../regular";
        import { SealCheckThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SealCheckIcon = memo(function SealCheck(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SealCheckBoldIcon,
            duotone: SealCheckDuotoneIcon,
            fill: SealCheckFillIcon,
            light: SealCheckLightIcon,
            regular: SealCheckRegularIcon,
            thin: SealCheckThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
