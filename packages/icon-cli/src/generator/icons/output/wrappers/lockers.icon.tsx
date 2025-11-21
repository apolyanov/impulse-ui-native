import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LockersBoldIcon } from "../bold";
        import { LockersDuotoneIcon } from "../duotone";
        import { LockersFillIcon } from "../fill";
        import { LockersLightIcon } from "../light";
        import { LockersRegularIcon } from "../regular";
        import { LockersThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LockersIcon = memo(function Lockers(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LockersBoldIcon,
            duotone: LockersDuotoneIcon,
            fill: LockersFillIcon,
            light: LockersLightIcon,
            regular: LockersRegularIcon,
            thin: LockersThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
