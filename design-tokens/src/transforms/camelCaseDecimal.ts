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
import { TransformedToken } from "style-dictionary/types/TransformedToken";
import { camelCase } from "lodash-es";

/**
 * A transformer to change tokens.0_5x and keep the underscore
 * after a camel case operation
 */
export default {
  type: "name",
  transformer: function (token: TransformedToken, options: Platform): string {
    const underscore = "ThisShouldBeAnUnderscore";
    const name = [options.prefix].concat(token.path).join(" ");
    return camelCase(name.replaceAll("_", underscore)).replace(underscore, "_");
  },
};
