import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BoneBoldIcon } from "../bold";
        import { BoneDuotoneIcon } from "../duotone";
        import { BoneFillIcon } from "../fill";
        import { BoneLightIcon } from "../light";
        import { BoneRegularIcon } from "../regular";
        import { BoneThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BoneIcon = memo(function Bone(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BoneBoldIcon,
            duotone: BoneDuotoneIcon,
            fill: BoneFillIcon,
            light: BoneLightIcon,
            regular: BoneRegularIcon,
            thin: BoneThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
