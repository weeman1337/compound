/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Platform } from "style-dictionary/types/Platform";
import { COMPOUND_TOKENS_NAMESPACE } from "./utils";
import { Theme } from "../@types";

export default function getAndroidConfig(theme: Theme): Platform {
  return {
    transformGroup: `tokens-android`,
    prefix: COMPOUND_TOKENS_NAMESPACE,
    transforms: [
      "ts/size/letterspacing",
      "ts/color/hexrgba",
      "ts/typography/shorthand",
      "ts/shadow/shorthand",
      "attribute/cti",
      "color/composeColor",
      "camelCaseDecimal",
    ],
    buildPath: `assets/android/kotlin/`,
    files: [
      {
        destination: `${theme}.kt`,
        format: "compose/object",
        className: "CompoundDesignTokens",
        packageName: "io.element.compound.tokens",
        options: {
          showFileHeader: false,
          outputReferences: true,
        },
      },
    ],
  };
}