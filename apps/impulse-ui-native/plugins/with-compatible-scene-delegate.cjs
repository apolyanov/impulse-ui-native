const fs = require("node:fs");
const path = require("node:path");
const { withInfoPlist } = require("expo/config-plugins");

function synchronizeSceneDelegate(infoPlist, source) {
  // An explicit @objc name is unqualified, unlike Swift's default Module.Class name.
  const match = source.match(
    /@objc\(([A-Za-z_]\w*)\)\s*(?:(?:public|internal|final|open)\s+)*class\s+SceneDelegate\b/,
  );
  if (!match) return infoPlist;
  const configurations =
    infoPlist.UIApplicationSceneManifest?.UISceneConfigurations ?? {};
  for (const scenes of Object.values(configurations)) {
    if (!Array.isArray(scenes)) continue;
    for (const scene of scenes) {
      const name = scene.UISceneDelegateClassName;
      if (
        typeof name === "string" &&
        (name === "SceneDelegate" || name.endsWith(".SceneDelegate"))
      )
        scene.UISceneDelegateClassName = match[1];
    }
  }
  return infoPlist;
}

function withCompatibleSceneDelegate(config) {
  return withInfoPlist(config, (mod) => {
    const directory = mod.modRequest.platformProjectRoot;
    if (!fs.existsSync(directory)) return mod;
    const files = fs
      .readdirSync(directory, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => path.join(directory, entry.name, "SceneDelegate.swift"))
      .filter((file) => fs.existsSync(file));
    if (files.length === 1)
      synchronizeSceneDelegate(
        mod.modResults,
        fs.readFileSync(files[0], "utf8"),
      );
    return mod;
  });
}
module.exports = withCompatibleSceneDelegate;
module.exports.synchronizeSceneDelegate = synchronizeSceneDelegate;
