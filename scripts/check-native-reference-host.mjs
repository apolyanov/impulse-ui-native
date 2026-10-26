import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const {
  synchronizeSceneDelegate,
} = require("../apps/impulse-ui-native/plugins/with-compatible-scene-delegate.cjs");
const fixture = () => ({
  UIApplicationSceneManifest: {
    UISceneConfigurations: {
      UIWindowSceneSessionRoleApplication: [
        { UISceneDelegateClassName: "ImpulseUINative.SceneDelegate" },
        { UISceneDelegateClassName: "Other.Delegate" },
      ],
    },
  },
});
const source =
  "@objc(SceneDelegate)\nclass SceneDelegate: ExpoAppSceneDelegate {}";
const plist = fixture();
synchronizeSceneDelegate(plist, source);
const scenes =
  plist.UIApplicationSceneManifest.UISceneConfigurations
    .UIWindowSceneSessionRoleApplication;
assert.equal(scenes[0].UISceneDelegateClassName, "SceneDelegate");
assert.equal(scenes[1].UISceneDelegateClassName, "Other.Delegate");
const once = JSON.stringify(plist);
synchronizeSceneDelegate(plist, source);
assert.equal(JSON.stringify(plist), once, "The native scene fix is idempotent");
assert.deepEqual(
  synchronizeSceneDelegate(
    fixture(),
    "class SceneDelegate: ExpoAppSceneDelegate {}",
  ),
  fixture(),
  "Default Swift runtime names remain module-qualified",
);
assert.deepEqual(
  synchronizeSceneDelegate({}, source),
  {},
  "Do not invent a scene manifest",
);
console.log(
  "Native reference host checks passed: explicit Objective-C scene names, standard Swift names, unrelated scenes and idempotence.",
);
