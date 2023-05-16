/*
 * Copyright 2023 New Vector Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { create } from "@storybook/theming/create";
import * as cpdLight from "@vector-im/compound-design-tokens/assets/web/js/cpdLight";

export default create({
  base: "light",
  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',
  fontCode:
    "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",

  brandTitle: "Compound",
  brandUrl: "https://compound.element.io",
  brandImage: "/logo.svg",
  brandTarget: "_self",

  //
  colorPrimary: cpdLight.cpdColorTextPrimary,
  colorSecondary: cpdLight.cpdColorBgActionPrimaryRest,

  // UI
  appBg: cpdLight.cpdColorBgCanvasDefault,
  appContentBg: cpdLight.cpdColorBgCanvasDefault,
  appBorderColor: cpdLight.cpdColorBorderInteractiveSecondary,
  appBorderRadius: 4,
  // Text colors
  textColor: cpdLight.cpdColorTextPrimary,
  textInverseColor: cpdLight.cpdColorTextOnSolidPrimary,
  // Toolbar default and active colors
  barTextColor: cpdLight.cpdColorTextPrimary,
  barSelectedColor: cpdLight.cpdColorTextInfoPrimary,
  barBg: cpdLight.cpdColorBgCanvasDefault,
  // Form colors
  inputBg: cpdLight.cpdColorBgCanvasDefault,
  inputBorder: cpdLight.cpdColorBorderInteractivePrimary,
  inputTextColor: cpdLight.cpdColorTextActionPrimary,

  inputBorderRadius: 32,
});
