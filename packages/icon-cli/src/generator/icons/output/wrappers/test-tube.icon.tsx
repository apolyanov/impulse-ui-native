import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TestTubeBoldIcon } from "../bold";
        import { TestTubeDuotoneIcon } from "../duotone";
        import { TestTubeFillIcon } from "../fill";
        import { TestTubeLightIcon } from "../light";
        import { TestTubeRegularIcon } from "../regular";
        import { TestTubeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TestTubeIcon = memo(function TestTube(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TestTubeBoldIcon,
            duotone: TestTubeDuotoneIcon,
            fill: TestTubeFillIcon,
            light: TestTubeLightIcon,
            regular: TestTubeRegularIcon,
            thin: TestTubeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
