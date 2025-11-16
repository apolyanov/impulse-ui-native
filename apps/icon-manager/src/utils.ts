export interface RawSvgModule {
  loader: () => Promise<string>;
  path: string;
  name: string;
}

export type GroupedIcons = Record<string, RawSvgModule[]>;

export async function loadIcons(): Promise<GroupedIcons> {
  const modules = import.meta.glob("/src/assets/**/*.{svg,SVG}", { as: "raw" });
  const groupedIcons: GroupedIcons = {};

  for (const path in modules) {
    const pathSegments = path.split("/");

    // Find the folder name after "assets"
    const assetsIndex = pathSegments.findIndex(
      (segment) => segment === "assets"
    );
    const folder = pathSegments[assetsIndex + 1] || "root";

    const name = pathSegments[pathSegments.length - 1].replace("iconsax-", "");

    const icon: RawSvgModule = {
      loader: modules[path],
      path,
      name,
    };

    if (!groupedIcons[folder]) {
      groupedIcons[folder] = [];
    }

    groupedIcons[folder].push(icon);
  }

  return groupedIcons;
}
