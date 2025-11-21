import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UserSoundBoldIcon } from "../bold";
        import { UserSoundDuotoneIcon } from "../duotone";
        import { UserSoundFillIcon } from "../fill";
        import { UserSoundLightIcon } from "../light";
        import { UserSoundRegularIcon } from "../regular";
        import { UserSoundThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UserSoundIcon = memo(function UserSound(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UserSoundBoldIcon,
            duotone: UserSoundDuotoneIcon,
            fill: UserSoundFillIcon,
            light: UserSoundLightIcon,
            regular: UserSoundRegularIcon,
            thin: UserSoundThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
