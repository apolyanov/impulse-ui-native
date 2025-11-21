import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SynagogueBoldIcon } from "../bold";
        import { SynagogueDuotoneIcon } from "../duotone";
        import { SynagogueFillIcon } from "../fill";
        import { SynagogueLightIcon } from "../light";
        import { SynagogueRegularIcon } from "../regular";
        import { SynagogueThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SynagogueIcon = memo(function Synagogue(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SynagogueBoldIcon,
            duotone: SynagogueDuotoneIcon,
            fill: SynagogueFillIcon,
            light: SynagogueLightIcon,
            regular: SynagogueRegularIcon,
            thin: SynagogueThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
