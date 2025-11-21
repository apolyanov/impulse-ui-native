import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LockBoldIcon } from "../bold";
        import { LockDuotoneIcon } from "../duotone";
        import { LockFillIcon } from "../fill";
        import { LockLightIcon } from "../light";
        import { LockRegularIcon } from "../regular";
        import { LockThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LockIcon = memo(function Lock(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LockBoldIcon,
            duotone: LockDuotoneIcon,
            fill: LockFillIcon,
            light: LockLightIcon,
            regular: LockRegularIcon,
            thin: LockThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
