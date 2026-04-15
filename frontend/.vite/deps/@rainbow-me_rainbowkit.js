"use client";
import { r as __toESM, t as __commonJSMin } from "./chunk-BoAXSpZd.js";
import { t as require_react } from "./react.js";
import { t as en_US_default } from "./chunk-RDNMH5RE-B1aopE7q.js";
import { Ta as numberToHex, Tr as UserRejectedRequestError, _r as SwitchChainError, hr as ResourceUnavailableRpcError, ma as isAddress, pa as getAddress } from "./ccip-C-muXWFN.js";
import { Ht as withTimeout, Zt as defineChain, en as withRetry, h as http } from "./_esm-DTYcXYii.js";
import { A as usePublicClient, H as useEnsAvatar, It as ChainNotConfiguredError, Mt as createConnector, Nt as ProviderNotFoundError, Tt as createConfig, V as useEnsName, W as useDisconnect, X as useConnect, Y as useConnectionEffect, dt as useBalance, g as useSwitchChain, jt as injected, nt as useConnection, pt as useConfig, x as useSignMessage } from "./exports-DLkGNtSR.js";
import { h as useQuery, w as require_jsx_runtime } from "./modern-GhiHh4DJ.js";
import { t as clsx } from "./clsx-Cp6_4_Gk.js";
import { t as require_react_dom } from "./react-dom-dOqI2azs.js";
//#region node_modules/@rainbow-me/rainbowkit/dist/chunk-DQLAW7KN.js
var systemFontStack = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"";
var fontStacks = {
	rounded: `SFRounded, ui-rounded, "SF Pro Rounded", ${systemFontStack}`,
	system: systemFontStack
};
var radiusScales = {
	large: {
		actionButton: "9999px",
		connectButton: "12px",
		modal: "24px",
		modalMobile: "28px"
	},
	medium: {
		actionButton: "10px",
		connectButton: "8px",
		modal: "16px",
		modalMobile: "18px"
	},
	none: {
		actionButton: "0px",
		connectButton: "0px",
		modal: "0px",
		modalMobile: "0px"
	},
	small: {
		actionButton: "4px",
		connectButton: "4px",
		modal: "8px",
		modalMobile: "8px"
	}
};
var blurs = {
	large: { modalOverlay: "blur(20px)" },
	none: { modalOverlay: "blur(0px)" },
	small: { modalOverlay: "blur(4px)" }
};
var baseTheme = ({ borderRadius = "large", fontStack = "rounded", overlayBlur = "none" }) => ({
	blurs: { modalOverlay: blurs[overlayBlur].modalOverlay },
	fonts: { body: fontStacks[fontStack] },
	radii: {
		actionButton: radiusScales[borderRadius].actionButton,
		connectButton: radiusScales[borderRadius].connectButton,
		menuButton: radiusScales[borderRadius].connectButton,
		modal: radiusScales[borderRadius].modal,
		modalMobile: radiusScales[borderRadius].modalMobile
	}
});
//#endregion
//#region node_modules/@rainbow-me/rainbowkit/dist/chunk-RZWDCITT.js
var darkGrey = "#1A1B1F";
var accentColors$2 = {
	blue: {
		accentColor: "#3898FF",
		accentColorForeground: "#FFF"
	},
	green: {
		accentColor: "#4BD166",
		accentColorForeground: darkGrey
	},
	orange: {
		accentColor: "#FF983D",
		accentColorForeground: darkGrey
	},
	pink: {
		accentColor: "#FF7AB8",
		accentColorForeground: darkGrey
	},
	purple: {
		accentColor: "#7A70FF",
		accentColorForeground: "#FFF"
	},
	red: {
		accentColor: "#FF6257",
		accentColorForeground: "#FFF"
	}
};
var defaultAccentColor$2 = accentColors$2.blue;
var darkTheme = ({ accentColor = defaultAccentColor$2.accentColor, accentColorForeground = defaultAccentColor$2.accentColorForeground, ...baseThemeOptions } = {}) => ({
	...baseTheme(baseThemeOptions),
	colors: {
		accentColor,
		accentColorForeground,
		actionButtonBorder: "rgba(255, 255, 255, 0.04)",
		actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
		actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
		closeButton: "rgba(224, 232, 255, 0.6)",
		closeButtonBackground: "rgba(255, 255, 255, 0.08)",
		connectButtonBackground: darkGrey,
		connectButtonBackgroundError: "#FF494A",
		connectButtonInnerBackground: "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
		connectButtonText: "#FFF",
		connectButtonTextError: "#FFF",
		connectionIndicator: "#30E000",
		downloadBottomCardBackground: "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
		downloadTopCardBackground: "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
		error: "#FF494A",
		generalBorder: "rgba(255, 255, 255, 0.08)",
		generalBorderDim: "rgba(255, 255, 255, 0.04)",
		menuItemBackground: "rgba(224, 232, 255, 0.1)",
		modalBackdrop: "rgba(0, 0, 0, 0.5)",
		modalBackground: "#1A1B1F",
		modalBorder: "rgba(255, 255, 255, 0.08)",
		modalText: "#FFF",
		modalTextDim: "rgba(224, 232, 255, 0.3)",
		modalTextSecondary: "rgba(255, 255, 255, 0.6)",
		profileAction: "rgba(224, 232, 255, 0.1)",
		profileActionHover: "rgba(224, 232, 255, 0.2)",
		profileForeground: "rgba(224, 232, 255, 0.05)",
		selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
		standby: "#FFD641"
	},
	shadows: {
		connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
		dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
		profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
		selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
		selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
		walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
	}
});
darkTheme.accentColors = accentColors$2;
//#endregion
//#region node_modules/@rainbow-me/rainbowkit/dist/chunk-72HZGUJA.js
var accentColors$1 = {
	blue: {
		accentColor: "#0E76FD",
		accentColorForeground: "#FFF"
	},
	green: {
		accentColor: "#1DB847",
		accentColorForeground: "#FFF"
	},
	orange: {
		accentColor: "#FF801F",
		accentColorForeground: "#FFF"
	},
	pink: {
		accentColor: "#FF5CA0",
		accentColorForeground: "#FFF"
	},
	purple: {
		accentColor: "#5F5AFA",
		accentColorForeground: "#FFF"
	},
	red: {
		accentColor: "#FA423C",
		accentColorForeground: "#FFF"
	}
};
var defaultAccentColor$1 = accentColors$1.blue;
var lightTheme = ({ accentColor = defaultAccentColor$1.accentColor, accentColorForeground = defaultAccentColor$1.accentColorForeground, ...baseThemeOptions } = {}) => ({
	...baseTheme(baseThemeOptions),
	colors: {
		accentColor,
		accentColorForeground,
		actionButtonBorder: "rgba(0, 0, 0, 0.04)",
		actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
		actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
		closeButton: "rgba(60, 66, 66, 0.8)",
		closeButtonBackground: "rgba(0, 0, 0, 0.06)",
		connectButtonBackground: "#FFF",
		connectButtonBackgroundError: "#FF494A",
		connectButtonInnerBackground: "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
		connectButtonText: "#25292E",
		connectButtonTextError: "#FFF",
		connectionIndicator: "#30E000",
		downloadBottomCardBackground: "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
		downloadTopCardBackground: "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
		error: "#FF494A",
		generalBorder: "rgba(0, 0, 0, 0.06)",
		generalBorderDim: "rgba(0, 0, 0, 0.03)",
		menuItemBackground: "rgba(60, 66, 66, 0.1)",
		modalBackdrop: "rgba(0, 0, 0, 0.3)",
		modalBackground: "#FFF",
		modalBorder: "transparent",
		modalText: "#25292E",
		modalTextDim: "rgba(60, 66, 66, 0.3)",
		modalTextSecondary: "rgba(60, 66, 66, 0.6)",
		profileAction: "#FFF",
		profileActionHover: "rgba(255, 255, 255, 0.5)",
		profileForeground: "rgba(60, 66, 66, 0.06)",
		selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
		standby: "#FFD641"
	},
	shadows: {
		connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
		dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
		profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
		selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
		selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
		walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
	}
});
lightTheme.accentColors = accentColors$1;
//#endregion
//#region node_modules/@rainbow-me/rainbowkit/dist/chunk-7ZP3ENJ2.js
var accentColors = {
	blue: {
		accentColor: "#3898FF",
		accentColorForeground: "#FFF"
	},
	green: {
		accentColor: "#4BD166",
		accentColorForeground: "#000"
	},
	orange: {
		accentColor: "#FF983D",
		accentColorForeground: "#000"
	},
	pink: {
		accentColor: "#FF7AB8",
		accentColorForeground: "#000"
	},
	purple: {
		accentColor: "#7A70FF",
		accentColorForeground: "#FFF"
	},
	red: {
		accentColor: "#FF6257",
		accentColorForeground: "#FFF"
	}
};
var defaultAccentColor = accentColors.blue;
var midnightTheme = ({ accentColor = defaultAccentColor.accentColor, accentColorForeground = defaultAccentColor.accentColorForeground, ...baseThemeOptions } = {}) => ({
	...baseTheme(baseThemeOptions),
	colors: {
		accentColor,
		accentColorForeground,
		actionButtonBorder: "rgba(255, 255, 255, 0.04)",
		actionButtonBorderMobile: "rgba(255, 255, 255, 0.1)",
		actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
		closeButton: "rgba(255, 255, 255, 0.7)",
		closeButtonBackground: "rgba(255, 255, 255, 0.08)",
		connectButtonBackground: "#000",
		connectButtonBackgroundError: "#FF494A",
		connectButtonInnerBackground: "linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.12))",
		connectButtonText: "#FFF",
		connectButtonTextError: "#FFF",
		connectionIndicator: "#30E000",
		downloadBottomCardBackground: "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.1) 71.04%), #050505",
		downloadTopCardBackground: "linear-gradient(126deg, rgba(120, 120, 120, 0.1) 9.49%, rgba(0, 0, 0, 0) 71.04%), #050505",
		error: "#FF494A",
		generalBorder: "rgba(255, 255, 255, 0.08)",
		generalBorderDim: "rgba(255, 255, 255, 0.04)",
		menuItemBackground: "rgba(255, 255, 255, 0.08)",
		modalBackdrop: "rgba(0, 0, 0, 0.7)",
		modalBackground: "#000",
		modalBorder: "rgba(255, 255, 255, 0.08)",
		modalText: "#FFF",
		modalTextDim: "rgba(255, 255, 255, 0.2)",
		modalTextSecondary: "rgba(255, 255, 255, 0.6)",
		profileAction: "rgba(255, 255, 255, 0.1)",
		profileActionHover: "rgba(255, 255, 255, 0.2)",
		profileForeground: "rgba(255, 255, 255, 0.06)",
		selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
		standby: "#FFD641"
	},
	shadows: {
		connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
		dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
		profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
		selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
		selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
		walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
	}
});
midnightTheme.accentColors = accentColors;
//#endregion
//#region node_modules/@vanilla-extract/css/functionSerializer/dist/vanilla-extract-css-functionSerializer.browser.esm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function addFunctionSerializer(target, recipe) {
	Object.defineProperty(target, "__recipe__", {
		value: recipe,
		writable: false
	});
	return target;
}
//#endregion
//#region node_modules/@vanilla-extract/css/recipe/dist/vanilla-extract-css-recipe.browser.esm.js
/**
* @deprecated Use 'addFunctionSerializer' from '@vanilla-extract/css/functionSerializer'
*/
var addRecipe = addFunctionSerializer;
//#endregion
//#region node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js
function createNormalizeValueFn(properties) {
	var { conditions } = properties;
	if (!conditions) throw new Error("Styles have no conditions");
	function normalizeValue(value) {
		if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
			if (!conditions.defaultCondition) throw new Error("No default condition");
			return { [conditions.defaultCondition]: value };
		}
		if (Array.isArray(value)) {
			if (!("responsiveArray" in conditions)) throw new Error("Responsive arrays are not supported");
			var returnValue = {};
			for (var index in conditions.responsiveArray) if (value[index] != null) returnValue[conditions.responsiveArray[index]] = value[index];
			return returnValue;
		}
		return value;
	}
	return addRecipe(normalizeValue, {
		importPath: "@vanilla-extract/sprinkles/createUtils",
		importName: "createNormalizeValueFn",
		args: [{ conditions: properties.conditions }]
	});
}
function createMapValueFn(properties) {
	var { conditions } = properties;
	if (!conditions) throw new Error("Styles have no conditions");
	var normalizeValue = createNormalizeValueFn(properties);
	function mapValue(value, mapFn) {
		if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
			if (!conditions.defaultCondition) throw new Error("No default condition");
			return mapFn(value, conditions.defaultCondition);
		}
		var normalizedObject = Array.isArray(value) ? normalizeValue(value) : value;
		var mappedObject = {};
		for (var _key in normalizedObject) if (normalizedObject[_key] != null) mappedObject[_key] = mapFn(normalizedObject[_key], _key);
		return mappedObject;
	}
	return addRecipe(mapValue, {
		importPath: "@vanilla-extract/sprinkles/createUtils",
		importName: "createMapValueFn",
		args: [{ conditions: properties.conditions }]
	});
}
//#endregion
//#region node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-74286718.esm.js
function toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
	key = toPropertyKey(key);
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
var createSprinkles$1 = (composeStyles) => function() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	var sprinklesStyles = Object.assign({}, ...args.map((a) => a.styles));
	var sprinklesKeys = Object.keys(sprinklesStyles);
	var shorthandNames = sprinklesKeys.filter((property) => "mappings" in sprinklesStyles[property]);
	var sprinklesFn = (props) => {
		var classNames = [];
		var shorthands = {};
		var nonShorthands = _objectSpread2({}, props);
		var hasShorthands = false;
		for (var shorthand of shorthandNames) {
			var value = props[shorthand];
			if (value != null) {
				var sprinkle = sprinklesStyles[shorthand];
				hasShorthands = true;
				for (var propMapping of sprinkle.mappings) {
					shorthands[propMapping] = value;
					if (nonShorthands[propMapping] == null) delete nonShorthands[propMapping];
				}
			}
		}
		var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
		var _loop = function _loop() {
			var propValue = finalProps[prop];
			var sprinkle = sprinklesStyles[prop];
			try {
				if (sprinkle.mappings) return 1;
				if (typeof propValue === "string" || typeof propValue === "number") {
					if (!sprinkle.values[propValue].defaultClass) throw new Error();
					classNames.push(sprinkle.values[propValue].defaultClass);
				} else if (Array.isArray(propValue)) for (var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++) {
					var responsiveValue = propValue[responsiveIndex];
					if (responsiveValue != null) {
						var conditionName = sprinkle.responsiveArray[responsiveIndex];
						if (!sprinkle.values[responsiveValue].conditions[conditionName]) throw new Error();
						classNames.push(sprinkle.values[responsiveValue].conditions[conditionName]);
					}
				}
				else for (var _conditionName in propValue) {
					var _value = propValue[_conditionName];
					if (_value != null) {
						if (!sprinkle.values[_value].conditions[_conditionName]) throw new Error();
						classNames.push(sprinkle.values[_value].conditions[_conditionName]);
					}
				}
			} catch (e) {
				{
					class SprinklesError extends Error {
						constructor(message) {
							super(message);
							this.name = "SprinklesError";
						}
					}
					var format = (v) => typeof v === "string" ? "\"".concat(v, "\"") : v;
					var invalidPropValue = (prop, value, possibleValues) => {
						throw new SprinklesError("\"".concat(prop, "\" has no value ").concat(format(value), ". Possible values are ").concat(Object.keys(possibleValues).map(format).join(", ")));
					};
					if (!sprinkle) throw new SprinklesError("\"".concat(prop, "\" is not a valid sprinkle"));
					if (typeof propValue === "string" || typeof propValue === "number") {
						if (!(propValue in sprinkle.values)) invalidPropValue(prop, propValue, sprinkle.values);
						if (!sprinkle.values[propValue].defaultClass) throw new SprinklesError("\"".concat(prop, "\" has no default condition. You must specify which conditions to target explicitly. Possible options are ").concat(Object.keys(sprinkle.values[propValue].conditions).map(format).join(", ")));
					}
					if (typeof propValue === "object") {
						if (!("conditions" in sprinkle.values[Object.keys(sprinkle.values)[0]])) throw new SprinklesError("\"".concat(prop, "\" is not a conditional property"));
						if (Array.isArray(propValue)) {
							if (!("responsiveArray" in sprinkle)) throw new SprinklesError("\"".concat(prop, "\" does not support responsive arrays"));
							var breakpointCount = sprinkle.responsiveArray.length;
							if (breakpointCount < propValue.length) throw new SprinklesError("\"".concat(prop, "\" only supports up to ").concat(breakpointCount, " breakpoints. You passed ").concat(propValue.length));
							for (var _responsiveValue of propValue) if (!sprinkle.values[_responsiveValue]) invalidPropValue(prop, _responsiveValue, sprinkle.values);
						} else for (var _conditionName2 in propValue) {
							var _value2 = propValue[_conditionName2];
							if (_value2 != null) {
								if (!sprinkle.values[_value2]) invalidPropValue(prop, _value2, sprinkle.values);
								if (!sprinkle.values[_value2].conditions[_conditionName2]) throw new SprinklesError("\"".concat(prop, "\" has no condition named ").concat(format(_conditionName2), ". Possible values are ").concat(Object.keys(sprinkle.values[_value2].conditions).map(format).join(", ")));
							}
						}
					}
				}
				throw e;
			}
		};
		for (var prop in finalProps) if (_loop()) continue;
		return composeStyles(classNames.join(" "));
	};
	return Object.assign(sprinklesFn, { properties: new Set(sprinklesKeys) });
};
//#endregion
//#region node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js
var composeStyles = (classList) => classList;
var createSprinkles = function createSprinkles() {
	return createSprinkles$1(composeStyles)(...arguments);
};
//#endregion
//#region node_modules/@wagmi/core/dist/esm/utils/extractRpcUrls.js
function extractRpcUrls(parameters) {
	const { chain } = parameters;
	const fallbackUrl = chain.rpcUrls.default.http[0];
	if (!parameters.transports) return [fallbackUrl];
	const transport = parameters.transports?.[chain.id]?.({ chain });
	return (transport?.value?.transports || [transport]).map(({ value }) => value?.url || fallbackUrl);
}
//#endregion
//#region node_modules/@adraffy/ens-normalize/dist/index.mjs
var COMPRESSED$1 = "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";
var FENCED = new Map([
	[8217, "apostrophe"],
	[8260, "fraction slash"],
	[12539, "middle dot"]
]);
var NSM_MAX = 4;
function decode_arithmetic(bytes) {
	let pos = 0;
	function u16() {
		return bytes[pos++] << 8 | bytes[pos++];
	}
	let symbol_count = u16();
	let total = 1;
	let acc = [0, 1];
	for (let i = 1; i < symbol_count; i++) acc.push(total += u16());
	let skip = u16();
	let pos_payload = pos;
	pos += skip;
	let read_width = 0;
	let read_buffer = 0;
	function read_bit() {
		if (read_width == 0) {
			read_buffer = read_buffer << 8 | bytes[pos++];
			read_width = 8;
		}
		return read_buffer >> --read_width & 1;
	}
	const N = 31;
	const FULL = 2 ** N;
	const HALF = FULL >>> 1;
	const QRTR = HALF >> 1;
	const MASK = FULL - 1;
	let register = 0;
	for (let i = 0; i < N; i++) register = register << 1 | read_bit();
	let symbols = [];
	let low = 0;
	let range = FULL;
	while (true) {
		let value = Math.floor(((register - low + 1) * total - 1) / range);
		let start = 0;
		let end = symbol_count;
		while (end - start > 1) {
			let mid = start + end >>> 1;
			if (value < acc[mid]) end = mid;
			else start = mid;
		}
		if (start == 0) break;
		symbols.push(start);
		let a = low + Math.floor(range * acc[start] / total);
		let b = low + Math.floor(range * acc[start + 1] / total) - 1;
		while (((a ^ b) & HALF) == 0) {
			register = register << 1 & MASK | read_bit();
			a = a << 1 & MASK;
			b = b << 1 & MASK | 1;
		}
		while (a & ~b & QRTR) {
			register = register & HALF | register << 1 & MASK >>> 1 | read_bit();
			a = a << 1 ^ HALF;
			b = (b ^ HALF) << 1 | HALF | 1;
		}
		low = a;
		range = 1 + b - a;
	}
	let offset = symbol_count - 4;
	return symbols.map((x) => {
		switch (x - offset) {
			case 3: return offset + 65792 + (bytes[pos_payload++] << 16 | bytes[pos_payload++] << 8 | bytes[pos_payload++]);
			case 2: return offset + 256 + (bytes[pos_payload++] << 8 | bytes[pos_payload++]);
			case 1: return offset + bytes[pos_payload++];
			default: return x - 1;
		}
	});
}
function read_payload(v) {
	let pos = 0;
	return () => v[pos++];
}
function read_compressed_payload(s) {
	return read_payload(decode_arithmetic(unsafe_atob(s)));
}
function unsafe_atob(s) {
	let lookup = [];
	[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((c, i) => lookup[c.charCodeAt(0)] = i);
	let n = s.length;
	let ret = new Uint8Array(6 * n >> 3);
	for (let i = 0, pos = 0, width = 0, carry = 0; i < n; i++) {
		carry = carry << 6 | lookup[s.charCodeAt(i)];
		width += 6;
		if (width >= 8) ret[pos++] = carry >> (width -= 8);
	}
	return ret;
}
function signed(i) {
	return i & 1 ? ~i >> 1 : i >> 1;
}
function read_deltas(n, next) {
	let v = Array(n);
	for (let i = 0, x = 0; i < n; i++) v[i] = x += signed(next());
	return v;
}
function read_sorted(next, prev = 0) {
	let ret = [];
	while (true) {
		let x = next();
		let n = next();
		if (!n) break;
		prev += x;
		for (let i = 0; i < n; i++) ret.push(prev + i);
		prev += n + 1;
	}
	return ret;
}
function read_sorted_arrays(next) {
	return read_array_while(() => {
		let v = read_sorted(next);
		if (v.length) return v;
	});
}
function read_mapped(next) {
	let ret = [];
	while (true) {
		let w = next();
		if (w == 0) break;
		ret.push(read_linear_table(w, next));
	}
	while (true) {
		let w = next() - 1;
		if (w < 0) break;
		ret.push(read_replacement_table(w, next));
	}
	return ret.flat();
}
function read_array_while(next) {
	let v = [];
	while (true) {
		let x = next(v.length);
		if (!x) break;
		v.push(x);
	}
	return v;
}
function read_transposed(n, w, next) {
	let m = Array(n).fill().map(() => []);
	for (let i = 0; i < w; i++) read_deltas(n, next).forEach((x, j) => m[j].push(x));
	return m;
}
function read_linear_table(w, next) {
	let dx = 1 + next();
	let dy = next();
	let vN = read_array_while(next);
	return read_transposed(vN.length, 1 + w, next).flatMap((v, i) => {
		let [x, ...ys] = v;
		return Array(vN[i]).fill().map((_, j) => {
			let j_dy = j * dy;
			return [x + j * dx, ys.map((y) => y + j_dy)];
		});
	});
}
function read_replacement_table(w, next) {
	return read_transposed(1 + next(), 1 + w, next).map((v) => [v[0], v.slice(1)]);
}
function read_trie(next) {
	let ret = [];
	let sorted = read_sorted(next);
	expand(decode([]), []);
	return ret;
	function decode(Q) {
		return {
			S: next(),
			B: read_array_while(() => {
				let cps = read_sorted(next).map((i) => sorted[i]);
				if (cps.length) return decode(cps);
			}),
			Q
		};
	}
	function expand({ S, B }, cps, saved) {
		if (S & 4 && saved === cps[cps.length - 1]) return;
		if (S & 2) saved = cps[cps.length - 1];
		if (S & 1) ret.push(cps);
		for (let br of B) for (let cp of br.Q) expand(br, [...cps, cp], saved);
	}
}
function hex_cp(cp) {
	return cp.toString(16).toUpperCase().padStart(2, "0");
}
function quote_cp(cp) {
	return `{${hex_cp(cp)}}`;
}
function explode_cp(s) {
	let cps = [];
	for (let pos = 0, len = s.length; pos < len;) {
		let cp = s.codePointAt(pos);
		pos += cp < 65536 ? 1 : 2;
		cps.push(cp);
	}
	return cps;
}
function str_from_cps(cps) {
	const chunk = 4096;
	let len = cps.length;
	if (len < chunk) return String.fromCodePoint(...cps);
	let buf = [];
	for (let i = 0; i < len;) buf.push(String.fromCodePoint(...cps.slice(i, i += chunk)));
	return buf.join("");
}
function compare_arrays(a, b) {
	let n = a.length;
	let c = n - b.length;
	for (let i = 0; c == 0 && i < n; i++) c = a[i] - b[i];
	return c;
}
var COMPRESSED = "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";
var S0 = 44032;
var L0 = 4352;
var V0 = 4449;
var T0 = 4519;
var L_COUNT = 19;
var V_COUNT = 21;
var T_COUNT = 28;
var N_COUNT = V_COUNT * T_COUNT;
var S1 = S0 + L_COUNT * N_COUNT;
var L1 = L0 + L_COUNT;
var V1 = V0 + V_COUNT;
var T1 = T0 + T_COUNT;
function unpack_cc(packed) {
	return packed >> 24 & 255;
}
function unpack_cp(packed) {
	return packed & 16777215;
}
var SHIFTED_RANK, EXCLUSIONS, DECOMP, RECOMP;
function init$1() {
	let r = read_compressed_payload(COMPRESSED);
	SHIFTED_RANK = new Map(read_sorted_arrays(r).flatMap((v, i) => v.map((x) => [x, i + 1 << 24])));
	EXCLUSIONS = new Set(read_sorted(r));
	DECOMP = /* @__PURE__ */ new Map();
	RECOMP = /* @__PURE__ */ new Map();
	for (let [cp, cps] of read_mapped(r)) {
		if (!EXCLUSIONS.has(cp) && cps.length == 2) {
			let [a, b] = cps;
			let bucket = RECOMP.get(a);
			if (!bucket) {
				bucket = /* @__PURE__ */ new Map();
				RECOMP.set(a, bucket);
			}
			bucket.set(b, cp);
		}
		DECOMP.set(cp, cps.reverse());
	}
}
function is_hangul(cp) {
	return cp >= S0 && cp < S1;
}
function compose_pair(a, b) {
	if (a >= L0 && a < L1 && b >= V0 && b < V1) return S0 + (a - L0) * N_COUNT + (b - V0) * T_COUNT;
	else if (is_hangul(a) && b > T0 && b < T1 && (a - S0) % T_COUNT == 0) return a + (b - T0);
	else {
		let recomp = RECOMP.get(a);
		if (recomp) {
			recomp = recomp.get(b);
			if (recomp) return recomp;
		}
		return -1;
	}
}
function decomposed(cps) {
	if (!SHIFTED_RANK) init$1();
	let ret = [];
	let buf = [];
	let check_order = false;
	function add(cp) {
		let cc = SHIFTED_RANK.get(cp);
		if (cc) {
			check_order = true;
			cp |= cc;
		}
		ret.push(cp);
	}
	for (let cp of cps) while (true) {
		if (cp < 128) ret.push(cp);
		else if (is_hangul(cp)) {
			let s_index = cp - S0;
			let l_index = s_index / N_COUNT | 0;
			let v_index = s_index % N_COUNT / T_COUNT | 0;
			let t_index = s_index % T_COUNT;
			add(L0 + l_index);
			add(V0 + v_index);
			if (t_index > 0) add(T0 + t_index);
		} else {
			let mapped = DECOMP.get(cp);
			if (mapped) buf.push(...mapped);
			else add(cp);
		}
		if (!buf.length) break;
		cp = buf.pop();
	}
	if (check_order && ret.length > 1) {
		let prev_cc = unpack_cc(ret[0]);
		for (let i = 1; i < ret.length; i++) {
			let cc = unpack_cc(ret[i]);
			if (cc == 0 || prev_cc <= cc) {
				prev_cc = cc;
				continue;
			}
			let j = i - 1;
			while (true) {
				let tmp = ret[j + 1];
				ret[j + 1] = ret[j];
				ret[j] = tmp;
				if (!j) break;
				prev_cc = unpack_cc(ret[--j]);
				if (prev_cc <= cc) break;
			}
			prev_cc = unpack_cc(ret[i]);
		}
	}
	return ret;
}
function composed_from_decomposed(v) {
	let ret = [];
	let stack = [];
	let prev_cp = -1;
	let prev_cc = 0;
	for (let packed of v) {
		let cc = unpack_cc(packed);
		let cp = unpack_cp(packed);
		if (prev_cp == -1) if (cc == 0) prev_cp = cp;
		else ret.push(cp);
		else if (prev_cc > 0 && prev_cc >= cc) {
			if (cc == 0) {
				ret.push(prev_cp, ...stack);
				stack.length = 0;
				prev_cp = cp;
			} else stack.push(cp);
			prev_cc = cc;
		} else {
			let composed = compose_pair(prev_cp, cp);
			if (composed >= 0) prev_cp = composed;
			else if (prev_cc == 0 && cc == 0) {
				ret.push(prev_cp);
				prev_cp = cp;
			} else {
				stack.push(cp);
				prev_cc = cc;
			}
		}
	}
	if (prev_cp >= 0) ret.push(prev_cp, ...stack);
	return ret;
}
function nfd(cps) {
	return decomposed(cps).map(unpack_cp);
}
function nfc(cps) {
	return composed_from_decomposed(decomposed(cps));
}
var HYPHEN = 45;
var STOP_CH = ".";
var FE0F = 65039;
var UNIQUE_PH = 1;
var Array_from = (x) => Array.from(x);
function group_has_cp(g, cp) {
	return g.P.has(cp) || g.Q.has(cp);
}
var Emoji = class extends Array {
	get is_emoji() {
		return true;
	}
}, MAPPED, IGNORED, CM, NSM, ESCAPE, GROUPS, WHOLE_VALID, WHOLE_MAP, VALID, EMOJI_LIST, EMOJI_ROOT;
function init() {
	if (MAPPED) return;
	let r = read_compressed_payload(COMPRESSED$1);
	const read_sorted_array = () => read_sorted(r);
	const read_sorted_set = () => new Set(read_sorted_array());
	const set_add_many = (set, v) => v.forEach((x) => set.add(x));
	MAPPED = new Map(read_mapped(r));
	IGNORED = read_sorted_set();
	CM = read_sorted_array();
	NSM = new Set(read_sorted_array().map((i) => CM[i]));
	CM = new Set(CM);
	ESCAPE = read_sorted_set();
	read_sorted_set();
	let chunks = read_sorted_arrays(r);
	let unrestricted = r();
	const read_chunked = () => {
		let set = /* @__PURE__ */ new Set();
		read_sorted_array().forEach((i) => set_add_many(set, chunks[i]));
		set_add_many(set, read_sorted_array());
		return set;
	};
	GROUPS = read_array_while((i) => {
		let N = read_array_while(r).map((x) => x + 96);
		if (N.length) {
			let R = i >= unrestricted;
			N[0] -= 32;
			N = str_from_cps(N);
			if (R) N = `Restricted[${N}]`;
			let P = read_chunked();
			let Q = read_chunked();
			let M = !r();
			return {
				N,
				P,
				Q,
				M,
				R
			};
		}
	});
	WHOLE_VALID = read_sorted_set();
	WHOLE_MAP = /* @__PURE__ */ new Map();
	let wholes = read_sorted_array().concat(Array_from(WHOLE_VALID)).sort((a, b) => a - b);
	wholes.forEach((cp, i) => {
		let d = r();
		let w = wholes[i] = d ? wholes[i - d] : {
			V: [],
			M: /* @__PURE__ */ new Map()
		};
		w.V.push(cp);
		if (!WHOLE_VALID.has(cp)) WHOLE_MAP.set(cp, w);
	});
	for (let { V, M } of new Set(WHOLE_MAP.values())) {
		let recs = [];
		for (let cp of V) {
			let gs = GROUPS.filter((g) => group_has_cp(g, cp));
			let rec = recs.find(({ G }) => gs.some((g) => G.has(g)));
			if (!rec) {
				rec = {
					G: /* @__PURE__ */ new Set(),
					V: []
				};
				recs.push(rec);
			}
			rec.V.push(cp);
			set_add_many(rec.G, gs);
		}
		let union = recs.flatMap((x) => Array_from(x.G));
		for (let { G, V } of recs) {
			let complement = new Set(union.filter((g) => !G.has(g)));
			for (let cp of V) M.set(cp, complement);
		}
	}
	VALID = /* @__PURE__ */ new Set();
	let multi = /* @__PURE__ */ new Set();
	const add_to_union = (cp) => VALID.has(cp) ? multi.add(cp) : VALID.add(cp);
	for (let g of GROUPS) {
		for (let cp of g.P) add_to_union(cp);
		for (let cp of g.Q) add_to_union(cp);
	}
	for (let cp of VALID) if (!WHOLE_MAP.has(cp) && !multi.has(cp)) WHOLE_MAP.set(cp, UNIQUE_PH);
	set_add_many(VALID, nfd(VALID));
	EMOJI_LIST = read_trie(r).map((v) => Emoji.from(v)).sort(compare_arrays);
	EMOJI_ROOT = /* @__PURE__ */ new Map();
	for (let cps of EMOJI_LIST) {
		let prev = [EMOJI_ROOT];
		for (let cp of cps) {
			let next = prev.map((node) => {
				let child = node.get(cp);
				if (!child) {
					child = /* @__PURE__ */ new Map();
					node.set(cp, child);
				}
				return child;
			});
			if (cp === FE0F) prev.push(...next);
			else prev = next;
		}
		for (let x of prev) x.V = cps;
	}
}
function quoted_cp(cp) {
	return (should_escape(cp) ? "" : `${bidi_qq(safe_str_from_cps([cp]))} `) + quote_cp(cp);
}
function bidi_qq(s) {
	return `"${s}"\u200E`;
}
function check_label_extension(cps) {
	if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) throw new Error(`invalid label extension: "${str_from_cps(cps.slice(0, 4))}"`);
}
function check_leading_underscore(cps) {
	const UNDERSCORE = 95;
	for (let i = cps.lastIndexOf(UNDERSCORE); i > 0;) if (cps[--i] !== UNDERSCORE) throw new Error("underscore allowed only at start");
}
function check_fenced(cps) {
	let cp = cps[0];
	let prev = FENCED.get(cp);
	if (prev) throw error_placement(`leading ${prev}`);
	let n = cps.length;
	let last = -1;
	for (let i = 1; i < n; i++) {
		cp = cps[i];
		let match = FENCED.get(cp);
		if (match) {
			if (last == i) throw error_placement(`${prev} + ${match}`);
			last = i + 1;
			prev = match;
		}
	}
	if (last == n) throw error_placement(`trailing ${prev}`);
}
function safe_str_from_cps(cps, max = Infinity, quoter = quote_cp) {
	let buf = [];
	if (is_combining_mark(cps[0])) buf.push("◌");
	if (cps.length > max) {
		max >>= 1;
		cps = [
			...cps.slice(0, max),
			8230,
			...cps.slice(-max)
		];
	}
	let prev = 0;
	let n = cps.length;
	for (let i = 0; i < n; i++) {
		let cp = cps[i];
		if (should_escape(cp)) {
			buf.push(str_from_cps(cps.slice(prev, i)));
			buf.push(quoter(cp));
			prev = i + 1;
		}
	}
	buf.push(str_from_cps(cps.slice(prev, n)));
	return buf.join("");
}
function is_combining_mark(cp, only_nsm) {
	init();
	return only_nsm ? NSM.has(cp) : CM.has(cp);
}
function should_escape(cp) {
	init();
	return ESCAPE.has(cp);
}
function ens_normalize(name) {
	return flatten(split(name, nfc, filter_fe0f));
}
function split(name, nf, ef) {
	if (!name) return [];
	init();
	let offset = 0;
	return name.split(STOP_CH).map((label) => {
		let input = explode_cp(label);
		let info = {
			input,
			offset
		};
		offset += input.length + 1;
		try {
			let tokens = info.tokens = tokens_from_str(input, nf, ef);
			let token_count = tokens.length;
			let type;
			if (!token_count) throw new Error(`empty label`);
			let norm = info.output = tokens.flat();
			check_leading_underscore(norm);
			if (!(info.emoji = token_count > 1 || tokens[0].is_emoji) && norm.every((cp) => cp < 128)) {
				check_label_extension(norm);
				type = "ASCII";
			} else {
				let chars = tokens.flatMap((x) => x.is_emoji ? [] : x);
				if (!chars.length) type = "Emoji";
				else {
					if (CM.has(norm[0])) throw error_placement("leading combining mark");
					for (let i = 1; i < token_count; i++) {
						let cps = tokens[i];
						if (!cps.is_emoji && CM.has(cps[0])) throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i - 1])} + ${safe_str_from_cps([cps[0]])}"`);
					}
					check_fenced(norm);
					let unique = Array_from(new Set(chars));
					let [g] = determine_group(unique);
					check_group(g, chars);
					check_whole(g, unique);
					type = g.N;
				}
			}
			info.type = type;
		} catch (err) {
			info.error = err;
		}
		return info;
	});
}
function check_whole(group, unique) {
	let maker;
	let shared = [];
	for (let cp of unique) {
		let whole = WHOLE_MAP.get(cp);
		if (whole === UNIQUE_PH) return;
		if (whole) {
			let set = whole.M.get(cp);
			maker = maker ? maker.filter((g) => set.has(g)) : Array_from(set);
			if (!maker.length) return;
		} else shared.push(cp);
	}
	if (maker) {
		for (let g of maker) if (shared.every((cp) => group_has_cp(g, cp))) throw new Error(`whole-script confusable: ${group.N}/${g.N}`);
	}
}
function determine_group(unique) {
	let groups = GROUPS;
	for (let cp of unique) {
		let gs = groups.filter((g) => group_has_cp(g, cp));
		if (!gs.length) if (!GROUPS.some((g) => group_has_cp(g, cp))) throw error_disallowed(cp);
		else throw error_group_member(groups[0], cp);
		groups = gs;
		if (gs.length == 1) break;
	}
	return groups;
}
function flatten(split) {
	return split.map(({ input, error, output }) => {
		if (error) {
			let msg = error.message;
			throw new Error(split.length == 1 ? msg : `Invalid label ${bidi_qq(safe_str_from_cps(input, 63))}: ${msg}`);
		}
		return str_from_cps(output);
	}).join(STOP_CH);
}
function error_disallowed(cp) {
	return /* @__PURE__ */ new Error(`disallowed character: ${quoted_cp(cp)}`);
}
function error_group_member(g, cp) {
	let quoted = quoted_cp(cp);
	let gg = GROUPS.find((g) => g.P.has(cp));
	if (gg) quoted = `${gg.N} ${quoted}`;
	return /* @__PURE__ */ new Error(`illegal mixture: ${g.N} + ${quoted}`);
}
function error_placement(where) {
	return /* @__PURE__ */ new Error(`illegal placement: ${where}`);
}
function check_group(g, cps) {
	for (let cp of cps) if (!group_has_cp(g, cp)) throw error_group_member(g, cp);
	if (g.M) {
		let decomposed = nfd(cps);
		for (let i = 1, e = decomposed.length; i < e; i++) if (NSM.has(decomposed[i])) {
			let j = i + 1;
			for (let cp; j < e && NSM.has(cp = decomposed[j]); j++) for (let k = i; k < j; k++) if (decomposed[k] == cp) throw new Error(`duplicate non-spacing marks: ${quoted_cp(cp)}`);
			if (j - i > NSM_MAX) throw new Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(decomposed.slice(i - 1, j)))} (${j - i}/${NSM_MAX})`);
			i = j;
		}
	}
}
function tokens_from_str(input, nf, ef) {
	let ret = [];
	let chars = [];
	input = input.slice().reverse();
	while (input.length) {
		let emoji = consume_emoji_reversed(input);
		if (emoji) {
			if (chars.length) {
				ret.push(nf(chars));
				chars = [];
			}
			ret.push(ef(emoji));
		} else {
			let cp = input.pop();
			if (VALID.has(cp)) chars.push(cp);
			else {
				let cps = MAPPED.get(cp);
				if (cps) chars.push(...cps);
				else if (!IGNORED.has(cp)) throw error_disallowed(cp);
			}
		}
	}
	if (chars.length) ret.push(nf(chars));
	return ret;
}
function filter_fe0f(cps) {
	return cps.filter((cp) => cp != FE0F);
}
function consume_emoji_reversed(cps, eaten) {
	let node = EMOJI_ROOT;
	let emoji;
	let pos = cps.length;
	while (pos) {
		node = node.get(cps[--pos]);
		if (!node) break;
		let { V } = node;
		if (V) {
			emoji = V;
			if (eaten) eaten.push(...cps.slice(pos).reverse());
			cps.length = pos;
		}
	}
	return emoji;
}
//#endregion
//#region node_modules/ox/_esm/core/Ens.js
/**
* Normalizes ENS name according to [ENSIP-15](https://github.com/ensdomains/docs/blob/9edf9443de4333a0ea7ec658a870672d5d180d53/ens-improvement-proposals/ensip-15-normalization-standard.md).
*
* For more info see [ENS documentation](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) on name processing.
*
* @example
* ```ts twoslash
* import { Ens } from 'ox'
* Ens.normalize('wevm.eth')
* // @log: 'wevm.eth'
* ```
*
* @param name - ENS name.
* @returns Normalized ENS name.
*/
function normalize$1(name) {
	return ens_normalize(name);
}
//#endregion
//#region node_modules/viem/_esm/utils/ens/normalize.js
/**
* @description Normalizes ENS name according to ENSIP-15.
*
* @example
* normalize('wevm.eth')
* 'wevm.eth'
*
* @see https://docs.ens.domains/contract-api-reference/name-processing#normalising-names
* @see https://github.com/ensdomains/docs/blob/9edf9443de4333a0ea7ec658a870672d5d180d53/ens-improvement-proposals/ensip-15-normalization-standard.md
*/
function normalize(name) {
	return normalize$1(name);
}
//#endregion
//#region node_modules/viem/_esm/chains/definitions/mainnet.js
var mainnet = /* @__PURE__ */ defineChain({
	id: 1,
	name: "Ethereum",
	nativeCurrency: {
		name: "Ether",
		symbol: "ETH",
		decimals: 18
	},
	blockTime: 12e3,
	rpcUrls: { default: { http: ["https://eth.merkle.io"] } },
	blockExplorers: { default: {
		name: "Etherscan",
		url: "https://etherscan.io",
		apiUrl: "https://api.etherscan.io/api"
	} },
	contracts: {
		ensUniversalResolver: {
			address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee",
			blockCreated: 23085558
		},
		multicall3: {
			address: "0xca11bde05977b3631167028862be2a173976ca11",
			blockCreated: 14353601
		}
	}
});
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var __assign = function() {
	__assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
/**
* Name of a CSS variable containing the amount of "hidden" scrollbar
* ! might be undefined ! use will fallback!
*/
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
/**
* Assigns a value for a given ref, no matter of the ref format
* @param {RefObject} ref - a callback function or ref object
* @param value - a new value
*
* @see https://github.com/theKashey/use-callback-ref#assignref
* @example
* const refObject = useRef();
* const refFn = (ref) => {....}
*
* assignRef(refObject, "refValue");
* assignRef(refFn, "refValue");
*/
function assignRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
	return ref;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
/**
* creates a MutableRef with ref change callback
* @param initialValue - initial ref value
* @param {Function} callback - a callback to run when value changes
*
* @example
* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
* ref.current = 1;
* // prints 0 -> 1
*
* @see https://reactjs.org/docs/hooks-reference.html#useref
* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
* @returns {MutableRefObject}
*/
function useCallbackRef(initialValue, callback) {
	var ref = (0, import_react.useState)(function() {
		return {
			value: initialValue,
			callback,
			facade: {
				get current() {
					return ref.value;
				},
				set current(value) {
					var last = ref.value;
					if (last !== value) {
						ref.value = value;
						ref.callback(value, last);
					}
				}
			}
		};
	})[0];
	ref.callback = callback;
	return ref.facade;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
/**
* Merges two or more refs together providing a single interface to set their value
* @param {RefObject|Ref} refs
* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
*
* @see {@link mergeRefs} a version without buit-in memoization
* @see https://github.com/theKashey/use-callback-ref#usemergerefs
* @example
* const Component = React.forwardRef((props, ref) => {
*   const ownRef = useRef();
*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
*   return <div ref={domRef}>...</div>
* }
*/
function useMergeRefs(refs, defaultValue) {
	var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
		return refs.forEach(function(ref) {
			return assignRef(ref, newValue);
		});
	});
	useIsomorphicLayoutEffect(function() {
		var oldValue = currentValues.get(callbackRef);
		if (oldValue) {
			var prevRefs_1 = new Set(oldValue);
			var nextRefs_1 = new Set(refs);
			var current_1 = callbackRef.current;
			prevRefs_1.forEach(function(ref) {
				if (!nextRefs_1.has(ref)) assignRef(ref, null);
			});
			nextRefs_1.forEach(function(ref) {
				if (!prevRefs_1.has(ref)) assignRef(ref, current_1);
			});
		}
		currentValues.set(callbackRef, refs);
	}, [refs]);
	return callbackRef;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
	return a;
}
function innerCreateMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	var buffer = [];
	var assigned = false;
	return {
		read: function() {
			if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			if (buffer.length) return buffer[buffer.length - 1];
			return defaults;
		},
		useMedium: function(data) {
			var item = middleware(data, assigned);
			buffer.push(item);
			return function() {
				buffer = buffer.filter(function(x) {
					return x !== item;
				});
			};
		},
		assignSyncMedium: function(cb) {
			assigned = true;
			while (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
			}
			buffer = {
				push: function(x) {
					return cb(x);
				},
				filter: function() {
					return buffer;
				}
			};
		},
		assignMedium: function(cb) {
			assigned = true;
			var pendingQueue = [];
			if (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
				pendingQueue = buffer;
			}
			var executeQueue = function() {
				var cbs = pendingQueue;
				pendingQueue = [];
				cbs.forEach(cb);
			};
			var cycle = function() {
				return Promise.resolve().then(executeQueue);
			};
			cycle();
			buffer = {
				push: function(x) {
					pendingQueue.push(x);
					cycle();
				},
				filter: function(filter) {
					pendingQueue = pendingQueue.filter(filter);
					return buffer;
				}
			};
		}
	};
}
function createSidecarMedium(options) {
	if (options === void 0) options = {};
	var medium = innerCreateMedium(null);
	medium.options = __assign({
		async: true,
		ssr: false
	}, options);
	return medium;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var SideCar = function(_a) {
	var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
	if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
	var Target = sideCar.read();
	if (!Target) throw new Error("Sidecar medium not found");
	return import_react.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
	medium.useMedium(exported);
	return SideCar;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {};
/**
* Removes scrollbar from the page and contain the scroll within the Lock
*/
var RemoveScroll = import_react.forwardRef(function(props, parentRef) {
	var ref = import_react.useRef(null);
	var _a = import_react.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), callbacks = _a[0], setCallbacks = _a[1];
	var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]);
	var SideCar = sideCar;
	var containerRef = useMergeRefs([ref, parentRef]);
	var containerProps = __assign(__assign({}, rest), callbacks);
	return import_react.createElement(import_react.Fragment, null, enabled && import_react.createElement(SideCar, {
		sideCar: effectCar,
		removeScrollBar,
		shards,
		noIsolation,
		inert,
		setCallbacks,
		allowPinchZoom: !!allowPinchZoom,
		lockRef: ref,
		gapMode
	}), forwardProps ? import_react.cloneElement(import_react.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : import_react.createElement(Container, __assign({}, containerProps, {
		className,
		ref: containerRef
	}), children));
});
RemoveScroll.defaultProps = {
	enabled: true,
	removeScrollBar: true,
	inert: false
};
RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
	if (currentNonce) return currentNonce;
	if (typeof __webpack_nonce__ !== "undefined") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
	if (!document) return null;
	var tag = document.createElement("style");
	tag.type = "text/css";
	var nonce = getNonce();
	if (nonce) tag.setAttribute("nonce", nonce);
	return tag;
}
function injectStyles(tag, css) {
	if (tag.styleSheet) tag.styleSheet.cssText = css;
	else tag.appendChild(document.createTextNode(css));
}
function insertStyleTag(tag) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
}
var stylesheetSingleton = function() {
	var counter = 0;
	var stylesheet = null;
	return {
		add: function(style) {
			if (counter == 0) {
				if (stylesheet = makeStyleTag()) {
					injectStyles(stylesheet, style);
					insertStyleTag(stylesheet);
				}
			}
			counter++;
		},
		remove: function() {
			counter--;
			if (!counter && stylesheet) {
				stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
				stylesheet = null;
			}
		}
	};
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/hook.js
/**
* creates a hook to control style singleton
* @see {@link styleSingleton} for a safer component version
* @example
* ```tsx
* const useStyle = styleHookSingleton();
* ///
* useStyle('body { overflow: hidden}');
*/
var styleHookSingleton = function() {
	var sheet = stylesheetSingleton();
	return function(styles, isDynamic) {
		import_react.useEffect(function() {
			sheet.add(styles);
			return function() {
				sheet.remove();
			};
		}, [styles && isDynamic]);
	};
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/component.js
/**
* create a Component to add styles on demand
* - styles are added when first instance is mounted
* - styles are removed when the last instance is unmounted
* - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
*/
var styleSingleton = function() {
	var useStyle = styleHookSingleton();
	var Sheet = function(_a) {
		var styles = _a.styles, dynamic = _a.dynamic;
		useStyle(styles, dynamic);
		return null;
	};
	return Sheet;
};
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
};
var parse = function(x) {
	return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
	var cs = window.getComputedStyle(document.body);
	var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
	var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
	var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(left),
		parse(top),
		parse(right)
	];
};
var getGapWidth = function(gapMode) {
	if (gapMode === void 0) gapMode = "margin";
	if (typeof window === "undefined") return zeroGap;
	var offsets = getOffset(gapMode);
	var documentWidth = document.documentElement.clientWidth;
	var windowWidth = window.innerWidth;
	return {
		left: offsets[0],
		top: offsets[1],
		right: offsets[2],
		gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
	};
};
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
	var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
	if (gapMode === void 0) gapMode = "margin";
	return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
		allowRelative && "position: relative ".concat(important, ";"),
		gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
		gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
	].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
	var counter = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
	import_react.useEffect(function() {
		document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
		return function() {
			var newCounter = getCurrentUseCounter() - 1;
			if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
			else document.body.setAttribute(lockAttribute, newCounter.toString());
		};
	}, []);
};
/**
* Removes page scrollbar and blocks page scroll when mounted
*/
var RemoveScrollBar = function(_a) {
	var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
	useLockAttribute();
	var gap = import_react.useMemo(function() {
		return getGapWidth(gapMode);
	}, [gapMode]);
	return import_react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		passiveSupported = true;
		return true;
	} });
	window.addEventListener("test", options, options);
	window.removeEventListener("test", options, options);
} catch (err) {
	passiveSupported = false;
}
var nonPassive = passiveSupported ? { passive: false } : false;
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
	return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
	if (!(node instanceof Element)) return false;
	var styles = window.getComputedStyle(node);
	return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
	var ownerDocument = node.ownerDocument;
	var current = node;
	do {
		if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
		if (elementCouldBeScrolled(axis, current)) {
			var _a = getScrollVariables(axis, current);
			if (_a[1] > _a[2]) return true;
		}
		current = current.parentNode;
	} while (current && current !== ownerDocument.body);
	return false;
};
var getVScrollVariables = function(_a) {
	return [
		_a.scrollTop,
		_a.scrollHeight,
		_a.clientHeight
	];
};
var getHScrollVariables = function(_a) {
	return [
		_a.scrollLeft,
		_a.scrollWidth,
		_a.clientWidth
	];
};
var elementCouldBeScrolled = function(axis, node) {
	return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
	return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
	/**
	* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
	* and then increasingly negative as you scroll towards the end of the content.
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
	*/
	return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
	var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
	var delta = directionFactor * sourceDelta;
	var target = event.target;
	var targetInLock = endTarget.contains(target);
	var shouldCancelScroll = false;
	var isDeltaPositive = delta > 0;
	var availableScroll = 0;
	var availableScrollTop = 0;
	do {
		var _a = getScrollVariables(axis, target), position = _a[0];
		var elementScroll = _a[1] - _a[2] - directionFactor * position;
		if (position || elementScroll) {
			if (elementCouldBeScrolled(axis, target)) {
				availableScroll += elementScroll;
				availableScrollTop += position;
			}
		}
		if (target instanceof ShadowRoot) target = target.host;
		else target = target.parentNode;
	} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
	if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
	else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
	return shouldCancelScroll;
};
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
	return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
	return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
	return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
	return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
	return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
	var shouldPreventQueue = import_react.useRef([]);
	var touchStartRef = import_react.useRef([0, 0]);
	var activeAxis = import_react.useRef();
	var id = import_react.useState(idCounter++)[0];
	var Style = import_react.useState(styleSingleton)[0];
	var lastProps = import_react.useRef(props);
	import_react.useEffect(function() {
		lastProps.current = props;
	}, [props]);
	import_react.useEffect(function() {
		if (props.inert) {
			document.body.classList.add("block-interactivity-".concat(id));
			var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
			allow_1.forEach(function(el) {
				return el.classList.add("allow-interactivity-".concat(id));
			});
			return function() {
				document.body.classList.remove("block-interactivity-".concat(id));
				allow_1.forEach(function(el) {
					return el.classList.remove("allow-interactivity-".concat(id));
				});
			};
		}
	}, [
		props.inert,
		props.lockRef.current,
		props.shards
	]);
	var shouldCancelEvent = import_react.useCallback(function(event, parent) {
		if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
		var touch = getTouchXY(event);
		var touchStart = touchStartRef.current;
		var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
		var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
		var currentAxis;
		var target = event.target;
		var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
		if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
		var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		if (!canBeScrolledInMainDirection) return true;
		if (canBeScrolledInMainDirection) currentAxis = moveDirection;
		else {
			currentAxis = moveDirection === "v" ? "h" : "v";
			canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		}
		if (!canBeScrolledInMainDirection) return false;
		if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
		if (!currentAxis) return true;
		var cancelingAxis = activeAxis.current || currentAxis;
		return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
	}, []);
	var shouldPrevent = import_react.useCallback(function(_event) {
		var event = _event;
		if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
		var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
		var sourceEvent = shouldPreventQueue.current.filter(function(e) {
			return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
		})[0];
		if (sourceEvent && sourceEvent.should) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!sourceEvent) {
			var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
				return node.contains(event.target);
			});
			if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
				if (event.cancelable) event.preventDefault();
			}
		}
	}, []);
	var shouldCancel = import_react.useCallback(function(name, delta, target, should) {
		var event = {
			name,
			delta,
			target,
			should,
			shadowParent: getOutermostShadowParent(target)
		};
		shouldPreventQueue.current.push(event);
		setTimeout(function() {
			shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
				return e !== event;
			});
		}, 1);
	}, []);
	var scrollTouchStart = import_react.useCallback(function(event) {
		touchStartRef.current = getTouchXY(event);
		activeAxis.current = void 0;
	}, []);
	var scrollWheel = import_react.useCallback(function(event) {
		shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	var scrollTouchMove = import_react.useCallback(function(event) {
		shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	import_react.useEffect(function() {
		lockStack.push(Style);
		props.setCallbacks({
			onScrollCapture: scrollWheel,
			onWheelCapture: scrollWheel,
			onTouchMoveCapture: scrollTouchMove
		});
		document.addEventListener("wheel", shouldPrevent, nonPassive);
		document.addEventListener("touchmove", shouldPrevent, nonPassive);
		document.addEventListener("touchstart", scrollTouchStart, nonPassive);
		return function() {
			lockStack = lockStack.filter(function(inst) {
				return inst !== Style;
			});
			document.removeEventListener("wheel", shouldPrevent, nonPassive);
			document.removeEventListener("touchmove", shouldPrevent, nonPassive);
			document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
		};
	}, []);
	var removeScrollBar = props.removeScrollBar, inert = props.inert;
	return import_react.createElement(import_react.Fragment, null, inert ? import_react.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? import_react.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null);
}
function getOutermostShadowParent(node) {
	var shadowParent = null;
	while (node !== null) {
		if (node instanceof ShadowRoot) {
			shadowParent = node.host;
			node = node.host;
		}
		node = node.parentNode;
	}
	return shadowParent;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = import_react.forwardRef(function(props, ref) {
	return import_react.createElement(RemoveScroll, __assign({}, props, {
		ref,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
//#endregion
//#region node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
function getVarName(variable) {
	var matches = variable.match(/^var\((.*)\)$/);
	if (matches) return matches[1];
	return variable;
}
function get(obj, path) {
	var result = obj;
	for (var key of path) {
		if (!(key in result)) throw new Error("Path ".concat(path.join(" -> "), " does not exist in object"));
		result = result[key];
	}
	return result;
}
function walkObject(obj, fn) {
	var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
	var clone = {};
	for (var key in obj) {
		var _value = obj[key];
		var currentPath = [...path, key];
		if (typeof _value === "string" || typeof _value === "number" || _value == null) clone[key] = fn(_value, currentPath);
		else if (typeof _value === "object" && !Array.isArray(_value)) clone[key] = walkObject(_value, fn, currentPath);
		else console.warn("Skipping invalid key \"".concat(currentPath.join("."), "\". Should be a string, number, null or object. Received: \"").concat(Array.isArray(_value) ? "Array" : typeof _value, "\""));
	}
	return clone;
}
//#endregion
//#region node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js
function assignInlineVars(varsOrContract, tokens) {
	var styles = {};
	if (typeof tokens === "object") {
		var _contract = varsOrContract;
		walkObject(tokens, (value, path) => {
			if (value == null) return;
			var varName = get(_contract, path);
			styles[getVarName(varName)] = String(value);
		});
	} else {
		var _vars = varsOrContract;
		for (var varName in _vars) {
			var value = _vars[varName];
			if (value == null) continue;
			styles[getVarName(varName)] = value;
		}
	}
	Object.defineProperty(styles, "toString", {
		value: function value() {
			return Object.keys(this).map((key) => "".concat(key, ":").concat(this[key])).join(";");
		},
		writable: false
	});
	return styles;
}
//#endregion
//#region node_modules/ua-parser-js/src/ua-parser.js
var require_ua_parser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(window, undefined) {
		"use strict";
		var LIBVERSION = "1.0.41", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
		var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HONOR = "Honor", HUAWEI = "Huawei", LENOVO = "Lenovo", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", NVIDIA = "Nvidia", ONEPLUS = "OnePlus", OPERA = "Opera", OPPO = "OPPO", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS", SUFFIX_BROWSER = " Browser";
		var extend = function(regexes, extensions) {
			var mergedRegexes = {};
			for (var i in regexes) if (extensions[i] && extensions[i].length % 2 === 0) mergedRegexes[i] = extensions[i].concat(regexes[i]);
			else mergedRegexes[i] = regexes[i];
			return mergedRegexes;
		}, enumerize = function(arr) {
			var enums = {};
			for (var i = 0; i < arr.length; i++) enums[arr[i].toUpperCase()] = arr[i];
			return enums;
		}, has = function(str1, str2) {
			return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
		}, lowerize = function(str) {
			return str.toLowerCase();
		}, majorize = function(version) {
			return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined;
		}, trim = function(str, len) {
			if (typeof str === STR_TYPE) {
				str = str.replace(/^\s\s*/, EMPTY);
				return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
			}
		};
		var rgxMapper = function(ua, arrays) {
			var i = 0, j, k, p, q, matches, match;
			while (i < arrays.length && !matches) {
				var regex = arrays[i], props = arrays[i + 1];
				j = k = 0;
				while (j < regex.length && !matches) {
					if (!regex[j]) break;
					matches = regex[j++].exec(ua);
					if (!!matches) for (p = 0; p < props.length; p++) {
						match = matches[++k];
						q = props[p];
						if (typeof q === OBJ_TYPE && q.length > 0) {
							if (q.length === 2) if (typeof q[1] == FUNC_TYPE) this[q[0]] = q[1].call(this, match);
							else this[q[0]] = q[1];
							else if (q.length === 3) if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
							else this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
							else if (q.length === 4) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
						} else this[q] = match ? match : undefined;
					}
				}
				i += 2;
			}
		}, strMapper = function(str, map) {
			for (var i in map) if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
				for (var j = 0; j < map[i].length; j++) if (has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
			} else if (has(map[i], str)) return i === UNKNOWN ? undefined : i;
			return map.hasOwnProperty("*") ? map["*"] : str;
		};
		var oldSafariMap = {
			"1.0": "/8",
			"1.2": "/1",
			"1.3": "/3",
			"2.0": "/412",
			"2.0.2": "/416",
			"2.0.3": "/417",
			"2.0.4": "/419",
			"?": "/"
		}, windowsVersionMap = {
			"ME": "4.90",
			"NT 3.11": "NT3.51",
			"NT 4.0": "NT4.0",
			"2000": "NT 5.0",
			"XP": ["NT 5.1", "NT 5.2"],
			"Vista": "NT 6.0",
			"7": "NT 6.1",
			"8": "NT 6.2",
			"8.1": "NT 6.3",
			"10": ["NT 6.4", "NT 10.0"],
			"RT": "ARM"
		};
		var regexes = {
			browser: [
				[/\b(?:crmo|crios)\/([\w\.]+)/i],
				[VERSION, [NAME, "Chrome"]],
				[/edg(?:e|ios|a)?\/([\w\.]+)/i],
				[VERSION, [NAME, "Edge"]],
				[
					/(opera mini)\/([-\w\.]+)/i,
					/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
					/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
				],
				[NAME, VERSION],
				[/opios[\/ ]+([\w\.]+)/i],
				[VERSION, [NAME, OPERA + " Mini"]],
				[/\bop(?:rg)?x\/([\w\.]+)/i],
				[VERSION, [NAME, OPERA + " GX"]],
				[/\bopr\/([\w\.]+)/i],
				[VERSION, [NAME, OPERA]],
				[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
				[VERSION, [NAME, "Baidu"]],
				[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
				[VERSION, [NAME, "Maxthon"]],
				[
					/(kindle)\/([\w\.]+)/i,
					/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
					/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
					/(?:ms|\()(ie) ([\w\.]+)/i,
					/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
					/(heytap|ovi|115)browser\/([\d\.]+)/i,
					/(weibo)__([\d\.]+)/i
				],
				[NAME, VERSION],
				[/quark(?:pc)?\/([-\w\.]+)/i],
				[VERSION, [NAME, "Quark"]],
				[/\bddg\/([\w\.]+)/i],
				[VERSION, [NAME, "DuckDuckGo"]],
				[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
				[VERSION, [NAME, "UC" + BROWSER]],
				[
					/microm.+\bqbcore\/([\w\.]+)/i,
					/\bqbcore\/([\w\.]+).+microm/i,
					/micromessenger\/([\w\.]+)/i
				],
				[VERSION, [NAME, "WeChat"]],
				[/konqueror\/([\w\.]+)/i],
				[VERSION, [NAME, "Konqueror"]],
				[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
				[VERSION, [NAME, "IE"]],
				[/ya(?:search)?browser\/([\w\.]+)/i],
				[VERSION, [NAME, "Yandex"]],
				[/slbrowser\/([\w\.]+)/i],
				[VERSION, [NAME, "Smart Lenovo " + BROWSER]],
				[/(avast|avg)\/([\w\.]+)/i],
				[[
					NAME,
					/(.+)/,
					"$1 Secure " + BROWSER
				], VERSION],
				[/\bfocus\/([\w\.]+)/i],
				[VERSION, [NAME, FIREFOX + " Focus"]],
				[/\bopt\/([\w\.]+)/i],
				[VERSION, [NAME, OPERA + " Touch"]],
				[/coc_coc\w+\/([\w\.]+)/i],
				[VERSION, [NAME, "Coc Coc"]],
				[/dolfin\/([\w\.]+)/i],
				[VERSION, [NAME, "Dolphin"]],
				[/coast\/([\w\.]+)/i],
				[VERSION, [NAME, OPERA + " Coast"]],
				[/miuibrowser\/([\w\.]+)/i],
				[VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
				[/fxios\/([\w\.-]+)/i],
				[VERSION, [NAME, FIREFOX]],
				[/\bqihoobrowser\/?([\w\.]*)/i],
				[VERSION, [NAME, "360"]],
				[/\b(qq)\/([\w\.]+)/i],
				[[
					NAME,
					/(.+)/,
					"$1Browser"
				], VERSION],
				[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
				[[
					NAME,
					/(.+)/,
					"$1" + SUFFIX_BROWSER
				], VERSION],
				[/samsungbrowser\/([\w\.]+)/i],
				[VERSION, [NAME, SAMSUNG + " Internet"]],
				[/metasr[\/ ]?([\d\.]+)/i],
				[VERSION, [NAME, "Sogou Explorer"]],
				[/(sogou)mo\w+\/([\d\.]+)/i],
				[[NAME, "Sogou Mobile"], VERSION],
				[
					/(electron)\/([\w\.]+) safari/i,
					/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
					/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
				],
				[NAME, VERSION],
				[/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
				[NAME],
				[/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
				[VERSION, NAME],
				[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
				[[NAME, FACEBOOK], VERSION],
				[
					/(Klarna)\/([\w\.]+)/i,
					/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
					/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
					/(daum)apps[\/ ]([\w\.]+)/i,
					/safari (line)\/([\w\.]+)/i,
					/\b(line)\/([\w\.]+)\/iab/i,
					/(alipay)client\/([\w\.]+)/i,
					/(twitter)(?:and| f.+e\/([\w\.]+))/i,
					/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
				],
				[NAME, VERSION],
				[/\bgsa\/([\w\.]+) .*safari\//i],
				[VERSION, [NAME, "GSA"]],
				[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
				[VERSION, [NAME, "TikTok"]],
				[/headlesschrome(?:\/([\w\.]+)| )/i],
				[VERSION, [NAME, CHROME + " Headless"]],
				[/ wv\).+(chrome)\/([\w\.]+)/i],
				[[NAME, CHROME + " WebView"], VERSION],
				[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
				[VERSION, [NAME, "Android " + BROWSER]],
				[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
				[NAME, VERSION],
				[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
				[VERSION, [NAME, "Mobile Safari"]],
				[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
				[VERSION, NAME],
				[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
				[NAME, [
					VERSION,
					strMapper,
					oldSafariMap
				]],
				[/(webkit|khtml)\/([\w\.]+)/i],
				[NAME, VERSION],
				[/(navigator|netscape\d?)\/([-\w\.]+)/i],
				[[NAME, "Netscape"], VERSION],
				[/(wolvic|librewolf)\/([\w\.]+)/i],
				[NAME, VERSION],
				[/mobile vr; rv:([\w\.]+)\).+firefox/i],
				[VERSION, [NAME, FIREFOX + " Reality"]],
				[
					/ekiohf.+(flow)\/([\w\.]+)/i,
					/(swiftfox)/i,
					/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
					/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
					/(firefox)\/([\w\.]+)/i,
					/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
					/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
					/\b(links) \(([\w\.]+)/i
				],
				[NAME, [
					VERSION,
					/_/g,
					"."
				]],
				[/(cobalt)\/([\w\.]+)/i],
				[NAME, [
					VERSION,
					/master.|lts./,
					""
				]]
			],
			cpu: [
				[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
				[[ARCHITECTURE, "amd64"]],
				[/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
				[[ARCHITECTURE, "ia32"]],
				[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
				[[ARCHITECTURE, "arm64"]],
				[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
				[[ARCHITECTURE, "armhf"]],
				[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
				[[ARCHITECTURE, "arm"]],
				[/((ppc|powerpc)(64)?)( mac|;|\))/i],
				[[
					ARCHITECTURE,
					/ower/,
					EMPTY,
					lowerize
				]],
				[/ sun4\w[;\)]/i],
				[[ARCHITECTURE, "sparc"]],
				[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
				[[ARCHITECTURE, lowerize]]
			],
			device: [
				[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
				[
					MODEL,
					[VENDOR, SAMSUNG],
					[TYPE, TABLET]
				],
				[
					/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
					/samsung[- ]((?!sm-[lr])[-\w]+)/i,
					/sec-(sgh\w+)/i
				],
				[
					MODEL,
					[VENDOR, SAMSUNG],
					[TYPE, MOBILE]
				],
				[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
				[
					MODEL,
					[VENDOR, APPLE],
					[TYPE, MOBILE]
				],
				[
					/\((ipad);[-\w\),; ]+apple/i,
					/applecoremedia\/[\w\.]+ \((ipad)/i,
					/\b(ipad)\d\d?,\d\d?[;\]].+ios/i
				],
				[
					MODEL,
					[VENDOR, APPLE],
					[TYPE, TABLET]
				],
				[/(macintosh);/i],
				[MODEL, [VENDOR, APPLE]],
				[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
				[
					MODEL,
					[VENDOR, SHARP],
					[TYPE, MOBILE]
				],
				[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
				[
					MODEL,
					[VENDOR, HONOR],
					[TYPE, TABLET]
				],
				[/honor([-\w ]+)[;\)]/i],
				[
					MODEL,
					[VENDOR, HONOR],
					[TYPE, MOBILE]
				],
				[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
				[
					MODEL,
					[VENDOR, HUAWEI],
					[TYPE, TABLET]
				],
				[/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
				[
					MODEL,
					[VENDOR, HUAWEI],
					[TYPE, MOBILE]
				],
				[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
				[
					[
						MODEL,
						/_/g,
						" "
					],
					[VENDOR, XIAOMI],
					[TYPE, TABLET]
				],
				[
					/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
					/\b; (\w+) build\/hm\1/i,
					/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
					/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
					/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
					/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
					/ ([\w ]+) miui\/v?\d/i
				],
				[
					[
						MODEL,
						/_/g,
						" "
					],
					[VENDOR, XIAOMI],
					[TYPE, MOBILE]
				],
				[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
				[
					MODEL,
					[VENDOR, OPPO],
					[TYPE, MOBILE]
				],
				[/\b(opd2(\d{3}a?))(?: bui|\))/i],
				[
					MODEL,
					[
						VENDOR,
						strMapper,
						{
							"OnePlus": [
								"304",
								"403",
								"203"
							],
							"*": OPPO
						}
					],
					[TYPE, TABLET]
				],
				[/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
				[
					MODEL,
					[VENDOR, "Vivo"],
					[TYPE, MOBILE]
				],
				[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
				[
					MODEL,
					[VENDOR, "Realme"],
					[TYPE, MOBILE]
				],
				[
					/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
					/\bmot(?:orola)?[- ](\w*)/i,
					/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
				],
				[
					MODEL,
					[VENDOR, MOTOROLA],
					[TYPE, MOBILE]
				],
				[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
				[
					MODEL,
					[VENDOR, MOTOROLA],
					[TYPE, TABLET]
				],
				[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
				[
					MODEL,
					[VENDOR, LG],
					[TYPE, TABLET]
				],
				[
					/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
					/\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
					/\blg-?([\d\w]+) bui/i
				],
				[
					MODEL,
					[VENDOR, LG],
					[TYPE, MOBILE]
				],
				[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
				[
					MODEL,
					[VENDOR, LENOVO],
					[TYPE, TABLET]
				],
				[/(nokia) (t[12][01])/i],
				[
					VENDOR,
					MODEL,
					[TYPE, TABLET]
				],
				[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
				[
					[
						MODEL,
						/_/g,
						" "
					],
					[TYPE, MOBILE],
					[VENDOR, "Nokia"]
				],
				[/(pixel (c|tablet))\b/i],
				[
					MODEL,
					[VENDOR, GOOGLE],
					[TYPE, TABLET]
				],
				[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
				[
					MODEL,
					[VENDOR, GOOGLE],
					[TYPE, MOBILE]
				],
				[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
				[
					MODEL,
					[VENDOR, SONY],
					[TYPE, MOBILE]
				],
				[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
				[
					[MODEL, "Xperia Tablet"],
					[VENDOR, SONY],
					[TYPE, TABLET]
				],
				[/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
				[
					MODEL,
					[VENDOR, ONEPLUS],
					[TYPE, MOBILE]
				],
				[
					/(alexa)webm/i,
					/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
					/(kf[a-z]+)( bui|\)).+silk\//i
				],
				[
					MODEL,
					[VENDOR, AMAZON],
					[TYPE, TABLET]
				],
				[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
				[
					[
						MODEL,
						/(.+)/g,
						"Fire Phone $1"
					],
					[VENDOR, AMAZON],
					[TYPE, MOBILE]
				],
				[/(playbook);[-\w\),; ]+(rim)/i],
				[
					MODEL,
					VENDOR,
					[TYPE, TABLET]
				],
				[/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
				[
					MODEL,
					[VENDOR, BLACKBERRY],
					[TYPE, MOBILE]
				],
				[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
				[
					MODEL,
					[VENDOR, ASUS],
					[TYPE, TABLET]
				],
				[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
				[
					MODEL,
					[VENDOR, ASUS],
					[TYPE, MOBILE]
				],
				[/(nexus 9)/i],
				[
					MODEL,
					[VENDOR, "HTC"],
					[TYPE, TABLET]
				],
				[
					/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
					/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
					/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
				],
				[
					VENDOR,
					[
						MODEL,
						/_/g,
						" "
					],
					[TYPE, MOBILE]
				],
				[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
				[
					MODEL,
					[VENDOR, "TCL"],
					[TYPE, TABLET]
				],
				[/(itel) ((\w+))/i],
				[
					[VENDOR, lowerize],
					MODEL,
					[
						TYPE,
						strMapper,
						{
							"tablet": ["p10001l", "w7001"],
							"*": "mobile"
						}
					]
				],
				[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
				[
					MODEL,
					[VENDOR, "Acer"],
					[TYPE, TABLET]
				],
				[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
				[
					MODEL,
					[VENDOR, "Meizu"],
					[TYPE, MOBILE]
				],
				[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
				[
					MODEL,
					[VENDOR, "Ulefone"],
					[TYPE, MOBILE]
				],
				[/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
				[
					MODEL,
					[VENDOR, "Energizer"],
					[TYPE, MOBILE]
				],
				[/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
				[
					MODEL,
					[VENDOR, "Cat"],
					[TYPE, MOBILE]
				],
				[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
				[
					MODEL,
					[VENDOR, "Smartfren"],
					[TYPE, MOBILE]
				],
				[/droid.+; (a(?:015|06[35]|142p?))/i],
				[
					MODEL,
					[VENDOR, "Nothing"],
					[TYPE, MOBILE]
				],
				[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
				[
					MODEL,
					[VENDOR, "Archos"],
					[TYPE, TABLET]
				],
				[/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
				[
					MODEL,
					[VENDOR, "Archos"],
					[TYPE, MOBILE]
				],
				[/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
				[
					VENDOR,
					MODEL,
					[TYPE, TABLET]
				],
				[
					/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
					/; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
					/(hp) ([\w ]+\w)/i,
					/(microsoft); (lumia[\w ]+)/i,
					/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
					/(oppo) ?([\w ]+) bui/i
				],
				[
					VENDOR,
					MODEL,
					[TYPE, MOBILE]
				],
				[
					/(kobo)\s(ereader|touch)/i,
					/(hp).+(touchpad(?!.+tablet)|tablet)/i,
					/(kindle)\/([\w\.]+)/i,
					/(nook)[\w ]+build\/(\w+)/i,
					/(dell) (strea[kpr\d ]*[\dko])/i,
					/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
					/(trinity)[- ]*(t\d{3}) bui/i,
					/(gigaset)[- ]+(q\w{1,9}) bui/i,
					/(vodafone) ([\w ]+)(?:\)| bui)/i
				],
				[
					VENDOR,
					MODEL,
					[TYPE, TABLET]
				],
				[/(surface duo)/i],
				[
					MODEL,
					[VENDOR, MICROSOFT],
					[TYPE, TABLET]
				],
				[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
				[
					MODEL,
					[VENDOR, "Fairphone"],
					[TYPE, MOBILE]
				],
				[/(u304aa)/i],
				[
					MODEL,
					[VENDOR, "AT&T"],
					[TYPE, MOBILE]
				],
				[/\bsie-(\w*)/i],
				[
					MODEL,
					[VENDOR, "Siemens"],
					[TYPE, MOBILE]
				],
				[/\b(rct\w+) b/i],
				[
					MODEL,
					[VENDOR, "RCA"],
					[TYPE, TABLET]
				],
				[/\b(venue[\d ]{2,7}) b/i],
				[
					MODEL,
					[VENDOR, "Dell"],
					[TYPE, TABLET]
				],
				[/\b(q(?:mv|ta)\w+) b/i],
				[
					MODEL,
					[VENDOR, "Verizon"],
					[TYPE, TABLET]
				],
				[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
				[
					MODEL,
					[VENDOR, "Barnes & Noble"],
					[TYPE, TABLET]
				],
				[/\b(tm\d{3}\w+) b/i],
				[
					MODEL,
					[VENDOR, "NuVision"],
					[TYPE, TABLET]
				],
				[/\b(k88) b/i],
				[
					MODEL,
					[VENDOR, "ZTE"],
					[TYPE, TABLET]
				],
				[/\b(nx\d{3}j) b/i],
				[
					MODEL,
					[VENDOR, "ZTE"],
					[TYPE, MOBILE]
				],
				[/\b(gen\d{3}) b.+49h/i],
				[
					MODEL,
					[VENDOR, "Swiss"],
					[TYPE, MOBILE]
				],
				[/\b(zur\d{3}) b/i],
				[
					MODEL,
					[VENDOR, "Swiss"],
					[TYPE, TABLET]
				],
				[/\b((zeki)?tb.*\b) b/i],
				[
					MODEL,
					[VENDOR, "Zeki"],
					[TYPE, TABLET]
				],
				[/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
				[
					[VENDOR, "Dragon Touch"],
					MODEL,
					[TYPE, TABLET]
				],
				[/\b(ns-?\w{0,9}) b/i],
				[
					MODEL,
					[VENDOR, "Insignia"],
					[TYPE, TABLET]
				],
				[/\b((nxa|next)-?\w{0,9}) b/i],
				[
					MODEL,
					[VENDOR, "NextBook"],
					[TYPE, TABLET]
				],
				[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
				[
					[VENDOR, "Voice"],
					MODEL,
					[TYPE, MOBILE]
				],
				[/\b(lvtel\-)?(v1[12]) b/i],
				[
					[VENDOR, "LvTel"],
					MODEL,
					[TYPE, MOBILE]
				],
				[/\b(ph-1) /i],
				[
					MODEL,
					[VENDOR, "Essential"],
					[TYPE, MOBILE]
				],
				[/\b(v(100md|700na|7011|917g).*\b) b/i],
				[
					MODEL,
					[VENDOR, "Envizen"],
					[TYPE, TABLET]
				],
				[/\b(trio[-\w\. ]+) b/i],
				[
					MODEL,
					[VENDOR, "MachSpeed"],
					[TYPE, TABLET]
				],
				[/\btu_(1491) b/i],
				[
					MODEL,
					[VENDOR, "Rotor"],
					[TYPE, TABLET]
				],
				[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
				[
					MODEL,
					[VENDOR, NVIDIA],
					[TYPE, TABLET]
				],
				[/(sprint) (\w+)/i],
				[
					VENDOR,
					MODEL,
					[TYPE, MOBILE]
				],
				[/(kin\.[onetw]{3})/i],
				[
					[
						MODEL,
						/\./g,
						" "
					],
					[VENDOR, MICROSOFT],
					[TYPE, MOBILE]
				],
				[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
				[
					MODEL,
					[VENDOR, ZEBRA],
					[TYPE, TABLET]
				],
				[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
				[
					MODEL,
					[VENDOR, ZEBRA],
					[TYPE, MOBILE]
				],
				[/smart-tv.+(samsung)/i],
				[VENDOR, [TYPE, SMARTTV]],
				[/hbbtv.+maple;(\d+)/i],
				[
					[
						MODEL,
						/^/,
						"SmartTV"
					],
					[VENDOR, SAMSUNG],
					[TYPE, SMARTTV]
				],
				[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
				[[VENDOR, LG], [TYPE, SMARTTV]],
				[/(apple) ?tv/i],
				[
					VENDOR,
					[MODEL, APPLE + " TV"],
					[TYPE, SMARTTV]
				],
				[/crkey/i],
				[
					[MODEL, CHROME + "cast"],
					[VENDOR, GOOGLE],
					[TYPE, SMARTTV]
				],
				[/droid.+aft(\w+)( bui|\))/i],
				[
					MODEL,
					[VENDOR, AMAZON],
					[TYPE, SMARTTV]
				],
				[/(shield \w+ tv)/i],
				[
					MODEL,
					[VENDOR, NVIDIA],
					[TYPE, SMARTTV]
				],
				[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
				[
					MODEL,
					[VENDOR, SHARP],
					[TYPE, SMARTTV]
				],
				[/(bravia[\w ]+)( bui|\))/i],
				[
					MODEL,
					[VENDOR, SONY],
					[TYPE, SMARTTV]
				],
				[/(mi(tv|box)-?\w+) bui/i],
				[
					MODEL,
					[VENDOR, XIAOMI],
					[TYPE, SMARTTV]
				],
				[/Hbbtv.*(technisat) (.*);/i],
				[
					VENDOR,
					MODEL,
					[TYPE, SMARTTV]
				],
				[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
				[
					[VENDOR, trim],
					[MODEL, trim],
					[TYPE, SMARTTV]
				],
				[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
				[MODEL, [TYPE, SMARTTV]],
				[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
				[[TYPE, SMARTTV]],
				[/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
				[
					VENDOR,
					MODEL,
					[TYPE, CONSOLE]
				],
				[/droid.+; (shield)( bui|\))/i],
				[
					MODEL,
					[VENDOR, NVIDIA],
					[TYPE, CONSOLE]
				],
				[/(playstation \w+)/i],
				[
					MODEL,
					[VENDOR, SONY],
					[TYPE, CONSOLE]
				],
				[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
				[
					MODEL,
					[VENDOR, MICROSOFT],
					[TYPE, CONSOLE]
				],
				[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
				[
					MODEL,
					[VENDOR, SAMSUNG],
					[TYPE, WEARABLE]
				],
				[/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
				[
					VENDOR,
					MODEL,
					[TYPE, WEARABLE]
				],
				[/(ow(?:19|20)?we?[1-3]{1,3})/i],
				[
					MODEL,
					[VENDOR, OPPO],
					[TYPE, WEARABLE]
				],
				[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
				[
					MODEL,
					[VENDOR, APPLE],
					[TYPE, WEARABLE]
				],
				[/(opwwe\d{3})/i],
				[
					MODEL,
					[VENDOR, ONEPLUS],
					[TYPE, WEARABLE]
				],
				[/(moto 360)/i],
				[
					MODEL,
					[VENDOR, MOTOROLA],
					[TYPE, WEARABLE]
				],
				[/(smartwatch 3)/i],
				[
					MODEL,
					[VENDOR, SONY],
					[TYPE, WEARABLE]
				],
				[/(g watch r)/i],
				[
					MODEL,
					[VENDOR, LG],
					[TYPE, WEARABLE]
				],
				[/droid.+; (wt63?0{2,3})\)/i],
				[
					MODEL,
					[VENDOR, ZEBRA],
					[TYPE, WEARABLE]
				],
				[/droid.+; (glass) \d/i],
				[
					MODEL,
					[VENDOR, GOOGLE],
					[TYPE, WEARABLE]
				],
				[/(pico) (4|neo3(?: link|pro)?)/i],
				[
					VENDOR,
					MODEL,
					[TYPE, WEARABLE]
				],
				[/; (quest( \d| pro)?)/i],
				[
					MODEL,
					[VENDOR, FACEBOOK],
					[TYPE, WEARABLE]
				],
				[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
				[VENDOR, [TYPE, EMBEDDED]],
				[/(aeobc)\b/i],
				[
					MODEL,
					[VENDOR, AMAZON],
					[TYPE, EMBEDDED]
				],
				[/(homepod).+mac os/i],
				[
					MODEL,
					[VENDOR, APPLE],
					[TYPE, EMBEDDED]
				],
				[/windows iot/i],
				[[TYPE, EMBEDDED]],
				[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
				[MODEL, [TYPE, MOBILE]],
				[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
				[MODEL, [TYPE, TABLET]],
				[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
				[[TYPE, TABLET]],
				[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
				[[TYPE, MOBILE]],
				[/droid .+?; ([\w\. -]+)( bui|\))/i],
				[MODEL, [VENDOR, "Generic"]]
			],
			engine: [
				[/windows.+ edge\/([\w\.]+)/i],
				[VERSION, [NAME, EDGE + "HTML"]],
				[/(arkweb)\/([\w\.]+)/i],
				[NAME, VERSION],
				[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
				[VERSION, [NAME, "Blink"]],
				[
					/(presto)\/([\w\.]+)/i,
					/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
					/ekioh(flow)\/([\w\.]+)/i,
					/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
					/(icab)[\/ ]([23]\.[\d\.]+)/i,
					/\b(libweb)/i
				],
				[NAME, VERSION],
				[/ladybird\//i],
				[[NAME, "LibWeb"]],
				[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
				[VERSION, NAME]
			],
			os: [
				[/microsoft (windows) (vista|xp)/i],
				[NAME, VERSION],
				[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
				[NAME, [
					VERSION,
					strMapper,
					windowsVersionMap
				]],
				[
					/windows nt 6\.2; (arm)/i,
					/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
					/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
				],
				[[
					VERSION,
					strMapper,
					windowsVersionMap
				], [NAME, "Windows"]],
				[
					/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
					/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
					/cfnetwork\/.+darwin/i
				],
				[[
					VERSION,
					/_/g,
					"."
				], [NAME, "iOS"]],
				[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
				[[NAME, MAC_OS], [
					VERSION,
					/_/g,
					"."
				]],
				[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
				[VERSION, NAME],
				[/(ubuntu) ([\w\.]+) like android/i],
				[[
					NAME,
					/(.+)/,
					"$1 Touch"
				], VERSION],
				[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
				[NAME, VERSION],
				[/\(bb(10);/i],
				[VERSION, [NAME, BLACKBERRY]],
				[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
				[VERSION, [NAME, "Symbian"]],
				[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
				[VERSION, [NAME, FIREFOX + " OS"]],
				[/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
				[VERSION, [NAME, "webOS"]],
				[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
				[VERSION, [NAME, "watchOS"]],
				[/crkey\/([\d\.]+)/i],
				[VERSION, [NAME, CHROME + "cast"]],
				[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
				[[NAME, CHROMIUM_OS], VERSION],
				[
					/panasonic;(viera)/i,
					/(netrange)mmh/i,
					/(nettv)\/(\d+\.[\w\.]+)/i,
					/(nintendo|playstation) ([wids345portablevuch]+)/i,
					/(xbox); +xbox ([^\);]+)/i,
					/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
					/(mint)[\/\(\) ]?(\w*)/i,
					/(mageia|vectorlinux)[; ]/i,
					/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
					/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
					/(gnu) ?([\w\.]*)/i,
					/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
					/(haiku) (\w+)/i
				],
				[NAME, VERSION],
				[/(sunos) ?([\w\.\d]*)/i],
				[[NAME, "Solaris"], VERSION],
				[
					/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
					/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
					/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
					/(unix) ?([\w\.]*)/i
				],
				[NAME, VERSION]
			]
		};
		var UAParser = function(ua, extensions) {
			if (typeof ua === OBJ_TYPE) {
				extensions = ua;
				ua = undefined;
			}
			if (!(this instanceof UAParser)) return new UAParser(ua, extensions).getResult();
			var _navigator = typeof window !== UNDEF_TYPE && window.navigator ? window.navigator : undefined;
			var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
			var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined;
			var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
			var _isSelfNav = _navigator && _navigator.userAgent == _ua;
			this.getBrowser = function() {
				var _browser = {};
				_browser[NAME] = undefined;
				_browser[VERSION] = undefined;
				rgxMapper.call(_browser, _ua, _rgxmap.browser);
				_browser[MAJOR] = majorize(_browser[VERSION]);
				if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) _browser[NAME] = "Brave";
				return _browser;
			};
			this.getCPU = function() {
				var _cpu = {};
				_cpu[ARCHITECTURE] = undefined;
				rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
				return _cpu;
			};
			this.getDevice = function() {
				var _device = {};
				_device[VENDOR] = undefined;
				_device[MODEL] = undefined;
				_device[TYPE] = undefined;
				rgxMapper.call(_device, _ua, _rgxmap.device);
				if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) _device[TYPE] = MOBILE;
				if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
					_device[MODEL] = "iPad";
					_device[TYPE] = TABLET;
				}
				return _device;
			};
			this.getEngine = function() {
				var _engine = {};
				_engine[NAME] = undefined;
				_engine[VERSION] = undefined;
				rgxMapper.call(_engine, _ua, _rgxmap.engine);
				return _engine;
			};
			this.getOS = function() {
				var _os = {};
				_os[NAME] = undefined;
				_os[VERSION] = undefined;
				rgxMapper.call(_os, _ua, _rgxmap.os);
				if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
				return _os;
			};
			this.getResult = function() {
				return {
					ua: this.getUA(),
					browser: this.getBrowser(),
					engine: this.getEngine(),
					os: this.getOS(),
					device: this.getDevice(),
					cpu: this.getCPU()
				};
			};
			this.getUA = function() {
				return _ua;
			};
			this.setUA = function(ua) {
				_ua = typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
				return this;
			};
			this.setUA(_ua);
			return this;
		};
		UAParser.VERSION = LIBVERSION;
		UAParser.BROWSER = enumerize([
			NAME,
			VERSION,
			MAJOR
		]);
		UAParser.CPU = enumerize([ARCHITECTURE]);
		UAParser.DEVICE = enumerize([
			MODEL,
			VENDOR,
			TYPE,
			CONSOLE,
			MOBILE,
			SMARTTV,
			TABLET,
			WEARABLE,
			EMBEDDED
		]);
		UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
		if (typeof exports !== UNDEF_TYPE) {
			if (typeof module !== UNDEF_TYPE && module.exports) exports = module.exports = UAParser;
			exports.UAParser = UAParser;
		} else if (typeof define === FUNC_TYPE && define.amd) define(function() {
			return UAParser;
		});
		else if (typeof window !== UNDEF_TYPE) window.UAParser = UAParser;
		var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
		if ($ && !$.ua) {
			var parser = new UAParser();
			$.ua = parser.getResult();
			$.ua.get = function() {
				return parser.getUA();
			};
			$.ua.set = function(ua) {
				parser.setUA(ua);
				var result = parser.getResult();
				for (var prop in result) $.ua[prop] = result[prop];
			};
		}
	})(typeof window === "object" ? window : exports);
}));
//#endregion
//#region node_modules/qr/index.js
/*!
Copyright (c) 2023 Paul Miller (paulmillr.com)
The library paulmillr-qr is dual-licensed under the Apache 2.0 OR MIT license.
You can select a license of your choice.
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
/**
* Methods for encoding (generating) QR code patterns.
* Check out decode.ts for decoding (reading).
* @module
* @example
```js
import encodeQR from 'qr';
const txt = 'Hello world';
const ascii = encodeQR(txt, 'ascii'); // Not all fonts are supported
const terminalFriendly = encodeQR(txt, 'term'); // 2x larger, all fonts are OK
const gifBytes = encodeQR(txt, 'gif'); // Uncompressed GIF
const svgElement = encodeQR(txt, 'svg'); // SVG vector image element
const array = encodeQR(txt, 'raw'); // 2d array for canvas or other libs
// import decodeQR from 'qr/decode.js';
```
*/
var chCodes = {
	newline: 10,
	reset: 27
};
function assertNumber(n) {
	if (!Number.isSafeInteger(n)) throw new Error(`integer expected: ${n}`);
}
function validateVersion(ver) {
	if (!Number.isSafeInteger(ver) || ver < 1 || ver > 40) throw new Error(`Invalid version=${ver}. Expected number [1..40]`);
}
function bin(dec, pad) {
	return dec.toString(2).padStart(pad, "0");
}
function mod(a, b) {
	const result = a % b;
	return result >= 0 ? result : b + result;
}
function fillArr(length, val) {
	return new Array(length).fill(val);
}
function popcnt(n) {
	n = n - (n >>> 1 & 1431655765);
	n = (n & 858993459) + (n >>> 2 & 858993459);
	return (n + (n >>> 4) & 252645135) * 16843009 >>> 24;
}
/**
* Interleaves byte blocks.
* @param blocks [[1, 2, 3], [4, 5, 6]]
* @returns [1, 4, 2, 5, 3, 6]
*/
function interleaveBytes(blocks) {
	let maxLen = 0;
	let totalLen = 0;
	for (const block of blocks) {
		maxLen = Math.max(maxLen, block.length);
		totalLen += block.length;
	}
	const result = new Uint8Array(totalLen);
	let idx = 0;
	for (let i = 0; i < maxLen; i++) for (const block of blocks) if (i < block.length) result[idx++] = block[i];
	return result;
}
function best() {
	let best;
	let bestScore = Infinity;
	return {
		add(score, value) {
			if (score >= bestScore) return;
			best = value;
			bestScore = score;
		},
		get: () => best,
		score: () => bestScore
	};
}
function alphabet(alphabet) {
	return {
		has: (char) => alphabet.includes(char),
		decode: (input) => {
			if (!Array.isArray(input) || input.length && typeof input[0] !== "string") throw new Error("alphabet.decode input should be array of strings");
			return input.map((letter) => {
				if (typeof letter !== "string") throw new Error(`alphabet.decode: not string element=${letter}`);
				const index = alphabet.indexOf(letter);
				if (index === -1) throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet}`);
				return index;
			});
		},
		encode: (digits) => {
			if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number") throw new Error("alphabet.encode input should be an array of numbers");
			return digits.map((i) => {
				assertNumber(i);
				if (i < 0 || i >= alphabet.length) throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet.length})`);
				return alphabet[i];
			});
		}
	};
}
function transpose32(a) {
	if (a.length !== 32) throw new Error("expects 32 element matrix");
	const masks = [
		1431655765,
		858993459,
		252645135,
		16711935,
		65535
	];
	for (let stage = 0; stage < 5; stage++) {
		const m = masks[stage] >>> 0;
		const s = 1 << stage;
		const step = s << 1;
		for (let i = 0; i < 32; i += step) for (let k = 0; k < s; k++) {
			const i0 = i + k;
			const i1 = i0 + s;
			const x = a[i0] >>> 0;
			const y = a[i1] >>> 0;
			const t = (x >>> s ^ y) & m;
			a[i0] = (x ^ t << s) >>> 0;
			a[i1] = (y ^ t) >>> 0;
		}
	}
}
var bitMask = (x) => 1 << (x & 31) >>> 0;
var rangeMask = (shift, len) => {
	if (len === 0) return 0;
	if (len === 32) return 4294967295;
	return (1 << len) - 1 << shift >>> 0;
};
var Bitmap = class Bitmap {
	static size(size, limit) {
		if (typeof size === "number") size = {
			height: size,
			width: size
		};
		if (!Number.isSafeInteger(size.height) && size.height !== Infinity) throw new Error(`Bitmap: invalid height=${size.height} (${typeof size.height})`);
		if (!Number.isSafeInteger(size.width) && size.width !== Infinity) throw new Error(`Bitmap: invalid width=${size.width} (${typeof size.width})`);
		if (limit !== void 0) size = {
			width: Math.min(size.width, limit.width),
			height: Math.min(size.height, limit.height)
		};
		return size;
	}
	static fromString(s) {
		s = s.replace(/^\n+/g, "").replace(/\n+$/g, "");
		const lines = s.split(String.fromCharCode(chCodes.newline));
		const height = lines.length;
		let width;
		const rows = [];
		for (const line of lines) {
			const row = line.split("").map((i) => {
				if (i === "X") return true;
				if (i === " ") return false;
				if (i === "?") return void 0;
				throw new Error(`Bitmap.fromString: unknown symbol=${i}`);
			});
			if (width !== void 0 && row.length !== width) throw new Error(`Bitmap.fromString different row sizes: width=${width} cur=${row.length}`);
			width = row.length;
			rows.push(row);
		}
		if (width === void 0) width = 0;
		return new Bitmap({
			height,
			width
		}, rows);
	}
	defined;
	value;
	tailMask;
	words;
	fullWords;
	height;
	width;
	constructor(size, data) {
		const { height, width } = Bitmap.size(size);
		this.height = height;
		this.width = width;
		this.tailMask = rangeMask(0, width & 31 || 32);
		this.words = Math.ceil(width / 32) | 0;
		this.fullWords = Math.floor(width / 32) | 0;
		this.value = new Uint32Array(this.words * height);
		this.defined = new Uint32Array(this.value.length);
		if (data) {
			if (data.length !== height) throw new Error(`Bitmap: data height mismatch: exp=${height} got=${data.length}`);
			for (let y = 0; y < height; y++) {
				const row = data[y];
				if (!row || row.length !== width) throw new Error(`Bitmap: data width mismatch at y=${y}: exp=${width} got=${row?.length}`);
				for (let x = 0; x < width; x++) this.set(x, y, row[x]);
			}
		}
	}
	point(p) {
		return this.get(p.x, p.y);
	}
	isInside(p) {
		return 0 <= p.x && p.x < this.width && 0 <= p.y && p.y < this.height;
	}
	size(offset) {
		if (!offset) return {
			height: this.height,
			width: this.width
		};
		const { x, y } = this.xy(offset);
		return {
			height: this.height - y,
			width: this.width - x
		};
	}
	xy(c) {
		if (typeof c === "number") c = {
			x: c,
			y: c
		};
		if (!Number.isSafeInteger(c.x)) throw new Error(`Bitmap: invalid x=${c.x}`);
		if (!Number.isSafeInteger(c.y)) throw new Error(`Bitmap: invalid y=${c.y}`);
		c.x = mod(c.x, this.width);
		c.y = mod(c.y, this.height);
		return c;
	}
	/**
	* Return pixel bit index
	*/
	wordIndex(x, y) {
		return y * this.words + (x >>> 5);
	}
	bitIndex(x, y) {
		return {
			word: this.wordIndex(x, y),
			bit: x & 31
		};
	}
	isDefined(x, y) {
		const wi = this.wordIndex(x, y);
		const m = bitMask(x);
		return (this.defined[wi] & m) !== 0;
	}
	get(x, y) {
		const wi = this.wordIndex(x, y);
		const m = bitMask(x);
		return (this.value[wi] & m) !== 0;
	}
	maskWord(wi, mask, v) {
		const { defined, value } = this;
		defined[wi] |= mask;
		value[wi] = value[wi] & ~mask | -v & mask;
	}
	set(x, y, v) {
		if (v === void 0) return;
		this.maskWord(this.wordIndex(x, y), bitMask(x), v);
	}
	fillRectConst(x0, y0, w, h, v) {
		if (w <= 0 || h <= 0) return;
		if (v === void 0) return;
		const { value, defined, words } = this;
		const startWord = x0 >>> 5;
		const endWord = x0 + w - 1 >>> 5;
		const startBit = x0 & 31;
		const endBit = x0 + w - 1 & 31;
		for (let ry = 0; ry < h; ry++) {
			const rowBase = (y0 + ry) * words;
			if (startWord === endWord) {
				const mask = rangeMask(startBit, endBit - startBit + 1);
				this.maskWord(rowBase + startWord, mask, v);
				continue;
			}
			this.maskWord(rowBase + startWord, rangeMask(startBit, 32 - startBit), v);
			for (let i = startWord + 1; i < endWord; i++) {
				defined[rowBase + i] = 4294967295;
				value[rowBase + i] = v ? 4294967295 : 0;
			}
			this.maskWord(rowBase + endWord, rangeMask(0, endBit + 1), v);
		}
	}
	rectWords(x, y, width, height, cb) {
		for (let yPos = 0; yPos < height; yPos++) {
			const Py = y + yPos;
			for (let xPos = 0; xPos < width;) {
				const bitX = x + xPos;
				const { bit, word } = this.bitIndex(bitX, Py);
				const bitsPerWord = Math.min(32 - bit, width - xPos);
				cb(word, bitX, xPos, yPos, bitsPerWord);
				xPos += bitsPerWord;
			}
		}
	}
	rect(c, size, fn) {
		const { x, y } = this.xy(c);
		const { height, width } = Bitmap.size(size, this.size({
			x,
			y
		}));
		if (typeof fn !== "function") {
			this.fillRectConst(x, y, width, height, fn);
			return this;
		}
		const { defined, value } = this;
		this.rectWords(x, y, width, height, (wi, bitX, xPos, yPos, n) => {
			let defWord = 0;
			let valWord = value[wi];
			for (let b = 0; b < n; b++) {
				const mask = bitMask(bitX + b);
				const res = fn({
					x: xPos + b,
					y: yPos
				}, (valWord & mask) !== 0);
				if (res === void 0) continue;
				defWord |= mask;
				valWord = valWord & ~mask | -res & mask;
			}
			defined[wi] |= defWord;
			value[wi] = valWord;
		});
		return this;
	}
	rectRead(c, size, fn) {
		const { x, y } = this.xy(c);
		const { height, width } = Bitmap.size(size, this.size({
			x,
			y
		}));
		const { value } = this;
		this.rectWords(x, y, width, height, (wi, bitX, xPos, yPos, n) => {
			const valWord = value[wi];
			for (let b = 0; b < n; b++) {
				const mask = bitMask(bitX + b);
				fn({
					x: xPos + b,
					y: yPos
				}, (valWord & mask) !== 0);
			}
		});
		return this;
	}
	hLine(c, len, value) {
		return this.rect(c, {
			width: len,
			height: 1
		}, value);
	}
	vLine(c, len, value) {
		return this.rect(c, {
			width: 1,
			height: len
		}, value);
	}
	border(border = 2, value) {
		const out = new Bitmap({
			height: this.height + 2 * border,
			width: this.width + 2 * border
		});
		out.rect(0, Infinity, value);
		out.embed({
			x: border,
			y: border
		}, this);
		return out;
	}
	embed(c, src) {
		const { x, y } = this.xy(c);
		const { height, width } = Bitmap.size(src.size(), this.size({
			x,
			y
		}));
		if (width <= 0 || height <= 0) return this;
		const { value, defined } = this;
		const { words: srcStride, value: srcValue } = src;
		for (let yPos = 0; yPos < height; yPos++) {
			const srcRow = yPos * srcStride;
			for (let xPos = 0; xPos < width;) {
				const dstX = x + xPos;
				const { word: dstWord, bit: dstBit } = this.bitIndex(dstX, y + yPos);
				const { word: srcWord, bit: srcBit } = src.bitIndex(xPos, yPos);
				const len = Math.min(32 - dstBit, width - xPos);
				const w0 = srcValue[srcWord];
				const w1 = srcBit && srcWord + 1 < srcRow + srcStride ? srcValue[srcWord + 1] : 0;
				const sVal = srcBit ? (w0 >>> srcBit | w1 << 32 - srcBit) >>> 0 : w0;
				const dstMask = rangeMask(dstBit, len);
				const valBits = (sVal & rangeMask(0, len)) << dstBit >>> 0;
				defined[dstWord] |= dstMask;
				value[dstWord] = value[dstWord] & ~dstMask | valBits;
				xPos += len;
			}
		}
		return this;
	}
	rectSlice(c, size = this.size()) {
		const { x, y } = this.xy(c);
		const { height, width } = Bitmap.size(size, this.size({
			x,
			y
		}));
		const rect = new Bitmap({
			height,
			width
		});
		this.rectRead({
			x,
			y
		}, {
			height,
			width
		}, (p, cur) => {
			if (this.isDefined(x + p.x, y + p.y)) rect.set(p.x, p.y, cur);
		});
		return rect;
	}
	transpose() {
		const { height, width, value, defined, words } = this;
		const dst = new Bitmap({
			height: width,
			width: height
		});
		const { words: dstStride, value: dstValue, defined: dstDefined, tailMask: dstTail } = dst;
		const tmpV = new Uint32Array(32);
		const tmpD = new Uint32Array(32);
		for (let by = 0; by < height; by += 32) for (let bx = 0; bx < words; bx++) {
			const rows = Math.min(32, height - by);
			for (let r = 0; r < rows; r++) {
				const wi = this.wordIndex(32 * bx, by + r);
				tmpV[r] = value[wi];
				tmpD[r] = defined[wi];
			}
			tmpV.fill(0, rows);
			tmpD.fill(0, rows);
			transpose32(tmpV);
			transpose32(tmpD);
			for (let i = 0; i < 32; i++) {
				const dstY = bx * 32 + i;
				if (dstY >= width) break;
				const dstPos = dst.wordIndex(by, dstY);
				const curMask = by >>> 5 === dstStride - 1 ? dstTail : 4294967295;
				dstValue[dstPos] = tmpV[i] & curMask;
				dstDefined[dstPos] = tmpD[i] & curMask;
			}
		}
		return dst;
	}
	negate() {
		const n = this.defined.length;
		for (let i = 0; i < n; i++) {
			this.value[i] = ~this.value[i];
			this.defined[i] = 4294967295;
		}
		return this;
	}
	scale(factor) {
		if (!Number.isSafeInteger(factor) || factor > 1024) throw new Error(`invalid scale factor: ${factor}`);
		const { height, width } = this;
		return new Bitmap({
			height: factor * height,
			width: factor * width
		}).rect({
			x: 0,
			y: 0
		}, Infinity, ({ x, y }) => this.get(x / factor | 0, y / factor | 0));
	}
	clone() {
		const res = new Bitmap(this.size());
		res.defined.set(this.defined);
		res.value.set(this.value);
		return res;
	}
	assertDrawn() {
		const { height, width, defined, tailMask, fullWords, words } = this;
		if (!height || !width) return;
		for (let y = 0; y < height; y++) {
			const rowBase = y * words;
			for (let wi = 0; wi < fullWords; wi++) if (defined[rowBase + wi] !== 4294967295) throw new Error(`Invalid color type=undefined`);
			if (words !== fullWords && (defined[rowBase + fullWords] & tailMask) !== tailMask) throw new Error(`Invalid color type=undefined`);
		}
	}
	countPatternInRow(y, patternLen, ...patterns) {
		if (patternLen <= 0 || patternLen >= 32) throw new Error("wrong patternLen");
		const mask = (1 << patternLen) - 1;
		const { width, value, words } = this;
		let count = 0;
		const rowBase = this.wordIndex(0, y);
		for (let i = 0, window = 0; i < words; i++) {
			const w = value[rowBase + i];
			const bitEnd = i === words - 1 ? width & 31 || 32 : 32;
			for (let b = 0; b < bitEnd; b++) {
				window = (window << 1 | w >>> b & 1) & mask;
				if (i * 32 + b + 1 < patternLen) continue;
				for (const p of patterns) {
					if (window !== p) continue;
					count++;
					break;
				}
			}
		}
		return count;
	}
	getRuns(y, fn) {
		const { width, value, words } = this;
		if (width === 0) return;
		let runLen = 0;
		let runValue;
		const rowBase = this.wordIndex(0, y);
		for (let i = 0; i < words; i++) {
			const word = value[rowBase + i];
			const bitEnd = i === words - 1 ? width & 31 || 32 : 32;
			for (let b = 0; b < bitEnd; b++) {
				const bit = (word & 1 << b) !== 0;
				if (bit === runValue) {
					runLen++;
					continue;
				}
				if (runValue !== void 0) fn(runLen, runValue);
				runValue = bit;
				runLen = 1;
			}
		}
		if (runValue !== void 0) fn(runLen, runValue);
	}
	popcnt() {
		const { height, width, words, fullWords, tailMask } = this;
		if (!height || !width) return 0;
		let count = 0;
		for (let y = 0; y < height; y++) {
			const rowBase = y * words;
			for (let wi = 0; wi < fullWords; wi++) count += popcnt(this.value[rowBase + wi]);
			if (words !== fullWords) count += popcnt(this.value[rowBase + fullWords] & tailMask);
		}
		return count;
	}
	countBoxes2x2(y) {
		const { width, words } = this;
		if (width < 2 || (y | 0) < 0 || y + 1 >= this.height) return 0;
		const base0 = this.wordIndex(0, y) | 0;
		const base1 = this.wordIndex(0, y + 1) | 0;
		const validLast = (width & 31) === 0 ? 2147483647 : rangeMask(0, width - 1 & 31);
		let boxes = 0;
		for (let wi = 0; wi < words; wi++) {
			const a0 = this.value[base0 + wi];
			const a1 = this.value[base1 + wi];
			const eqV = ~(a0 ^ a1) >>> 0;
			const n0 = wi + 1 < words ? this.value[base0 + wi + 1] >>> 0 : 0;
			const eqH0 = ~(a0 ^ (a0 >>> 1 | (n0 & 1) << 31) >>> 0) >>> 0;
			const n1 = wi + 1 < words ? this.value[base1 + wi + 1] >>> 0 : 0;
			const eqH1 = ~(a1 ^ (a1 >>> 1 | (n1 & 1) << 31) >>> 0) >>> 0;
			let m = (eqV & eqH0 & eqH1) >>> 0;
			if (wi === words - 1) m &= validLast;
			boxes += popcnt(m);
		}
		return boxes;
	}
	toString() {
		const nl = String.fromCharCode(chCodes.newline);
		let out = "";
		for (let y = 0; y < this.height; y++) {
			let line = "";
			for (let x = 0; x < this.width; x++) {
				const v = this.get(x, y);
				line += !this.isDefined(x, y) ? "?" : v ? "X" : " ";
			}
			out += line + (y + 1 === this.height ? "" : nl);
		}
		return out;
	}
	toRaw() {
		const out = Array.from({ length: this.height }, () => new Array(this.width));
		for (let y = 0; y < this.height; y++) {
			const row = out[y];
			for (let x = 0; x < this.width; x++) row[x] = this.get(x, y);
		}
		return out;
	}
	toASCII() {
		const { height, width } = this;
		let out = "";
		for (let y = 0; y < height; y += 2) {
			for (let x = 0; x < width; x++) {
				const first = this.get(x, y);
				const second = y + 1 >= height ? true : this.get(x, y + 1);
				if (!first && !second) out += "█";
				else if (!first && second) out += "▀";
				else if (first && !second) out += "▄";
				else if (first && second) out += " ";
			}
			out += String.fromCharCode(chCodes.newline);
		}
		return out;
	}
	toTerm() {
		const cc = String.fromCharCode(chCodes.reset);
		const reset = cc + "[0m";
		const whiteBG = cc + "[1;47m  " + reset;
		const darkBG = cc + `[40m  ` + reset;
		const nl = String.fromCharCode(chCodes.newline);
		let out = "";
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				const v = this.get(x, y);
				out += v ? darkBG : whiteBG;
			}
			out += nl;
		}
		return out;
	}
	toSVG(optimize = true) {
		let out = `<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">`;
		let pathData = "";
		let prevPoint;
		this.rectRead(0, Infinity, (point, val) => {
			if (!val) return;
			const { x, y } = point;
			if (!optimize) {
				out += `<rect x="${x}" y="${y}" width="1" height="1" />`;
				return;
			}
			let m = `M${x} ${y}`;
			if (prevPoint) {
				const relM = `m${x - prevPoint.x} ${y - prevPoint.y}`;
				if (relM.length <= m.length) m = relM;
			}
			const bH = x < 10 ? `H${x}` : "h-1";
			pathData += `${m}h1v1${bH}Z`;
			prevPoint = point;
		});
		if (optimize) out += `<path d="${pathData}"/>`;
		out += `</svg>`;
		return out;
	}
	toGIF() {
		const u16le = (i) => [i & 255, i >>> 8 & 255];
		const dims = [...u16le(this.width), ...u16le(this.height)];
		const data = [];
		this.rectRead(0, Infinity, (_, cur) => data.push(+(cur === true)));
		const N = 126;
		const bytes = [
			71,
			73,
			70,
			56,
			55,
			97,
			...dims,
			246,
			0,
			0,
			255,
			255,
			255,
			...fillArr(381, 0),
			44,
			0,
			0,
			0,
			0,
			...dims,
			0,
			7
		];
		const fullChunks = Math.floor(data.length / N);
		for (let i = 0; i < fullChunks; i++) bytes.push(N + 1, 128, ...data.slice(N * i, N * (i + 1)).map((i) => +i));
		bytes.push(data.length % N + 1, 128, ...data.slice(fullChunks * N).map((i) => +i));
		bytes.push(1, 129, 0, 59);
		return new Uint8Array(bytes);
	}
	toImage(isRGB = false) {
		const { height, width } = this.size();
		const data = new Uint8Array(height * width * (isRGB ? 3 : 4));
		let i = 0;
		for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
			const value = this.get(x, y) ? 0 : 255;
			data[i++] = value;
			data[i++] = value;
			data[i++] = value;
			if (!isRGB) data[i++] = 255;
		}
		return {
			height,
			width,
			data
		};
	}
};
/** Error correction mode. low: 7%, medium: 15%, quartile: 25%, high: 30% */
var ECMode = [
	"low",
	"medium",
	"quartile",
	"high"
];
/** QR Code encoding */
var Encoding = [
	"numeric",
	"alphanumeric",
	"byte",
	"kanji",
	"eci"
];
var BYTES = [
	26,
	44,
	70,
	100,
	134,
	172,
	196,
	242,
	292,
	346,
	404,
	466,
	532,
	581,
	655,
	733,
	815,
	901,
	991,
	1085,
	1156,
	1258,
	1364,
	1474,
	1588,
	1706,
	1828,
	1921,
	2051,
	2185,
	2323,
	2465,
	2611,
	2761,
	2876,
	3034,
	3196,
	3362,
	3532,
	3706
];
var WORDS_PER_BLOCK = {
	low: [
		7,
		10,
		15,
		20,
		26,
		18,
		20,
		24,
		30,
		18,
		20,
		24,
		26,
		30,
		22,
		24,
		28,
		30,
		28,
		28,
		28,
		28,
		30,
		30,
		26,
		28,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30
	],
	medium: [
		10,
		16,
		26,
		18,
		24,
		16,
		18,
		22,
		22,
		26,
		30,
		22,
		22,
		24,
		24,
		28,
		28,
		26,
		26,
		26,
		26,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28
	],
	quartile: [
		13,
		22,
		18,
		26,
		18,
		24,
		18,
		22,
		20,
		24,
		28,
		26,
		24,
		20,
		30,
		24,
		28,
		28,
		26,
		30,
		28,
		30,
		30,
		30,
		30,
		28,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30
	],
	high: [
		17,
		28,
		22,
		16,
		22,
		28,
		26,
		26,
		24,
		28,
		24,
		28,
		22,
		24,
		24,
		30,
		28,
		28,
		26,
		28,
		30,
		24,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30
	]
};
var ECC_BLOCKS = {
	low: [
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		4,
		4,
		4,
		4,
		4,
		6,
		6,
		6,
		6,
		7,
		8,
		8,
		9,
		9,
		10,
		12,
		12,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		19,
		20,
		21,
		22,
		24,
		25
	],
	medium: [
		1,
		1,
		1,
		2,
		2,
		4,
		4,
		4,
		5,
		5,
		5,
		8,
		9,
		9,
		10,
		10,
		11,
		13,
		14,
		16,
		17,
		17,
		18,
		20,
		21,
		23,
		25,
		26,
		28,
		29,
		31,
		33,
		35,
		37,
		38,
		40,
		43,
		45,
		47,
		49
	],
	quartile: [
		1,
		1,
		2,
		2,
		4,
		4,
		6,
		6,
		8,
		8,
		8,
		10,
		12,
		16,
		12,
		17,
		16,
		18,
		21,
		20,
		23,
		23,
		25,
		27,
		29,
		34,
		34,
		35,
		38,
		40,
		43,
		45,
		48,
		51,
		53,
		56,
		59,
		62,
		65,
		68
	],
	high: [
		1,
		1,
		2,
		4,
		4,
		4,
		5,
		6,
		8,
		8,
		11,
		11,
		16,
		16,
		18,
		16,
		19,
		21,
		25,
		25,
		25,
		34,
		30,
		32,
		35,
		37,
		40,
		42,
		45,
		48,
		51,
		54,
		57,
		60,
		63,
		66,
		70,
		74,
		77,
		81
	]
};
var info = {
	size: {
		encode: (ver) => 21 + 4 * (ver - 1),
		decode: (size) => (size - 17) / 4
	},
	sizeType: (ver) => Math.floor((ver + 7) / 17),
	alignmentPatterns(ver) {
		if (ver === 1) return [];
		const first = 6;
		const last = info.size.encode(ver) - first - 1;
		const distance = last - first;
		const count = Math.ceil(distance / 28);
		let interval = Math.floor(distance / count);
		if (interval % 2) interval += 1;
		else if (distance % count * 2 >= count) interval += 2;
		const res = [first];
		for (let m = 1; m < count; m++) res.push(last - (count - m) * interval);
		res.push(last);
		return res;
	},
	ECCode: {
		low: 1,
		medium: 0,
		quartile: 3,
		high: 2
	},
	formatMask: 21522,
	formatBits(ecc, maskIdx) {
		const data = info.ECCode[ecc] << 3 | maskIdx;
		let d = data;
		for (let i = 0; i < 10; i++) d = d << 1 ^ (d >> 9) * 1335;
		return (data << 10 | d) ^ info.formatMask;
	},
	versionBits(ver) {
		let d = ver;
		for (let i = 0; i < 12; i++) d = d << 1 ^ (d >> 11) * 7973;
		return ver << 12 | d;
	},
	alphabet: {
		numeric: alphabet("0123456789"),
		alphanumerc: alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:")
	},
	lengthBits(ver, type) {
		return {
			numeric: [
				10,
				12,
				14
			],
			alphanumeric: [
				9,
				11,
				13
			],
			byte: [
				8,
				16,
				16
			],
			kanji: [
				8,
				10,
				12
			],
			eci: [
				0,
				0,
				0
			]
		}[type][info.sizeType(ver)];
	},
	modeBits: {
		numeric: "0001",
		alphanumeric: "0010",
		byte: "0100",
		kanji: "1000",
		eci: "0111"
	},
	capacity(ver, ecc) {
		const bytes = BYTES[ver - 1];
		const words = WORDS_PER_BLOCK[ecc][ver - 1];
		const numBlocks = ECC_BLOCKS[ecc][ver - 1];
		const blockLen = Math.floor(bytes / numBlocks) - words;
		const shortBlocks = numBlocks - bytes % numBlocks;
		return {
			words,
			numBlocks,
			shortBlocks,
			blockLen,
			capacity: (bytes - words * numBlocks) * 8,
			total: (words + blockLen) * numBlocks + numBlocks - shortBlocks
		};
	}
};
var PATTERNS = [
	(x, y) => (x + y) % 2 == 0,
	(_x, y) => y % 2 == 0,
	(x, _y) => x % 3 == 0,
	(x, y) => (x + y) % 3 == 0,
	(x, y) => (Math.floor(y / 2) + Math.floor(x / 3)) % 2 == 0,
	(x, y) => x * y % 2 + x * y % 3 == 0,
	(x, y) => (x * y % 2 + x * y % 3) % 2 == 0,
	(x, y) => ((x + y) % 2 + x * y % 3) % 2 == 0
];
var GF = {
	tables: ((p_poly) => {
		const exp = fillArr(256, 0);
		const log = fillArr(256, 0);
		for (let i = 0, x = 1; i < 256; i++) {
			exp[i] = x;
			log[x] = i;
			x <<= 1;
			if (x & 256) x ^= p_poly;
		}
		return {
			exp,
			log
		};
	})(285),
	exp: (x) => GF.tables.exp[x],
	log(x) {
		if (x === 0) throw new Error(`GF.log: invalid arg=${x}`);
		return GF.tables.log[x] % 255;
	},
	mul(x, y) {
		if (x === 0 || y === 0) return 0;
		return GF.tables.exp[(GF.tables.log[x] + GF.tables.log[y]) % 255];
	},
	add: (x, y) => x ^ y,
	pow: (x, e) => GF.tables.exp[GF.tables.log[x] * e % 255],
	inv(x) {
		if (x === 0) throw new Error(`GF.inverse: invalid arg=${x}`);
		return GF.tables.exp[255 - GF.tables.log[x]];
	},
	polynomial(poly) {
		if (poly.length == 0) throw new Error("GF.polymomial: invalid length");
		if (poly[0] !== 0) return poly;
		let i = 0;
		for (; i < poly.length - 1 && poly[i] == 0; i++);
		return poly.slice(i);
	},
	monomial(degree, coefficient) {
		if (degree < 0) throw new Error(`GF.monomial: invalid degree=${degree}`);
		if (coefficient == 0) return [0];
		let coefficients = fillArr(degree + 1, 0);
		coefficients[0] = coefficient;
		return GF.polynomial(coefficients);
	},
	degree: (a) => a.length - 1,
	coefficient: (a, degree) => a[GF.degree(a) - degree],
	mulPoly(a, b) {
		if (a[0] === 0 || b[0] === 0) return [0];
		const res = fillArr(a.length + b.length - 1, 0);
		for (let i = 0; i < a.length; i++) for (let j = 0; j < b.length; j++) res[i + j] = GF.add(res[i + j], GF.mul(a[i], b[j]));
		return GF.polynomial(res);
	},
	mulPolyScalar(a, scalar) {
		if (scalar == 0) return [0];
		if (scalar == 1) return a;
		const res = fillArr(a.length, 0);
		for (let i = 0; i < a.length; i++) res[i] = GF.mul(a[i], scalar);
		return GF.polynomial(res);
	},
	mulPolyMonomial(a, degree, coefficient) {
		if (degree < 0) throw new Error("GF.mulPolyMonomial: invalid degree");
		if (coefficient == 0) return [0];
		const res = fillArr(a.length + degree, 0);
		for (let i = 0; i < a.length; i++) res[i] = GF.mul(a[i], coefficient);
		return GF.polynomial(res);
	},
	addPoly(a, b) {
		if (a[0] === 0) return b;
		if (b[0] === 0) return a;
		let smaller = a;
		let larger = b;
		if (smaller.length > larger.length) [smaller, larger] = [larger, smaller];
		let sumDiff = fillArr(larger.length, 0);
		let lengthDiff = larger.length - smaller.length;
		let s = larger.slice(0, lengthDiff);
		for (let i = 0; i < s.length; i++) sumDiff[i] = s[i];
		for (let i = lengthDiff; i < larger.length; i++) sumDiff[i] = GF.add(smaller[i - lengthDiff], larger[i]);
		return GF.polynomial(sumDiff);
	},
	remainderPoly(data, divisor) {
		const out = Array.from(data);
		for (let i = 0; i < data.length - divisor.length + 1; i++) {
			const elm = out[i];
			if (elm === 0) continue;
			for (let j = 1; j < divisor.length; j++) if (divisor[j] !== 0) out[i + j] = GF.add(out[i + j], GF.mul(divisor[j], elm));
		}
		return out.slice(data.length - divisor.length + 1, out.length);
	},
	divisorPoly(degree) {
		let g = [1];
		for (let i = 0; i < degree; i++) g = GF.mulPoly(g, [1, GF.pow(2, i)]);
		return g;
	},
	evalPoly(poly, a) {
		if (a == 0) return GF.coefficient(poly, 0);
		let res = poly[0];
		for (let i = 1; i < poly.length; i++) res = GF.add(GF.mul(a, res), poly[i]);
		return res;
	},
	euclidian(a, b, R) {
		if (GF.degree(a) < GF.degree(b)) [a, b] = [b, a];
		let rLast = a;
		let r = b;
		let tLast = [0];
		let t = [1];
		while (2 * GF.degree(r) >= R) {
			let rLastLast = rLast;
			let tLastLast = tLast;
			rLast = r;
			tLast = t;
			if (rLast[0] === 0) throw new Error("rLast[0] === 0");
			r = rLastLast;
			let q = [0];
			const dltInverse = GF.inv(rLast[0]);
			while (GF.degree(r) >= GF.degree(rLast) && r[0] !== 0) {
				const degreeDiff = GF.degree(r) - GF.degree(rLast);
				const scale = GF.mul(r[0], dltInverse);
				q = GF.addPoly(q, GF.monomial(degreeDiff, scale));
				r = GF.addPoly(r, GF.mulPolyMonomial(rLast, degreeDiff, scale));
			}
			q = GF.mulPoly(q, tLast);
			t = GF.addPoly(q, tLastLast);
			if (GF.degree(r) >= GF.degree(rLast)) throw new Error(`Division failed r: ${r}, rLast: ${rLast}`);
		}
		const sigmaTildeAtZero = GF.coefficient(t, 0);
		if (sigmaTildeAtZero == 0) throw new Error("sigmaTilde(0) was zero");
		const inverse = GF.inv(sigmaTildeAtZero);
		return [GF.mulPolyScalar(t, inverse), GF.mulPolyScalar(r, inverse)];
	}
};
function RS(eccWords) {
	return {
		encode(from) {
			const d = GF.divisorPoly(eccWords);
			const pol = Array.from(from);
			pol.push(...d.slice(0, -1).fill(0));
			return Uint8Array.from(GF.remainderPoly(pol, d));
		},
		decode(to) {
			const res = to.slice();
			const poly = GF.polynomial(Array.from(to));
			let syndrome = fillArr(eccWords, 0);
			let hasError = false;
			for (let i = 0; i < eccWords; i++) {
				const evl = GF.evalPoly(poly, GF.exp(i));
				syndrome[syndrome.length - 1 - i] = evl;
				if (evl !== 0) hasError = true;
			}
			if (!hasError) return res;
			syndrome = GF.polynomial(syndrome);
			const monomial = GF.monomial(eccWords, 1);
			const [errorLocator, errorEvaluator] = GF.euclidian(monomial, syndrome, eccWords);
			const locations = fillArr(GF.degree(errorLocator), 0);
			let e = 0;
			for (let i = 1; i < 256 && e < locations.length; i++) if (GF.evalPoly(errorLocator, i) === 0) locations[e++] = GF.inv(i);
			if (e !== locations.length) throw new Error("RS.decode: invalid errors number");
			for (let i = 0; i < locations.length; i++) {
				const pos = res.length - 1 - GF.log(locations[i]);
				if (pos < 0) throw new Error("RS.decode: invalid error location");
				const xiInverse = GF.inv(locations[i]);
				let denominator = 1;
				for (let j = 0; j < locations.length; j++) {
					if (i === j) continue;
					denominator = GF.mul(denominator, GF.add(1, GF.mul(locations[j], xiInverse)));
				}
				res[pos] = GF.add(res[pos], GF.mul(GF.evalPoly(errorEvaluator, xiInverse), GF.inv(denominator)));
			}
			return res;
		}
	};
}
function interleave(ver, ecc) {
	const { words, shortBlocks, numBlocks, blockLen, total } = info.capacity(ver, ecc);
	const rs = RS(words);
	return {
		encode(bytes) {
			const blocks = [];
			const eccBlocks = [];
			for (let i = 0; i < numBlocks; i++) {
				const len = blockLen + (i < shortBlocks ? 0 : 1);
				blocks.push(bytes.subarray(0, len));
				eccBlocks.push(rs.encode(bytes.subarray(0, len)));
				bytes = bytes.subarray(len);
			}
			const resBlocks = interleaveBytes(blocks);
			const resECC = interleaveBytes(eccBlocks);
			const res = new Uint8Array(resBlocks.length + resECC.length);
			res.set(resBlocks);
			res.set(resECC, resBlocks.length);
			return res;
		},
		decode(data) {
			if (data.length !== total) throw new Error(`interleave.decode: len(data)=${data.length}, total=${total}`);
			const blocks = [];
			for (let i = 0; i < numBlocks; i++) {
				const isShort = i < shortBlocks;
				blocks.push(new Uint8Array(words + blockLen + (isShort ? 0 : 1)));
			}
			let pos = 0;
			for (let i = 0; i < blockLen; i++) for (let j = 0; j < numBlocks; j++) blocks[j][i] = data[pos++];
			for (let j = shortBlocks; j < numBlocks; j++) blocks[j][blockLen] = data[pos++];
			for (let i = blockLen; i < blockLen + words; i++) for (let j = 0; j < numBlocks; j++) {
				const isShort = j < shortBlocks;
				blocks[j][i + (isShort ? 0 : 1)] = data[pos++];
			}
			const res = [];
			for (const block of blocks) res.push(...Array.from(rs.decode(block)).slice(0, -words));
			return Uint8Array.from(res);
		}
	};
}
function drawTemplate(ver, ecc, maskIdx, test = false) {
	const size = info.size.encode(ver);
	let b = new Bitmap(size + 2);
	const finder = new Bitmap(3).rect(0, 3, true).border(1, false).border(1, true).border(1, false);
	b = b.embed(0, finder).embed({
		x: -finder.width,
		y: 0
	}, finder).embed({
		x: 0,
		y: -finder.height
	}, finder);
	b = b.rectSlice(1, size);
	const align = new Bitmap(1).rect(0, 1, true).border(1, false).border(1, true);
	const alignPos = info.alignmentPatterns(ver);
	for (const y of alignPos) for (const x of alignPos) {
		if (b.isDefined(x, y)) continue;
		b.embed({
			x: x - 2,
			y: y - 2
		}, align);
	}
	b = b.hLine({
		x: 0,
		y: 6
	}, Infinity, ({ x }) => b.isDefined(x, 6) ? void 0 : x % 2 == 0).vLine({
		x: 6,
		y: 0
	}, Infinity, ({ y }) => b.isDefined(6, y) ? void 0 : y % 2 == 0);
	{
		const bits = info.formatBits(ecc, maskIdx);
		const getBit = (i) => !test && (bits >> i & 1) == 1;
		for (let i = 0; i < 6; i++) b.set(8, i, getBit(i));
		for (let i = 6; i < 8; i++) b.set(8, i + 1, getBit(i));
		for (let i = 8; i < 15; i++) b.set(8, size - 15 + i, getBit(i));
		for (let i = 0; i < 8; i++) b.set(size - i - 1, 8, getBit(i));
		for (let i = 8; i < 9; i++) b.set(15 - i - 1 + 1, 8, getBit(i));
		for (let i = 9; i < 15; i++) b.set(15 - i - 1, 8, getBit(i));
		b.set(8, size - 8, !test);
	}
	if (ver >= 7) {
		const bits = info.versionBits(ver);
		for (let i = 0; i < 18; i += 1) {
			const bit = !test && (bits >> i & 1) == 1;
			const x = Math.floor(i / 3);
			const y = i % 3 + size - 8 - 3;
			b.set(y, x, bit);
			b.set(x, y, bit);
		}
	}
	return b;
}
function zigzag(tpl, maskIdx, fn) {
	const size = tpl.height;
	const pattern = PATTERNS[maskIdx];
	let dir = -1;
	let y = size - 1;
	for (let xOffset = size - 1; xOffset > 0; xOffset -= 2) {
		if (xOffset == 6) xOffset = 5;
		for (;; y += dir) {
			for (let j = 0; j < 2; j += 1) {
				const x = xOffset - j;
				if (tpl.isDefined(x, y)) continue;
				fn(x, y, pattern(x, y));
			}
			if (y + dir < 0 || y + dir >= size) break;
		}
		dir = -dir;
	}
}
function detectType(str) {
	let type = "numeric";
	for (let x of str) {
		if (info.alphabet.numeric.has(x)) continue;
		type = "alphanumeric";
		if (!info.alphabet.alphanumerc.has(x)) return "byte";
	}
	return type;
}
/**
* @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
*/
function utf8ToBytes(str) {
	if (typeof str !== "string") throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
	return new Uint8Array(new TextEncoder().encode(str));
}
function encode(ver, ecc, data, type, encoder = utf8ToBytes) {
	let encoded = "";
	let dataLen = data.length;
	if (type === "numeric") {
		const t = info.alphabet.numeric.decode(data.split(""));
		const n = t.length;
		for (let i = 0; i < n - 2; i += 3) encoded += bin(t[i] * 100 + t[i + 1] * 10 + t[i + 2], 10);
		if (n % 3 === 1) encoded += bin(t[n - 1], 4);
		else if (n % 3 === 2) encoded += bin(t[n - 2] * 10 + t[n - 1], 7);
	} else if (type === "alphanumeric") {
		const t = info.alphabet.alphanumerc.decode(data.split(""));
		const n = t.length;
		for (let i = 0; i < n - 1; i += 2) encoded += bin(t[i] * 45 + t[i + 1], 11);
		if (n % 2 == 1) encoded += bin(t[n - 1], 6);
	} else if (type === "byte") {
		const utf8 = encoder(data);
		dataLen = utf8.length;
		encoded = Array.from(utf8).map((i) => bin(i, 8)).join("");
	} else throw new Error("encode: unsupported type");
	const { capacity } = info.capacity(ver, ecc);
	const len = bin(dataLen, info.lengthBits(ver, type));
	let bits = info.modeBits[type] + len + encoded;
	if (bits.length > capacity) throw new Error("Capacity overflow");
	bits += "0".repeat(Math.min(4, Math.max(0, capacity - bits.length)));
	if (bits.length % 8) bits += "0".repeat(8 - bits.length % 8);
	const padding = "1110110000010001";
	for (let idx = 0; bits.length !== capacity; idx++) bits += padding[idx % 16];
	const bytes = Uint8Array.from(bits.match(/(.{8})/g).map((i) => Number(`0b${i}`)));
	return interleave(ver, ecc).encode(bytes);
}
function drawQR(ver, ecc, data, maskIdx, test = false) {
	const b = drawTemplate(ver, ecc, maskIdx, test);
	let i = 0;
	const need = 8 * data.length;
	zigzag(b, maskIdx, (x, y, mask) => {
		let value = false;
		if (i < need) {
			value = (data[i >>> 3] >> (7 - i & 7) & 1) !== 0;
			i++;
		}
		b.set(x, y, value !== mask);
	});
	if (i !== need) throw new Error("QR: bytes left after draw");
	return b;
}
var mkPattern = (pattern) => {
	const s = pattern.map((i) => i ? "1" : "0").join("");
	return {
		len: s.length,
		n: Number(`0b${s}`)
	};
};
var finderPattern = [
	true,
	false,
	true,
	true,
	true,
	false,
	true
];
var lightPattern = [
	false,
	false,
	false,
	false
];
var P1 = mkPattern([...finderPattern, ...lightPattern]);
var P2 = mkPattern([...lightPattern, ...finderPattern]);
function penalty(bm) {
	const { width, height } = bm;
	const transposed = bm.transpose();
	let adjacent = 0;
	for (let y = 0; y < height; y++) bm.getRuns(y, (len) => {
		if (len >= 5) adjacent += 3 + (len - 5);
	});
	for (let y = 0; y < width; y++) transposed.getRuns(y, (len) => {
		if (len >= 5) adjacent += 3 + (len - 5);
	});
	let box = 0;
	for (let y = 0; y < height - 1; y++) box += 3 * bm.countBoxes2x2(y);
	let finder = 0;
	for (let y = 0; y < height; y++) finder += 40 * bm.countPatternInRow(y, P1.len, P1.n, P2.n);
	for (let y = 0; y < width; y++) finder += 40 * transposed.countPatternInRow(y, P1.len, P1.n, P2.n);
	let darkPixels = 0;
	darkPixels = bm.popcnt();
	const darkPercent = darkPixels / (height * width) * 100;
	const dark = 10 * Math.floor(Math.abs(darkPercent - 50) / 5);
	return adjacent + box + finder + dark;
}
function drawQRBest(ver, ecc, data, maskIdx) {
	if (maskIdx === void 0) {
		const bestMask = best();
		for (let mask = 0; mask < PATTERNS.length; mask++) bestMask.add(penalty(drawQR(ver, ecc, data, mask, true)), mask);
		maskIdx = bestMask.get();
	}
	if (maskIdx === void 0) throw new Error("Cannot find mask");
	return drawQR(ver, ecc, data, maskIdx);
}
function validateECC(ec) {
	if (!ECMode.includes(ec)) throw new Error(`Invalid error correction mode=${ec}. Expected: ${ECMode}`);
}
function validateEncoding(enc) {
	if (!Encoding.includes(enc)) throw new Error(`Encoding: invalid mode=${enc}. Expected: ${Encoding}`);
	if (enc === "kanji" || enc === "eci") throw new Error(`Encoding: ${enc} is not supported (yet?).`);
}
function validateMask(mask) {
	if (![
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7
	].includes(mask) || !PATTERNS[mask]) throw new Error(`Invalid mask=${mask}. Expected number [0..7]`);
}
function encodeQR(text, output = "raw", opts = {}) {
	const ecc = opts.ecc !== void 0 ? opts.ecc : "medium";
	validateECC(ecc);
	const encoding = opts.encoding !== void 0 ? opts.encoding : detectType(text);
	validateEncoding(encoding);
	if (opts.mask !== void 0) validateMask(opts.mask);
	let ver = opts.version;
	let data, err = /* @__PURE__ */ new Error("Unknown error");
	if (ver !== void 0) {
		validateVersion(ver);
		data = encode(ver, ecc, text, encoding, opts.textEncoder);
	} else for (let i = 1; i <= 40; i++) try {
		data = encode(i, ecc, text, encoding, opts.textEncoder);
		ver = i;
		break;
	} catch (e) {
		err = e;
	}
	if (!ver || !data) throw err;
	let res = drawQRBest(ver, ecc, data, opts.mask);
	res.assertDrawn();
	const border = opts.border === void 0 ? 2 : opts.border;
	if (!Number.isSafeInteger(border)) throw new Error(`invalid border type=${typeof border}`);
	res = res.border(border, false);
	if (opts.scale !== void 0) res = res.scale(opts.scale);
	if (output === "raw") return res.toRaw();
	else if (output === "ascii") return res.toASCII();
	else if (output === "svg") return res.toSVG(opts.optimize);
	else if (output === "gif") return res.toGIF();
	else if (output === "term") return res.toTerm();
	else throw new Error(`Unknown output: ${output}`);
}
//#endregion
//#region node_modules/cuer/_dist/QrCode.js
function create(value, options = {}) {
	const { errorCorrection, version } = options;
	const grid = encodeQR(value, "raw", {
		border: 0,
		ecc: errorCorrection,
		scale: 1,
		version
	});
	return {
		edgeLength: grid.length,
		finderLength: 7,
		grid,
		value
	};
}
//#endregion
//#region node_modules/cuer/_dist/Cuer.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Renders a QR code with a finder pattern, cells, and an `arena` (if provided).
*
* @params {@link Cuer.Props}
* @returns A {@link React.ReactNode}
*/
function Cuer(props) {
	const { arena, ...rest } = props;
	return (0, import_jsx_runtime.jsxs)(Cuer.Root, {
		...rest,
		children: [
			(0, import_jsx_runtime.jsx)(Cuer.Finder, {}),
			(0, import_jsx_runtime.jsx)(Cuer.Cells, {}),
			arena && (0, import_jsx_runtime.jsx)(Cuer.Arena, { children: typeof arena === "string" ? (0, import_jsx_runtime.jsx)("img", {
				alt: "Arena",
				src: arena,
				style: {
					borderRadius: 1,
					height: "100%",
					objectFit: "cover",
					width: "100%"
				}
			}) : arena })
		]
	});
}
(function(Cuer) {
	Cuer.Context = import_react.createContext(null);
	/**
	* Root component for the QR code.
	*
	* @params {@link Root.Props}
	* @returns A {@link React.ReactNode}
	*/
	function Root(props) {
		const { children, size = "100%", value, version, errorCorrection, ...rest } = props;
		const hasArena = import_react.useMemo(() => (import_react.Children.map(children, (child) => {
			if (!import_react.isValidElement(child)) return null;
			if (typeof child.type === "string") return null;
			if ("displayName" in child.type && child.type.displayName === "Arena") return true;
			return null;
		}) ?? []).some(Boolean), [children]);
		const qrcode = import_react.useMemo(() => {
			let ecl = errorCorrection;
			if (hasArena && errorCorrection === "low") ecl = "medium";
			return create(value, {
				errorCorrection: ecl,
				version
			});
		}, [
			value,
			hasArena,
			errorCorrection,
			version
		]);
		const cellSize = 1;
		const edgeSize = qrcode.edgeLength * cellSize;
		const finderSize = qrcode.finderLength * cellSize / 2;
		const arenaSize = hasArena ? Math.floor(edgeSize / 4) : 0;
		const context = import_react.useMemo(() => ({
			arenaSize,
			cellSize,
			edgeSize,
			qrcode,
			finderSize
		}), [
			arenaSize,
			edgeSize,
			qrcode,
			finderSize
		]);
		return (0, import_jsx_runtime.jsx)(Cuer.Context.Provider, {
			value: context,
			children: (0, import_jsx_runtime.jsxs)("svg", {
				...rest,
				width: size,
				height: size,
				viewBox: `0 0 ${edgeSize} ${edgeSize}`,
				xmlns: "http://www.w3.org/2000/svg",
				children: [(0, import_jsx_runtime.jsx)("title", { children: "QR Code" }), children]
			})
		});
	}
	Cuer.Root = Root;
	(function(Root) {
		Root.displayName = "Root";
	})(Root = Cuer.Root || (Cuer.Root = {}));
	/**
	* Finder component for the QR code. The finder pattern is the squares
	* on the top left, top right, and bottom left of the QR code.
	*
	* @params {@link Finder.Props}
	* @returns A {@link React.ReactNode}
	*/
	function Finder(props) {
		const { className, fill, innerClassName, radius = .25 } = props;
		const { cellSize, edgeSize, finderSize } = import_react.useContext(Cuer.Context);
		function Inner({ position }) {
			let outerX = finderSize - (finderSize - cellSize) - cellSize / 2;
			if (position === "top-right") outerX = edgeSize - finderSize - (finderSize - cellSize) - cellSize / 2;
			let outerY = finderSize - (finderSize - cellSize) - cellSize / 2;
			if (position === "bottom-left") outerY = edgeSize - finderSize - (finderSize - cellSize) - cellSize / 2;
			let innerX = finderSize - cellSize * 1.5;
			if (position === "top-right") innerX = edgeSize - finderSize - cellSize * 1.5;
			let innerY = finderSize - cellSize * 1.5;
			if (position === "bottom-left") innerY = edgeSize - finderSize - cellSize * 1.5;
			return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("rect", {
				className,
				stroke: fill ?? "currentColor",
				fill: "transparent",
				x: outerX,
				y: outerY,
				width: cellSize + (finderSize - cellSize) * 2,
				height: cellSize + (finderSize - cellSize) * 2,
				rx: 2 * radius * (finderSize - cellSize),
				ry: 2 * radius * (finderSize - cellSize),
				strokeWidth: cellSize
			}), (0, import_jsx_runtime.jsx)("rect", {
				className: innerClassName,
				fill: fill ?? "currentColor",
				x: innerX,
				y: innerY,
				width: cellSize * 3,
				height: cellSize * 3,
				rx: 2 * radius * cellSize,
				ry: 2 * radius * cellSize
			})] });
		}
		return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			(0, import_jsx_runtime.jsx)(Inner, { position: "top-left" }),
			(0, import_jsx_runtime.jsx)(Inner, { position: "top-right" }),
			(0, import_jsx_runtime.jsx)(Inner, { position: "bottom-left" })
		] });
	}
	Cuer.Finder = Finder;
	(function(Finder) {
		Finder.displayName = "Finder";
	})(Finder = Cuer.Finder || (Cuer.Finder = {}));
	/**
	* Cells for the QR code.
	*
	* @params {@link Cells.Props}
	* @returns A {@link React.ReactNode}
	*/
	function Cells(props) {
		const { className, fill = "currentColor", inset: inset_ = true, radius = 1 } = props;
		const { arenaSize, cellSize, qrcode } = import_react.useContext(Cuer.Context);
		const { edgeLength, finderLength } = qrcode;
		return (0, import_jsx_runtime.jsx)("path", {
			className,
			d: import_react.useMemo(() => {
				let path = "";
				for (let i = 0; i < qrcode.grid.length; i++) {
					const row = qrcode.grid[i];
					if (!row) continue;
					for (let j = 0; j < row.length; j++) {
						if (!row[j]) continue;
						const start = edgeLength / 2 - arenaSize / 2;
						const end = start + arenaSize;
						if (i >= start && i <= end && j >= start && j <= end) continue;
						const topLeftFinder = i < finderLength && j < finderLength;
						const topRightFinder = i < finderLength && j >= edgeLength - finderLength;
						const bottomLeftFinder = i >= edgeLength - finderLength && j < finderLength;
						if (topLeftFinder || topRightFinder || bottomLeftFinder) continue;
						const innerSize = (cellSize - (inset_ ? cellSize * .1 : 0) * 2) / 2;
						const cx = j * cellSize + cellSize / 2;
						const cy = i * cellSize + cellSize / 2;
						const left = cx - innerSize;
						const right = cx + innerSize;
						const top = cy - innerSize;
						const bottom = cy + innerSize;
						const r = radius * innerSize;
						path += [
							`M ${left + r},${top}`,
							`L ${right - r},${top}`,
							`A ${r},${r} 0 0,1 ${right},${top + r}`,
							`L ${right},${bottom - r}`,
							`A ${r},${r} 0 0,1 ${right - r},${bottom}`,
							`L ${left + r},${bottom}`,
							`A ${r},${r} 0 0,1 ${left},${bottom - r}`,
							`L ${left},${top + r}`,
							`A ${r},${r} 0 0,1 ${left + r},${top}`,
							"z"
						].join(" ");
					}
				}
				return path;
			}, [
				arenaSize,
				cellSize,
				edgeLength,
				finderLength,
				qrcode.grid,
				inset_,
				radius
			]),
			fill
		});
	}
	Cuer.Cells = Cells;
	(function(Cells) {
		Cells.displayName = "Cells";
	})(Cells = Cuer.Cells || (Cuer.Cells = {}));
	/**
	* Arena component for the QR code. The arena is the area in the center
	* of the QR code that is not part of the finder pattern.
	*
	* @params {@link Arena.Props}
	* @returns A {@link React.ReactNode}
	*/
	function Arena(props) {
		const { children } = props;
		const { arenaSize, cellSize, edgeSize } = import_react.useContext(Cuer.Context);
		const start = Math.ceil(edgeSize / 2 - arenaSize / 2);
		const size = arenaSize + arenaSize % 2;
		return (0, import_jsx_runtime.jsx)("foreignObject", {
			x: start,
			y: start,
			width: size,
			height: size,
			children: (0, import_jsx_runtime.jsx)("div", {
				style: {
					alignItems: "center",
					display: "flex",
					fontSize: 1,
					justifyContent: "center",
					height: "100%",
					overflow: "hidden",
					width: "100%",
					padding: cellSize / 2,
					boxSizing: "border-box"
				},
				children
			})
		});
	}
	Cuer.Arena = Arena;
	(function(Arena) {
		Arena.displayName = "Arena";
	})(Arena = Cuer.Arena || (Cuer.Arena = {}));
})(Cuer || (Cuer = {}));
//#endregion
//#region node_modules/@wagmi/connectors/dist/esm/baseAccount.js
function baseAccount$1(parameters = {}) {
	let walletProvider;
	let accountsChanged;
	let chainChanged;
	let disconnect;
	return createConnector((config) => ({
		id: "baseAccount",
		name: "Base Account",
		rdns: "app.base.account",
		type: "baseAccount",
		async connect({ chainId, withCapabilities, ...rest } = {}) {
			try {
				const provider = await this.getProvider();
				const targetChainId = chainId ?? config.chains[0]?.id;
				if (!targetChainId) throw new ChainNotConfiguredError();
				let { accounts, currentChainId } = await (async () => {
					if (rest.isReconnecting) return {
						accounts: (await provider.request({
							method: "eth_accounts",
							params: []
						})).map((x) => ({ address: getAddress(x) })),
						currentChainId: await this.getChainId()
					};
					const response = await provider.request({
						method: "wallet_connect",
						params: [{
							capabilities: "capabilities" in rest && rest.capabilities ? rest.capabilities : {},
							chainIds: [numberToHex(targetChainId), ...config.chains.filter((x) => x.id !== targetChainId).map((x) => numberToHex(x.id))]
						}]
					});
					return {
						accounts: (await provider.request({ method: "eth_accounts" })).map((account1) => response.accounts.find((account2) => account2.address === account1) ?? { address: account1 }).map((account) => ({
							address: getAddress(account.address),
							capabilities: account.capabilities ?? {}
						})),
						currentChainId: Number(response.chainIds[0])
					};
				})();
				if (!accountsChanged) {
					accountsChanged = this.onAccountsChanged.bind(this);
					provider.on("accountsChanged", accountsChanged);
				}
				if (!chainChanged) {
					chainChanged = this.onChainChanged.bind(this);
					provider.on("chainChanged", chainChanged);
				}
				if (!disconnect) {
					disconnect = this.onDisconnect.bind(this);
					provider.on("disconnect", disconnect);
				}
				if (chainId && currentChainId !== chainId) currentChainId = (await this.switchChain({ chainId }).catch((error) => {
					if (error.code === UserRejectedRequestError.code) throw error;
					return { id: currentChainId };
				}))?.id ?? currentChainId;
				return {
					accounts: withCapabilities ? accounts : accounts.map((account) => account.address),
					chainId: currentChainId
				};
			} catch (error) {
				if (/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(error.message)) throw new UserRejectedRequestError(error);
				throw error;
			}
		},
		async disconnect() {
			const provider = await this.getProvider();
			if (accountsChanged) {
				provider.removeListener("accountsChanged", accountsChanged);
				accountsChanged = void 0;
			}
			if (chainChanged) {
				provider.removeListener("chainChanged", chainChanged);
				chainChanged = void 0;
			}
			if (disconnect) {
				provider.removeListener("disconnect", disconnect);
				disconnect = void 0;
			}
			provider.disconnect();
		},
		async getAccounts() {
			return (await (await this.getProvider()).request({ method: "eth_accounts" })).map((x) => getAddress(x));
		},
		async getChainId() {
			const chainId = await (await this.getProvider()).request({ method: "eth_chainId" });
			return Number(chainId);
		},
		async getProvider() {
			if (!walletProvider) {
				const preference = (() => {
					if (typeof parameters.preference === "string") return { options: parameters.preference };
					return {
						...parameters.preference,
						options: parameters.preference?.options ?? "all"
					};
				})();
				const { createBaseAccountSDK } = await (() => {
					try {
						return import("./connectors-DGQwXb-E.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
					} catch {
						throw new Error("dependency \"@base-org/account\" not found");
					}
				})();
				walletProvider = createBaseAccountSDK({
					...parameters,
					appChainIds: config.chains.map((x) => x.id),
					preference
				}).getProvider();
			}
			return walletProvider;
		},
		async isAuthorized() {
			try {
				return !!(await this.getAccounts()).length;
			} catch {
				return false;
			}
		},
		async switchChain({ addEthereumChainParameter, chainId }) {
			const chain = config.chains.find((chain) => chain.id === chainId);
			if (!chain) throw new SwitchChainError(new ChainNotConfiguredError());
			const provider = await this.getProvider();
			try {
				await provider.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: numberToHex(chain.id) }]
				});
				return chain;
			} catch (error) {
				if (error.code === 4902) try {
					let blockExplorerUrls;
					if (addEthereumChainParameter?.blockExplorerUrls) blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
					else blockExplorerUrls = chain.blockExplorers?.default.url ? [chain.blockExplorers?.default.url] : [];
					let rpcUrls;
					if (addEthereumChainParameter?.rpcUrls?.length) rpcUrls = addEthereumChainParameter.rpcUrls;
					else rpcUrls = [chain.rpcUrls.default?.http[0] ?? ""];
					const addEthereumChain = {
						blockExplorerUrls,
						chainId: numberToHex(chainId),
						chainName: addEthereumChainParameter?.chainName ?? chain.name,
						iconUrls: addEthereumChainParameter?.iconUrls,
						nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
						rpcUrls
					};
					await provider.request({
						method: "wallet_addEthereumChain",
						params: [addEthereumChain]
					});
					return chain;
				} catch (error) {
					throw new UserRejectedRequestError(error);
				}
				throw new SwitchChainError(error);
			}
		},
		onAccountsChanged(accounts) {
			if (accounts.length === 0) this.onDisconnect();
			else config.emitter.emit("change", { accounts: accounts.map((x) => getAddress(x)) });
		},
		onChainChanged(chain) {
			const chainId = Number(chain);
			config.emitter.emit("change", { chainId });
		},
		async onDisconnect(_error) {
			config.emitter.emit("disconnect");
			const provider = await this.getProvider();
			if (accountsChanged) {
				provider.removeListener("accountsChanged", accountsChanged);
				accountsChanged = void 0;
			}
			if (chainChanged) {
				provider.removeListener("chainChanged", chainChanged);
				chainChanged = void 0;
			}
			if (disconnect) {
				provider.removeListener("disconnect", disconnect);
				disconnect = void 0;
			}
		}
	}));
}
//#endregion
//#region node_modules/@wagmi/connectors/dist/esm/metaMask.js
metaMask.type = "metaMask";
function metaMask(parameters = {}) {
	let metamask;
	let metamaskPromise;
	return createConnector((config) => ({
		id: "metaMaskSDK",
		name: "MetaMask",
		rdns: ["io.metamask", "io.metamask.mobile"],
		type: metaMask.type,
		async connect({ chainId, isReconnecting, withCapabilities } = {}) {
			const instance = await this.getInstance();
			const provider = instance.getProvider();
			let accounts = [];
			if (isReconnecting) accounts = await this.getAccounts().catch(() => []);
			try {
				let signResponse;
				let connectWithResponse;
				if (!accounts?.length) {
					const chainIds = config.chains.map((chain) => numberToHex(chain.id));
					if (parameters.connectAndSign || parameters.connectWith) {
						if (parameters.connectAndSign) signResponse = await instance.connectAndSign({
							chainIds,
							message: parameters.connectAndSign
						});
						else if (parameters.connectWith) connectWithResponse = await instance.connectWith({
							chainIds,
							method: parameters.connectWith.method,
							params: parameters.connectWith.params
						});
						accounts = await this.getAccounts();
					} else accounts = (await instance.connect({ chainIds })).accounts.map((x) => getAddress(x));
				}
				let currentChainId = await this.getChainId();
				if (chainId && currentChainId !== chainId) currentChainId = (await this.switchChain({ chainId }).catch((error) => {
					if (error.code === UserRejectedRequestError.code) throw error;
					return { id: currentChainId };
				}))?.id ?? currentChainId;
				if (signResponse) provider.emit("connectAndSign", {
					accounts,
					chainId: numberToHex(currentChainId),
					signResponse
				});
				else if (connectWithResponse) provider.emit("connectWith", {
					accounts,
					chainId: numberToHex(currentChainId),
					connectWithResponse
				});
				return {
					accounts: withCapabilities ? accounts.map((address) => ({
						address,
						capabilities: {}
					})) : accounts,
					chainId: currentChainId
				};
			} catch (err) {
				const error = err;
				if (error.code === UserRejectedRequestError.code) throw new UserRejectedRequestError(error);
				if (error.code === ResourceUnavailableRpcError.code) throw new ResourceUnavailableRpcError(error);
				throw error;
			}
		},
		async disconnect() {
			return (await this.getInstance()).disconnect();
		},
		async getAccounts() {
			const instance = await this.getInstance();
			if (instance.accounts.length) return instance.accounts.map((x) => getAddress(x));
			return (await instance.getProvider().request({ method: "eth_accounts" })).map((x) => getAddress(x));
		},
		async getChainId() {
			const instance = await this.getInstance();
			if (instance.getChainId()) return Number(instance.getChainId());
			const chainId = await instance.getProvider().request({ method: "eth_chainId" });
			return Number(chainId);
		},
		async getProvider() {
			return (await this.getInstance()).getProvider();
		},
		async isAuthorized() {
			try {
				const timeout = 10;
				const accounts = await withRetry(async () => withTimeout(async () => {
					const accounts = await this.getAccounts();
					if (!accounts.length) throw new Error("try again");
					return accounts;
				}, { timeout }), {
					delay: timeout + 1,
					retryCount: 3
				});
				return Boolean(accounts.length);
			} catch {
				return false;
			}
		},
		async switchChain({ addEthereumChainParameter, chainId }) {
			const chain = config.chains.find(({ id }) => id === Number(chainId));
			if (!chain) throw new SwitchChainError(new ChainNotConfiguredError());
			const hexChainId = numberToHex(chainId);
			try {
				await (await this.getInstance()).switchChain({
					chainId: hexChainId,
					chainConfiguration: {
						blockExplorerUrls: addEthereumChainParameter?.blockExplorerUrls ? [...addEthereumChainParameter.blockExplorerUrls] : chain.blockExplorers?.default.url ? [chain.blockExplorers.default.url] : void 0,
						chainId: hexChainId,
						chainName: addEthereumChainParameter?.chainName ?? chain.name,
						iconUrls: addEthereumChainParameter?.iconUrls,
						nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
						rpcUrls: addEthereumChainParameter?.rpcUrls ? [...addEthereumChainParameter.rpcUrls] : chain.rpcUrls.default?.http ? [...chain.rpcUrls.default.http] : void 0
					}
				});
				return chain;
			} catch (err) {
				const error = err;
				if (error.code === UserRejectedRequestError.code) throw new UserRejectedRequestError(error);
				throw new SwitchChainError(error);
			}
		},
		async onAccountsChanged(accounts) {
			config.emitter.emit("change", { accounts: accounts.map((x) => getAddress(x)) });
		},
		onChainChanged(chain) {
			const chainId = Number(chain);
			config.emitter.emit("change", { chainId });
		},
		async onConnect(connectInfo) {
			const accounts = await this.getAccounts();
			if (accounts.length === 0) return;
			const chainId = Number(connectInfo.chainId);
			config.emitter.emit("connect", {
				accounts,
				chainId
			});
		},
		async onDisconnect(error) {
			if (error && error.code === 1013) {
				if (await this.getProvider() && Boolean((await this.getAccounts()).length)) return;
			}
			config.emitter.emit("disconnect");
		},
		onDisplayUri(uri) {
			config.emitter.emit("message", {
				type: "display_uri",
				data: uri
			});
		},
		async getInstance() {
			if (!metamask) {
				if (!metamaskPromise) {
					const { createEVMClient } = await (async () => {
						try {
							return import("./connectors-BfL_a8Wb.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
						} catch {
							throw new Error("dependency \"@metamask/connect-evm\" not found");
						}
					})();
					const defaultDappParams = typeof window === "undefined" ? { name: "wagmi" } : {
						name: window.location.hostname,
						url: window.location.href
					};
					metamaskPromise = createEVMClient({
						...parameters,
						api: { supportedNetworks: Object.fromEntries(config.chains.map((chain) => [numberToHex(chain.id), chain.rpcUrls.default?.http[0] ?? ""])) },
						dapp: parameters.dapp ?? {
							...defaultDappParams,
							...parameters.dappMetadata
						},
						debug: parameters.debug ?? parameters.logging?.sdk,
						eventHandlers: {
							accountsChanged: this.onAccountsChanged.bind(this),
							chainChanged: this.onChainChanged.bind(this),
							connect: this.onConnect.bind(this),
							disconnect: this.onDisconnect.bind(this),
							displayUri: this.onDisplayUri.bind(this)
						},
						analytics: { integrationType: "wagmi" },
						ui: {
							...parameters.ui,
							...parameters.headless != null && { headless: parameters.headless }
						},
						...parameters.mobile && { mobile: parameters.mobile }
					});
				}
				metamask = await metamaskPromise;
			}
			return metamask;
		}
	}));
}
//#endregion
//#region node_modules/@wagmi/connectors/dist/esm/safe.js
safe.type = "safe";
function safe(parameters = {}) {
	const { shimDisconnect = false } = parameters;
	let provider_;
	let disconnect;
	return createConnector((config) => ({
		id: "safe",
		name: "Safe",
		type: safe.type,
		async connect({ withCapabilities } = {}) {
			const provider = await this.getProvider();
			if (!provider) throw new ProviderNotFoundError();
			const accounts = await this.getAccounts();
			const chainId = await this.getChainId();
			if (!disconnect) {
				disconnect = this.onDisconnect.bind(this);
				provider.on("disconnect", disconnect);
			}
			if (shimDisconnect) await config.storage?.removeItem("safe.disconnected");
			return {
				accounts: withCapabilities ? accounts.map((address) => ({
					address,
					capabilities: {}
				})) : accounts,
				chainId
			};
		},
		async disconnect() {
			const provider = await this.getProvider();
			if (!provider) throw new ProviderNotFoundError();
			if (disconnect) {
				provider.removeListener("disconnect", disconnect);
				disconnect = void 0;
			}
			if (shimDisconnect) await config.storage?.setItem("safe.disconnected", true);
		},
		async getAccounts() {
			const provider = await this.getProvider();
			if (!provider) throw new ProviderNotFoundError();
			return (await provider.request({ method: "eth_accounts" })).map(getAddress);
		},
		async getProvider() {
			if (!(typeof window !== "undefined" && window?.parent !== window)) return;
			if (!provider_) {
				const { default: SDK } = await (() => {
					try {
						return import("./connectors-BaWbx_J1.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
					} catch {
						throw new Error("dependency \"@safe-global/safe-apps-sdk\" not found");
					}
				})();
				const sdk = new SDK(parameters);
				const safe = await withTimeout(() => sdk.safe.getInfo(), { timeout: parameters.unstable_getInfoTimeout ?? 10 });
				if (!safe) throw new Error("Could not load Safe information");
				provider_ = new (await ((async () => {
					const Provider = await (() => {
						try {
							return import("./connectors-BnJ5cJf9.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
						} catch {
							throw new Error("dependency \"@safe-global/safe-apps-provider\" not found");
						}
					})();
					if (typeof Provider.SafeAppProvider !== "function" && typeof Provider.default.SafeAppProvider === "function") return Provider.default.SafeAppProvider;
					return Provider.SafeAppProvider;
				})()))(safe, sdk);
			}
			return provider_;
		},
		async getChainId() {
			const provider = await this.getProvider();
			if (!provider) throw new ProviderNotFoundError();
			return Number(provider.chainId);
		},
		async isAuthorized() {
			try {
				if (shimDisconnect && await config.storage?.getItem("safe.disconnected")) return false;
				return !!(await this.getAccounts()).length;
			} catch {
				return false;
			}
		},
		onAccountsChanged() {},
		onChainChanged() {},
		onDisconnect() {
			config.emitter.emit("disconnect");
		}
	}));
}
//#endregion
//#region node_modules/@wagmi/connectors/dist/esm/walletConnect.js
walletConnect.type = "walletConnect";
function walletConnect(parameters) {
	const isNewChainsStale = parameters.isNewChainsStale ?? true;
	let provider_;
	let providerPromise;
	const NAMESPACE = "eip155";
	let accountsChanged;
	let chainChanged;
	let connect;
	let displayUri;
	let sessionDelete;
	let disconnect;
	return createConnector((config) => ({
		id: "walletConnect",
		name: "WalletConnect",
		type: walletConnect.type,
		async setup() {
			const provider = await this.getProvider().catch(() => null);
			if (!provider) return;
			if (!connect) {
				connect = this.onConnect.bind(this);
				provider.on("connect", connect);
			}
			if (!sessionDelete) {
				sessionDelete = this.onSessionDelete.bind(this);
				provider.on("session_delete", sessionDelete);
			}
		},
		async connect({ chainId, withCapabilities, ...rest } = {}) {
			try {
				const provider = await this.getProvider();
				if (!provider) throw new ProviderNotFoundError();
				if (!displayUri) {
					displayUri = this.onDisplayUri;
					provider.on("display_uri", displayUri);
				}
				let targetChainId = chainId;
				if (!targetChainId) {
					const state = await config.storage?.getItem("state") ?? {};
					if (config.chains.some((x) => x.id === state.chainId)) targetChainId = state.chainId;
					else targetChainId = config.chains[0]?.id;
				}
				if (!targetChainId) throw new Error("No chains found on connector.");
				const isChainsStale = await this.isChainsStale();
				if (provider.session && isChainsStale) await provider.disconnect();
				if (!provider.session || isChainsStale) {
					const optionalChains = config.chains.filter((chain) => chain.id !== targetChainId).map((optionalChain) => optionalChain.id);
					await provider.connect({
						optionalChains: [targetChainId, ...optionalChains],
						..."pairingTopic" in rest ? { pairingTopic: rest.pairingTopic } : {}
					});
					this.setRequestedChainsIds(config.chains.map((x) => x.id));
				}
				const accounts = (await provider.enable()).map((x) => getAddress(x));
				let currentChainId = await this.getChainId();
				if (chainId && currentChainId !== chainId) currentChainId = (await this.switchChain({ chainId }).catch((error) => {
					if (error.code === UserRejectedRequestError.code && error.cause?.message !== "Missing or invalid. request() method: wallet_addEthereumChain") throw error;
					return { id: currentChainId };
				}))?.id ?? currentChainId;
				if (displayUri) {
					provider.removeListener("display_uri", displayUri);
					displayUri = void 0;
				}
				if (connect) {
					provider.removeListener("connect", connect);
					connect = void 0;
				}
				if (!accountsChanged) {
					accountsChanged = this.onAccountsChanged.bind(this);
					provider.on("accountsChanged", accountsChanged);
				}
				if (!chainChanged) {
					chainChanged = this.onChainChanged.bind(this);
					provider.on("chainChanged", chainChanged);
				}
				if (!disconnect) {
					disconnect = this.onDisconnect.bind(this);
					provider.on("disconnect", disconnect);
				}
				if (!sessionDelete) {
					sessionDelete = this.onSessionDelete.bind(this);
					provider.on("session_delete", sessionDelete);
				}
				return {
					accounts: withCapabilities ? accounts.map((address) => ({
						address,
						capabilities: {}
					})) : accounts,
					chainId: currentChainId
				};
			} catch (error) {
				if (/(user rejected|connection request reset)/i.test(error?.message)) throw new UserRejectedRequestError(error);
				throw error;
			}
		},
		async disconnect() {
			const provider = await this.getProvider();
			try {
				await provider?.disconnect();
			} catch (error) {
				if (!/No matching key/i.test(error.message)) throw error;
			} finally {
				if (chainChanged) {
					provider?.removeListener("chainChanged", chainChanged);
					chainChanged = void 0;
				}
				if (disconnect) {
					provider?.removeListener("disconnect", disconnect);
					disconnect = void 0;
				}
				if (!connect) {
					connect = this.onConnect.bind(this);
					provider?.on("connect", connect);
				}
				if (accountsChanged) {
					provider?.removeListener("accountsChanged", accountsChanged);
					accountsChanged = void 0;
				}
				if (sessionDelete) {
					provider?.removeListener("session_delete", sessionDelete);
					sessionDelete = void 0;
				}
				this.setRequestedChainsIds([]);
			}
		},
		async getAccounts() {
			return (await this.getProvider()).accounts.map((x) => getAddress(x));
		},
		async getProvider({ chainId } = {}) {
			async function initProvider() {
				const optionalChains = config.chains.map((x) => x.id);
				if (!optionalChains.length) return;
				const { EthereumProvider } = await (() => {
					try {
						return import("./connectors-yVpSA36_.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
					} catch {
						throw new Error("dependency \"@walletconnect/ethereum-provider\" not found");
					}
				})();
				return await EthereumProvider.init({
					...parameters,
					disableProviderPing: true,
					optionalChains,
					projectId: parameters.projectId,
					rpcMap: Object.fromEntries(config.chains.map((chain) => {
						const [url] = extractRpcUrls({
							chain,
							transports: config.transports
						});
						return [chain.id, url];
					})),
					showQrModal: parameters.showQrModal ?? true
				});
			}
			if (!provider_) {
				if (!providerPromise) providerPromise = initProvider();
				provider_ = await providerPromise;
				provider_?.events.setMaxListeners(Number.POSITIVE_INFINITY);
			}
			if (chainId) await this.switchChain?.({ chainId });
			return provider_;
		},
		async getChainId() {
			return (await this.getProvider()).chainId;
		},
		async isAuthorized() {
			try {
				const [accounts, provider] = await Promise.all([this.getAccounts(), this.getProvider()]);
				if (!accounts.length) return false;
				if (await this.isChainsStale() && provider.session) {
					await provider.disconnect().catch(() => {});
					return false;
				}
				return true;
			} catch {
				return false;
			}
		},
		async switchChain({ addEthereumChainParameter, chainId }) {
			const provider = await this.getProvider();
			if (!provider) throw new ProviderNotFoundError();
			const chain = config.chains.find((x) => x.id === chainId);
			if (!chain) throw new SwitchChainError(new ChainNotConfiguredError());
			let listener = () => {};
			try {
				await Promise.all([new Promise((resolve) => {
					listener = (opts) => {
						if (opts.chainId === chainId) {
							config.emitter.off("change", listener);
							resolve();
						}
					};
					config.emitter.on("change", listener);
				}), provider.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: numberToHex(chainId) }]
				})]);
				const requestedChains = await this.getRequestedChainsIds();
				this.setRequestedChainsIds([...requestedChains, chainId]);
				return chain;
			} catch (err) {
				config.emitter.off("change", listener);
				const error = err;
				if (/(user rejected)/i.test(error.message)) throw new UserRejectedRequestError(error);
				try {
					let blockExplorerUrls;
					if (addEthereumChainParameter?.blockExplorerUrls) blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
					else blockExplorerUrls = chain.blockExplorers?.default.url ? [chain.blockExplorers?.default.url] : [];
					let rpcUrls;
					if (addEthereumChainParameter?.rpcUrls?.length) rpcUrls = addEthereumChainParameter.rpcUrls;
					else rpcUrls = [...chain.rpcUrls.default.http];
					const addEthereumChain = {
						blockExplorerUrls,
						chainId: numberToHex(chainId),
						chainName: addEthereumChainParameter?.chainName ?? chain.name,
						iconUrls: addEthereumChainParameter?.iconUrls,
						nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
						rpcUrls
					};
					await provider.request({
						method: "wallet_addEthereumChain",
						params: [addEthereumChain]
					});
					const requestedChains = await this.getRequestedChainsIds();
					this.setRequestedChainsIds([...requestedChains, chainId]);
					return chain;
				} catch (error) {
					throw new UserRejectedRequestError(error);
				}
			}
		},
		onAccountsChanged(accounts) {
			if (accounts.length === 0) this.onDisconnect();
			else config.emitter.emit("change", { accounts: accounts.map((x) => getAddress(x)) });
		},
		onChainChanged(chain) {
			const chainId = Number(chain);
			config.emitter.emit("change", { chainId });
		},
		async onConnect(connectInfo) {
			const chainId = Number(connectInfo.chainId);
			const accounts = await this.getAccounts();
			config.emitter.emit("connect", {
				accounts,
				chainId
			});
		},
		async onDisconnect(_error) {
			this.setRequestedChainsIds([]);
			config.emitter.emit("disconnect");
			const provider = await this.getProvider();
			if (accountsChanged) {
				provider.removeListener("accountsChanged", accountsChanged);
				accountsChanged = void 0;
			}
			if (chainChanged) {
				provider.removeListener("chainChanged", chainChanged);
				chainChanged = void 0;
			}
			if (disconnect) {
				provider.removeListener("disconnect", disconnect);
				disconnect = void 0;
			}
			if (sessionDelete) {
				provider.removeListener("session_delete", sessionDelete);
				sessionDelete = void 0;
			}
			if (!connect) {
				connect = this.onConnect.bind(this);
				provider.on("connect", connect);
			}
		},
		onDisplayUri(uri) {
			config.emitter.emit("message", {
				type: "display_uri",
				data: uri
			});
		},
		onSessionDelete() {
			this.onDisconnect();
		},
		getNamespaceChainsIds() {
			if (!provider_) return [];
			return provider_.session?.namespaces[NAMESPACE]?.accounts?.map((account) => Number.parseInt(account.split(":")[1] || "", 10)) ?? [];
		},
		async getRequestedChainsIds() {
			return await config.storage?.getItem(this.requestedChainsStorageKey) ?? [];
		},
		async isChainsStale() {
			if (!isNewChainsStale) return false;
			const connectorChains = config.chains.map((x) => x.id);
			const namespaceChains = this.getNamespaceChainsIds();
			if (namespaceChains.length && !namespaceChains.some((id) => connectorChains.includes(id))) return false;
			const requestedChains = await this.getRequestedChainsIds();
			return !connectorChains.every((id) => requestedChains.includes(id));
		},
		async setRequestedChainsIds(chains) {
			await config.storage?.setItem(this.requestedChainsStorageKey, chains);
		},
		get requestedChainsStorageKey() {
			return `${this.id}.requestedChains`;
		}
	}));
}
//#endregion
//#region node_modules/@rainbow-me/rainbowkit/dist/index.js
var import_ua_parser = require_ua_parser();
var largeScreenMinWidth = 768;
var mapResponsiveValue = createMapValueFn({ conditions: {
	defaultCondition: "smallScreen",
	conditionNames: ["smallScreen", "largeScreen"],
	responsiveArray: void 0
} });
var normalizeResponsiveValue = createNormalizeValueFn({ conditions: {
	defaultCondition: "smallScreen",
	conditionNames: ["smallScreen", "largeScreen"],
	responsiveArray: void 0
} });
var sprinkles = createSprinkles({
	conditions: {
		defaultCondition: "base",
		conditionNames: [
			"base",
			"hover",
			"active"
		],
		responsiveArray: void 0
	},
	styles: {
		background: { values: {
			accentColor: {
				conditions: {
					base: "ju367v9i",
					hover: "ju367v9j",
					active: "ju367v9k"
				},
				defaultClass: "ju367v9i"
			},
			accentColorForeground: {
				conditions: {
					base: "ju367v9l",
					hover: "ju367v9m",
					active: "ju367v9n"
				},
				defaultClass: "ju367v9l"
			},
			actionButtonBorder: {
				conditions: {
					base: "ju367v9o",
					hover: "ju367v9p",
					active: "ju367v9q"
				},
				defaultClass: "ju367v9o"
			},
			actionButtonBorderMobile: {
				conditions: {
					base: "ju367v9r",
					hover: "ju367v9s",
					active: "ju367v9t"
				},
				defaultClass: "ju367v9r"
			},
			actionButtonSecondaryBackground: {
				conditions: {
					base: "ju367v9u",
					hover: "ju367v9v",
					active: "ju367v9w"
				},
				defaultClass: "ju367v9u"
			},
			closeButton: {
				conditions: {
					base: "ju367v9x",
					hover: "ju367v9y",
					active: "ju367v9z"
				},
				defaultClass: "ju367v9x"
			},
			closeButtonBackground: {
				conditions: {
					base: "ju367va0",
					hover: "ju367va1",
					active: "ju367va2"
				},
				defaultClass: "ju367va0"
			},
			connectButtonBackground: {
				conditions: {
					base: "ju367va3",
					hover: "ju367va4",
					active: "ju367va5"
				},
				defaultClass: "ju367va3"
			},
			connectButtonBackgroundError: {
				conditions: {
					base: "ju367va6",
					hover: "ju367va7",
					active: "ju367va8"
				},
				defaultClass: "ju367va6"
			},
			connectButtonInnerBackground: {
				conditions: {
					base: "ju367va9",
					hover: "ju367vaa",
					active: "ju367vab"
				},
				defaultClass: "ju367va9"
			},
			connectButtonText: {
				conditions: {
					base: "ju367vac",
					hover: "ju367vad",
					active: "ju367vae"
				},
				defaultClass: "ju367vac"
			},
			connectButtonTextError: {
				conditions: {
					base: "ju367vaf",
					hover: "ju367vag",
					active: "ju367vah"
				},
				defaultClass: "ju367vaf"
			},
			connectionIndicator: {
				conditions: {
					base: "ju367vai",
					hover: "ju367vaj",
					active: "ju367vak"
				},
				defaultClass: "ju367vai"
			},
			downloadBottomCardBackground: {
				conditions: {
					base: "ju367val",
					hover: "ju367vam",
					active: "ju367van"
				},
				defaultClass: "ju367val"
			},
			downloadTopCardBackground: {
				conditions: {
					base: "ju367vao",
					hover: "ju367vap",
					active: "ju367vaq"
				},
				defaultClass: "ju367vao"
			},
			error: {
				conditions: {
					base: "ju367var",
					hover: "ju367vas",
					active: "ju367vat"
				},
				defaultClass: "ju367var"
			},
			generalBorder: {
				conditions: {
					base: "ju367vau",
					hover: "ju367vav",
					active: "ju367vaw"
				},
				defaultClass: "ju367vau"
			},
			generalBorderDim: {
				conditions: {
					base: "ju367vax",
					hover: "ju367vay",
					active: "ju367vaz"
				},
				defaultClass: "ju367vax"
			},
			menuItemBackground: {
				conditions: {
					base: "ju367vb0",
					hover: "ju367vb1",
					active: "ju367vb2"
				},
				defaultClass: "ju367vb0"
			},
			modalBackdrop: {
				conditions: {
					base: "ju367vb3",
					hover: "ju367vb4",
					active: "ju367vb5"
				},
				defaultClass: "ju367vb3"
			},
			modalBackground: {
				conditions: {
					base: "ju367vb6",
					hover: "ju367vb7",
					active: "ju367vb8"
				},
				defaultClass: "ju367vb6"
			},
			modalBorder: {
				conditions: {
					base: "ju367vb9",
					hover: "ju367vba",
					active: "ju367vbb"
				},
				defaultClass: "ju367vb9"
			},
			modalText: {
				conditions: {
					base: "ju367vbc",
					hover: "ju367vbd",
					active: "ju367vbe"
				},
				defaultClass: "ju367vbc"
			},
			modalTextDim: {
				conditions: {
					base: "ju367vbf",
					hover: "ju367vbg",
					active: "ju367vbh"
				},
				defaultClass: "ju367vbf"
			},
			modalTextSecondary: {
				conditions: {
					base: "ju367vbi",
					hover: "ju367vbj",
					active: "ju367vbk"
				},
				defaultClass: "ju367vbi"
			},
			profileAction: {
				conditions: {
					base: "ju367vbl",
					hover: "ju367vbm",
					active: "ju367vbn"
				},
				defaultClass: "ju367vbl"
			},
			profileActionHover: {
				conditions: {
					base: "ju367vbo",
					hover: "ju367vbp",
					active: "ju367vbq"
				},
				defaultClass: "ju367vbo"
			},
			profileForeground: {
				conditions: {
					base: "ju367vbr",
					hover: "ju367vbs",
					active: "ju367vbt"
				},
				defaultClass: "ju367vbr"
			},
			selectedOptionBorder: {
				conditions: {
					base: "ju367vbu",
					hover: "ju367vbv",
					active: "ju367vbw"
				},
				defaultClass: "ju367vbu"
			},
			standby: {
				conditions: {
					base: "ju367vbx",
					hover: "ju367vby",
					active: "ju367vbz"
				},
				defaultClass: "ju367vbx"
			}
		} },
		borderColor: { values: {
			accentColor: {
				conditions: {
					base: "ju367vc0",
					hover: "ju367vc1",
					active: "ju367vc2"
				},
				defaultClass: "ju367vc0"
			},
			accentColorForeground: {
				conditions: {
					base: "ju367vc3",
					hover: "ju367vc4",
					active: "ju367vc5"
				},
				defaultClass: "ju367vc3"
			},
			actionButtonBorder: {
				conditions: {
					base: "ju367vc6",
					hover: "ju367vc7",
					active: "ju367vc8"
				},
				defaultClass: "ju367vc6"
			},
			actionButtonBorderMobile: {
				conditions: {
					base: "ju367vc9",
					hover: "ju367vca",
					active: "ju367vcb"
				},
				defaultClass: "ju367vc9"
			},
			actionButtonSecondaryBackground: {
				conditions: {
					base: "ju367vcc",
					hover: "ju367vcd",
					active: "ju367vce"
				},
				defaultClass: "ju367vcc"
			},
			closeButton: {
				conditions: {
					base: "ju367vcf",
					hover: "ju367vcg",
					active: "ju367vch"
				},
				defaultClass: "ju367vcf"
			},
			closeButtonBackground: {
				conditions: {
					base: "ju367vci",
					hover: "ju367vcj",
					active: "ju367vck"
				},
				defaultClass: "ju367vci"
			},
			connectButtonBackground: {
				conditions: {
					base: "ju367vcl",
					hover: "ju367vcm",
					active: "ju367vcn"
				},
				defaultClass: "ju367vcl"
			},
			connectButtonBackgroundError: {
				conditions: {
					base: "ju367vco",
					hover: "ju367vcp",
					active: "ju367vcq"
				},
				defaultClass: "ju367vco"
			},
			connectButtonInnerBackground: {
				conditions: {
					base: "ju367vcr",
					hover: "ju367vcs",
					active: "ju367vct"
				},
				defaultClass: "ju367vcr"
			},
			connectButtonText: {
				conditions: {
					base: "ju367vcu",
					hover: "ju367vcv",
					active: "ju367vcw"
				},
				defaultClass: "ju367vcu"
			},
			connectButtonTextError: {
				conditions: {
					base: "ju367vcx",
					hover: "ju367vcy",
					active: "ju367vcz"
				},
				defaultClass: "ju367vcx"
			},
			connectionIndicator: {
				conditions: {
					base: "ju367vd0",
					hover: "ju367vd1",
					active: "ju367vd2"
				},
				defaultClass: "ju367vd0"
			},
			downloadBottomCardBackground: {
				conditions: {
					base: "ju367vd3",
					hover: "ju367vd4",
					active: "ju367vd5"
				},
				defaultClass: "ju367vd3"
			},
			downloadTopCardBackground: {
				conditions: {
					base: "ju367vd6",
					hover: "ju367vd7",
					active: "ju367vd8"
				},
				defaultClass: "ju367vd6"
			},
			error: {
				conditions: {
					base: "ju367vd9",
					hover: "ju367vda",
					active: "ju367vdb"
				},
				defaultClass: "ju367vd9"
			},
			generalBorder: {
				conditions: {
					base: "ju367vdc",
					hover: "ju367vdd",
					active: "ju367vde"
				},
				defaultClass: "ju367vdc"
			},
			generalBorderDim: {
				conditions: {
					base: "ju367vdf",
					hover: "ju367vdg",
					active: "ju367vdh"
				},
				defaultClass: "ju367vdf"
			},
			menuItemBackground: {
				conditions: {
					base: "ju367vdi",
					hover: "ju367vdj",
					active: "ju367vdk"
				},
				defaultClass: "ju367vdi"
			},
			modalBackdrop: {
				conditions: {
					base: "ju367vdl",
					hover: "ju367vdm",
					active: "ju367vdn"
				},
				defaultClass: "ju367vdl"
			},
			modalBackground: {
				conditions: {
					base: "ju367vdo",
					hover: "ju367vdp",
					active: "ju367vdq"
				},
				defaultClass: "ju367vdo"
			},
			modalBorder: {
				conditions: {
					base: "ju367vdr",
					hover: "ju367vds",
					active: "ju367vdt"
				},
				defaultClass: "ju367vdr"
			},
			modalText: {
				conditions: {
					base: "ju367vdu",
					hover: "ju367vdv",
					active: "ju367vdw"
				},
				defaultClass: "ju367vdu"
			},
			modalTextDim: {
				conditions: {
					base: "ju367vdx",
					hover: "ju367vdy",
					active: "ju367vdz"
				},
				defaultClass: "ju367vdx"
			},
			modalTextSecondary: {
				conditions: {
					base: "ju367ve0",
					hover: "ju367ve1",
					active: "ju367ve2"
				},
				defaultClass: "ju367ve0"
			},
			profileAction: {
				conditions: {
					base: "ju367ve3",
					hover: "ju367ve4",
					active: "ju367ve5"
				},
				defaultClass: "ju367ve3"
			},
			profileActionHover: {
				conditions: {
					base: "ju367ve6",
					hover: "ju367ve7",
					active: "ju367ve8"
				},
				defaultClass: "ju367ve6"
			},
			profileForeground: {
				conditions: {
					base: "ju367ve9",
					hover: "ju367vea",
					active: "ju367veb"
				},
				defaultClass: "ju367ve9"
			},
			selectedOptionBorder: {
				conditions: {
					base: "ju367vec",
					hover: "ju367ved",
					active: "ju367vee"
				},
				defaultClass: "ju367vec"
			},
			standby: {
				conditions: {
					base: "ju367vef",
					hover: "ju367veg",
					active: "ju367veh"
				},
				defaultClass: "ju367vef"
			}
		} },
		boxShadow: { values: {
			connectButton: {
				conditions: {
					base: "ju367vei",
					hover: "ju367vej",
					active: "ju367vek"
				},
				defaultClass: "ju367vei"
			},
			dialog: {
				conditions: {
					base: "ju367vel",
					hover: "ju367vem",
					active: "ju367ven"
				},
				defaultClass: "ju367vel"
			},
			profileDetailsAction: {
				conditions: {
					base: "ju367veo",
					hover: "ju367vep",
					active: "ju367veq"
				},
				defaultClass: "ju367veo"
			},
			selectedOption: {
				conditions: {
					base: "ju367ver",
					hover: "ju367ves",
					active: "ju367vet"
				},
				defaultClass: "ju367ver"
			},
			selectedWallet: {
				conditions: {
					base: "ju367veu",
					hover: "ju367vev",
					active: "ju367vew"
				},
				defaultClass: "ju367veu"
			},
			walletLogo: {
				conditions: {
					base: "ju367vex",
					hover: "ju367vey",
					active: "ju367vez"
				},
				defaultClass: "ju367vex"
			}
		} },
		color: { values: {
			accentColor: {
				conditions: {
					base: "ju367vf0",
					hover: "ju367vf1",
					active: "ju367vf2"
				},
				defaultClass: "ju367vf0"
			},
			accentColorForeground: {
				conditions: {
					base: "ju367vf3",
					hover: "ju367vf4",
					active: "ju367vf5"
				},
				defaultClass: "ju367vf3"
			},
			actionButtonBorder: {
				conditions: {
					base: "ju367vf6",
					hover: "ju367vf7",
					active: "ju367vf8"
				},
				defaultClass: "ju367vf6"
			},
			actionButtonBorderMobile: {
				conditions: {
					base: "ju367vf9",
					hover: "ju367vfa",
					active: "ju367vfb"
				},
				defaultClass: "ju367vf9"
			},
			actionButtonSecondaryBackground: {
				conditions: {
					base: "ju367vfc",
					hover: "ju367vfd",
					active: "ju367vfe"
				},
				defaultClass: "ju367vfc"
			},
			closeButton: {
				conditions: {
					base: "ju367vff",
					hover: "ju367vfg",
					active: "ju367vfh"
				},
				defaultClass: "ju367vff"
			},
			closeButtonBackground: {
				conditions: {
					base: "ju367vfi",
					hover: "ju367vfj",
					active: "ju367vfk"
				},
				defaultClass: "ju367vfi"
			},
			connectButtonBackground: {
				conditions: {
					base: "ju367vfl",
					hover: "ju367vfm",
					active: "ju367vfn"
				},
				defaultClass: "ju367vfl"
			},
			connectButtonBackgroundError: {
				conditions: {
					base: "ju367vfo",
					hover: "ju367vfp",
					active: "ju367vfq"
				},
				defaultClass: "ju367vfo"
			},
			connectButtonInnerBackground: {
				conditions: {
					base: "ju367vfr",
					hover: "ju367vfs",
					active: "ju367vft"
				},
				defaultClass: "ju367vfr"
			},
			connectButtonText: {
				conditions: {
					base: "ju367vfu",
					hover: "ju367vfv",
					active: "ju367vfw"
				},
				defaultClass: "ju367vfu"
			},
			connectButtonTextError: {
				conditions: {
					base: "ju367vfx",
					hover: "ju367vfy",
					active: "ju367vfz"
				},
				defaultClass: "ju367vfx"
			},
			connectionIndicator: {
				conditions: {
					base: "ju367vg0",
					hover: "ju367vg1",
					active: "ju367vg2"
				},
				defaultClass: "ju367vg0"
			},
			downloadBottomCardBackground: {
				conditions: {
					base: "ju367vg3",
					hover: "ju367vg4",
					active: "ju367vg5"
				},
				defaultClass: "ju367vg3"
			},
			downloadTopCardBackground: {
				conditions: {
					base: "ju367vg6",
					hover: "ju367vg7",
					active: "ju367vg8"
				},
				defaultClass: "ju367vg6"
			},
			error: {
				conditions: {
					base: "ju367vg9",
					hover: "ju367vga",
					active: "ju367vgb"
				},
				defaultClass: "ju367vg9"
			},
			generalBorder: {
				conditions: {
					base: "ju367vgc",
					hover: "ju367vgd",
					active: "ju367vge"
				},
				defaultClass: "ju367vgc"
			},
			generalBorderDim: {
				conditions: {
					base: "ju367vgf",
					hover: "ju367vgg",
					active: "ju367vgh"
				},
				defaultClass: "ju367vgf"
			},
			menuItemBackground: {
				conditions: {
					base: "ju367vgi",
					hover: "ju367vgj",
					active: "ju367vgk"
				},
				defaultClass: "ju367vgi"
			},
			modalBackdrop: {
				conditions: {
					base: "ju367vgl",
					hover: "ju367vgm",
					active: "ju367vgn"
				},
				defaultClass: "ju367vgl"
			},
			modalBackground: {
				conditions: {
					base: "ju367vgo",
					hover: "ju367vgp",
					active: "ju367vgq"
				},
				defaultClass: "ju367vgo"
			},
			modalBorder: {
				conditions: {
					base: "ju367vgr",
					hover: "ju367vgs",
					active: "ju367vgt"
				},
				defaultClass: "ju367vgr"
			},
			modalText: {
				conditions: {
					base: "ju367vgu",
					hover: "ju367vgv",
					active: "ju367vgw"
				},
				defaultClass: "ju367vgu"
			},
			modalTextDim: {
				conditions: {
					base: "ju367vgx",
					hover: "ju367vgy",
					active: "ju367vgz"
				},
				defaultClass: "ju367vgx"
			},
			modalTextSecondary: {
				conditions: {
					base: "ju367vh0",
					hover: "ju367vh1",
					active: "ju367vh2"
				},
				defaultClass: "ju367vh0"
			},
			profileAction: {
				conditions: {
					base: "ju367vh3",
					hover: "ju367vh4",
					active: "ju367vh5"
				},
				defaultClass: "ju367vh3"
			},
			profileActionHover: {
				conditions: {
					base: "ju367vh6",
					hover: "ju367vh7",
					active: "ju367vh8"
				},
				defaultClass: "ju367vh6"
			},
			profileForeground: {
				conditions: {
					base: "ju367vh9",
					hover: "ju367vha",
					active: "ju367vhb"
				},
				defaultClass: "ju367vh9"
			},
			selectedOptionBorder: {
				conditions: {
					base: "ju367vhc",
					hover: "ju367vhd",
					active: "ju367vhe"
				},
				defaultClass: "ju367vhc"
			},
			standby: {
				conditions: {
					base: "ju367vhf",
					hover: "ju367vhg",
					active: "ju367vhh"
				},
				defaultClass: "ju367vhf"
			}
		} }
	}
}, {
	conditions: {
		defaultCondition: "smallScreen",
		conditionNames: ["smallScreen", "largeScreen"],
		responsiveArray: void 0
	},
	styles: {
		alignItems: { values: {
			"flex-start": {
				conditions: {
					smallScreen: "ju367v0",
					largeScreen: "ju367v1"
				},
				defaultClass: "ju367v0"
			},
			"flex-end": {
				conditions: {
					smallScreen: "ju367v2",
					largeScreen: "ju367v3"
				},
				defaultClass: "ju367v2"
			},
			center: {
				conditions: {
					smallScreen: "ju367v4",
					largeScreen: "ju367v5"
				},
				defaultClass: "ju367v4"
			}
		} },
		display: { values: {
			none: {
				conditions: {
					smallScreen: "ju367v6",
					largeScreen: "ju367v7"
				},
				defaultClass: "ju367v6"
			},
			block: {
				conditions: {
					smallScreen: "ju367v8",
					largeScreen: "ju367v9"
				},
				defaultClass: "ju367v8"
			},
			flex: {
				conditions: {
					smallScreen: "ju367va",
					largeScreen: "ju367vb"
				},
				defaultClass: "ju367va"
			},
			inline: {
				conditions: {
					smallScreen: "ju367vc",
					largeScreen: "ju367vd"
				},
				defaultClass: "ju367vc"
			}
		} }
	}
}, {
	conditions: void 0,
	styles: {
		margin: { mappings: [
			"marginTop",
			"marginBottom",
			"marginLeft",
			"marginRight"
		] },
		marginX: { mappings: ["marginLeft", "marginRight"] },
		marginY: { mappings: ["marginTop", "marginBottom"] },
		padding: { mappings: [
			"paddingTop",
			"paddingBottom",
			"paddingLeft",
			"paddingRight"
		] },
		paddingX: { mappings: ["paddingLeft", "paddingRight"] },
		paddingY: { mappings: ["paddingTop", "paddingBottom"] },
		alignSelf: { values: {
			"flex-start": { defaultClass: "ju367ve" },
			"flex-end": { defaultClass: "ju367vf" },
			center: { defaultClass: "ju367vg" }
		} },
		backgroundSize: { values: { cover: { defaultClass: "ju367vh" } } },
		borderRadius: { values: {
			"1": { defaultClass: "ju367vi" },
			"6": { defaultClass: "ju367vj" },
			"10": { defaultClass: "ju367vk" },
			"13": { defaultClass: "ju367vl" },
			actionButton: { defaultClass: "ju367vm" },
			connectButton: { defaultClass: "ju367vn" },
			menuButton: { defaultClass: "ju367vo" },
			modal: { defaultClass: "ju367vp" },
			modalMobile: { defaultClass: "ju367vq" },
			"25%": { defaultClass: "ju367vr" },
			full: { defaultClass: "ju367vs" }
		} },
		borderStyle: { values: { solid: { defaultClass: "ju367vt" } } },
		borderWidth: { values: {
			"0": { defaultClass: "ju367vu" },
			"1": { defaultClass: "ju367vv" },
			"2": { defaultClass: "ju367vw" },
			"4": { defaultClass: "ju367vx" }
		} },
		cursor: { values: {
			pointer: { defaultClass: "ju367vy" },
			none: { defaultClass: "ju367vz" }
		} },
		pointerEvents: { values: {
			none: { defaultClass: "ju367v10" },
			all: { defaultClass: "ju367v11" }
		} },
		minHeight: { values: {
			"8": { defaultClass: "ju367v12" },
			"44": { defaultClass: "ju367v13" }
		} },
		flexDirection: { values: {
			row: { defaultClass: "ju367v14" },
			column: { defaultClass: "ju367v15" }
		} },
		fontFamily: { values: { body: { defaultClass: "ju367v16" } } },
		fontSize: { values: {
			"12": { defaultClass: "ju367v17" },
			"13": { defaultClass: "ju367v18" },
			"14": { defaultClass: "ju367v19" },
			"16": { defaultClass: "ju367v1a" },
			"18": { defaultClass: "ju367v1b" },
			"20": { defaultClass: "ju367v1c" },
			"23": { defaultClass: "ju367v1d" }
		} },
		fontWeight: { values: {
			regular: { defaultClass: "ju367v1e" },
			medium: { defaultClass: "ju367v1f" },
			semibold: { defaultClass: "ju367v1g" },
			bold: { defaultClass: "ju367v1h" },
			heavy: { defaultClass: "ju367v1i" }
		} },
		gap: { values: {
			"0": { defaultClass: "ju367v1j" },
			"1": { defaultClass: "ju367v1k" },
			"2": { defaultClass: "ju367v1l" },
			"3": { defaultClass: "ju367v1m" },
			"4": { defaultClass: "ju367v1n" },
			"5": { defaultClass: "ju367v1o" },
			"6": { defaultClass: "ju367v1p" },
			"8": { defaultClass: "ju367v1q" },
			"10": { defaultClass: "ju367v1r" },
			"12": { defaultClass: "ju367v1s" },
			"14": { defaultClass: "ju367v1t" },
			"16": { defaultClass: "ju367v1u" },
			"18": { defaultClass: "ju367v1v" },
			"20": { defaultClass: "ju367v1w" },
			"24": { defaultClass: "ju367v1x" },
			"28": { defaultClass: "ju367v1y" },
			"32": { defaultClass: "ju367v1z" },
			"36": { defaultClass: "ju367v20" },
			"44": { defaultClass: "ju367v21" },
			"64": { defaultClass: "ju367v22" },
			"-1": { defaultClass: "ju367v23" }
		} },
		height: { values: {
			"1": { defaultClass: "ju367v24" },
			"2": { defaultClass: "ju367v25" },
			"4": { defaultClass: "ju367v26" },
			"8": { defaultClass: "ju367v27" },
			"12": { defaultClass: "ju367v28" },
			"20": { defaultClass: "ju367v29" },
			"24": { defaultClass: "ju367v2a" },
			"28": { defaultClass: "ju367v2b" },
			"30": { defaultClass: "ju367v2c" },
			"32": { defaultClass: "ju367v2d" },
			"34": { defaultClass: "ju367v2e" },
			"36": { defaultClass: "ju367v2f" },
			"40": { defaultClass: "ju367v2g" },
			"44": { defaultClass: "ju367v2h" },
			"48": { defaultClass: "ju367v2i" },
			"54": { defaultClass: "ju367v2j" },
			"60": { defaultClass: "ju367v2k" },
			"200": { defaultClass: "ju367v2l" },
			full: { defaultClass: "ju367v2m" },
			max: { defaultClass: "ju367v2n" }
		} },
		justifyContent: { values: {
			"flex-start": { defaultClass: "ju367v2o" },
			"flex-end": { defaultClass: "ju367v2p" },
			center: { defaultClass: "ju367v2q" },
			"space-between": { defaultClass: "ju367v2r" },
			"space-around": { defaultClass: "ju367v2s" }
		} },
		textAlign: { values: {
			left: { defaultClass: "ju367v2t" },
			center: { defaultClass: "ju367v2u" },
			inherit: { defaultClass: "ju367v2v" }
		} },
		marginBottom: { values: {
			"0": { defaultClass: "ju367v2w" },
			"1": { defaultClass: "ju367v2x" },
			"2": { defaultClass: "ju367v2y" },
			"3": { defaultClass: "ju367v2z" },
			"4": { defaultClass: "ju367v30" },
			"5": { defaultClass: "ju367v31" },
			"6": { defaultClass: "ju367v32" },
			"8": { defaultClass: "ju367v33" },
			"10": { defaultClass: "ju367v34" },
			"12": { defaultClass: "ju367v35" },
			"14": { defaultClass: "ju367v36" },
			"16": { defaultClass: "ju367v37" },
			"18": { defaultClass: "ju367v38" },
			"20": { defaultClass: "ju367v39" },
			"24": { defaultClass: "ju367v3a" },
			"28": { defaultClass: "ju367v3b" },
			"32": { defaultClass: "ju367v3c" },
			"36": { defaultClass: "ju367v3d" },
			"44": { defaultClass: "ju367v3e" },
			"64": { defaultClass: "ju367v3f" },
			"-1": { defaultClass: "ju367v3g" }
		} },
		marginLeft: { values: {
			"0": { defaultClass: "ju367v3h" },
			"1": { defaultClass: "ju367v3i" },
			"2": { defaultClass: "ju367v3j" },
			"3": { defaultClass: "ju367v3k" },
			"4": { defaultClass: "ju367v3l" },
			"5": { defaultClass: "ju367v3m" },
			"6": { defaultClass: "ju367v3n" },
			"8": { defaultClass: "ju367v3o" },
			"10": { defaultClass: "ju367v3p" },
			"12": { defaultClass: "ju367v3q" },
			"14": { defaultClass: "ju367v3r" },
			"16": { defaultClass: "ju367v3s" },
			"18": { defaultClass: "ju367v3t" },
			"20": { defaultClass: "ju367v3u" },
			"24": { defaultClass: "ju367v3v" },
			"28": { defaultClass: "ju367v3w" },
			"32": { defaultClass: "ju367v3x" },
			"36": { defaultClass: "ju367v3y" },
			"44": { defaultClass: "ju367v3z" },
			"64": { defaultClass: "ju367v40" },
			"-1": { defaultClass: "ju367v41" }
		} },
		marginRight: { values: {
			"0": { defaultClass: "ju367v42" },
			"1": { defaultClass: "ju367v43" },
			"2": { defaultClass: "ju367v44" },
			"3": { defaultClass: "ju367v45" },
			"4": { defaultClass: "ju367v46" },
			"5": { defaultClass: "ju367v47" },
			"6": { defaultClass: "ju367v48" },
			"8": { defaultClass: "ju367v49" },
			"10": { defaultClass: "ju367v4a" },
			"12": { defaultClass: "ju367v4b" },
			"14": { defaultClass: "ju367v4c" },
			"16": { defaultClass: "ju367v4d" },
			"18": { defaultClass: "ju367v4e" },
			"20": { defaultClass: "ju367v4f" },
			"24": { defaultClass: "ju367v4g" },
			"28": { defaultClass: "ju367v4h" },
			"32": { defaultClass: "ju367v4i" },
			"36": { defaultClass: "ju367v4j" },
			"44": { defaultClass: "ju367v4k" },
			"64": { defaultClass: "ju367v4l" },
			"-1": { defaultClass: "ju367v4m" }
		} },
		marginTop: { values: {
			"0": { defaultClass: "ju367v4n" },
			"1": { defaultClass: "ju367v4o" },
			"2": { defaultClass: "ju367v4p" },
			"3": { defaultClass: "ju367v4q" },
			"4": { defaultClass: "ju367v4r" },
			"5": { defaultClass: "ju367v4s" },
			"6": { defaultClass: "ju367v4t" },
			"8": { defaultClass: "ju367v4u" },
			"10": { defaultClass: "ju367v4v" },
			"12": { defaultClass: "ju367v4w" },
			"14": { defaultClass: "ju367v4x" },
			"16": { defaultClass: "ju367v4y" },
			"18": { defaultClass: "ju367v4z" },
			"20": { defaultClass: "ju367v50" },
			"24": { defaultClass: "ju367v51" },
			"28": { defaultClass: "ju367v52" },
			"32": { defaultClass: "ju367v53" },
			"36": { defaultClass: "ju367v54" },
			"44": { defaultClass: "ju367v55" },
			"64": { defaultClass: "ju367v56" },
			"-1": { defaultClass: "ju367v57" }
		} },
		maxWidth: { values: {
			"1": { defaultClass: "ju367v58" },
			"2": { defaultClass: "ju367v59" },
			"4": { defaultClass: "ju367v5a" },
			"8": { defaultClass: "ju367v5b" },
			"12": { defaultClass: "ju367v5c" },
			"20": { defaultClass: "ju367v5d" },
			"24": { defaultClass: "ju367v5e" },
			"28": { defaultClass: "ju367v5f" },
			"30": { defaultClass: "ju367v5g" },
			"32": { defaultClass: "ju367v5h" },
			"34": { defaultClass: "ju367v5i" },
			"36": { defaultClass: "ju367v5j" },
			"40": { defaultClass: "ju367v5k" },
			"44": { defaultClass: "ju367v5l" },
			"48": { defaultClass: "ju367v5m" },
			"54": { defaultClass: "ju367v5n" },
			"60": { defaultClass: "ju367v5o" },
			"200": { defaultClass: "ju367v5p" },
			full: { defaultClass: "ju367v5q" },
			max: { defaultClass: "ju367v5r" }
		} },
		minWidth: { values: {
			"1": { defaultClass: "ju367v5s" },
			"2": { defaultClass: "ju367v5t" },
			"4": { defaultClass: "ju367v5u" },
			"8": { defaultClass: "ju367v5v" },
			"12": { defaultClass: "ju367v5w" },
			"20": { defaultClass: "ju367v5x" },
			"24": { defaultClass: "ju367v5y" },
			"28": { defaultClass: "ju367v5z" },
			"30": { defaultClass: "ju367v60" },
			"32": { defaultClass: "ju367v61" },
			"34": { defaultClass: "ju367v62" },
			"36": { defaultClass: "ju367v63" },
			"40": { defaultClass: "ju367v64" },
			"44": { defaultClass: "ju367v65" },
			"48": { defaultClass: "ju367v66" },
			"54": { defaultClass: "ju367v67" },
			"60": { defaultClass: "ju367v68" },
			"200": { defaultClass: "ju367v69" },
			full: { defaultClass: "ju367v6a" },
			max: { defaultClass: "ju367v6b" }
		} },
		overflow: { values: { hidden: { defaultClass: "ju367v6c" } } },
		paddingBottom: { values: {
			"0": { defaultClass: "ju367v6d" },
			"1": { defaultClass: "ju367v6e" },
			"2": { defaultClass: "ju367v6f" },
			"3": { defaultClass: "ju367v6g" },
			"4": { defaultClass: "ju367v6h" },
			"5": { defaultClass: "ju367v6i" },
			"6": { defaultClass: "ju367v6j" },
			"8": { defaultClass: "ju367v6k" },
			"10": { defaultClass: "ju367v6l" },
			"12": { defaultClass: "ju367v6m" },
			"14": { defaultClass: "ju367v6n" },
			"16": { defaultClass: "ju367v6o" },
			"18": { defaultClass: "ju367v6p" },
			"20": { defaultClass: "ju367v6q" },
			"24": { defaultClass: "ju367v6r" },
			"28": { defaultClass: "ju367v6s" },
			"32": { defaultClass: "ju367v6t" },
			"36": { defaultClass: "ju367v6u" },
			"44": { defaultClass: "ju367v6v" },
			"64": { defaultClass: "ju367v6w" },
			"-1": { defaultClass: "ju367v6x" }
		} },
		paddingLeft: { values: {
			"0": { defaultClass: "ju367v6y" },
			"1": { defaultClass: "ju367v6z" },
			"2": { defaultClass: "ju367v70" },
			"3": { defaultClass: "ju367v71" },
			"4": { defaultClass: "ju367v72" },
			"5": { defaultClass: "ju367v73" },
			"6": { defaultClass: "ju367v74" },
			"8": { defaultClass: "ju367v75" },
			"10": { defaultClass: "ju367v76" },
			"12": { defaultClass: "ju367v77" },
			"14": { defaultClass: "ju367v78" },
			"16": { defaultClass: "ju367v79" },
			"18": { defaultClass: "ju367v7a" },
			"20": { defaultClass: "ju367v7b" },
			"24": { defaultClass: "ju367v7c" },
			"28": { defaultClass: "ju367v7d" },
			"32": { defaultClass: "ju367v7e" },
			"36": { defaultClass: "ju367v7f" },
			"44": { defaultClass: "ju367v7g" },
			"64": { defaultClass: "ju367v7h" },
			"-1": { defaultClass: "ju367v7i" }
		} },
		paddingRight: { values: {
			"0": { defaultClass: "ju367v7j" },
			"1": { defaultClass: "ju367v7k" },
			"2": { defaultClass: "ju367v7l" },
			"3": { defaultClass: "ju367v7m" },
			"4": { defaultClass: "ju367v7n" },
			"5": { defaultClass: "ju367v7o" },
			"6": { defaultClass: "ju367v7p" },
			"8": { defaultClass: "ju367v7q" },
			"10": { defaultClass: "ju367v7r" },
			"12": { defaultClass: "ju367v7s" },
			"14": { defaultClass: "ju367v7t" },
			"16": { defaultClass: "ju367v7u" },
			"18": { defaultClass: "ju367v7v" },
			"20": { defaultClass: "ju367v7w" },
			"24": { defaultClass: "ju367v7x" },
			"28": { defaultClass: "ju367v7y" },
			"32": { defaultClass: "ju367v7z" },
			"36": { defaultClass: "ju367v80" },
			"44": { defaultClass: "ju367v81" },
			"64": { defaultClass: "ju367v82" },
			"-1": { defaultClass: "ju367v83" }
		} },
		paddingTop: { values: {
			"0": { defaultClass: "ju367v84" },
			"1": { defaultClass: "ju367v85" },
			"2": { defaultClass: "ju367v86" },
			"3": { defaultClass: "ju367v87" },
			"4": { defaultClass: "ju367v88" },
			"5": { defaultClass: "ju367v89" },
			"6": { defaultClass: "ju367v8a" },
			"8": { defaultClass: "ju367v8b" },
			"10": { defaultClass: "ju367v8c" },
			"12": { defaultClass: "ju367v8d" },
			"14": { defaultClass: "ju367v8e" },
			"16": { defaultClass: "ju367v8f" },
			"18": { defaultClass: "ju367v8g" },
			"20": { defaultClass: "ju367v8h" },
			"24": { defaultClass: "ju367v8i" },
			"28": { defaultClass: "ju367v8j" },
			"32": { defaultClass: "ju367v8k" },
			"36": { defaultClass: "ju367v8l" },
			"44": { defaultClass: "ju367v8m" },
			"64": { defaultClass: "ju367v8n" },
			"-1": { defaultClass: "ju367v8o" }
		} },
		position: { values: {
			absolute: { defaultClass: "ju367v8p" },
			fixed: { defaultClass: "ju367v8q" },
			relative: { defaultClass: "ju367v8r" }
		} },
		WebkitUserSelect: { values: { none: { defaultClass: "ju367v8s" } } },
		right: { values: { "0": { defaultClass: "ju367v8t" } } },
		transition: { values: {
			"default": { defaultClass: "ju367v8u" },
			transform: { defaultClass: "ju367v8v" }
		} },
		userSelect: { values: { none: { defaultClass: "ju367v8w" } } },
		width: { values: {
			"1": { defaultClass: "ju367v8x" },
			"2": { defaultClass: "ju367v8y" },
			"4": { defaultClass: "ju367v8z" },
			"8": { defaultClass: "ju367v90" },
			"12": { defaultClass: "ju367v91" },
			"20": { defaultClass: "ju367v92" },
			"24": { defaultClass: "ju367v93" },
			"28": { defaultClass: "ju367v94" },
			"30": { defaultClass: "ju367v95" },
			"32": { defaultClass: "ju367v96" },
			"34": { defaultClass: "ju367v97" },
			"36": { defaultClass: "ju367v98" },
			"40": { defaultClass: "ju367v99" },
			"44": { defaultClass: "ju367v9a" },
			"48": { defaultClass: "ju367v9b" },
			"54": { defaultClass: "ju367v9c" },
			"60": { defaultClass: "ju367v9d" },
			"200": { defaultClass: "ju367v9e" },
			full: { defaultClass: "ju367v9f" },
			max: { defaultClass: "ju367v9g" }
		} },
		backdropFilter: { values: { modalOverlay: { defaultClass: "ju367v9h" } } }
	}
});
var themeVars = {
	colors: {
		accentColor: "var(--rk-colors-accentColor)",
		accentColorForeground: "var(--rk-colors-accentColorForeground)",
		actionButtonBorder: "var(--rk-colors-actionButtonBorder)",
		actionButtonBorderMobile: "var(--rk-colors-actionButtonBorderMobile)",
		actionButtonSecondaryBackground: "var(--rk-colors-actionButtonSecondaryBackground)",
		closeButton: "var(--rk-colors-closeButton)",
		closeButtonBackground: "var(--rk-colors-closeButtonBackground)",
		connectButtonBackground: "var(--rk-colors-connectButtonBackground)",
		connectButtonBackgroundError: "var(--rk-colors-connectButtonBackgroundError)",
		connectButtonInnerBackground: "var(--rk-colors-connectButtonInnerBackground)",
		connectButtonText: "var(--rk-colors-connectButtonText)",
		connectButtonTextError: "var(--rk-colors-connectButtonTextError)",
		connectionIndicator: "var(--rk-colors-connectionIndicator)",
		downloadBottomCardBackground: "var(--rk-colors-downloadBottomCardBackground)",
		downloadTopCardBackground: "var(--rk-colors-downloadTopCardBackground)",
		error: "var(--rk-colors-error)",
		generalBorder: "var(--rk-colors-generalBorder)",
		generalBorderDim: "var(--rk-colors-generalBorderDim)",
		menuItemBackground: "var(--rk-colors-menuItemBackground)",
		modalBackdrop: "var(--rk-colors-modalBackdrop)",
		modalBackground: "var(--rk-colors-modalBackground)",
		modalBorder: "var(--rk-colors-modalBorder)",
		modalText: "var(--rk-colors-modalText)",
		modalTextDim: "var(--rk-colors-modalTextDim)",
		modalTextSecondary: "var(--rk-colors-modalTextSecondary)",
		profileAction: "var(--rk-colors-profileAction)",
		profileActionHover: "var(--rk-colors-profileActionHover)",
		profileForeground: "var(--rk-colors-profileForeground)",
		selectedOptionBorder: "var(--rk-colors-selectedOptionBorder)",
		standby: "var(--rk-colors-standby)"
	},
	fonts: { body: "var(--rk-fonts-body)" },
	radii: {
		actionButton: "var(--rk-radii-actionButton)",
		connectButton: "var(--rk-radii-connectButton)",
		menuButton: "var(--rk-radii-menuButton)",
		modal: "var(--rk-radii-modal)",
		modalMobile: "var(--rk-radii-modalMobile)"
	},
	shadows: {
		connectButton: "var(--rk-shadows-connectButton)",
		dialog: "var(--rk-shadows-dialog)",
		profileDetailsAction: "var(--rk-shadows-profileDetailsAction)",
		selectedOption: "var(--rk-shadows-selectedOption)",
		selectedWallet: "var(--rk-shadows-selectedWallet)",
		walletLogo: "var(--rk-shadows-walletLogo)"
	},
	blurs: { modalOverlay: "var(--rk-blurs-modalOverlay)" }
};
var active = {
	shrink: "_12cbo8i6",
	shrinkSm: "_12cbo8i7"
};
var base = "_12cbo8i3 ju367v8r";
var hover = {
	grow: "_12cbo8i4",
	growLg: "_12cbo8i5"
};
function touchableStyles({ active: active2, hover: hover2 }) {
	return [
		base,
		hover2 && hover[hover2],
		active[active2]
	];
}
function createAuthenticationAdapter(adapter) {
	return adapter;
}
var AuthenticationContext = (0, import_react.createContext)(null);
function RainbowKitAuthenticationProvider({ adapter, children, enabled = true, status }) {
	const { connector } = useConnection();
	const [currentConnectorUid, setCurrentConnectorUid] = (0, import_react.useState)();
	useConnectionEffect({ onDisconnect: () => {
		adapter.signOut();
		setCurrentConnectorUid(void 0);
	} });
	const handleChangedAccount = (data) => {
		if (data.accounts) {
			setCurrentConnectorUid(void 0);
			adapter.signOut();
		}
	};
	(0, import_react.useEffect)(() => {
		if (typeof connector?.emitter?.on === "function" && status === "authenticated") {
			setCurrentConnectorUid(connector?.uid);
			connector.emitter.on("change", handleChangedAccount);
			return () => {
				connector.emitter.off("change", handleChangedAccount);
			};
		}
	}, [connector?.emitter, status]);
	(0, import_react.useEffect)(() => {
		if (currentConnectorUid && typeof connector?.emitter?.on === "function" && status === "authenticated") {
			if (connector?.uid !== currentConnectorUid) {
				setCurrentConnectorUid(void 0);
				adapter.signOut();
			}
		}
	}, [
		connector?.emitter,
		currentConnectorUid,
		status
	]);
	return /* @__PURE__ */ import_react.createElement(AuthenticationContext.Provider, { value: (0, import_react.useMemo)(() => enabled ? {
		adapter,
		status
	} : null, [
		enabled,
		adapter,
		status
	]) }, children);
}
function useAuthenticationAdapter() {
	const { adapter } = (0, import_react.useContext)(AuthenticationContext) ?? {};
	if (!adapter) throw new Error("No authentication adapter found");
	return adapter;
}
function useAuthenticationStatus() {
	return (0, import_react.useContext)(AuthenticationContext)?.status ?? null;
}
function useConnectionStatus() {
	const authenticationStatus = useAuthenticationStatus();
	const { isConnected } = useConnection();
	if (!isConnected) return "disconnected";
	if (!authenticationStatus) return "connected";
	if (authenticationStatus === "loading" || authenticationStatus === "unauthenticated") return authenticationStatus;
	return "connected";
}
function isAndroid() {
	return typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
}
function isSmallIOS() {
	return typeof navigator !== "undefined" && /iPhone|iPod/.test(navigator.userAgent);
}
function isLargeIOS() {
	return typeof navigator !== "undefined" && (/iPad/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}
function isIOS() {
	return isSmallIOS() || isLargeIOS();
}
function isMobile() {
	return isAndroid() || isIOS();
}
var base2 = "iekbcc0";
var element = {
	a: "iekbcca",
	blockquote: "iekbcc2",
	button: "iekbcc9",
	input: "iekbcc8 iekbcc5 iekbcc4",
	mark: "iekbcc6",
	ol: "iekbcc1",
	q: "iekbcc2",
	select: "iekbcc7 iekbcc5 iekbcc4",
	table: "iekbcc3",
	textarea: "iekbcc5 iekbcc4",
	ul: "iekbcc1"
};
var atoms = ({ reset, ...rest }) => {
	if (!reset) return sprinkles(rest);
	const elementReset = element[reset];
	return clsx(base2, elementReset, sprinkles(rest));
};
var Box = import_react.forwardRef(({ as = "div", className, testId, ...props }, ref) => {
	const atomProps = {};
	const nativeProps = {};
	for (const key in props) if (sprinkles.properties.has(key)) atomProps[key] = props[key];
	else nativeProps[key] = props[key];
	const atomicClasses = atoms({
		reset: typeof as === "string" ? as : "div",
		...atomProps
	});
	return import_react.createElement(as, {
		className: clsx(atomicClasses, className),
		...nativeProps,
		"data-testid": testId ? `rk-${testId.replace(/^rk-/, "")}` : void 0,
		ref
	});
});
Box.displayName = "Box";
var cachedUrls = /* @__PURE__ */ new Map();
var cachedRequestPromises = /* @__PURE__ */ new Map();
async function loadAsyncImage(asyncImage) {
	const cachedRequestPromise = cachedRequestPromises.get(asyncImage);
	if (cachedRequestPromise) return cachedRequestPromise;
	const load = async () => asyncImage().then(async (url) => {
		cachedUrls.set(asyncImage, url);
		return url;
	});
	const requestPromise = load().catch((_err) => {
		return load().catch((_err2) => {
			cachedRequestPromises.delete(asyncImage);
		});
	});
	cachedRequestPromises.set(asyncImage, requestPromise);
	return requestPromise;
}
async function loadImages(...urls) {
	return await Promise.all(urls.map((url) => typeof url === "function" ? loadAsyncImage(url) : url));
}
function useForceUpdate() {
	const [, forceUpdate] = (0, import_react.useReducer)((x) => x + 1, 0);
	return forceUpdate;
}
function useAsyncImage(url) {
	const cachedUrl = typeof url === "function" ? cachedUrls.get(url) : void 0;
	const forceUpdate = useForceUpdate();
	(0, import_react.useEffect)(() => {
		if (typeof url === "function" && !cachedUrl) loadAsyncImage(url).then(forceUpdate);
	}, [
		url,
		cachedUrl,
		forceUpdate
	]);
	return typeof url === "function" ? cachedUrl : url;
}
function AsyncImage({ alt, background, borderColor, borderRadius, useAsImage, boxShadow, height, src: srcProp, width, testId }) {
	const ios = isIOS();
	const src7 = useAsyncImage(srcProp);
	const isRemoteImage = src7 && /^http/.test(src7);
	const [isRemoteImageLoaded, setRemoteImageLoaded] = (0, import_react.useReducer)(() => true, false);
	return /* @__PURE__ */ import_react.createElement(Box, {
		"aria-label": alt,
		borderRadius,
		boxShadow,
		height: typeof height === "string" ? height : void 0,
		overflow: "hidden",
		position: "relative",
		role: "img",
		style: {
			background,
			height: typeof height === "number" ? height : void 0,
			width: typeof width === "number" ? width : void 0
		},
		width: typeof width === "string" ? width : void 0,
		testId
	}, /* @__PURE__ */ import_react.createElement(Box, {
		...isRemoteImage ? {
			"aria-hidden": true,
			as: "img",
			onLoad: setRemoteImageLoaded,
			src: src7
		} : {
			"aria-hidden": true,
			as: "img",
			src: src7
		},
		height: "full",
		position: "absolute",
		...ios ? { WebkitUserSelect: "none" } : {},
		style: {
			WebkitTouchCallout: "none",
			transition: "opacity .15s linear",
			userSelect: "none",
			...!useAsImage && isRemoteImage ? { opacity: isRemoteImageLoaded ? 1 : 0 } : {}
		},
		width: "full"
	}), borderColor ? /* @__PURE__ */ import_react.createElement(Box, {
		...typeof borderColor === "object" && "custom" in borderColor ? { style: { borderColor: borderColor.custom } } : { borderColor },
		borderRadius,
		borderStyle: "solid",
		borderWidth: "1",
		height: "full",
		position: "relative",
		width: "full"
	}) : null);
}
var SpinnerIconClassName = "_1luule42";
var SpinnerIconPathClassName = "_1luule43";
var useRandomId = (prefix) => (0, import_react.useMemo)(() => `${prefix}_${Math.round(Math.random() * 1e9)}`, [prefix]);
var SpinnerIcon = ({ height = 21, width = 21 }) => {
	const id = useRandomId("spinner");
	return /* @__PURE__ */ import_react.createElement("svg", {
		className: SpinnerIconClassName,
		fill: "none",
		height,
		viewBox: "0 0 21 21",
		width,
		xmlns: "http://www.w3.org/2000/svg"
	}, /* @__PURE__ */ import_react.createElement("title", null, "Loading"), /* @__PURE__ */ import_react.createElement("clipPath", { id }, /* @__PURE__ */ import_react.createElement("path", { d: "M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C11.3284 18 12 18.6716 12 19.5C12 20.3284 11.3284 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 11.3284 20.3284 12 19.5 12C18.6716 12 18 11.3284 18 10.5C18 6.35786 14.6421 3 10.5 3Z" })), /* @__PURE__ */ import_react.createElement("foreignObject", {
		clipPath: `url(#${id})`,
		height: "21",
		width: "21",
		x: "0",
		y: "0"
	}, /* @__PURE__ */ import_react.createElement("div", { className: SpinnerIconPathClassName })));
};
var colors = [
	"#FC5C54",
	"#FFD95A",
	"#E95D72",
	"#6A87C8",
	"#5FD0F3",
	"#75C06B",
	"#FFDD86",
	"#5FC6D4",
	"#FF949A",
	"#FF8024",
	"#9BA1A4",
	"#EC66FF",
	"#FF8CBC",
	"#FF9A23",
	"#C5DADB",
	"#A8CE63",
	"#71ABFF",
	"#FFE279",
	"#B6B1B6",
	"#FF6780",
	"#A575FF",
	"#4D82FF",
	"#FFB35A"
];
var avatars = [
	{
		color: colors[0],
		emoji: "🌶"
	},
	{
		color: colors[1],
		emoji: "🤑"
	},
	{
		color: colors[2],
		emoji: "🐙"
	},
	{
		color: colors[3],
		emoji: "🫐"
	},
	{
		color: colors[4],
		emoji: "🐳"
	},
	{
		color: colors[0],
		emoji: "🤶"
	},
	{
		color: colors[5],
		emoji: "🌲"
	},
	{
		color: colors[6],
		emoji: "🌞"
	},
	{
		color: colors[7],
		emoji: "🐒"
	},
	{
		color: colors[8],
		emoji: "🐵"
	},
	{
		color: colors[9],
		emoji: "🦊"
	},
	{
		color: colors[10],
		emoji: "🐼"
	},
	{
		color: colors[11],
		emoji: "🦄"
	},
	{
		color: colors[12],
		emoji: "🐷"
	},
	{
		color: colors[13],
		emoji: "🐧"
	},
	{
		color: colors[8],
		emoji: "🦩"
	},
	{
		color: colors[14],
		emoji: "👽"
	},
	{
		color: colors[0],
		emoji: "🎈"
	},
	{
		color: colors[8],
		emoji: "🍉"
	},
	{
		color: colors[1],
		emoji: "🎉"
	},
	{
		color: colors[15],
		emoji: "🐲"
	},
	{
		color: colors[16],
		emoji: "🌎"
	},
	{
		color: colors[17],
		emoji: "🍊"
	},
	{
		color: colors[18],
		emoji: "🐭"
	},
	{
		color: colors[19],
		emoji: "🍣"
	},
	{
		color: colors[1],
		emoji: "🐥"
	},
	{
		color: colors[20],
		emoji: "👾"
	},
	{
		color: colors[15],
		emoji: "🥦"
	},
	{
		color: colors[0],
		emoji: "👹"
	},
	{
		color: colors[17],
		emoji: "🙀"
	},
	{
		color: colors[4],
		emoji: "⛱"
	},
	{
		color: colors[21],
		emoji: "⛵️"
	},
	{
		color: colors[17],
		emoji: "🥳"
	},
	{
		color: colors[8],
		emoji: "🤯"
	},
	{
		color: colors[22],
		emoji: "🤠"
	}
];
function hashCode(text) {
	let hash = 0;
	if (text.length === 0) return hash;
	for (let i = 0; i < text.length; i++) {
		const chr = text.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0;
	}
	return hash;
}
function emojiAvatarForAddress(address) {
	return avatars[Math.abs(hashCode((typeof address === "string" ? address : "").toLowerCase()) % avatars.length) ?? 0];
}
var EmojiAvatar = ({ address, ensImage, size }) => {
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (ensImage) {
			const img = new Image();
			img.src = ensImage;
			img.onload = () => setLoaded(true);
		}
	}, [ensImage]);
	const { color: backgroundColor, emoji } = (0, import_react.useMemo)(() => emojiAvatarForAddress(address), [address]);
	return ensImage ? loaded ? /* @__PURE__ */ import_react.createElement(Box, {
		backgroundSize: "cover",
		borderRadius: "full",
		position: "absolute",
		style: {
			backgroundImage: `url(${ensImage})`,
			backgroundPosition: "center",
			height: size,
			width: size
		}
	}) : /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		backgroundSize: "cover",
		borderRadius: "full",
		color: "modalText",
		display: "flex",
		justifyContent: "center",
		position: "absolute",
		style: {
			height: size,
			width: size
		}
	}, /* @__PURE__ */ import_react.createElement(SpinnerIcon, null)) : /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
		overflow: "hidden",
		style: {
			...!ensImage && { backgroundColor },
			height: size,
			width: size
		}
	}, emoji);
};
var defaultAvatar = EmojiAvatar;
var AvatarContext = (0, import_react.createContext)(defaultAvatar);
function Avatar({ address, imageUrl, loading, size }) {
	const AvatarComponent = (0, import_react.useContext)(AvatarContext);
	return /* @__PURE__ */ import_react.createElement(Box, {
		"aria-hidden": true,
		borderRadius: "full",
		overflow: "hidden",
		position: "relative",
		style: {
			height: `${size}px`,
			width: `${size}px`
		},
		userSelect: "none"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		borderRadius: "full",
		display: "flex",
		justifyContent: "center",
		overflow: "hidden",
		position: "absolute",
		style: {
			fontSize: `${Math.round(size * .55)}px`,
			height: `${size}px`,
			transform: loading ? "scale(0.72)" : void 0,
			transition: ".25s ease",
			transitionDelay: loading ? void 0 : ".1s",
			width: `${size}px`,
			willChange: "transform"
		},
		userSelect: "none"
	}, /* @__PURE__ */ import_react.createElement(AvatarComponent, {
		address,
		ensImage: imageUrl,
		size
	})), loading && /* @__PURE__ */ import_react.createElement(Box, {
		color: "accentColor",
		display: "flex",
		height: "full",
		position: "absolute",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(SpinnerIcon, {
		height: "100%",
		width: "100%"
	})));
}
var DropdownIcon = () => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: "7",
	width: "14",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Dropdown"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M12.75 1.54001L8.51647 5.0038C7.77974 5.60658 6.72026 5.60658 5.98352 5.0038L1.75 1.54001",
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "2.5",
	xmlns: "http://www.w3.org/2000/svg"
}));
var defaultOptions = {
	defaultLocale: "en",
	locale: "en"
};
var I18n = class {
	constructor(localeTranslations) {
		this.listeners = /* @__PURE__ */ new Set();
		this.defaultLocale = defaultOptions.defaultLocale;
		this.enableFallback = false;
		this.locale = defaultOptions.locale;
		this.cachedLocales = [];
		this.translations = {};
		for (const [locale, translation] of Object.entries(localeTranslations)) {
			this.cachedLocales = [...this.cachedLocales, locale];
			this.translations = {
				...this.translations,
				...this.flattenTranslation(translation, locale)
			};
		}
	}
	missingMessage(key) {
		return `[missing: "${this.locale}.${key}" translation]`;
	}
	flattenTranslation(translationObject, locale) {
		const result = {};
		const flatten = (currentTranslationObj, parentKey) => {
			for (const key of Object.keys(currentTranslationObj)) {
				const newKey = `${parentKey}.${key}`;
				const currentValue = currentTranslationObj[key];
				if (typeof currentValue === "object" && currentValue !== null) flatten(currentValue, newKey);
				else result[newKey] = currentValue;
			}
		};
		flatten(translationObject, locale);
		return result;
	}
	translateWithReplacements(translation, replacements = {}) {
		let translatedString = translation;
		for (const placeholder in replacements) {
			const replacementValue = replacements[placeholder];
			translatedString = translatedString.replace(`%{${placeholder}}`, replacementValue);
		}
		return translatedString;
	}
	t(key, replacements, options) {
		const translationKey = `${this.locale}.${key}`;
		const translation = this.translations[translationKey];
		if (!translation) {
			if (this.enableFallback) {
				const fallbackTranslationKey = `${this.defaultLocale}.${key}`;
				const fallbackTranslation = this.translations[fallbackTranslationKey];
				if (fallbackTranslation) return this.translateWithReplacements(fallbackTranslation, replacements);
			}
			if (options?.rawKeyIfTranslationMissing) return key;
			return this.missingMessage(key);
		}
		return this.translateWithReplacements(translation, replacements);
	}
	isLocaleCached(locale) {
		return this.cachedLocales.includes(locale);
	}
	updateLocale(locale) {
		this.locale = locale;
		this.notifyListeners();
	}
	setTranslations(locale, translations) {
		if (!this.isLocaleCached(locale)) {
			this.cachedLocales = [...this.cachedLocales, locale];
			this.translations = {
				...this.translations,
				...this.flattenTranslation(translations, locale)
			};
		}
		this.locale = locale;
		this.notifyListeners();
	}
	notifyListeners() {
		for (const listener of this.listeners) listener();
	}
	onChange(fn) {
		this.listeners.add(fn);
		return () => {
			this.listeners.delete(fn);
		};
	}
};
var i18n = new I18n({
	en: JSON.parse(en_US_default),
	"en-US": JSON.parse(en_US_default)
});
i18n.defaultLocale = "en-US";
i18n.locale = "en-US";
i18n.enableFallback = true;
var fetchTranslations = async (locale) => {
	switch (locale) {
		case "ar":
		case "ar-AR": return (await import("./ar_AR-44JUQ6EW-CHsh0yAy.js")).default;
		case "de":
		case "de-DE": return (await import("./de_DE-PYAO5YD6-DFXkhMY8.js")).default;
		case "en":
		case "en-US": return (await import("./en_US-Y4ZOVFV4-fuC22zKG.js")).default;
		case "es":
		case "es-419": return (await import("./es_419-HRGOJ6VT-xy3vvDU5.js")).default;
		case "fr":
		case "fr-FR": return (await import("./fr_FR-IGGVC6RM-B5NUF7hk.js")).default;
		case "hi":
		case "hi-IN": return (await import("./hi_IN-XSKAA3MF-e5PUsTtY.js")).default;
		case "id":
		case "id-ID": return (await import("./id_ID-KUOB4UAL-Bo7LwWCA.js")).default;
		case "ja":
		case "ja-JP": return (await import("./ja_JP-4WRQ63RX-DsSqn9rP.js")).default;
		case "ko":
		case "ko-KR": return (await import("./ko_KR-I2K7AIEP-IOe_eZw7.js")).default;
		case "ms":
		case "ms-MY": return (await import("./ms_MY-6VZW6Q3Z-DY5reIcD.js")).default;
		case "pt":
		case "pt-BR": return (await import("./pt_BR-N3XOZ4SV-D6N55XKD.js")).default;
		case "ru":
		case "ru-RU": return (await import("./ru_RU-IITAPRET-uvoP2Ze5.js")).default;
		case "th":
		case "th-TH": return (await import("./th_TH-3ZQCKCQE-Bsoo0pyF.js")).default;
		case "tr":
		case "tr-TR": return (await import("./tr_TR-QUPUGMUF-CSCStsZ_.js")).default;
		case "ua":
		case "uk-UA": return (await import("./uk_UA-SSN6SV5E-DXdimzj4.js")).default;
		case "vi":
		case "vi-VN": return (await import("./vi_VN-7BUVRNYY-BrK9CxL8.js")).default;
		case "zh":
		case "zh-CN":
		case "zh-Hans": return (await import("./zh_CN-HJBN674C-DOEySqdP.js")).default;
		case "zh-HK": return (await import("./zh_HK-JW3WLRKE-CGYJv4_l.js")).default;
		case "zh-Hant":
		case "zh-TW": return (await import("./zh_TW-VNNRNXY7-6KRHwz1i.js")).default;
		default: return (await import("./en_US-Y4ZOVFV4-fuC22zKG.js")).default;
	}
};
async function setLocale(locale) {
	if (i18n.isLocaleCached(locale)) {
		i18n.updateLocale(locale);
		return;
	}
	const translations = await fetchTranslations(locale);
	i18n.setTranslations(locale, JSON.parse(translations));
}
var detectedBrowserLocale = () => {
	if (typeof window !== "undefined" && typeof navigator !== "undefined") {
		if (navigator.languages?.length) return navigator.languages[0];
		if (navigator.language) return navigator.language;
	}
};
var I18nContext = (0, import_react.createContext)({ i18n });
var I18nProvider = ({ children, locale }) => {
	const [updateCount, setUpdateCount] = (0, import_react.useState)(0);
	const browserLocale = (0, import_react.useMemo)(() => detectedBrowserLocale(), []);
	(0, import_react.useEffect)(() => {
		return i18n.onChange(() => {
			setUpdateCount((count) => count + 1);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (locale && locale !== i18n.locale) setLocale(locale);
		else if (!locale && browserLocale && browserLocale !== i18n.locale) setLocale(browserLocale);
	}, [locale, browserLocale]);
	const memoizedValue = (0, import_react.useMemo)(() => {
		const t = (key, options) => i18n.t(key, options);
		return {
			t,
			i18n
		};
	}, [updateCount]);
	return /* @__PURE__ */ import_react.createElement(I18nContext.Provider, { value: memoizedValue }, children);
};
function isNotNullish(value) {
	return value != null;
}
var apeChainIcon = {
	iconBackground: "#7290CC",
	iconUrl: async () => (await import("./apechain-SX5YFU6N-cu3UlZ2M.js")).default
};
var arbitrumIcon = {
	iconBackground: "#96bedc",
	iconUrl: async () => (await import("./arbitrum-WURIBY6W-B5QImphb.js")).default
};
var avalancheIcon = {
	iconBackground: "#e84141",
	iconUrl: async () => (await import("./avalanche-KOMJD3XY-I1jahfl2.js")).default
};
var baseIcon = {
	iconBackground: "#0052ff",
	iconUrl: async () => (await import("./base-OAXLRA4F-BxYdDLXw.js")).default
};
var berachainIcon = {
	iconBackground: "#814625",
	iconUrl: async () => (await import("./berachain-NJECWIVC-C-eTDdWv.js")).default
};
var blastIcon = {
	iconBackground: "#000000",
	iconUrl: async () => (await import("./blast-V555OVXZ-BnJJPORL.js")).default
};
var bscIcon = {
	iconBackground: "#ebac0e",
	iconUrl: async () => (await import("./bsc-N647EYR2-DFUMQbCG.js")).default
};
var celoIcon = {
	iconBackground: "#FCFF52",
	iconUrl: async () => (await import("./celo-GEP4TUHG-BH-5PYaV.js")).default
};
var cronosIcon = {
	iconBackground: "#002D74",
	iconUrl: async () => (await import("./cronos-HJPAQTAE-Cc5Ilsbd.js")).default
};
var degenIcon = {
	iconBackground: "#A36EFD",
	iconUrl: async () => (await import("./degen-FQQ4XGHB-Ddhtuuzd.js")).default
};
var ethereumIcon = {
	iconBackground: "#484c50",
	iconUrl: async () => (await import("./ethereum-RGGVA4PY-FK4BKDU8.js")).default
};
var flowIcon = {
	iconBackground: "transparent",
	iconUrl: async () => (await import("./flow-5FQJFCTK-BqnoiqiW.js")).default
};
var gnosisIcon = {
	iconBackground: "#04795c",
	iconUrl: async () => (await import("./gnosis-37ZC4RBL-CHAuUBKd.js")).default
};
var gravityIcon = {
	iconBackground: "#000000",
	iconUrl: async () => (await import("./gravity-J5YQHTYH-D-ubuvqu.js")).default
};
var hardhatIcon = {
	iconBackground: "#f9f7ec",
	iconUrl: async () => (await import("./hardhat-TX56IT5N-DWHkL4WY.js")).default
};
var hyperevmIcon = {
	iconBackground: "#000000",
	iconUrl: async () => (await import("./hyperevm-VKPAA4SA-DpSdnjIA.js")).default
};
var inkIcon = {
	iconBackground: "#7132F5",
	iconUrl: async () => (await import("./ink-FZMYZWHG-DZTn8Sr0.js")).default
};
var kaiaIcon = {
	iconBackground: "transparent",
	iconUrl: async () => (await import("./kaia-65D2U3PU-BRDqlwx8.js")).default
};
var lineaIcon = {
	iconBackground: "#ffffff",
	iconUrl: async () => (await import("./linea-QRMVQ5DY-B0b51kfm.js")).default
};
var mantaIcon = {
	iconBackground: "#ffffff",
	iconUrl: async () => (await import("./manta-SI27YFEJ-D4DJw5pW.js")).default
};
var mantleIcon = {
	iconBackground: "#000000",
	iconUrl: async () => (await import("./mantle-CKIUT334-UImHKS9k.js")).default
};
var monadTestnetIcon = {
	iconBackground: "transparent",
	iconUrl: async () => (await import("./monad-4KWC6TSS-C2tQPGxU.js")).default
};
var optimismIcon = {
	iconBackground: "#ff5a57",
	iconUrl: async () => (await import("./optimism-HAF2GUT7-Bm8ewZlk.js")).default
};
var polygonIcon = {
	iconBackground: "#9f71ec",
	iconUrl: async () => (await import("./polygon-WW6ZI7PM-DhVTTxfg.js")).default
};
var roninIcon = {
	iconBackground: "#1273EA",
	iconUrl: async () => (await import("./ronin-EMCPYXZT-DLlLIV4o.js")).default
};
var sankoIcon = {
	iconBackground: "#000000",
	iconUrl: async () => (await import("./sanko-RHQYXGM5-itJDYNxM.js")).default
};
var superpositionIcon = {
	iconBackground: "#000000",
	iconUrl: async () => (await import("./superposition-HG6MMR2Y-CQx-Gtdq.js")).default
};
var scrollIcon = {
	iconBackground: "#FFEEDA",
	iconUrl: async () => (await import("./scroll-5OBGQVOV-M3JVM8lO.js")).default
};
var unichainIcon = {
	iconBackground: "#F50DB4",
	iconUrl: async () => (await import("./unichain-C5BWO2ZY-CFCyZfMD.js")).default
};
var xdcIcon = {
	iconBackground: "#f9f7ec",
	iconUrl: async () => (await import("./xdc-KJ3TDBYO-BnW-NnCp.js")).default
};
var zetachainIcon = {
	iconBackground: "#000000",
	iconUrl: async () => (await import("./zetachain-TLDS5IPW-BfWb5t9W.js")).default
};
var zkSyncIcon = {
	iconBackground: "#f9f7ec",
	iconUrl: async () => (await import("./zksync-DH7HK5U4-CZjv8RaX.js")).default
};
var zoraIcon = {
	iconBackground: "#000000",
	iconUrl: async () => (await import("./zora-FYL5H3IO-4DWVm4F8.js")).default
};
var chainMetadataByName = {
	apechain: {
		chainId: 33139,
		name: "ApeChain",
		...apeChainIcon
	},
	apechainCurtis: {
		chainId: 33111,
		name: "ApeChain Curtis",
		...apeChainIcon
	},
	arbitrum: {
		chainId: 42161,
		name: "Arbitrum",
		...arbitrumIcon
	},
	arbitrumGoerli: {
		chainId: 421613,
		...arbitrumIcon
	},
	arbitrumSepolia: {
		chainId: 421614,
		...arbitrumIcon
	},
	avalanche: {
		chainId: 43114,
		...avalancheIcon
	},
	avalancheFuji: {
		chainId: 43113,
		...avalancheIcon
	},
	base: {
		chainId: 8453,
		name: "Base",
		...baseIcon
	},
	baseGoerli: {
		chainId: 84531,
		...baseIcon
	},
	baseSepolia: {
		chainId: 84532,
		...baseIcon
	},
	berachain: {
		chainId: 80094,
		name: "Berachain",
		...berachainIcon
	},
	berachainArtio: {
		chainId: 80085,
		name: "Berachain Artio",
		...berachainIcon
	},
	berachainBArtio: {
		chainId: 80084,
		name: "Berachain bArtio",
		...berachainIcon
	},
	blast: {
		chainId: 81457,
		name: "Blast",
		...blastIcon
	},
	blastSepolia: {
		chainId: 168587773,
		...blastIcon
	},
	bsc: {
		chainId: 56,
		name: "BSC",
		...bscIcon
	},
	bscTestnet: {
		chainId: 97,
		...bscIcon
	},
	celo: {
		chainId: 42220,
		name: "Celo",
		...celoIcon
	},
	celoAlfajores: {
		chainId: 44787,
		name: "Celo Alfajores",
		...celoIcon
	},
	cronos: {
		chainId: 25,
		...cronosIcon
	},
	cronosTestnet: {
		chainId: 338,
		...cronosIcon
	},
	degen: {
		chainId: 666666666,
		name: "Degen",
		...degenIcon
	},
	flow: {
		chainId: 747,
		...flowIcon
	},
	flowTestnet: {
		chainId: 545,
		...flowIcon
	},
	gnosis: {
		chainId: 100,
		name: "Gnosis",
		...gnosisIcon
	},
	goerli: {
		chainId: 5,
		...ethereumIcon
	},
	gravity: {
		chainId: 1625,
		name: "Gravity",
		...gravityIcon
	},
	gravitySepolia: {
		chainId: 13505,
		name: "Gravity Sepolia",
		...gravityIcon
	},
	hardhat: {
		chainId: 31337,
		...hardhatIcon
	},
	holesky: {
		chainId: 17e3,
		...ethereumIcon
	},
	hyperevm: {
		chainId: 999,
		...hyperevmIcon
	},
	ink: {
		chainId: 57073,
		...inkIcon
	},
	inkSepolia: {
		chainId: 763373,
		...inkIcon
	},
	kaia: {
		chainId: 8217,
		name: "Kaia",
		...kaiaIcon
	},
	kairos: {
		chainId: 1001,
		name: "Kairos",
		...kaiaIcon
	},
	kovan: {
		chainId: 42,
		...ethereumIcon
	},
	linea: {
		chainId: 59144,
		name: "Linea",
		...lineaIcon
	},
	lineaGoerli: {
		chainId: 59140,
		name: "Linea Goerli",
		...lineaIcon
	},
	lineaSepolia: {
		chainId: 59141,
		name: "Linea Sepolia",
		...lineaIcon
	},
	localhost: {
		chainId: 1337,
		...ethereumIcon
	},
	mainnet: {
		chainId: 1,
		name: "Ethereum",
		...ethereumIcon
	},
	manta: {
		chainId: 169,
		name: "Manta",
		...mantaIcon
	},
	mantaSepolia: {
		chainId: 3441006,
		...mantaIcon
	},
	mantaTestnet: {
		chainId: 3441005,
		...mantaIcon
	},
	mantle: {
		chainId: 5e3,
		...mantleIcon
	},
	mantleTestnet: {
		chainId: 5001,
		...mantleIcon
	},
	monadTestnet: {
		chainId: 10143,
		name: "Monad Testnet",
		...monadTestnetIcon
	},
	optimism: {
		chainId: 10,
		name: "Optimism",
		...optimismIcon
	},
	optimismGoerli: {
		chainId: 420,
		...optimismIcon
	},
	optimismKovan: {
		chainId: 69,
		...optimismIcon
	},
	optimismSepolia: {
		chainId: 11155420,
		...optimismIcon
	},
	polygon: {
		chainId: 137,
		name: "Polygon",
		...polygonIcon
	},
	polygonAmoy: {
		chainId: 80002,
		...polygonIcon
	},
	polygonMumbai: {
		chainId: 80001,
		...polygonIcon
	},
	rinkeby: {
		chainId: 4,
		...ethereumIcon
	},
	ronin: {
		chainId: 2020,
		...roninIcon
	},
	ropsten: {
		chainId: 3,
		...ethereumIcon
	},
	sanko: {
		chainId: 1996,
		name: "Sanko",
		...sankoIcon
	},
	scroll: {
		chainId: 534352,
		...scrollIcon
	},
	scrollSepolia: {
		chainId: 534351,
		...scrollIcon
	},
	sepolia: {
		chainId: 11155111,
		...ethereumIcon
	},
	superposition: {
		chainId: 55244,
		name: "Superposition",
		...superpositionIcon
	},
	unichain: {
		chainId: 130,
		...unichainIcon
	},
	unichainSepolia: {
		chainId: 1301,
		...unichainIcon
	},
	xdc: {
		chainId: 50,
		name: "XDC",
		...xdcIcon
	},
	xdcTestnet: {
		chainId: 51,
		...xdcIcon
	},
	zetachain: {
		chainId: 7e3,
		name: "ZetaChain",
		...zetachainIcon
	},
	zetachainAthensTestnet: {
		chainId: 7001,
		name: "Zeta Athens",
		...zetachainIcon
	},
	zkSync: {
		chainId: 324,
		name: "zkSync",
		...zkSyncIcon
	},
	zkSyncTestnet: {
		chainId: 280,
		...zkSyncIcon
	},
	zora: {
		chainId: 7777777,
		name: "Zora",
		...zoraIcon
	},
	zoraSepolia: {
		chainId: 999999999,
		...zoraIcon
	},
	zoraTestnet: {
		chainId: 999,
		...zoraIcon
	}
};
var chainMetadataById = Object.fromEntries(Object.values(chainMetadataByName).filter(isNotNullish).map(({ chainId, ...metadata }) => [chainId, metadata]));
var provideRainbowKitChains = (chains) => chains.map((chain) => {
	const defaultMetadata = chainMetadataById[chain.id] ?? {};
	return {
		...chain,
		name: defaultMetadata.name ?? chain.name,
		iconUrl: chain.iconUrl ?? defaultMetadata.iconUrl,
		iconBackground: chain.iconBackground ?? defaultMetadata.iconBackground
	};
});
var RainbowKitChainContext = (0, import_react.createContext)({ chains: [] });
function RainbowKitChainProvider({ children, initialChain }) {
	const { chains } = useConfig();
	return /* @__PURE__ */ import_react.createElement(RainbowKitChainContext.Provider, { value: (0, import_react.useMemo)(() => ({
		chains: provideRainbowKitChains(chains),
		initialChainId: typeof initialChain === "number" ? initialChain : initialChain?.id
	}), [chains, initialChain]) }, children);
}
var useRainbowKitChains = () => (0, import_react.useContext)(RainbowKitChainContext).chains;
var useInitialChainId = () => (0, import_react.useContext)(RainbowKitChainContext).initialChainId;
var useRainbowKitChainsById = () => {
	const rainbowkitChains = useRainbowKitChains();
	return (0, import_react.useMemo)(() => {
		const rainbowkitChainsById = {};
		for (const rkChain of rainbowkitChains) rainbowkitChainsById[rkChain.id] = rkChain;
		return rainbowkitChainsById;
	}, [rainbowkitChains]);
};
var ShowBalanceContext = (0, import_react.createContext)({
	showBalance: void 0,
	setShowBalance: () => {}
});
function ShowBalanceProvider({ children }) {
	const [showBalance, setShowBalance] = (0, import_react.useState)();
	return /* @__PURE__ */ import_react.createElement(ShowBalanceContext.Provider, { value: {
		showBalance,
		setShowBalance
	} }, children);
}
var useShowBalance = () => (0, import_react.useContext)(ShowBalanceContext);
function useIsMounted() {
	const [isMounted, setIsMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setIsMounted(true);
		return () => {
			setIsMounted(false);
		};
	}, []);
	return (0, import_react.useCallback)(() => isMounted, [isMounted]);
}
function useIsMainnetConfigured() {
	const rainbowKitChains = useRainbowKitChains();
	const chainId = mainnet.id;
	return rainbowKitChains.some((rainbowKitChain) => rainbowKitChain.id === chainId);
}
function useMainnetEnsAvatar(name) {
	const mainnetConfigured = useIsMainnetConfigured();
	const safeNormalize = (ensName) => {
		try {
			return normalize(ensName);
		} catch {}
	};
	const { data: ensAvatar } = useEnsAvatar({
		chainId: mainnet.id,
		name: name ? safeNormalize(name) : void 0,
		query: { enabled: mainnetConfigured }
	});
	return ensAvatar;
}
async function rainbowFetch(url, opts) {
	opts = {
		headers: {},
		method: "get",
		...opts,
		timeout: opts.timeout ?? 1e4
	};
	if (!url) throw new Error("rainbowFetch: Missing url argument");
	const controller = new AbortController();
	const id = setTimeout(() => controller.abort(), opts.timeout);
	const { body, params, headers, ...otherOpts } = opts;
	const requestBody = body && typeof body === "object" ? JSON.stringify(opts.body) : opts.body;
	const response = await fetch(`${url}${createParams(params)}`, {
		...otherOpts,
		body: requestBody,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			...headers
		},
		signal: controller.signal
	});
	clearTimeout(id);
	const responseBody = await getBody(response);
	if (response.ok) {
		const { headers: headers2, status } = response;
		return {
			data: responseBody,
			headers: headers2,
			status
		};
	}
	throw generateError({
		requestBody: body,
		response,
		responseBody: typeof responseBody === "string" ? { error: responseBody } : responseBody
	});
}
function getBody(response) {
	if (response.headers.get("Content-Type")?.startsWith("application/json")) return response.json();
	return response.text();
}
function createParams(params) {
	return params && Object.keys(params).length ? `?${new URLSearchParams(params)}` : "";
}
function generateError({ requestBody, response, responseBody }) {
	const message = responseBody?.error || response?.statusText || "There was an error with the request.";
	const error = new Error(message);
	error.response = response;
	error.responseBody = responseBody;
	error.requestBody = requestBody;
	return error;
}
var RainbowFetchClient = class {
	constructor(opts = {}) {
		const { baseUrl = "", ...otherOpts } = opts;
		this.baseUrl = baseUrl;
		this.opts = otherOpts;
	}
	/**
	* Perform a GET request with the RainbowFetchClient.
	*/
	get(url, opts) {
		return rainbowFetch(`${this.baseUrl}${url}`, {
			...this.opts,
			...opts || {},
			method: "get"
		});
	}
	/**
	* Perform a DELETE request with the RainbowFetchClient.
	*/
	delete(url, opts) {
		return rainbowFetch(`${this.baseUrl}${url}`, {
			...this.opts,
			...opts || {},
			method: "delete"
		});
	}
	/**
	* Perform a HEAD request with the RainbowFetchClient.
	*/
	head(url, opts) {
		return rainbowFetch(`${this.baseUrl}${url}`, {
			...this.opts,
			...opts || {},
			method: "head"
		});
	}
	/**
	* Perform a OPTIONS request with the RainbowFetchClient.
	*/
	options(url, opts) {
		return rainbowFetch(`${this.baseUrl}${url}`, {
			...this.opts,
			...opts || {},
			method: "options"
		});
	}
	/**
	* Perform a POST request with the RainbowFetchClient.
	*/
	post(url, body, opts) {
		return rainbowFetch(`${this.baseUrl}${url}`, {
			...this.opts,
			...opts || {},
			body,
			method: "post"
		});
	}
	/**
	* Perform a PUT request with the RainbowFetchClient.
	*/
	put(url, body, opts) {
		return rainbowFetch(`${this.baseUrl}${url}`, {
			...this.opts,
			...opts || {},
			body,
			method: "put"
		});
	}
	/**
	* Perform a PATCH request with the RainbowFetchClient.
	*/
	patch(url, body, opts) {
		return rainbowFetch(`${this.baseUrl}${url}`, {
			...this.opts,
			...opts || {},
			body,
			method: "patch"
		});
	}
};
function createHttpClient({ baseUrl, headers, params, timeout }) {
	return new RainbowFetchClient({
		baseUrl,
		headers,
		params,
		timeout
	});
}
var ENHANCED_PROVIDER_ENABLED = Boolean(typeof process !== "undefined" && typeof process.env !== "undefined" && process.env.RAINBOW_PROVIDER_API_KEY);
var enhancedProviderHttp = createHttpClient({
	baseUrl: "https://enhanced-provider.rainbow.me",
	headers: { "x-api-key": typeof process !== "undefined" && typeof process.env !== "undefined" && process.env.RAINBOW_PROVIDER_API_KEY || "LzbasoBiLqltex3VkcQ7LRmL4PtfiiZ1EMJrizrgfonWN6byJReu/l6yrUoo3zLW" }
});
function createQueryKey(key, args, config = {}) {
	return [
		key,
		args,
		config
	];
}
function getStorageEnsNameKey(address) {
	return `rk-ens-name-${address}`;
}
function safeParseJsonData(string) {
	try {
		const value = string ? JSON.parse(string) : null;
		return typeof value === "object" ? value : null;
	} catch {
		return null;
	}
}
function addEnsName(address, ensName) {
	if (!isAddress(address)) return;
	const expiry = new Date((/* @__PURE__ */ new Date()).getTime() + 180 * 6e4);
	localStorage.setItem(getStorageEnsNameKey(address), JSON.stringify({
		ensName,
		expires: expiry.getTime()
	}));
}
function getEnsName(address) {
	const data = safeParseJsonData(localStorage.getItem(getStorageEnsNameKey(address)));
	if (!data) return null;
	const { ensName, expires } = data;
	if (typeof ensName !== "string" || Number.isNaN(Number(expires))) {
		localStorage.removeItem(getStorageEnsNameKey(address));
		return null;
	}
	if ((/* @__PURE__ */ new Date()).getTime() > Number(expires)) {
		localStorage.removeItem(getStorageEnsNameKey(address));
		return null;
	}
	return ensName;
}
async function getEnhancedProviderEnsName({ address }) {
	const ensName = getEnsName(address);
	if (ensName) return ensName;
	const enhancedProviderEnsName = (await enhancedProviderHttp.get("/v1/resolve-ens", { params: { address } })).data.data;
	if (enhancedProviderEnsName) addEnsName(address, enhancedProviderEnsName);
	return enhancedProviderEnsName;
}
function useMainnetEnsName(address) {
	const mainnetConfigured = useIsMainnetConfigured();
	const { data: ensName } = useEnsName({
		chainId: mainnet.id,
		address,
		query: { enabled: mainnetConfigured }
	});
	const { data: enhancedProviderEnsName } = useQuery({
		queryKey: createQueryKey("address", address),
		queryFn: () => getEnhancedProviderEnsName({ address }),
		enabled: !mainnetConfigured && !!address && ENHANCED_PROVIDER_ENABLED,
		staleTime: 10 * (60 * 1e3),
		retry: 1
	});
	return ensName || enhancedProviderEnsName;
}
function useProfile({ address, includeBalance }) {
	const ensName = useMainnetEnsName(address);
	const ensAvatar = useMainnetEnsAvatar(ensName);
	const { data: balance } = useBalance({ address: includeBalance ? address : void 0 });
	return {
		ensName,
		ensAvatar,
		balance
	};
}
function useChainId() {
	const { chain: activeChain } = useConnection();
	return activeChain?.id ?? null;
}
var storageKey = "rk-transactions";
function safeParseJsonData2(string) {
	try {
		const value = string ? JSON.parse(string) : {};
		return typeof value === "object" ? value : {};
	} catch {
		return {};
	}
}
function loadData() {
	return safeParseJsonData2(typeof localStorage !== "undefined" ? localStorage.getItem(storageKey) : null);
}
var transactionHashRegex = /^0x([A-Fa-f0-9]{64})$/;
function validateTransaction(transaction) {
	const errors = [];
	if (!transactionHashRegex.test(transaction.hash)) errors.push("Invalid transaction hash");
	if (typeof transaction.description !== "string") errors.push("Transaction must have a description");
	if (typeof transaction.confirmations !== "undefined" && (!Number.isInteger(transaction.confirmations) || transaction.confirmations < 1)) errors.push("Transaction confirmations must be a positiver integer");
	return errors;
}
function createTransactionStore({ provider: initialProvider }) {
	let data = loadData();
	let provider = initialProvider;
	const listeners = /* @__PURE__ */ new Set();
	const transactionListeners = /* @__PURE__ */ new Set();
	const transactionRequestCache = /* @__PURE__ */ new Map();
	function setProvider(newProvider) {
		provider = newProvider;
	}
	function getTransactions(account, chainId) {
		return data[account]?.[chainId] ?? [];
	}
	function addTransaction(account, chainId, transaction) {
		const errors = validateTransaction(transaction);
		if (errors.length > 0) throw new Error(["Unable to add transaction", ...errors].join("\n"));
		updateTransactions(account, chainId, (transactions) => {
			return [{
				...transaction,
				status: "pending"
			}, ...transactions.filter(({ hash }) => {
				return hash !== transaction.hash;
			})];
		});
	}
	function clearTransactions(account, chainId) {
		updateTransactions(account, chainId, () => {
			return [];
		});
	}
	function setTransactionStatus(account, chainId, hash, status) {
		updateTransactions(account, chainId, (transactions) => {
			return transactions.map((transaction) => transaction.hash === hash ? {
				...transaction,
				status
			} : transaction);
		});
	}
	async function waitForPendingTransactions(account, chainId) {
		await Promise.all(getTransactions(account, chainId).filter((transaction) => transaction.status === "pending").map(async (transaction) => {
			const { confirmations, hash } = transaction;
			const existingRequest = transactionRequestCache.get(hash);
			if (existingRequest) return await existingRequest;
			const requestPromise = provider.waitForTransactionReceipt({
				confirmations,
				hash,
				timeout: 3e5
			}).then(({ status }) => {
				transactionRequestCache.delete(hash);
				if (status === void 0) return;
				setTransactionStatus(account, chainId, hash, status === 0 || status === "reverted" ? "failed" : "confirmed");
				notifyTransactionListeners(status);
			}).catch(() => {
				setTransactionStatus(account, chainId, hash, "failed");
			});
			transactionRequestCache.set(hash, requestPromise);
			return await requestPromise;
		}));
	}
	function updateTransactions(account, chainId, updateFn) {
		data = loadData();
		data[account] = data[account] ?? {};
		let completedTransactionCount = 0;
		const MAX_COMPLETED_TRANSACTIONS = 10;
		const transactions = updateFn(data[account][chainId] ?? []).filter(({ status }) => {
			return status === "pending" ? true : completedTransactionCount++ <= MAX_COMPLETED_TRANSACTIONS;
		});
		data[account][chainId] = transactions.length > 0 ? transactions : void 0;
		persistData();
		notifyListeners();
		waitForPendingTransactions(account, chainId);
	}
	function persistData() {
		localStorage.setItem(storageKey, JSON.stringify(data));
	}
	function notifyListeners() {
		for (const listener of listeners) listener();
	}
	function notifyTransactionListeners(txStatus) {
		for (const transactionListener of transactionListeners) transactionListener(txStatus);
	}
	function onChange(fn) {
		listeners.add(fn);
		return () => {
			listeners.delete(fn);
		};
	}
	function onTransactionStatus(fn) {
		transactionListeners.add(fn);
		return () => {
			transactionListeners.delete(fn);
		};
	}
	return {
		addTransaction,
		clearTransactions,
		getTransactions,
		onTransactionStatus,
		onChange,
		setProvider,
		waitForPendingTransactions
	};
}
var storeSingleton;
var TransactionStoreContext = import_react.createContext(null);
function TransactionStoreProvider({ children }) {
	const provider = usePublicClient();
	const { address } = useConnection();
	const chainId = useChainId();
	const { refetch } = useBalance({
		address,
		query: { enabled: false }
	});
	const [store] = import_react.useState(() => storeSingleton ?? (storeSingleton = createTransactionStore({ provider })));
	const onTransactionStatus = import_react.useCallback((txStatus) => {
		if (txStatus === "success") refetch();
	}, [refetch]);
	import_react.useEffect(() => {
		store.setProvider(provider);
	}, [store, provider]);
	import_react.useEffect(() => {
		if (address && chainId) store.waitForPendingTransactions(address, chainId);
	}, [
		store,
		address,
		chainId
	]);
	import_react.useEffect(() => {
		if (store && address && chainId) return store.onTransactionStatus(onTransactionStatus);
	}, [
		store,
		address,
		chainId,
		onTransactionStatus
	]);
	return /* @__PURE__ */ import_react.createElement(TransactionStoreContext.Provider, { value: store }, children);
}
function useTransactionStore() {
	const store = import_react.useContext(TransactionStoreContext);
	if (!store) throw new Error("Transaction hooks must be used within RainbowKitProvider");
	return store;
}
function useRecentTransactions() {
	const store = useTransactionStore();
	const { address } = useConnection();
	const chainId = useChainId();
	const [transactions, setTransactions] = (0, import_react.useState)(() => store && address && chainId ? store.getTransactions(address, chainId) : []);
	(0, import_react.useEffect)(() => {
		if (store && address && chainId) {
			setTransactions(store.getTransactions(address, chainId));
			return store.onChange(() => {
				setTransactions(store.getTransactions(address, chainId));
			});
		}
	}, [
		store,
		address,
		chainId
	]);
	return transactions;
}
var resolveThemeVars = (theme) => typeof theme === "function" ? theme() : theme;
function cssObjectFromTheme(theme, { extends: baseTheme } = {}) {
	const resolvedThemeVars = { ...assignInlineVars(themeVars, resolveThemeVars(theme)) };
	if (!baseTheme) return resolvedThemeVars;
	const resolvedBaseThemeVars = assignInlineVars(themeVars, resolveThemeVars(baseTheme));
	return Object.fromEntries(Object.entries(resolvedThemeVars).filter(([varName, value]) => value !== resolvedBaseThemeVars[varName]));
}
function cssStringFromTheme(theme, options = {}) {
	return Object.entries(cssObjectFromTheme(theme, options)).map(([key, value]) => `${key}:${value.replace(/[:;{}</>]/g, "")};`).join("");
}
var defaultAppInfo = {
	appName: void 0,
	disclaimer: void 0,
	learnMoreUrl: "https://learn.rainbow.me/understanding-web3?utm_source=rainbowkit&utm_campaign=learnmore"
};
var AppContext = (0, import_react.createContext)(defaultAppInfo);
var CoolModeContext = (0, import_react.createContext)(false);
function debounce(fn, ms) {
	let timer;
	return () => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			fn();
		}, ms);
	};
}
var useWindowSize = () => {
	const [windowSize, setWindowSize] = (0, import_react.useState)({
		height: void 0,
		width: void 0
	});
	(0, import_react.useEffect)(() => {
		const handleResize = debounce(() => {
			setWindowSize({
				height: window.innerHeight,
				width: window.innerWidth
			});
		}, 500);
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
};
var WalletButtonContext = (0, import_react.createContext)({
	connector: null,
	setConnector: () => {}
});
function WalletButtonProvider({ children }) {
	const [connector, setConnector] = (0, import_react.useState)(null);
	return /* @__PURE__ */ import_react.createElement(WalletButtonContext.Provider, { value: (0, import_react.useMemo)(() => ({
		connector,
		setConnector
	}), [connector]) }, children);
}
var ModalSizeOptions = {
	COMPACT: "compact",
	WIDE: "wide"
};
var ModalSizeContext = (0, import_react.createContext)(ModalSizeOptions.WIDE);
function ModalSizeProvider({ children, modalSize }) {
	const { width } = useWindowSize();
	const isSmallScreen = width && width < largeScreenMinWidth;
	const { connector } = (0, import_react.useContext)(WalletButtonContext);
	return /* @__PURE__ */ import_react.createElement(ModalSizeContext.Provider, { value: isSmallScreen || connector ? ModalSizeOptions.COMPACT : modalSize }, children);
}
var ShowRecentTransactionsContext = (0, import_react.createContext)(false);
var storageKey2 = "rk-version";
function setRainbowKitVersion({ version }) {
	localStorage.setItem(storageKey2, version);
}
function useFingerprint() {
	const fingerprint = (0, import_react.useCallback)(() => {
		setRainbowKitVersion({ version: "2.2.10" });
	}, []);
	(0, import_react.useEffect)(() => {
		fingerprint();
	}, [fingerprint]);
}
function indexBy(items, getKey) {
	const indexedItems = {};
	for (const item of items) {
		const key = getKey(item);
		if (!key) continue;
		indexedItems[key] = item;
	}
	return indexedItems;
}
function isSafari() {
	return typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined" && /Version\/([0-9._]+).*Safari/.test(navigator.userAgent);
}
function isArc() {
	return typeof document !== "undefined" && getComputedStyle(document.body).getPropertyValue("--arc-palette-focus") !== "";
}
function getBrowser() {
	if (typeof navigator === "undefined") return "Browser";
	const ua2 = navigator.userAgent?.toLowerCase();
	if (navigator.brave?.isBrave) return "Brave";
	if (ua2?.indexOf("edg/") > -1) return "Edge";
	if (ua2?.indexOf("op") > -1) return "Opera";
	if (isArc()) return "Arc";
	if (ua2?.indexOf("chrome") > -1) return "Chrome";
	if (ua2?.indexOf("firefox") > -1) return "Firefox";
	if (isSafari()) return "Safari";
	return "Browser";
}
var { os } = (0, import_ua_parser.UAParser)();
function isWindows() {
	return os.name === "Windows";
}
function isMacOS() {
	return os.name === "Mac OS";
}
function isLinux() {
	return [
		"Ubuntu",
		"Mint",
		"Fedora",
		"Debian",
		"Arch",
		"Linux"
	].includes(os.name);
}
function getPlatform() {
	if (isWindows()) return "Windows";
	if (isMacOS()) return "macOS";
	if (isLinux()) return "Linux";
	return "Desktop";
}
var getExtensionDownloadUrl = (wallet) => {
	const browser = getBrowser();
	return {
		["Arc"]: wallet?.downloadUrls?.chrome,
		["Brave"]: wallet?.downloadUrls?.chrome,
		["Chrome"]: wallet?.downloadUrls?.chrome,
		["Edge"]: wallet?.downloadUrls?.edge || wallet?.downloadUrls?.chrome,
		["Firefox"]: wallet?.downloadUrls?.firefox,
		["Opera"]: wallet?.downloadUrls?.opera || wallet?.downloadUrls?.chrome,
		["Safari"]: wallet?.downloadUrls?.safari,
		["Browser"]: wallet?.downloadUrls?.browserExtension
	}[browser] ?? wallet?.downloadUrls?.browserExtension;
};
var getMobileDownloadUrl = (wallet) => {
	return (isIOS() ? wallet?.downloadUrls?.ios : wallet?.downloadUrls?.android) ?? wallet?.downloadUrls?.mobile;
};
var getDesktopDownloadUrl = (wallet) => {
	const platform = getPlatform();
	return {
		["Windows"]: wallet?.downloadUrls?.windows,
		["macOS"]: wallet?.downloadUrls?.macos,
		["Linux"]: wallet?.downloadUrls?.linux,
		["Desktop"]: wallet?.downloadUrls?.desktop
	}[platform] ?? wallet?.downloadUrls?.desktop;
};
var isRecentWallet = (recentWallets, walletId) => {
	return recentWallets.some((recentWallet) => recentWallet.id === walletId);
};
var isRainbowKitConnector = (wallet) => {
	return !!wallet.isRainbowKitConnector;
};
var isEIP6963Connector = (wallet) => {
	return !!(!wallet.isRainbowKitConnector && wallet.icon?.replace(/\n/g, "").startsWith("data:image") && wallet.uid && wallet.name);
};
var rainbowKitConnectorWithWalletConnect = (wallet, walletConnectModalConnector) => {
	return wallet.id === "walletConnect" && walletConnectModalConnector ? {
		...wallet,
		walletConnectModalConnector
	} : wallet;
};
var connectorsWithRecentWallets = ({ wallets, recentWallets }) => {
	return [...recentWallets, ...wallets.filter((wallet) => !isRecentWallet(recentWallets, wallet.id))];
};
var storageKey3 = "rk-recent";
function safeParseJsonArray(string) {
	try {
		const value = string ? JSON.parse(string) : [];
		return Array.isArray(value) ? value : [];
	} catch {
		return [];
	}
}
function getRecentWalletIds() {
	return typeof localStorage !== "undefined" ? safeParseJsonArray(localStorage.getItem(storageKey3)) : [];
}
function dedupe(array) {
	return [...new Set(array)];
}
function addRecentWalletId(walletId) {
	const newValue = dedupe([walletId, ...getRecentWalletIds()]);
	localStorage.setItem(storageKey3, JSON.stringify(newValue));
}
function useWalletConnectors(mergeEIP6963WithRkConnectors = false) {
	const rainbowKitChains = useRainbowKitChains();
	const intialChainId = useInitialChainId();
	const { connectAsync, connectors: defaultConnectors_untyped } = useConnect();
	const defaultCreatedConnectors = defaultConnectors_untyped;
	const { setIsWalletConnectModalOpen } = useWalletConnectOpenState();
	const defaultConnectors = defaultCreatedConnectors.map((connector) => ({
		...connector,
		...connector.rkDetails || {}
	}));
	async function connectWallet(connector, parameters) {
		const walletChainId = await connector.getChainId();
		const result = await connectAsync({
			...parameters,
			chainId: parameters?.chainId ?? intialChainId ?? rainbowKitChains.find(({ id }) => id === walletChainId)?.id ?? rainbowKitChains[0]?.id,
			connector
		});
		if (result) addRecentWalletId(connector.id);
		return result;
	}
	async function connectToWalletConnectModal(walletConnectModalConnector2) {
		try {
			setIsWalletConnectModalOpen(true);
			await connectWallet(walletConnectModalConnector2);
			setIsWalletConnectModalOpen(false);
		} catch (err) {
			const isUserRejection = err.name === "UserRejectedRequestError" || err.message === "Connection request reset. Please try again.";
			setIsWalletConnectModalOpen(false);
			if (!isUserRejection) throw err;
		}
	}
	const getWalletConnectUri = async (connector, uriConverter) => {
		const provider = await connector.getProvider();
		if (connector.id === "coinbase") return provider.qrUrl;
		return new Promise((resolve) => provider.once("display_uri", (uri) => {
			resolve(uriConverter(uri));
		}));
	};
	const walletConnectModalConnector = defaultConnectors.find((connector) => connector.id === "walletConnect" && connector.isWalletConnectModalConnector);
	const eip6963Connectors = defaultConnectors.filter(isEIP6963Connector).map((connector) => {
		return {
			...connector,
			groupIndex: 0
		};
	});
	const rainbowKitConnectors = defaultConnectors.filter(isRainbowKitConnector).filter((wallet) => !wallet.isWalletConnectModalConnector).filter((wallet) => {
		if (!mergeEIP6963WithRkConnectors) return true;
		return !eip6963Connectors.some((eip6963) => eip6963.id === wallet.rdns);
	}).map((wallet) => rainbowKitConnectorWithWalletConnect(wallet, walletConnectModalConnector));
	const combinedConnectors = [...eip6963Connectors, ...rainbowKitConnectors];
	const walletInstanceById = indexBy(combinedConnectors, (walletInstance) => walletInstance.id);
	const recentWallets = getRecentWalletIds().map((walletId) => walletInstanceById[walletId]).filter(Boolean).slice(0, 3);
	const walletConnectors = [];
	const combinedConnectorsWithRecentWallets = connectorsWithRecentWallets({
		wallets: combinedConnectors,
		recentWallets
	});
	for (const wallet of combinedConnectorsWithRecentWallets) {
		if (!wallet) continue;
		const eip6963 = isEIP6963Connector(wallet);
		const recent = isRecentWallet(recentWallets, wallet.id);
		if (eip6963) {
			walletConnectors.push({
				...wallet,
				iconUrl: wallet.icon,
				ready: true,
				connect: connectWallet.bind(null, wallet),
				groupName: "Installed",
				recent
			});
			continue;
		}
		walletConnectors.push({
			...wallet,
			ready: wallet.installed ?? true,
			connect: connectWallet.bind(null, wallet),
			desktopDownloadUrl: getDesktopDownloadUrl(wallet),
			extensionDownloadUrl: getExtensionDownloadUrl(wallet),
			groupName: wallet.groupName,
			mobileDownloadUrl: getMobileDownloadUrl(wallet),
			getQrCodeUri: wallet.qrCode?.getUri ? () => getWalletConnectUri(wallet, wallet.qrCode.getUri) : void 0,
			getDesktopUri: wallet.desktop?.getUri ? () => getWalletConnectUri(wallet, wallet.desktop.getUri) : void 0,
			getMobileUri: wallet.mobile?.getUri ? () => getWalletConnectUri(wallet, wallet.mobile?.getUri) : void 0,
			recent,
			showWalletConnectModal: wallet.walletConnectModalConnector ? () => connectToWalletConnectModal(wallet.walletConnectModalConnector) : void 0
		});
	}
	return walletConnectors;
}
var src = async () => (await import("./assets-Q6ZU7ZJ5-Dy4TGvSL.js")).default;
var preloadAssetsIcon = () => loadImages(src);
var AssetsIcon = () => /* @__PURE__ */ import_react.createElement(AsyncImage, {
	background: "#d0d5de",
	borderRadius: "10",
	height: "48",
	src,
	width: "48"
});
var src2 = async () => (await import("./login-UP3DZBGS-BZE4epTA.js")).default;
var preloadLoginIcon = () => loadImages(src2);
var LoginIcon = () => /* @__PURE__ */ import_react.createElement(AsyncImage, {
	background: "#d0d5de",
	borderRadius: "10",
	height: "48",
	src: src2,
	width: "48"
});
var Text = import_react.forwardRef(({ as = "div", children, className, color, display, font = "body", id, size = "16", style, tabIndex, textAlign = "inherit", weight = "regular", testId }, ref) => {
	return /* @__PURE__ */ import_react.createElement(Box, {
		as,
		className,
		color,
		display,
		fontFamily: font,
		fontSize: size,
		fontWeight: weight,
		id,
		ref,
		style,
		tabIndex,
		textAlign,
		testId
	}, children);
});
Text.displayName = "Text";
var sizeVariants = {
	large: {
		fontSize: "16",
		paddingX: "24",
		paddingY: "10"
	},
	medium: {
		fontSize: "14",
		height: "28",
		paddingX: "12",
		paddingY: "4"
	},
	small: {
		fontSize: "14",
		paddingX: "10",
		paddingY: "5"
	}
};
function ActionButton({ disabled = false, href, label, onClick, rel = "noreferrer noopener", size = "medium", target = "_blank", testId, type = "primary" }) {
	const isPrimary = type === "primary";
	const isNotLarge = size !== "large";
	const mobile = isMobile();
	const background = !disabled ? isPrimary ? "accentColor" : isNotLarge ? "actionButtonSecondaryBackground" : null : "actionButtonSecondaryBackground";
	const { fontSize, height, paddingX, paddingY } = sizeVariants[size];
	const hasBorder = !mobile || !isNotLarge;
	return /* @__PURE__ */ import_react.createElement(Box, {
		...href ? !disabled ? {
			as: "a",
			href,
			rel,
			target
		} : {} : {
			as: "button",
			type: "button"
		},
		onClick: !disabled ? onClick : void 0,
		...hasBorder ? {
			borderColor: mobile && !isNotLarge && !isPrimary ? "actionButtonBorderMobile" : "actionButtonBorder",
			borderStyle: "solid",
			borderWidth: "1"
		} : {},
		borderRadius: "actionButton",
		className: !disabled && touchableStyles({
			active: "shrinkSm",
			hover: "grow"
		}),
		display: "block",
		paddingX,
		paddingY,
		style: { willChange: "transform" },
		testId,
		textAlign: "center",
		transition: "transform",
		...background ? { background } : {},
		...height ? { height } : {}
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: !disabled ? isPrimary ? "accentColorForeground" : "accentColor" : "modalTextSecondary",
		size: fontSize,
		weight: "bold"
	}, label));
}
var CloseIcon = () => {
	return isMobile() ? /* @__PURE__ */ import_react.createElement("svg", {
		"aria-hidden": true,
		fill: "none",
		height: "11.5",
		viewBox: "0 0 11.5 11.5",
		width: "11.5",
		xmlns: "http://www.w3.org/2000/svg"
	}, /* @__PURE__ */ import_react.createElement("title", null, "Close"), /* @__PURE__ */ import_react.createElement("path", {
		d: "M2.13388 0.366117C1.64573 -0.122039 0.854272 -0.122039 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L3.98223 5.75L0.366117 9.36612C-0.122039 9.85427 -0.122039 10.6457 0.366117 11.1339C0.854272 11.622 1.64573 11.622 2.13388 11.1339L5.75 7.51777L9.36612 11.1339C9.85427 11.622 10.6457 11.622 11.1339 11.1339C11.622 10.6457 11.622 9.85427 11.1339 9.36612L7.51777 5.75L11.1339 2.13388C11.622 1.64573 11.622 0.854272 11.1339 0.366117C10.6457 -0.122039 9.85427 -0.122039 9.36612 0.366117L5.75 3.98223L2.13388 0.366117Z",
		fill: "currentColor"
	})) : /* @__PURE__ */ import_react.createElement("svg", {
		"aria-hidden": true,
		fill: "none",
		height: "10",
		viewBox: "0 0 10 10",
		width: "10",
		xmlns: "http://www.w3.org/2000/svg"
	}, /* @__PURE__ */ import_react.createElement("title", null, "Close"), /* @__PURE__ */ import_react.createElement("path", {
		d: "M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z",
		fill: "currentColor"
	}));
};
var CloseButton = ({ "aria-label": ariaLabel = "Close", onClose }) => {
	const mobile = isMobile();
	return /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		"aria-label": ariaLabel,
		as: "button",
		background: "closeButtonBackground",
		borderColor: "actionButtonBorder",
		borderRadius: "full",
		borderStyle: "solid",
		borderWidth: mobile ? "0" : "1",
		className: touchableStyles({
			active: "shrinkSm",
			hover: "growLg"
		}),
		color: "closeButton",
		display: "flex",
		height: mobile ? "30" : "28",
		justifyContent: "center",
		onClick: onClose,
		style: { willChange: "transform" },
		transition: "default",
		type: "button",
		width: mobile ? "30" : "28"
	}, /* @__PURE__ */ import_react.createElement(CloseIcon, null));
};
var signInIcon = async () => (await import("./sign-A7IJEUT5-CJcokM0X.js")).default;
function SignIn({ onClose, onCloseModal }) {
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	const [{ status, ...state }, setState] = import_react.useState({ status: "idle" });
	const authAdapter = useAuthenticationAdapter();
	const getNonce = (0, import_react.useCallback)(async () => {
		try {
			const nonce = await authAdapter.getNonce();
			setState((x) => ({
				...x,
				nonce
			}));
		} catch {
			setState((x) => ({
				...x,
				errorMessage: i18n2.t("sign_in.message.preparing_error"),
				status: "idle"
			}));
		}
	}, [authAdapter, i18n2.t]);
	const onceRef = (0, import_react.useRef)(false);
	import_react.useEffect(() => {
		if (onceRef.current) return;
		onceRef.current = true;
		getNonce();
	}, [getNonce]);
	const mobile = isMobile();
	const { address, chain: activeChain } = useConnection();
	const { signMessageAsync } = useSignMessage();
	const signIn = async () => {
		try {
			const chainId = activeChain?.id;
			const { nonce } = state;
			if (!address || !chainId || !nonce) return;
			setState((x) => ({
				...x,
				errorMessage: void 0,
				status: "signing"
			}));
			const message = authAdapter.createMessage({
				address,
				chainId,
				nonce
			});
			let signature;
			try {
				signature = await signMessageAsync({ message });
			} catch (error) {
				if (error instanceof UserRejectedRequestError) return setState((x) => ({
					...x,
					status: "idle"
				}));
				return setState((x) => ({
					...x,
					errorMessage: i18n2.t("sign_in.signature.signing_error"),
					status: "idle"
				}));
			}
			setState((x) => ({
				...x,
				status: "verifying"
			}));
			try {
				if (await authAdapter.verify({
					message,
					signature
				})) {
					onCloseModal();
					return;
				}
				throw new Error();
			} catch {
				return setState((x) => ({
					...x,
					errorMessage: i18n2.t("sign_in.signature.verifying_error"),
					status: "idle"
				}));
			}
		} catch {
			setState({
				errorMessage: i18n2.t("sign_in.signature.oops_error"),
				status: "idle"
			});
		}
	};
	return /* @__PURE__ */ import_react.createElement(Box, { position: "relative" }, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		paddingRight: "16",
		paddingTop: "16",
		position: "absolute",
		right: "0"
	}, /* @__PURE__ */ import_react.createElement(CloseButton, { onClose })), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: mobile ? "32" : "24",
		padding: "24",
		paddingX: "18",
		style: { paddingTop: mobile ? "60px" : "36px" }
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: mobile ? "6" : "4",
		style: { maxWidth: mobile ? 320 : 280 }
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: mobile ? "32" : "16"
	}, /* @__PURE__ */ import_react.createElement(AsyncImage, {
		height: 40,
		src: signInIcon,
		width: 40
	}), /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: mobile ? "20" : "18",
		textAlign: "center",
		weight: "heavy"
	}, i18n2.t("sign_in.label"))), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: mobile ? "16" : "12"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: mobile ? "16" : "14",
		textAlign: "center"
	}, i18n2.t("sign_in.description")), status === "idle" && state.errorMessage ? /* @__PURE__ */ import_react.createElement(Text, {
		color: "error",
		size: mobile ? "16" : "14",
		textAlign: "center",
		weight: "bold"
	}, state.errorMessage) : null)), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: !mobile ? "center" : void 0,
		display: "flex",
		flexDirection: "column",
		gap: "8",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(ActionButton, {
		disabled: !state.nonce || status === "signing" || status === "verifying",
		label: !state.nonce ? i18n2.t("sign_in.message.preparing") : status === "signing" ? i18n2.t("sign_in.signature.waiting") : status === "verifying" ? i18n2.t("sign_in.signature.verifying") : i18n2.t("sign_in.message.send"),
		onClick: signIn,
		size: mobile ? "large" : "medium",
		testId: "auth-message-button"
	}), mobile ? /* @__PURE__ */ import_react.createElement(ActionButton, {
		label: "Cancel",
		onClick: onClose,
		size: "large",
		type: "secondary"
	}) : /* @__PURE__ */ import_react.createElement(Box, {
		as: "button",
		borderRadius: "full",
		className: touchableStyles({
			active: "shrink",
			hover: "grow"
		}),
		display: "block",
		onClick: onClose,
		paddingX: "10",
		paddingY: "5",
		rel: "noreferrer",
		style: { willChange: "transform" },
		target: "_blank",
		transition: "default"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "closeButton",
		size: mobile ? "16" : "14",
		weight: "bold"
	}, i18n2.t("sign_in.message.cancel"))))));
}
function usePreloadImages() {
	const rainbowKitChains = useRainbowKitChains();
	const walletConnectors = useWalletConnectors();
	const isUnauthenticated = useAuthenticationStatus() === "unauthenticated";
	const preloadImages = (0, import_react.useCallback)(() => {
		loadImages(...walletConnectors.map((wallet) => wallet.iconUrl), ...rainbowKitChains.map((chain) => chain.iconUrl).filter(isNotNullish));
		if (!isMobile()) {
			preloadAssetsIcon();
			preloadLoginIcon();
		}
		if (isUnauthenticated) loadImages(signInIcon);
	}, [
		walletConnectors,
		rainbowKitChains,
		isUnauthenticated
	]);
	(0, import_react.useEffect)(() => {
		preloadImages();
	}, [preloadImages]);
}
var storageKey4 = "WALLETCONNECT_DEEPLINK_CHOICE";
function setWalletConnectDeepLink({ mobileUri, name }) {
	localStorage.setItem(storageKey4, JSON.stringify({
		href: mobileUri.split("?")[0],
		name
	}));
}
function clearWalletConnectDeepLink() {
	localStorage.removeItem(storageKey4);
}
var ThemeIdContext = (0, import_react.createContext)(void 0);
var attr = "data-rk";
var createThemeRootProps = (id) => ({ [attr]: id || "" });
var createThemeRootSelector = (id) => {
	if (id && !/^[a-zA-Z0-9_]+$/.test(id)) throw new Error(`Invalid ID: ${id}`);
	return id ? `[${attr}="${id}"]` : `[${attr}]`;
};
var useThemeRootProps = () => {
	return createThemeRootProps((0, import_react.useContext)(ThemeIdContext));
};
var defaultTheme = lightTheme();
function RainbowKitProvider({ appInfo, avatar, children, coolMode = false, id, initialChain, locale, modalSize = ModalSizeOptions.WIDE, showRecentTransactions = false, theme = defaultTheme }) {
	usePreloadImages();
	useFingerprint();
	useConnectionEffect({ onDisconnect: clearWalletConnectDeepLink });
	if (typeof theme === "function") throw new Error("A theme function was provided to the \"theme\" prop instead of a theme object. You must execute this function to get the resulting theme object.");
	const selector = createThemeRootSelector(id);
	const appContext = {
		...defaultAppInfo,
		...appInfo
	};
	const avatarContext = avatar ?? defaultAvatar;
	return /* @__PURE__ */ import_react.createElement(RainbowKitChainProvider, { initialChain }, /* @__PURE__ */ import_react.createElement(WalletButtonProvider, null, /* @__PURE__ */ import_react.createElement(I18nProvider, { locale }, /* @__PURE__ */ import_react.createElement(CoolModeContext.Provider, { value: coolMode }, /* @__PURE__ */ import_react.createElement(ModalSizeProvider, { modalSize }, /* @__PURE__ */ import_react.createElement(ShowRecentTransactionsContext.Provider, { value: showRecentTransactions }, /* @__PURE__ */ import_react.createElement(TransactionStoreProvider, null, /* @__PURE__ */ import_react.createElement(AvatarContext.Provider, { value: avatarContext }, /* @__PURE__ */ import_react.createElement(AppContext.Provider, { value: appContext }, /* @__PURE__ */ import_react.createElement(ThemeIdContext.Provider, { value: id }, /* @__PURE__ */ import_react.createElement(ShowBalanceProvider, null, /* @__PURE__ */ import_react.createElement(ModalProvider, null, theme ? /* @__PURE__ */ import_react.createElement("div", { ...createThemeRootProps(id) }, /* @__PURE__ */ import_react.createElement("style", { dangerouslySetInnerHTML: { __html: [`${selector}{${cssStringFromTheme("lightMode" in theme ? theme.lightMode : theme)}}`, "darkMode" in theme ? `@media(prefers-color-scheme:dark){${selector}{${cssStringFromTheme(theme.darkMode, { extends: theme.lightMode })}}}` : null].join("") } }), children) : children))))))))))));
}
var content = "_9pm4ki5 ju367va ju367v15 ju367v8r";
var overlay = "_9pm4ki3 ju367v9h ju367vb3 ju367va ju367v2q ju367v8q";
var moveFocusWithin = (element2, position) => {
	const focusableElements = element2.querySelectorAll("button:not(:disabled), a[href]");
	if (focusableElements.length === 0) return;
	focusableElements[position === "end" ? focusableElements.length - 1 : 0].focus();
};
function FocusTrap(props) {
	const contentRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const previouslyActiveElement = document.activeElement;
		return () => {
			previouslyActiveElement.focus?.();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (contentRef.current) {
			const elementToFocus = contentRef.current.querySelector("[data-auto-focus]");
			if (elementToFocus) elementToFocus.focus();
			else contentRef.current.focus();
		}
	}, []);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("div", {
		onFocus: (0, import_react.useCallback)(() => contentRef.current && moveFocusWithin(contentRef.current, "end"), []),
		tabIndex: 0
	}), /* @__PURE__ */ import_react.createElement("div", {
		ref: contentRef,
		style: { outline: "none" },
		tabIndex: -1,
		...props
	}), /* @__PURE__ */ import_react.createElement("div", {
		onFocus: (0, import_react.useCallback)(() => contentRef.current && moveFocusWithin(contentRef.current, "start"), []),
		tabIndex: 0
	}));
}
var stopPropagation = (event) => event.stopPropagation();
function Dialog({ children, onClose, open, titleId }) {
	(0, import_react.useEffect)(() => {
		const handleEscape = (event) => open && event.key === "Escape" && onClose();
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [open, onClose]);
	const [bodyScrollable, setBodyScrollable] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setBodyScrollable(getComputedStyle(window.document.body).overflow !== "hidden");
	}, []);
	const handleBackdropClick = (0, import_react.useCallback)(() => onClose(), [onClose]);
	const themeRootProps = useThemeRootProps();
	const mobile = isMobile();
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, open ? (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react.createElement(ReactRemoveScroll, { enabled: bodyScrollable }, /* @__PURE__ */ import_react.createElement(Box, { ...themeRootProps }, /* @__PURE__ */ import_react.createElement(Box, {
		...themeRootProps,
		alignItems: mobile ? "flex-end" : "center",
		"aria-labelledby": titleId,
		"aria-modal": true,
		className: overlay,
		onClick: handleBackdropClick,
		position: "fixed",
		role: "dialog"
	}, /* @__PURE__ */ import_react.createElement(FocusTrap, {
		className: content,
		onClick: stopPropagation,
		role: "document"
	}, children)))), document.body) : null);
}
var bottomSheetOverrides = "_1ckjpok7";
var dialogContent = "_1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";
var dialogContentCompactMode = "_1ckjpok4 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";
var dialogContentMobile = "_1ckjpok6 ju367vq";
var dialogContentWideDesktop = "_1ckjpok3 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";
var dialogContentWideMobile = "_1ckjpok2 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";
function DialogContent({ bottomSheetOnMobile = false, children, marginTop, padding = "16", paddingBottom, wide = false }) {
	const mobile = isMobile();
	const compactModeEnabled = (0, import_react.useContext)(ModalSizeContext) === ModalSizeOptions.COMPACT;
	return /* @__PURE__ */ import_react.createElement(Box, { marginTop }, /* @__PURE__ */ import_react.createElement(Box, { className: [
		wide ? mobile ? dialogContentWideMobile : compactModeEnabled ? dialogContentCompactMode : dialogContentWideDesktop : dialogContent,
		mobile ? dialogContentMobile : null,
		mobile && bottomSheetOnMobile ? bottomSheetOverrides : null
	].join(" ") }, /* @__PURE__ */ import_react.createElement(Box, {
		padding,
		paddingBottom: paddingBottom ?? padding
	}, children)));
}
var units = [
	"k",
	"m",
	"b",
	"t"
];
function toPrecision(number, precision = 1) {
	return number.toString().replace(new RegExp(`(.+\\.\\d{${precision}})\\d+`), "$1").replace(/(\.[1-9]*)0+$/, "$1").replace(/\.$/, "");
}
function abbreviateETHBalance(number) {
	if (number < 1) return toPrecision(number, 3);
	if (number < 10 ** 2) return toPrecision(number, 2);
	if (number < 10 ** 4) return new Intl.NumberFormat().format(Number.parseFloat(toPrecision(number, 1)));
	const decimalsDivisor = 10 ** 1;
	let result = String(number);
	for (let i = units.length - 1; i >= 0; i--) {
		const size = 10 ** ((i + 1) * 3);
		if (size <= number) {
			number = number * decimalsDivisor / size / decimalsDivisor;
			result = toPrecision(number, 1) + units[i];
			break;
		}
	}
	return result;
}
function formatAddress(address) {
	const leadingChars = 4;
	const trailingChars = 4;
	return address.length < leadingChars + trailingChars ? address : `${address.substring(0, leadingChars)}\u2026${address.substring(address.length - trailingChars)}`;
}
function formatENS(name) {
	if (!name) return "";
	const parts = name.split(".");
	const last = parts.pop();
	if (parts.join(".").length > 24) return `${parts.join(".").substring(0, 24)}...`;
	return `${parts.join(".")}.${last}`;
}
var CopiedIcon = () => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: "13",
	viewBox: "0 0 13 13",
	width: "13",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Copied"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M4.94568 12.2646C5.41052 12.2646 5.77283 12.0869 6.01892 11.7109L12.39 1.96973C12.5677 1.69629 12.6429 1.44336 12.6429 1.2041C12.6429 0.561523 12.1644 0.0966797 11.5082 0.0966797C11.057 0.0966797 10.7767 0.260742 10.5033 0.691406L4.9115 9.50977L2.07458 5.98926C1.82166 5.68848 1.54822 5.55176 1.16541 5.55176C0.502319 5.55176 0.0238037 6.02344 0.0238037 6.66602C0.0238037 6.95312 0.112671 7.20605 0.358765 7.48633L3.88611 11.7588C4.18005 12.1074 4.50818 12.2646 4.94568 12.2646Z",
	fill: "currentColor"
}));
var CopyIcon = () => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: "16",
	viewBox: "0 0 17 16",
	width: "17",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Copy"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z",
	fill: "currentColor"
}));
var DisconnectIcon = () => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: "16",
	viewBox: "0 0 18 16",
	width: "18",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Disconnect"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z",
	fill: "currentColor"
}));
function useClearRecentTransactions() {
	const store = useTransactionStore();
	const { address } = useConnection();
	const chainId = useChainId();
	return (0, import_react.useCallback)(() => {
		if (!address || !chainId) throw new Error("No address or chain ID found");
		store.clearTransactions(address, chainId);
	}, [
		store,
		address,
		chainId
	]);
}
var chainToExplorerUrl = (chain) => chain?.blockExplorers?.default?.url;
var ExternalLinkIcon = () => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: "19",
	viewBox: "0 0 20 19",
	width: "20",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Link"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z",
	fill: "currentColor"
}));
var CancelIcon = () => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: "19",
	viewBox: "0 0 20 19",
	width: "20",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Cancel"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM7.29297 13.3018C7.58301 13.3018 7.81152 13.2139 7.99609 13.0205L10 11.0166L12.0127 13.0205C12.1973 13.2051 12.4258 13.3018 12.707 13.3018C13.2432 13.3018 13.6562 12.8887 13.6562 12.3525C13.6562 12.0977 13.5508 11.8691 13.3662 11.6934L11.3535 9.67188L13.375 7.6416C13.5596 7.44824 13.6562 7.22852 13.6562 6.98242C13.6562 6.44629 13.2432 6.0332 12.7158 6.0332C12.4346 6.0332 12.2148 6.12109 12.0215 6.31445L10 8.32715L7.9873 6.32324C7.80273 6.12988 7.58301 6.04199 7.29297 6.04199C6.76562 6.04199 6.35254 6.45508 6.35254 6.99121C6.35254 7.2373 6.44922 7.46582 6.63379 7.6416L8.65527 9.67188L6.63379 11.6934C6.44922 11.8691 6.35254 12.1064 6.35254 12.3525C6.35254 12.8887 6.76562 13.3018 7.29297 13.3018Z",
	fill: "currentColor"
}));
var SuccessIcon = () => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: "20",
	viewBox: "0 0 20 20",
	width: "20",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Success"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M10 19.4443C15.0977 19.4443 19.2812 15.252 19.2812 10.1543C19.2812 5.06543 15.0889 0.873047 10 0.873047C4.90234 0.873047 0.71875 5.06543 0.71875 10.1543C0.71875 15.252 4.91113 19.4443 10 19.4443ZM10 17.1328C6.1416 17.1328 3.03906 14.0215 3.03906 10.1543C3.03906 6.2959 6.13281 3.18457 10 3.18457C13.8584 3.18457 16.9697 6.2959 16.9697 10.1543C16.9785 14.0215 13.8672 17.1328 10 17.1328ZM9.07715 14.3379C9.4375 14.3379 9.7627 14.1533 9.97363 13.8369L13.7441 8.00977C13.8848 7.79883 13.9814 7.5791 13.9814 7.36816C13.9814 6.84961 13.5244 6.48926 13.0322 6.48926C12.707 6.48926 12.4258 6.66504 12.2148 7.0166L9.05957 12.0967L7.5918 10.2949C7.37207 10.0225 7.13477 9.9082 6.84473 9.9082C6.33496 9.9082 5.92188 10.3125 5.92188 10.8223C5.92188 11.0684 6.00098 11.2793 6.18555 11.5078L8.1543 13.8545C8.40918 14.1709 8.70801 14.3379 9.07715 14.3379Z",
	fill: "currentColor"
}));
var getTxStatusIcon = (status) => {
	switch (status) {
		case "pending": return SpinnerIcon;
		case "confirmed": return SuccessIcon;
		case "failed": return CancelIcon;
		default: return SpinnerIcon;
	}
};
function TxItem({ tx }) {
	const mobile = isMobile();
	const Icon = getTxStatusIcon(tx.status);
	const color = tx.status === "failed" ? "error" : "accentColor";
	const { chain: activeChain } = useConnection();
	const confirmationStatus = tx.status === "confirmed" ? "Confirmed" : tx.status === "failed" ? "Failed" : "Pending";
	const explorerLink = chainToExplorerUrl(activeChain);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Box, {
		...explorerLink ? {
			as: "a",
			background: { hover: "profileForeground" },
			borderRadius: "menuButton",
			className: touchableStyles({ active: "shrink" }),
			href: `${explorerLink}/tx/${tx.hash}`,
			rel: "noreferrer noopener",
			target: "_blank",
			transition: "default"
		} : {},
		color: "modalText",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: "8",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: mobile ? "16" : "14"
	}, /* @__PURE__ */ import_react.createElement(Box, { color }, /* @__PURE__ */ import_react.createElement(Icon, null)), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: mobile ? "3" : "1"
	}, /* @__PURE__ */ import_react.createElement(Box, null, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		font: "body",
		size: mobile ? "16" : "14",
		weight: "bold"
	}, tx?.description)), /* @__PURE__ */ import_react.createElement(Box, null, /* @__PURE__ */ import_react.createElement(Text, {
		color: tx.status === "pending" ? "modalTextSecondary" : color,
		font: "body",
		size: "14",
		weight: mobile ? "medium" : "regular"
	}, confirmationStatus)))), explorerLink && /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		color: "modalTextDim",
		display: "flex"
	}, /* @__PURE__ */ import_react.createElement(ExternalLinkIcon, null))));
}
var NUMBER_OF_VISIBLE_TXS = 3;
function TxList({ address }) {
	const recentTransactions = useRecentTransactions();
	const clearRecentTransactions = useClearRecentTransactions();
	const { chain: activeChain } = useConnection();
	const explorerLink = chainToExplorerUrl(activeChain);
	const visibleTxs = recentTransactions.slice(0, NUMBER_OF_VISIBLE_TXS);
	const hasTransactions = visibleTxs.length > 0;
	const mobile = isMobile();
	const { appName } = (0, import_react.useContext)(AppContext);
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "10",
		paddingBottom: "2",
		paddingTop: "16",
		paddingX: mobile ? "8" : "18"
	}, hasTransactions && /* @__PURE__ */ import_react.createElement(Box, {
		paddingBottom: mobile ? "4" : "0",
		paddingTop: "8",
		paddingX: mobile ? "12" : "6"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		justifyContent: "space-between"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: mobile ? "16" : "14",
		weight: "semibold"
	}, i18n2.t("profile.transactions.recent.title")), /* @__PURE__ */ import_react.createElement(Box, { style: {
		marginBottom: -6,
		marginLeft: -10,
		marginRight: -10,
		marginTop: -6
	} }, /* @__PURE__ */ import_react.createElement(Box, {
		as: "button",
		background: { hover: "profileForeground" },
		borderRadius: "actionButton",
		className: touchableStyles({ active: "shrink" }),
		onClick: clearRecentTransactions,
		paddingX: mobile ? "8" : "12",
		paddingY: mobile ? "4" : "5",
		transition: "default",
		type: "button"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: mobile ? "16" : "14",
		weight: "semibold"
	}, i18n2.t("profile.transactions.clear.label")))))), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "4"
	}, hasTransactions ? visibleTxs.map((tx) => /* @__PURE__ */ import_react.createElement(TxItem, {
		key: tx.hash,
		tx
	})) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Box, { padding: mobile ? "12" : "8" }, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextDim",
		size: mobile ? "16" : "14",
		weight: mobile ? "medium" : "bold"
	}, appName ? i18n2.t("profile.transactions.description", { appName }) : i18n2.t("profile.transactions.description_fallback"))), mobile && /* @__PURE__ */ import_react.createElement(Box, {
		background: "generalBorderDim",
		height: "1",
		marginX: "12",
		marginY: "8"
	})))), explorerLink && /* @__PURE__ */ import_react.createElement(Box, {
		paddingBottom: "18",
		paddingX: mobile ? "8" : "18"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		as: "a",
		background: { hover: "profileForeground" },
		borderRadius: "menuButton",
		className: touchableStyles({ active: "shrink" }),
		color: "modalTextDim",
		display: "flex",
		flexDirection: "row",
		href: `${explorerLink}/address/${address}`,
		justifyContent: "space-between",
		paddingX: "8",
		paddingY: "12",
		rel: "noreferrer noopener",
		style: { willChange: "transform" },
		target: "_blank",
		transition: "default",
		width: "full",
		...mobile ? { paddingLeft: "12" } : {}
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		font: "body",
		size: mobile ? "16" : "14",
		weight: mobile ? "semibold" : "bold"
	}, i18n2.t("profile.explorer.label")), /* @__PURE__ */ import_react.createElement(ExternalLinkIcon, null))));
}
function ProfileDetailsAction({ action, icon, label, testId, url }) {
	const mobile = isMobile();
	return /* @__PURE__ */ import_react.createElement(Box, {
		...url ? {
			as: "a",
			href: url,
			rel: "noreferrer noopener",
			target: "_blank"
		} : {
			as: "button",
			type: "button"
		},
		background: {
			base: "profileAction",
			...!mobile ? { hover: "profileActionHover" } : {}
		},
		borderRadius: "menuButton",
		boxShadow: "profileDetailsAction",
		className: touchableStyles({
			active: "shrinkSm",
			hover: !mobile ? "grow" : void 0
		}),
		display: "flex",
		onClick: action,
		padding: mobile ? "6" : "8",
		style: { willChange: "transform" },
		testId,
		transition: "default",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "1",
		justifyContent: "center",
		paddingTop: "2",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		color: "modalText",
		height: "max"
	}, icon), /* @__PURE__ */ import_react.createElement(Box, null, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: mobile ? "12" : "13",
		weight: "semibold"
	}, label))));
}
function ProfileDetails({ address, ensAvatar, ensName, balance, onClose, onDisconnect }) {
	const showRecentTransactions = (0, import_react.useContext)(ShowRecentTransactionsContext);
	const [copiedAddress, setCopiedAddress] = (0, import_react.useState)(false);
	const copyAddressAction = (0, import_react.useCallback)(() => {
		if (address) {
			navigator.clipboard.writeText(address);
			setCopiedAddress(true);
		}
	}, [address]);
	(0, import_react.useEffect)(() => {
		if (copiedAddress) {
			const timer = setTimeout(() => {
				setCopiedAddress(false);
			}, 1500);
			return () => clearTimeout(timer);
		}
	}, [copiedAddress]);
	if (!address) return null;
	const accountName = ensName ? formatENS(ensName) : formatAddress(address);
	const ethBalance = balance?.formatted;
	const displayBalance = ethBalance ? abbreviateETHBalance(Number.parseFloat(ethBalance)) : void 0;
	const titleId = "rk_profile_title";
	const mobile = isMobile();
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		background: "profileForeground",
		padding: "16"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: mobile ? "16" : "12",
		justifyContent: "center",
		margin: "8",
		style: { textAlign: "center" }
	}, /* @__PURE__ */ import_react.createElement(Box, { style: {
		position: "absolute",
		right: 16,
		top: 16,
		willChange: "transform"
	} }, /* @__PURE__ */ import_react.createElement(CloseButton, { onClose })), " ", /* @__PURE__ */ import_react.createElement(Box, { marginTop: mobile ? "24" : "0" }, /* @__PURE__ */ import_react.createElement(Avatar, {
		address,
		imageUrl: ensAvatar,
		size: mobile ? 82 : 74
	})), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: mobile ? "4" : "0",
		textAlign: "center"
	}, /* @__PURE__ */ import_react.createElement(Box, { textAlign: "center" }, /* @__PURE__ */ import_react.createElement(Text, {
		as: "h1",
		color: "modalText",
		id: titleId,
		size: mobile ? "20" : "18",
		weight: "heavy"
	}, accountName)), !!balance && /* @__PURE__ */ import_react.createElement(Box, { textAlign: "center" }, /* @__PURE__ */ import_react.createElement(Text, {
		as: "h1",
		color: "modalTextSecondary",
		id: titleId,
		size: mobile ? "16" : "14",
		weight: "semibold"
	}, displayBalance, " ", balance.symbol)))), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "row",
		gap: "8",
		margin: "2",
		marginTop: "16"
	}, /* @__PURE__ */ import_react.createElement(ProfileDetailsAction, {
		action: copyAddressAction,
		icon: copiedAddress ? /* @__PURE__ */ import_react.createElement(CopiedIcon, null) : /* @__PURE__ */ import_react.createElement(CopyIcon, null),
		label: copiedAddress ? i18n2.t("profile.copy_address.copied") : i18n2.t("profile.copy_address.label")
	}), /* @__PURE__ */ import_react.createElement(ProfileDetailsAction, {
		action: onDisconnect,
		icon: /* @__PURE__ */ import_react.createElement(DisconnectIcon, null),
		label: i18n2.t("profile.disconnect.label"),
		testId: "disconnect-button"
	}))), showRecentTransactions && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Box, {
		background: "generalBorder",
		height: "1",
		marginTop: "-1"
	}), /* @__PURE__ */ import_react.createElement(Box, null, /* @__PURE__ */ import_react.createElement(TxList, { address })))));
}
function AccountModal({ onClose, open }) {
	const { address } = useConnection();
	const { balance, ensAvatar, ensName } = useProfile({
		address,
		includeBalance: open
	});
	const { disconnect } = useDisconnect();
	if (!address) return null;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, address && /* @__PURE__ */ import_react.createElement(Dialog, {
		onClose,
		open,
		titleId: "rk_account_modal_title"
	}, /* @__PURE__ */ import_react.createElement(DialogContent, {
		bottomSheetOnMobile: true,
		padding: "0"
	}, /* @__PURE__ */ import_react.createElement(ProfileDetails, {
		address,
		ensAvatar,
		ensName,
		balance,
		onClose,
		onDisconnect: disconnect
	}))));
}
var DisconnectSqIcon = ({ size }) => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: size,
	viewBox: "0 0 28 28",
	width: size,
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Disconnect"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M6.742 22.195h8.367c1.774 0 2.743-.968 2.743-2.758V16.11h-2.016v3.11c0 .625-.305.96-.969.96H6.984c-.664 0-.968-.335-.968-.96V7.984c0-.632.304-.968.968-.968h7.883c.664 0 .969.336.969.968v3.133h2.016v-3.36c0-1.78-.97-2.757-2.743-2.757H6.742C4.97 5 4 5.977 4 7.758v11.68c0 1.789.969 2.757 2.742 2.757Zm5.438-7.703h7.601l1.149-.07-.602.406-1.008.938a.816.816 0 0 0-.258.593c0 .407.313.782.758.782.227 0 .39-.086.547-.243l2.492-2.593c.235-.235.313-.47.313-.711 0-.242-.078-.477-.313-.719l-2.492-2.586c-.156-.156-.32-.25-.547-.25-.445 0-.758.367-.758.781 0 .227.094.446.258.594l1.008.945.602.407-1.149-.079H12.18a.904.904 0 0 0 0 1.805Z",
	fill: "currentColor"
}));
var unsetBackgroundOnHover = "v9horb0";
var MenuButton = import_react.forwardRef(({ children, currentlySelected = false, onClick, testId, ...urlProps }, ref) => {
	const mobile = isMobile();
	return /* @__PURE__ */ import_react.createElement(Box, {
		as: "button",
		borderRadius: "menuButton",
		disabled: currentlySelected,
		display: "flex",
		onClick,
		ref,
		testId,
		type: "button"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		borderRadius: "menuButton",
		className: [mobile ? unsetBackgroundOnHover : void 0, !currentlySelected && touchableStyles({ active: "shrink" })],
		padding: mobile ? "8" : "6",
		transition: "default",
		width: "full",
		...currentlySelected ? {
			background: "accentColor",
			borderColor: "selectedOptionBorder",
			borderStyle: "solid",
			borderWidth: "1",
			boxShadow: "selectedOption",
			color: "accentColorForeground"
		} : {
			background: { hover: "menuItemBackground" },
			color: "modalText",
			transition: "default"
		},
		...urlProps
	}, children));
});
MenuButton.displayName = "MenuButton";
var Chain = ({ chainId, currentChainId, switchChain, chainIconSize, isLoading, src: src7, name, iconBackground, idx }) => {
	const mobile = isMobile();
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	const rainbowkitChains = useRainbowKitChains();
	const isCurrentChain = currentChainId === chainId;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(MenuButton, {
		currentlySelected: isCurrentChain,
		onClick: isCurrentChain ? void 0 : () => switchChain({ chainId }),
		testId: `chain-option-${chainId}`
	}, /* @__PURE__ */ import_react.createElement(Box, {
		fontFamily: "body",
		fontSize: "16",
		fontWeight: "bold"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: "4",
		height: chainIconSize
	}, src7 && /* @__PURE__ */ import_react.createElement(Box, {
		height: "full",
		marginRight: "8"
	}, /* @__PURE__ */ import_react.createElement(AsyncImage, {
		alt: name,
		background: iconBackground,
		borderRadius: "full",
		height: chainIconSize,
		src: src7,
		width: chainIconSize,
		testId: `chain-option-${chainId}-icon`
	})), /* @__PURE__ */ import_react.createElement("div", null, name ?? name)), isCurrentChain && /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		marginRight: "6"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "accentColorForeground",
		size: "14",
		weight: "medium"
	}, i18n2.t("chains.connected")), /* @__PURE__ */ import_react.createElement(Box, {
		background: "connectionIndicator",
		borderColor: "selectedOptionBorder",
		borderRadius: "full",
		borderStyle: "solid",
		borderWidth: "1",
		height: "8",
		marginLeft: "8",
		width: "8"
	})), isLoading && /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		marginRight: "6"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "14",
		weight: "medium"
	}, i18n2.t("chains.confirm")), /* @__PURE__ */ import_react.createElement(Box, {
		background: "standby",
		borderRadius: "full",
		height: "8",
		marginLeft: "8",
		width: "8"
	}))))), mobile && idx < rainbowkitChains.length - 1 && /* @__PURE__ */ import_react.createElement(Box, {
		background: "generalBorderDim",
		height: "1",
		marginX: "8"
	}));
};
var Chain_default = Chain;
var DesktopScrollClassName = "_18dqw9x0";
var MobileScrollClassName = "_18dqw9x1";
function ChainModal({ onClose, open }) {
	const { chainId } = useConnection();
	const { chains } = useConfig();
	const [pendingChainId, setPendingChainId] = (0, import_react.useState)(null);
	const { switchChain } = useSwitchChain({ mutation: {
		onMutate: ({ chainId: _chainId }) => {
			setPendingChainId(_chainId);
		},
		onSuccess: () => {
			if (pendingChainId) setPendingChainId(null);
		},
		onError: () => {
			if (pendingChainId) setPendingChainId(null);
		},
		onSettled: () => {
			onClose();
		}
	} });
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	const { disconnect } = useDisconnect();
	const titleId = "rk_chain_modal_title";
	const mobile = isMobile();
	const isCurrentChainSupported = chains.some((chain) => chain.id === chainId);
	const chainIconSize = mobile ? "36" : "28";
	const rainbowkitChains = useRainbowKitChains();
	if (!chainId) return null;
	return /* @__PURE__ */ import_react.createElement(Dialog, {
		onClose,
		open,
		titleId
	}, /* @__PURE__ */ import_react.createElement(DialogContent, {
		bottomSheetOnMobile: true,
		paddingBottom: "0"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "14"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	}, mobile && /* @__PURE__ */ import_react.createElement(Box, { width: "30" }), /* @__PURE__ */ import_react.createElement(Box, {
		paddingBottom: "0",
		paddingLeft: "8",
		paddingTop: "4"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		as: "h1",
		color: "modalText",
		id: titleId,
		size: mobile ? "20" : "18",
		weight: "heavy"
	}, i18n2.t("chains.title"))), /* @__PURE__ */ import_react.createElement(CloseButton, { onClose })), !isCurrentChainSupported && /* @__PURE__ */ import_react.createElement(Box, {
		marginX: "8",
		textAlign: mobile ? "center" : "left"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, i18n2.t("chains.wrong_network"))), /* @__PURE__ */ import_react.createElement(Box, {
		className: mobile ? MobileScrollClassName : DesktopScrollClassName,
		display: "flex",
		flexDirection: "column",
		gap: "4",
		padding: "2",
		paddingBottom: "16"
	}, rainbowkitChains.map(({ iconBackground, iconUrl, id, name }, idx) => {
		return /* @__PURE__ */ import_react.createElement(Chain_default, {
			key: id,
			chainId: id,
			currentChainId: chainId,
			switchChain,
			chainIconSize,
			isLoading: pendingChainId === id,
			src: iconUrl,
			name,
			iconBackground,
			idx
		});
	}), !isCurrentChainSupported && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Box, {
		background: "generalBorderDim",
		height: "1",
		marginX: "8"
	}), /* @__PURE__ */ import_react.createElement(MenuButton, {
		onClick: () => disconnect(),
		testId: "chain-option-disconnect"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		color: "error",
		fontFamily: "body",
		fontSize: "16",
		fontWeight: "bold"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: "4",
		height: chainIconSize
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		color: "error",
		height: chainIconSize,
		justifyContent: "center",
		marginRight: "8"
	}, /* @__PURE__ */ import_react.createElement(DisconnectSqIcon, { size: Number(chainIconSize) })), /* @__PURE__ */ import_react.createElement("div", null, i18n2.t("chains.disconnect")))))))))));
}
function groupBy(items, getKey) {
	const groupedItems = {};
	for (const item of items) {
		const key = getKey(item);
		if (!key) continue;
		if (!groupedItems[key]) groupedItems[key] = [];
		groupedItems[key].push(item);
	}
	return groupedItems;
}
var DisclaimerLink = ({ children, href }) => {
	return /* @__PURE__ */ import_react.createElement(Box, {
		as: "a",
		color: "accentColor",
		href,
		rel: "noreferrer",
		target: "_blank"
	}, children);
};
var DisclaimerText = ({ children }) => {
	return /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "12",
		weight: "medium"
	}, children);
};
function ConnectModalIntro({ compactModeEnabled = false, getWallet }) {
	const { disclaimer: Disclaimer, learnMoreUrl } = (0, import_react.useContext)(AppContext);
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		color: "accentColor",
		display: "flex",
		flexDirection: "column",
		height: "full",
		justifyContent: "space-around"
	}, /* @__PURE__ */ import_react.createElement(Box, { marginBottom: "10" }, !compactModeEnabled && /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "18",
		weight: "heavy"
	}, i18n2.t("intro.title"))), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "32",
		justifyContent: "center",
		marginY: "20",
		style: { maxWidth: 312 }
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: "16"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		borderRadius: "6",
		height: "48",
		minWidth: "48",
		width: "48"
	}, /* @__PURE__ */ import_react.createElement(AssetsIcon, null)), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "4"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "14",
		weight: "bold"
	}, i18n2.t("intro.digital_asset.title")), /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, i18n2.t("intro.digital_asset.description")))), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: "16"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		borderRadius: "6",
		height: "48",
		minWidth: "48",
		width: "48"
	}, /* @__PURE__ */ import_react.createElement(LoginIcon, null)), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "4"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "14",
		weight: "bold"
	}, i18n2.t("intro.login.title")), /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, i18n2.t("intro.login.description"))))), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "12",
		justifyContent: "center",
		margin: "10"
	}, /* @__PURE__ */ import_react.createElement(ActionButton, {
		label: i18n2.t("intro.get.label"),
		onClick: getWallet
	}), /* @__PURE__ */ import_react.createElement(Box, {
		as: "a",
		className: touchableStyles({
			active: "shrink",
			hover: "grow"
		}),
		display: "block",
		href: learnMoreUrl,
		paddingX: "12",
		paddingY: "4",
		rel: "noreferrer",
		style: { willChange: "transform" },
		target: "_blank",
		transition: "default"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "accentColor",
		size: "14",
		weight: "bold"
	}, i18n2.t("intro.learn_more.label")))), Disclaimer && !compactModeEnabled && /* @__PURE__ */ import_react.createElement(Box, {
		marginBottom: "8",
		marginTop: "12",
		textAlign: "center"
	}, /* @__PURE__ */ import_react.createElement(Disclaimer, {
		Link: DisclaimerLink,
		Text: DisclaimerText
	}))));
}
var BackIcon = () => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: "17",
	viewBox: "0 0 11 17",
	width: "11",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Back"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M0.99707 8.6543C0.99707 9.08496 1.15527 9.44531 1.51562 9.79688L8.16016 16.3096C8.43262 16.5732 8.74902 16.7051 9.13574 16.7051C9.90918 16.7051 10.5508 16.0811 10.5508 15.3076C10.5508 14.9121 10.3838 14.5605 10.0938 14.2705L4.30176 8.64551L10.0938 3.0293C10.3838 2.74805 10.5508 2.3877 10.5508 2.00098C10.5508 1.23633 9.90918 0.603516 9.13574 0.603516C8.74902 0.603516 8.43262 0.735352 8.16016 0.999023L1.51562 7.51172C1.15527 7.85449 1.00586 8.21484 0.99707 8.6543Z",
	fill: "currentColor"
}));
var InfoIcon = () => /* @__PURE__ */ import_react.createElement("svg", {
	fill: "none",
	height: "12",
	viewBox: "0 0 8 12",
	width: "8",
	xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react.createElement("title", null, "Info"), /* @__PURE__ */ import_react.createElement("path", {
	d: "M3.64258 7.99609C4.19336 7.99609 4.5625 7.73828 4.68555 7.24609C4.69141 7.21094 4.70312 7.16406 4.70898 7.13477C4.80859 6.60742 5.05469 6.35547 6.04492 5.76367C7.14648 5.10156 7.67969 4.3457 7.67969 3.24414C7.67969 1.39844 6.17383 0.255859 3.95898 0.255859C2.32422 0.255859 1.05859 0.894531 0.548828 1.86719C0.396484 2.14844 0.320312 2.44727 0.320312 2.74023C0.314453 3.37305 0.742188 3.79492 1.42188 3.79492C1.91406 3.79492 2.33594 3.54883 2.53516 3.11523C2.78711 2.47656 3.23242 2.21289 3.83594 2.21289C4.55664 2.21289 5.10742 2.65234 5.10742 3.29102C5.10742 3.9707 4.7793 4.29883 3.81836 4.87891C3.02148 5.36523 2.50586 5.92773 2.50586 6.76562V6.90039C2.50586 7.55664 2.96289 7.99609 3.64258 7.99609ZM3.67188 11.4473C4.42773 11.4473 5.04297 10.8672 5.04297 10.1406C5.04297 9.41406 4.42773 8.83984 3.67188 8.83984C2.91602 8.83984 2.30664 9.41406 2.30664 10.1406C2.30664 10.8672 2.91602 11.4473 3.67188 11.4473Z",
	fill: "currentColor"
}));
var InfoButton = ({ "aria-label": ariaLabel = "Info", onClick }) => {
	const mobile = isMobile();
	return /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		"aria-label": ariaLabel,
		as: "button",
		background: "closeButtonBackground",
		borderColor: "actionButtonBorder",
		borderRadius: "full",
		borderStyle: "solid",
		borderWidth: mobile ? "0" : "1",
		className: touchableStyles({
			active: "shrinkSm",
			hover: "growLg"
		}),
		color: "closeButton",
		display: "flex",
		height: mobile ? "30" : "28",
		justifyContent: "center",
		onClick,
		style: { willChange: "transform" },
		transition: "default",
		type: "button",
		width: mobile ? "30" : "28"
	}, /* @__PURE__ */ import_react.createElement(InfoIcon, null));
};
var useCoolMode = (imageUrl) => {
	const ref = (0, import_react.useRef)(null);
	const coolModeEnabled = (0, import_react.useContext)(CoolModeContext);
	const resolvedImageUrl = useAsyncImage(imageUrl);
	(0, import_react.useEffect)(() => {
		if (coolModeEnabled && ref.current && resolvedImageUrl) return makeElementCool(ref.current, resolvedImageUrl);
	}, [coolModeEnabled, resolvedImageUrl]);
	return ref;
};
var getContainer = () => {
	const id = "_rk_coolMode";
	const existingContainer = document.getElementById(id);
	if (existingContainer) return existingContainer;
	const container = document.createElement("div");
	container.setAttribute("id", id);
	container.setAttribute("style", [
		"overflow:hidden",
		"position:fixed",
		"height:100%",
		"top:0",
		"left:0",
		"right:0",
		"bottom:0",
		"pointer-events:none",
		"z-index:2147483647"
	].join(";"));
	document.body.appendChild(container);
	return container;
};
var instanceCounter = 0;
function makeElementCool(element2, imageUrl) {
	instanceCounter++;
	const sizes = [
		15,
		20,
		25,
		35,
		45
	];
	const limit = 35;
	let particles = [];
	let autoAddParticle = false;
	let mouseX = 0;
	let mouseY = 0;
	const container = getContainer();
	function createParticle() {
		const size = sizes[Math.floor(Math.random() * sizes.length)];
		const speedHorz = Math.random() * 10;
		const speedUp = Math.random() * 25;
		const spinVal = Math.random() * 360;
		const spinSpeed = Math.random() * 35 * (Math.random() <= .5 ? -1 : 1);
		const top = mouseY - size / 2;
		const left = mouseX - size / 2;
		const direction = Math.random() <= .5 ? -1 : 1;
		const particle = document.createElement("div");
		particle.innerHTML = `<img src="${imageUrl}" width="${size}" height="${size}" style="border-radius: 25%">`;
		particle.setAttribute("style", [
			"position:absolute",
			"will-change:transform",
			`top:${top}px`,
			`left:${left}px`,
			`transform:rotate(${spinVal}deg)`
		].join(";"));
		container.appendChild(particle);
		particles.push({
			direction,
			element: particle,
			left,
			size,
			speedHorz,
			speedUp,
			spinSpeed,
			spinVal,
			top
		});
	}
	function updateParticles() {
		for (const p of particles) {
			p.left = p.left - p.speedHorz * p.direction;
			p.top = p.top - p.speedUp;
			p.speedUp = Math.min(p.size, p.speedUp - 1);
			p.spinVal = p.spinVal + p.spinSpeed;
			if (p.top >= Math.max(window.innerHeight, document.body.clientHeight) + p.size) {
				particles = particles.filter((o) => o !== p);
				p.element.remove();
			}
			p.element.setAttribute("style", [
				"position:absolute",
				"will-change:transform",
				`top:${p.top}px`,
				`left:${p.left}px`,
				`transform:rotate(${p.spinVal}deg)`
			].join(";"));
		}
	}
	let animationFrame;
	function loop() {
		if (autoAddParticle && particles.length < limit) createParticle();
		updateParticles();
		animationFrame = requestAnimationFrame(loop);
	}
	loop();
	const isTouchInteraction = "ontouchstart" in window || navigator.msMaxTouchPoints;
	const tap = isTouchInteraction ? "touchstart" : "mousedown";
	const tapEnd = isTouchInteraction ? "touchend" : "mouseup";
	const move = isTouchInteraction ? "touchmove" : "mousemove";
	const updateMousePosition = (e) => {
		if ("touches" in e) {
			mouseX = e.touches?.[0].clientX;
			mouseY = e.touches?.[0].clientY;
		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}
	};
	const tapHandler = (e) => {
		updateMousePosition(e);
		autoAddParticle = true;
	};
	const disableAutoAddParticle = () => {
		autoAddParticle = false;
	};
	element2.addEventListener(move, updateMousePosition, { passive: false });
	element2.addEventListener(tap, tapHandler);
	element2.addEventListener(tapEnd, disableAutoAddParticle);
	element2.addEventListener("mouseleave", disableAutoAddParticle);
	return () => {
		element2.removeEventListener(move, updateMousePosition);
		element2.removeEventListener(tap, tapHandler);
		element2.removeEventListener(tapEnd, disableAutoAddParticle);
		element2.removeEventListener("mouseleave", disableAutoAddParticle);
		const interval = setInterval(() => {
			if (animationFrame && particles.length === 0) {
				cancelAnimationFrame(animationFrame);
				clearInterval(interval);
				if (--instanceCounter === 0) container.remove();
			}
		}, 500);
	};
}
var transparentBorder = "g5kl0l0";
var ModalSelection = ({ as = "button", currentlySelected = false, iconBackground, iconUrl, name, onClick, ready, recent, testId, isRainbowKitConnector: isRainbowKitConnector2, ...urlProps }) => {
	const coolModeRef = useCoolMode(iconUrl);
	const [isMouseOver, setIsMouseOver] = import_react.useState(false);
	const { i18n: i18n2 } = import_react.useContext(I18nContext);
	return /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		onMouseEnter: () => setIsMouseOver(true),
		onMouseLeave: () => setIsMouseOver(false),
		ref: coolModeRef
	}, /* @__PURE__ */ import_react.createElement(Box, {
		as,
		borderRadius: "menuButton",
		borderStyle: "solid",
		borderWidth: "1",
		className: !currentlySelected ? [transparentBorder, touchableStyles({ active: "shrink" })] : void 0,
		disabled: currentlySelected,
		onClick,
		padding: "5",
		style: { willChange: "transform" },
		testId,
		transition: "default",
		width: "full",
		...currentlySelected ? {
			background: "accentColor",
			borderColor: "selectedOptionBorder",
			boxShadow: "selectedWallet"
		} : { background: { hover: "menuItemBackground" } },
		...urlProps
	}, /* @__PURE__ */ import_react.createElement(Box, {
		color: currentlySelected ? "accentColorForeground" : "modalText",
		disabled: !ready,
		fontFamily: "body",
		fontSize: "16",
		fontWeight: "bold",
		transition: "default"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: "12"
	}, /* @__PURE__ */ import_react.createElement(AsyncImage, {
		background: iconBackground,
		...!isMouseOver && isRainbowKitConnector2 ? { borderColor: "actionButtonBorder" } : {},
		useAsImage: !isRainbowKitConnector2,
		borderRadius: "6",
		height: "28",
		src: iconUrl,
		width: "28"
	}), /* @__PURE__ */ import_react.createElement(Box, null, /* @__PURE__ */ import_react.createElement(Box, {
		style: { marginTop: recent ? -2 : void 0 },
		maxWidth: "200"
	}, name), recent && /* @__PURE__ */ import_react.createElement(Text, {
		color: currentlySelected ? "accentColorForeground" : "accentColor",
		size: "12",
		style: {
			lineHeight: 1,
			marginTop: -1
		},
		weight: "medium"
	}, i18n2.t("connect.recent")))))));
};
ModalSelection.displayName = "ModalSelection";
var storageKey5 = "rk-latest-id";
function getLatestWalletId() {
	return typeof localStorage !== "undefined" ? localStorage.getItem(storageKey5) || "" : "";
}
function addLatestWalletId(walletId) {
	localStorage.setItem(storageKey5, walletId);
}
function clearLatestWalletId() {
	localStorage.removeItem(storageKey5);
}
var convertHexToRGBA = (hexCode, opacity = 1) => {
	let hex = hexCode.replace("#", "");
	if (hex.length === 3) hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
	const r = Number.parseInt(hex.substring(0, 2), 16);
	const g = Number.parseInt(hex.substring(2, 4), 16);
	const b = Number.parseInt(hex.substring(4, 6), 16);
	if (opacity > 1 && opacity <= 100) opacity = opacity / 100;
	return `rgba(${r},${g},${b},${opacity})`;
};
var getGradientRGBAs = (hexColor) => {
	if (!hexColor) return null;
	return [
		convertHexToRGBA(hexColor, .2),
		convertHexToRGBA(hexColor, .14),
		convertHexToRGBA(hexColor, .1)
	];
};
var isHexString = (color) => {
	return /^#([0-9a-f]{3}){1,2}$/i.test(color);
};
var src3 = async () => (await import("./connect-UA7M4XW6-gitQZ0VE.js")).default;
var preloadConnectIcon = () => loadImages(src3);
var ConnectIcon = () => /* @__PURE__ */ import_react.createElement(AsyncImage, {
	background: "#515a70",
	borderColor: "generalBorder",
	borderRadius: "10",
	height: "48",
	src: src3,
	width: "48"
});
var src4 = async () => (await import("./create-FASO7PVG-DJSU8iox.js")).default;
var preloadCreateIcon = () => loadImages(src4);
var CreateIcon = () => /* @__PURE__ */ import_react.createElement(AsyncImage, {
	background: "#e3a5e8",
	borderColor: "generalBorder",
	borderRadius: "10",
	height: "48",
	src: src4,
	width: "48"
});
var src5 = async () => (await import("./refresh-S4T5V5GX-arN2IQ8S.js")).default;
var preloadRefreshIcon = () => loadImages(src5);
var RefreshIcon = () => /* @__PURE__ */ import_react.createElement(AsyncImage, {
	background: "#515a70",
	borderColor: "generalBorder",
	borderRadius: "10",
	height: "48",
	src: src5,
	width: "48"
});
var src6 = async () => (await import("./scan-4UYSQ56Q-Da-CKtBg.js")).default;
var preloadScanIcon = () => loadImages(src6);
var ScanIcon = () => /* @__PURE__ */ import_react.createElement(AsyncImage, {
	background: "#515a70",
	borderColor: "generalBorder",
	borderRadius: "10",
	height: "48",
	src: src6,
	width: "48"
});
var QRCodeBackgroundClassName = "_1vwt0cg0";
var ScrollClassName = "_1vwt0cg2 ju367v7a ju367v7v";
var sidebar = "_1vwt0cg3";
var sidebarCompactMode = "_1vwt0cg4";
function QRCode({ ecc = "medium", logoBackground, logoSize = 50, logoUrl, size: sizeProp = 200, uri }) {
	const padding = "20";
	const size = sizeProp - Number.parseInt(padding, 10) * 2;
	const resolvedLogoUrl = useAsyncImage(logoUrl);
	return /* @__PURE__ */ import_react.createElement(Box, {
		borderColor: "generalBorder",
		borderRadius: "menuButton",
		borderStyle: "solid",
		borderWidth: "1",
		className: QRCodeBackgroundClassName,
		padding,
		width: "max"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		style: {
			height: size,
			userSelect: "none",
			width: size
		},
		userSelect: "none"
	}, /* @__PURE__ */ import_react.createElement(Cuer.Root, {
		errorCorrection: ecc,
		size,
		value: uri
	}, /* @__PURE__ */ import_react.createElement(Cuer.Cells, { radius: 1 }), /* @__PURE__ */ import_react.createElement(Cuer.Finder, { radius: .25 }), resolvedLogoUrl && /* @__PURE__ */ import_react.createElement(Cuer.Arena, null, /* @__PURE__ */ import_react.createElement("img", {
		alt: "Wallet Logo",
		src: resolvedLogoUrl,
		style: {
			objectFit: "cover",
			height: "88%",
			width: "88%",
			borderRadius: "22.5%",
			backgroundColor: logoBackground
		}
	})))));
}
var getBrowserSrc = async () => {
	switch (getBrowser()) {
		case "Arc": return (await import("./Arc-VDBY7LNS-pqEBF5vj.js")).default;
		case "Brave": return (await import("./Brave-BRAKJXDS-D9fCFaV9.js")).default;
		case "Chrome": return (await import("./Chrome-65Q5P54Y-G5xQC8XB.js")).default;
		case "Edge": return (await import("./Edge-XSPUTORV-Hrbvvocx.js")).default;
		case "Firefox": return (await import("./Firefox-AAHGJQIP-jfGmJYoX.js")).default;
		case "Opera": return (await import("./Opera-KQZLSACL-Cxi04xFZ.js")).default;
		case "Safari": return (await import("./Safari-ZPL37GXR-BigJAC-a.js")).default;
		default: return (await import("./Browser-76IHF3Y2-DsP5LroE.js")).default;
	}
};
var preloadBrowserIcon = () => loadImages(getBrowserSrc);
var getPlatformSrc = async () => {
	switch (getPlatform()) {
		case "Windows": return (await import("./Windows-PPTHQER6-DjjkzgIS.js")).default;
		case "macOS": return (await import("./Macos-MW4AE7LN-DlheQPri.js")).default;
		case "Linux": return (await import("./Linux-OO4TNCLJ-C8zRwlcu.js")).default;
		default: return (await import("./Linux-OO4TNCLJ-C8zRwlcu.js")).default;
	}
};
var preloadPlatformIcon = () => loadImages(getPlatformSrc);
function GetDetail({ getWalletDownload, compactModeEnabled }) {
	const shownWallets = useWalletConnectors().filter((wallet) => wallet.isRainbowKitConnector).splice(0, 5);
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	return /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		height: "full",
		marginTop: "18",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "28",
		height: "full",
		width: "full"
	}, shownWallets?.filter((wallet) => wallet.extensionDownloadUrl || wallet.desktopDownloadUrl || wallet.qrCode && wallet.downloadUrls?.qrCode).map((wallet) => {
		const { downloadUrls, iconBackground, iconUrl, id, name, qrCode } = wallet;
		const hasMobileCompanionApp = downloadUrls?.qrCode && qrCode;
		const hasExtension = !!wallet.extensionDownloadUrl;
		const hasMobileAndExtension = downloadUrls?.qrCode && hasExtension;
		const hasMobileAndDesktop = downloadUrls?.qrCode && !!wallet.desktopDownloadUrl;
		return /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			display: "flex",
			gap: "16",
			justifyContent: "space-between",
			key: wallet.id,
			width: "full"
		}, /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			display: "flex",
			flexDirection: "row",
			gap: "16"
		}, /* @__PURE__ */ import_react.createElement(AsyncImage, {
			background: iconBackground,
			borderColor: "actionButtonBorder",
			borderRadius: "10",
			height: "48",
			src: iconUrl,
			width: "48"
		}), /* @__PURE__ */ import_react.createElement(Box, {
			display: "flex",
			flexDirection: "column",
			gap: "2"
		}, /* @__PURE__ */ import_react.createElement(Text, {
			color: "modalText",
			size: "14",
			weight: "bold"
		}, name), /* @__PURE__ */ import_react.createElement(Text, {
			color: "modalTextSecondary",
			size: "14",
			weight: "medium"
		}, hasMobileAndExtension ? i18n2.t("get.mobile_and_extension.description") : hasMobileAndDesktop ? i18n2.t("get.mobile_and_desktop.description") : hasMobileCompanionApp ? i18n2.t("get.mobile.description") : hasExtension ? i18n2.t("get.extension.description") : null))), /* @__PURE__ */ import_react.createElement(Box, {
			display: "flex",
			flexDirection: "column",
			gap: "4"
		}, /* @__PURE__ */ import_react.createElement(ActionButton, {
			label: i18n2.t("get.action.label"),
			onClick: () => getWalletDownload(id),
			type: "secondary"
		})));
	})), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		borderRadius: "10",
		display: "flex",
		flexDirection: "column",
		gap: "8",
		justifyContent: "space-between",
		marginBottom: "4",
		paddingY: "8",
		style: {
			maxWidth: 275,
			textAlign: "center"
		}
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "14",
		weight: "bold"
	}, i18n2.t("get.looking_for.title")), /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, compactModeEnabled ? i18n2.t("get.looking_for.desktop.compact_description") : i18n2.t("get.looking_for.desktop.wide_description"))));
}
var LOGO_SIZE = "44";
function ConnectDetail({ changeWalletStep, compactModeEnabled, connectionError, onClose, qrCodeUri, reconnect, wallet }) {
	const { downloadUrls, iconBackground, iconUrl, name, qrCode, ready, showWalletConnectModal, getDesktopUri } = wallet;
	const isDesktopDeepLinkAvailable = !!getDesktopUri;
	const safari = isSafari();
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	const hasExtension = !!wallet.extensionDownloadUrl;
	const hasQrCodeAndExtension = downloadUrls?.qrCode && hasExtension;
	const hasQrCodeAndDesktop = downloadUrls?.qrCode && !!wallet.desktopDownloadUrl;
	const hasQrCode = qrCode && qrCodeUri;
	const onDesktopUri = async () => {
		const uri = await getDesktopUri?.();
		window.open(uri, safari ? "_blank" : "_self");
	};
	const secondaryAction = showWalletConnectModal ? {
		description: !compactModeEnabled ? i18n2.t("connect.walletconnect.description.full") : i18n2.t("connect.walletconnect.description.compact"),
		label: i18n2.t("connect.walletconnect.open.label"),
		onClick: () => {
			onClose();
			showWalletConnectModal();
		}
	} : hasQrCode ? {
		description: i18n2.t("connect.secondary_action.get.description", { wallet: name }),
		label: i18n2.t("connect.secondary_action.get.label"),
		onClick: () => changeWalletStep(hasQrCodeAndExtension || hasQrCodeAndDesktop ? "DOWNLOAD_OPTIONS" : "DOWNLOAD")
	} : null;
	const { width: windowWidth } = useWindowSize();
	const smallWindow = windowWidth && windowWidth < 768;
	(0, import_react.useEffect)(() => {
		preloadBrowserIcon();
		preloadPlatformIcon();
	}, []);
	return /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		height: "full",
		width: "full"
	}, hasQrCode ? /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		height: "full",
		justifyContent: "center"
	}, /* @__PURE__ */ import_react.createElement(QRCode, {
		logoBackground: iconBackground,
		logoSize: compactModeEnabled ? 60 : 72,
		logoUrl: iconUrl,
		size: compactModeEnabled ? 318 : smallWindow ? Math.max(280, Math.min(windowWidth - 308, 382)) : 382,
		uri: qrCodeUri
	})) : /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
		style: { flexGrow: 1 }
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "8"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		borderRadius: "10",
		height: LOGO_SIZE,
		overflow: "hidden"
	}, /* @__PURE__ */ import_react.createElement(AsyncImage, {
		useAsImage: !wallet.isRainbowKitConnector,
		height: LOGO_SIZE,
		src: iconUrl,
		width: LOGO_SIZE
	})), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "4",
		paddingX: "32",
		style: { textAlign: "center" }
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "18",
		weight: "bold"
	}, ready ? i18n2.t("connect.status.opening", { wallet: name }) : hasExtension ? i18n2.t("connect.status.not_installed", { wallet: name }) : i18n2.t("connect.status.not_available", { wallet: name })), !ready && hasExtension ? /* @__PURE__ */ import_react.createElement(Box, { paddingTop: "20" }, /* @__PURE__ */ import_react.createElement(ActionButton, {
		href: wallet.extensionDownloadUrl,
		label: i18n2.t("connect.secondary_action.install.label"),
		type: "secondary"
	})) : null, ready && !hasQrCode && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		textAlign: "center",
		weight: "medium"
	}, i18n2.t("connect.status.confirm"))), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		color: "modalText",
		display: "flex",
		flexDirection: "row",
		height: "32",
		marginTop: "8"
	}, connectionError ? /* @__PURE__ */ import_react.createElement(ActionButton, {
		label: i18n2.t("connect.secondary_action.retry.label"),
		onClick: async () => {
			if (isDesktopDeepLinkAvailable) onDesktopUri();
			reconnect(wallet);
		}
	}) : /* @__PURE__ */ import_react.createElement(Box, { color: "modalTextSecondary" }, /* @__PURE__ */ import_react.createElement(SpinnerIcon, null))))))), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		borderRadius: "10",
		display: "flex",
		flexDirection: "row",
		gap: "8",
		height: "28",
		justifyContent: "space-between",
		marginTop: "12"
	}, ready && secondaryAction && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, secondaryAction.description), /* @__PURE__ */ import_react.createElement(ActionButton, {
		label: secondaryAction.label,
		onClick: secondaryAction.onClick,
		type: "secondary"
	}))));
}
var DownloadOptionsBox = ({ actionLabel, description, iconAccent, iconBackground, iconUrl, isCompact, onAction, title, url, variant }) => {
	const isBrowserCard = variant === "browser";
	const gradientRgbas = !isBrowserCard && iconAccent && getGradientRGBAs(iconAccent);
	return /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		borderRadius: "13",
		display: "flex",
		justifyContent: "center",
		overflow: "hidden",
		paddingX: isCompact ? "18" : "44",
		position: "relative",
		style: {
			flex: 1,
			isolation: "isolate"
		},
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		borderColor: "actionButtonBorder",
		borderRadius: "13",
		borderStyle: "solid",
		borderWidth: "1",
		style: {
			bottom: "0",
			left: "0",
			position: "absolute",
			right: "0",
			top: "0",
			zIndex: 1
		}
	}), isBrowserCard && /* @__PURE__ */ import_react.createElement(Box, {
		background: "downloadTopCardBackground",
		height: "full",
		position: "absolute",
		style: { zIndex: 0 },
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		style: {
			bottom: "0",
			filter: "blur(20px)",
			left: "0",
			position: "absolute",
			right: "0",
			top: "0",
			transform: "translate3d(0, 0, 0)"
		}
	}, /* @__PURE__ */ import_react.createElement(Box, { style: {
		filter: "blur(100px)",
		marginLeft: -27,
		marginTop: -20,
		opacity: .6,
		transform: "translate3d(0, 0, 0)"
	} }, /* @__PURE__ */ import_react.createElement(AsyncImage, {
		borderRadius: "full",
		height: "200",
		src: iconUrl,
		width: "200"
	})), /* @__PURE__ */ import_react.createElement(Box, { style: {
		filter: "blur(100px)",
		marginRight: 0,
		marginTop: 105,
		opacity: .6,
		overflow: "auto",
		transform: "translate3d(0, 0, 0)"
	} }, /* @__PURE__ */ import_react.createElement(AsyncImage, {
		borderRadius: "full",
		height: "200",
		src: iconUrl,
		width: "200"
	})))), !isBrowserCard && gradientRgbas && /* @__PURE__ */ import_react.createElement(Box, {
		background: "downloadBottomCardBackground",
		style: {
			bottom: "0",
			left: "0",
			position: "absolute",
			right: "0",
			top: "0"
		}
	}, /* @__PURE__ */ import_react.createElement(Box, {
		position: "absolute",
		style: {
			background: `radial-gradient(50% 50% at 50% 50%, ${gradientRgbas[0]} 0%, ${gradientRgbas[1]} 25%, rgba(0,0,0,0) 100%)`,
			height: 564,
			left: -215,
			top: -197,
			transform: "translate3d(0, 0, 0)",
			width: 564
		}
	}), /* @__PURE__ */ import_react.createElement(Box, {
		position: "absolute",
		style: {
			background: `radial-gradient(50% 50% at 50% 50%, ${gradientRgbas[2]} 0%, rgba(0, 0, 0, 0) 100%)`,
			height: 564,
			left: -1,
			top: -76,
			transform: "translate3d(0, 0, 0)",
			width: 564
		}
	})), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "flex-start",
		display: "flex",
		flexDirection: "row",
		gap: "24",
		height: "max",
		justifyContent: "center",
		style: { zIndex: 1 }
	}, /* @__PURE__ */ import_react.createElement(Box, null, /* @__PURE__ */ import_react.createElement(AsyncImage, {
		height: "60",
		src: iconUrl,
		width: "60",
		...iconBackground ? {
			background: iconBackground,
			borderColor: "generalBorder",
			borderRadius: "10"
		} : null
	})), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "4",
		style: { flex: 1 },
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "14",
		weight: "bold"
	}, title), /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, description), /* @__PURE__ */ import_react.createElement(Box, {
		marginTop: "14",
		width: "max"
	}, /* @__PURE__ */ import_react.createElement(ActionButton, {
		href: url,
		label: actionLabel,
		onClick: onAction,
		size: "medium"
	})))));
};
function DownloadOptionsDetail({ changeWalletStep, wallet }) {
	const browser = getBrowser();
	const platform = getPlatform();
	const isCompact = (0, import_react.useContext)(ModalSizeContext) === "compact";
	const { desktop, desktopDownloadUrl, extension, extensionDownloadUrl, mobileDownloadUrl } = wallet;
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	(0, import_react.useEffect)(() => {
		preloadCreateIcon();
		preloadScanIcon();
		preloadRefreshIcon();
		preloadConnectIcon();
	}, []);
	return /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "24",
		height: "full",
		marginBottom: "8",
		marginTop: "4",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "8",
		height: "full",
		justifyContent: "center",
		width: "full"
	}, extensionDownloadUrl && /* @__PURE__ */ import_react.createElement(DownloadOptionsBox, {
		actionLabel: i18n2.t("get_options.extension.download.label", { browser }),
		description: i18n2.t("get_options.extension.description"),
		iconUrl: getBrowserSrc,
		isCompact,
		onAction: () => changeWalletStep(extension?.instructions ? "INSTRUCTIONS_EXTENSION" : "CONNECT"),
		title: i18n2.t("get_options.extension.title", {
			wallet: wallet.name,
			browser
		}),
		url: extensionDownloadUrl,
		variant: "browser"
	}), desktopDownloadUrl && /* @__PURE__ */ import_react.createElement(DownloadOptionsBox, {
		actionLabel: i18n2.t("get_options.desktop.download.label", { platform }),
		description: i18n2.t("get_options.desktop.description"),
		iconUrl: getPlatformSrc,
		isCompact,
		onAction: () => changeWalletStep(desktop?.instructions ? "INSTRUCTIONS_DESKTOP" : "CONNECT"),
		title: i18n2.t("get_options.desktop.title", {
			wallet: wallet.name,
			platform
		}),
		url: desktopDownloadUrl,
		variant: "desktop"
	}), mobileDownloadUrl && /* @__PURE__ */ import_react.createElement(DownloadOptionsBox, {
		actionLabel: i18n2.t("get_options.mobile.download.label", { wallet: wallet.name }),
		description: i18n2.t("get_options.mobile.description"),
		iconAccent: wallet.iconAccent,
		iconBackground: wallet.iconBackground,
		iconUrl: wallet.iconUrl,
		isCompact,
		onAction: () => {
			changeWalletStep("DOWNLOAD");
		},
		title: i18n2.t("get_options.mobile.title", { wallet: wallet.name }),
		variant: "app"
	})));
}
function DownloadDetail({ changeWalletStep, wallet }) {
	const { downloadUrls, qrCode } = wallet;
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	(0, import_react.useEffect)(() => {
		preloadCreateIcon();
		preloadScanIcon();
	}, []);
	return /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "24",
		height: "full",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, { style: {
		maxWidth: 220,
		textAlign: "center"
	} }, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "semibold"
	}, i18n2.t("get_mobile.description"))), /* @__PURE__ */ import_react.createElement(Box, { height: "full" }, downloadUrls?.qrCode ? /* @__PURE__ */ import_react.createElement(QRCode, {
		logoSize: 0,
		size: 268,
		uri: downloadUrls.qrCode
	}) : null), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		borderRadius: "10",
		display: "flex",
		flexDirection: "row",
		gap: "8",
		height: "34",
		justifyContent: "space-between",
		marginBottom: "12",
		paddingY: "8"
	}, /* @__PURE__ */ import_react.createElement(ActionButton, {
		label: i18n2.t("get_mobile.continue.label"),
		onClick: () => changeWalletStep(qrCode?.instructions ? "INSTRUCTIONS_MOBILE" : "CONNECT")
	})));
}
var stepIcons = {
	connect: () => /* @__PURE__ */ import_react.createElement(ConnectIcon, null),
	create: () => /* @__PURE__ */ import_react.createElement(CreateIcon, null),
	install: (wallet) => /* @__PURE__ */ import_react.createElement(AsyncImage, {
		background: wallet.iconBackground,
		borderColor: "generalBorder",
		borderRadius: "10",
		height: "48",
		src: wallet.iconUrl,
		width: "48"
	}),
	refresh: () => /* @__PURE__ */ import_react.createElement(RefreshIcon, null),
	scan: () => /* @__PURE__ */ import_react.createElement(ScanIcon, null)
};
function InstructionMobileDetail({ connectWallet, wallet }) {
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	return /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		height: "full",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "28",
		height: "full",
		justifyContent: "center",
		paddingY: "32",
		style: { maxWidth: 320 }
	}, wallet?.qrCode?.instructions?.steps.map((d, idx) => /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: "16",
		key: idx
	}, /* @__PURE__ */ import_react.createElement(Box, {
		borderRadius: "10",
		height: "48",
		minWidth: "48",
		overflow: "hidden",
		position: "relative",
		width: "48"
	}, stepIcons[d.step]?.(wallet)), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "4"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "14",
		weight: "bold"
	}, i18n2.t(d.title, void 0, { rawKeyIfTranslationMissing: true })), /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, i18n2.t(d.description, void 0, { rawKeyIfTranslationMissing: true })))))), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "12",
		justifyContent: "center",
		marginBottom: "16"
	}, /* @__PURE__ */ import_react.createElement(ActionButton, {
		label: i18n2.t("get_instructions.mobile.connect.label"),
		onClick: () => connectWallet(wallet)
	}), /* @__PURE__ */ import_react.createElement(Box, {
		as: "a",
		className: touchableStyles({
			active: "shrink",
			hover: "grow"
		}),
		display: "block",
		href: wallet?.qrCode?.instructions?.learnMoreUrl,
		paddingX: "12",
		paddingY: "4",
		rel: "noreferrer",
		style: { willChange: "transform" },
		target: "_blank",
		transition: "default"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "accentColor",
		size: "14",
		weight: "bold"
	}, i18n2.t("get_instructions.mobile.learn_more.label")))));
}
function InstructionExtensionDetail({ wallet }) {
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	return /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		height: "full",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "28",
		height: "full",
		justifyContent: "center",
		paddingY: "32",
		style: { maxWidth: 320 }
	}, wallet?.extension?.instructions?.steps.map((d, idx) => /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: "16",
		key: idx
	}, /* @__PURE__ */ import_react.createElement(Box, {
		borderRadius: "10",
		height: "48",
		minWidth: "48",
		overflow: "hidden",
		position: "relative",
		width: "48"
	}, stepIcons[d.step]?.(wallet)), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "4"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "14",
		weight: "bold"
	}, i18n2.t(d.title, void 0, { rawKeyIfTranslationMissing: true })), /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, i18n2.t(d.description, void 0, { rawKeyIfTranslationMissing: true })))))), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "12",
		justifyContent: "center",
		marginBottom: "16"
	}, /* @__PURE__ */ import_react.createElement(ActionButton, {
		label: i18n2.t("get_instructions.extension.refresh.label"),
		onClick: window.location.reload.bind(window.location)
	}), /* @__PURE__ */ import_react.createElement(Box, {
		as: "a",
		className: touchableStyles({
			active: "shrink",
			hover: "grow"
		}),
		display: "block",
		href: wallet?.extension?.instructions?.learnMoreUrl,
		paddingX: "12",
		paddingY: "4",
		rel: "noreferrer",
		style: { willChange: "transform" },
		target: "_blank",
		transition: "default"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "accentColor",
		size: "14",
		weight: "bold"
	}, i18n2.t("get_instructions.extension.learn_more.label")))));
}
function InstructionDesktopDetail({ connectWallet, wallet }) {
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	return /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		height: "full",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "28",
		height: "full",
		justifyContent: "center",
		paddingY: "32",
		style: { maxWidth: 320 }
	}, wallet?.desktop?.instructions?.steps.map((d, idx) => /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: "16",
		key: idx
	}, /* @__PURE__ */ import_react.createElement(Box, {
		borderRadius: "10",
		height: "48",
		minWidth: "48",
		overflow: "hidden",
		position: "relative",
		width: "48"
	}, stepIcons[d.step]?.(wallet)), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "4"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "14",
		weight: "bold"
	}, i18n2.t(d.title, void 0, { rawKeyIfTranslationMissing: true })), /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, i18n2.t(d.description, void 0, { rawKeyIfTranslationMissing: true })))))), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "12",
		justifyContent: "center",
		marginBottom: "16"
	}, /* @__PURE__ */ import_react.createElement(ActionButton, {
		label: i18n2.t("get_instructions.desktop.connect.label"),
		onClick: () => connectWallet(wallet)
	}), /* @__PURE__ */ import_react.createElement(Box, {
		as: "a",
		className: touchableStyles({
			active: "shrink",
			hover: "grow"
		}),
		display: "block",
		href: wallet?.desktop?.instructions?.learnMoreUrl,
		paddingX: "12",
		paddingY: "4",
		rel: "noreferrer",
		style: { willChange: "transform" },
		target: "_blank",
		transition: "default"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "accentColor",
		size: "14",
		weight: "bold"
	}, i18n2.t("get_instructions.desktop.learn_more.label")))));
}
function DesktopOptions({ onClose }) {
	const titleId = "rk_connect_title";
	const [selectedOptionId, setSelectedOptionId] = (0, import_react.useState)();
	const [selectedWallet, setSelectedWallet] = (0, import_react.useState)();
	const [qrCodeUri, setQrCodeUri] = (0, import_react.useState)();
	const hasQrCode = !!selectedWallet?.qrCode && qrCodeUri;
	const [connectionError, setConnectionError] = (0, import_react.useState)(false);
	const compactModeEnabled = (0, import_react.useContext)(ModalSizeContext) === ModalSizeOptions.COMPACT;
	const { disclaimer: Disclaimer } = (0, import_react.useContext)(AppContext);
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	const safari = isSafari();
	const initialized = (0, import_react.useRef)(false);
	const { connector } = (0, import_react.useContext)(WalletButtonContext);
	const wallets = useWalletConnectors(!connector).filter((wallet) => wallet.ready || !!wallet.extensionDownloadUrl).sort((a, b) => a.groupIndex - b.groupIndex);
	const unfilteredWallets = useWalletConnectors();
	const groupedWallets = groupBy(wallets, (wallet) => wallet.groupName);
	const supportedI18nGroupNames = [
		"Recommended",
		"Other",
		"Popular",
		"More",
		"Others",
		"Installed"
	];
	(0, import_react.useEffect)(() => {
		if (connector && !initialized.current) {
			changeWalletStep("CONNECT");
			selectWallet(connector);
			initialized.current = true;
		}
	}, [connector]);
	const connectToWallet = (wallet) => {
		setConnectionError(false);
		if (wallet.ready) wallet?.connect?.()?.catch(() => {
			setConnectionError(true);
		});
	};
	const onDesktopUri = async (wallet) => {
		const sWallet = wallets.find((w) => wallet.id === w.id);
		if (!sWallet?.getDesktopUri) return;
		setTimeout(async () => {
			const uri = await sWallet?.getDesktopUri?.();
			if (uri) window.open(uri, safari ? "_blank" : "_self");
		}, 0);
	};
	const onQrCode = async (wallet) => {
		const sWallet = wallets.find((w) => wallet.id === w.id);
		const uri = await sWallet?.getQrCodeUri?.();
		setQrCodeUri(uri);
		setTimeout(() => {
			setSelectedWallet(sWallet);
			changeWalletStep("CONNECT");
		}, uri ? 0 : 50);
	};
	const selectWallet = async (wallet) => {
		addLatestWalletId(wallet.id);
		if (wallet.ready) {
			onQrCode(wallet);
			onDesktopUri(wallet);
		}
		connectToWallet(wallet);
		setSelectedOptionId(wallet.id);
		if (!wallet.ready) {
			setSelectedWallet(wallet);
			changeWalletStep(wallet?.extensionDownloadUrl ? "DOWNLOAD_OPTIONS" : "CONNECT");
		}
	};
	const getWalletDownload = (id) => {
		const sWallet = unfilteredWallets.find((w) => id === w.id);
		const isMobile2 = sWallet?.downloadUrls?.qrCode;
		const isDesktop = !!sWallet?.desktopDownloadUrl;
		const isExtension = !!sWallet?.extensionDownloadUrl;
		setSelectedWallet(sWallet);
		if (isMobile2 && (isExtension || isDesktop)) changeWalletStep("DOWNLOAD_OPTIONS");
		else if (isMobile2) changeWalletStep("DOWNLOAD");
		else if (isDesktop) changeWalletStep("INSTRUCTIONS_DESKTOP");
		else changeWalletStep("INSTRUCTIONS_EXTENSION");
	};
	const clearSelectedWallet = () => {
		setSelectedOptionId(void 0);
		setSelectedWallet(void 0);
		setQrCodeUri(void 0);
	};
	const changeWalletStep = (newWalletStep, isBack = false) => {
		if (isBack && newWalletStep === "GET" && initialWalletStep === "GET") clearSelectedWallet();
		else if (!isBack && newWalletStep === "GET") setInitialWalletStep("GET");
		else if (!isBack && newWalletStep === "CONNECT") setInitialWalletStep("CONNECT");
		setWalletStep(newWalletStep);
	};
	const [initialWalletStep, setInitialWalletStep] = (0, import_react.useState)("NONE");
	const [walletStep, setWalletStep] = (0, import_react.useState)("NONE");
	let walletContent = null;
	let headerLabel = null;
	let headerBackButtonLink = null;
	let headerBackButtonCallback;
	(0, import_react.useEffect)(() => {
		setConnectionError(false);
	}, [walletStep, selectedWallet]);
	const hasExtensionAndMobile = !!(!!selectedWallet?.extensionDownloadUrl && selectedWallet?.mobileDownloadUrl);
	switch (walletStep) {
		case "NONE":
			walletContent = /* @__PURE__ */ import_react.createElement(ConnectModalIntro, { getWallet: () => changeWalletStep("GET") });
			break;
		case "LEARN_COMPACT":
			walletContent = /* @__PURE__ */ import_react.createElement(ConnectModalIntro, {
				compactModeEnabled,
				getWallet: () => changeWalletStep("GET")
			});
			headerLabel = i18n2.t("intro.title");
			headerBackButtonLink = "NONE";
			break;
		case "GET":
			walletContent = /* @__PURE__ */ import_react.createElement(GetDetail, {
				getWalletDownload,
				compactModeEnabled
			});
			headerLabel = i18n2.t("get.title");
			headerBackButtonLink = compactModeEnabled ? "LEARN_COMPACT" : "NONE";
			break;
		case "CONNECT":
			walletContent = selectedWallet && /* @__PURE__ */ import_react.createElement(ConnectDetail, {
				changeWalletStep,
				compactModeEnabled,
				connectionError,
				onClose,
				qrCodeUri,
				reconnect: connectToWallet,
				wallet: selectedWallet
			});
			headerLabel = hasQrCode && (selectedWallet.name === "WalletConnect" ? i18n2.t("connect_scan.fallback_title") : i18n2.t("connect_scan.title", { wallet: selectedWallet.name }));
			headerBackButtonLink = compactModeEnabled ? connector ? null : "NONE" : null;
			headerBackButtonCallback = compactModeEnabled ? !connector ? clearSelectedWallet : () => {} : () => {};
			break;
		case "DOWNLOAD_OPTIONS":
			walletContent = selectedWallet && /* @__PURE__ */ import_react.createElement(DownloadOptionsDetail, {
				changeWalletStep,
				wallet: selectedWallet
			});
			headerLabel = selectedWallet && i18n2.t("get_options.short_title", { wallet: selectedWallet.name });
			headerBackButtonLink = connector ? "CONNECT" : compactModeEnabled ? "NONE" : initialWalletStep;
			break;
		case "DOWNLOAD":
			walletContent = selectedWallet && /* @__PURE__ */ import_react.createElement(DownloadDetail, {
				changeWalletStep,
				wallet: selectedWallet
			});
			headerLabel = selectedWallet && i18n2.t("get_mobile.title", { wallet: selectedWallet.name });
			headerBackButtonLink = hasExtensionAndMobile ? "DOWNLOAD_OPTIONS" : initialWalletStep;
			break;
		case "INSTRUCTIONS_MOBILE":
			walletContent = selectedWallet && /* @__PURE__ */ import_react.createElement(InstructionMobileDetail, {
				connectWallet: selectWallet,
				wallet: selectedWallet
			});
			headerLabel = selectedWallet && i18n2.t("get_options.title", { wallet: compactModeEnabled ? selectedWallet.shortName || selectedWallet.name : selectedWallet.name });
			headerBackButtonLink = "DOWNLOAD";
			break;
		case "INSTRUCTIONS_EXTENSION":
			walletContent = selectedWallet && /* @__PURE__ */ import_react.createElement(InstructionExtensionDetail, { wallet: selectedWallet });
			headerLabel = selectedWallet && i18n2.t("get_options.title", { wallet: compactModeEnabled ? selectedWallet.shortName || selectedWallet.name : selectedWallet.name });
			headerBackButtonLink = "DOWNLOAD_OPTIONS";
			break;
		case "INSTRUCTIONS_DESKTOP":
			walletContent = selectedWallet && /* @__PURE__ */ import_react.createElement(InstructionDesktopDetail, {
				connectWallet: selectWallet,
				wallet: selectedWallet
			});
			headerLabel = selectedWallet && i18n2.t("get_options.title", { wallet: compactModeEnabled ? selectedWallet.shortName || selectedWallet.name : selectedWallet.name });
			headerBackButtonLink = "DOWNLOAD_OPTIONS";
			break;
		default: break;
	}
	return /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "row",
		style: { maxHeight: compactModeEnabled ? 468 : 504 }
	}, (compactModeEnabled ? walletStep === "NONE" : true) && /* @__PURE__ */ import_react.createElement(Box, {
		className: compactModeEnabled ? sidebarCompactMode : sidebar,
		display: "flex",
		flexDirection: "column",
		marginTop: "16"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		justifyContent: "space-between"
	}, compactModeEnabled && Disclaimer && /* @__PURE__ */ import_react.createElement(Box, {
		marginLeft: "16",
		width: "28"
	}, /* @__PURE__ */ import_react.createElement(InfoButton, { onClick: () => changeWalletStep("LEARN_COMPACT") })), compactModeEnabled && !Disclaimer && /* @__PURE__ */ import_react.createElement(Box, {
		marginLeft: "16",
		width: "28"
	}), /* @__PURE__ */ import_react.createElement(Box, {
		marginLeft: compactModeEnabled ? "0" : "6",
		paddingBottom: "8",
		paddingTop: "2",
		paddingX: "18"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		as: "h1",
		color: "modalText",
		id: titleId,
		size: "18",
		weight: "heavy",
		testId: "connect-header-label"
	}, i18n2.t("connect.title"))), compactModeEnabled && /* @__PURE__ */ import_react.createElement(Box, { marginRight: "16" }, /* @__PURE__ */ import_react.createElement(CloseButton, { onClose }))), /* @__PURE__ */ import_react.createElement(Box, {
		className: ScrollClassName,
		paddingBottom: "18"
	}, Object.entries(groupedWallets).map(([groupName, wallets2], index) => wallets2.length > 0 && /* @__PURE__ */ import_react.createElement(import_react.Fragment, { key: index }, groupName ? /* @__PURE__ */ import_react.createElement(Box, {
		marginBottom: "8",
		marginTop: "16",
		marginX: "6"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: groupName === "Installed" ? "accentColor" : "modalTextSecondary",
		size: "14",
		weight: "bold"
	}, supportedI18nGroupNames.includes(groupName) ? i18n2.t(`connector_group.${groupName.toLowerCase()}`) : groupName)) : null, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		gap: "4"
	}, wallets2.map((wallet) => {
		return /* @__PURE__ */ import_react.createElement(ModalSelection, {
			currentlySelected: wallet.id === selectedOptionId,
			iconBackground: wallet.iconBackground,
			iconUrl: wallet.iconUrl,
			key: wallet.id,
			name: wallet.name,
			onClick: () => selectWallet(wallet),
			ready: wallet.ready,
			recent: wallet.recent,
			testId: `wallet-option-${wallet.id}`,
			isRainbowKitConnector: wallet.isRainbowKitConnector
		});
	}))))), compactModeEnabled && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Box, {
		background: "generalBorder",
		height: "1",
		marginTop: "-1"
	}), Disclaimer ? /* @__PURE__ */ import_react.createElement(Box, {
		paddingX: "24",
		paddingY: "16",
		textAlign: "center"
	}, /* @__PURE__ */ import_react.createElement(Disclaimer, {
		Link: DisclaimerLink,
		Text: DisclaimerText
	})) : /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		justifyContent: "space-between",
		paddingX: "24",
		paddingY: "16"
	}, /* @__PURE__ */ import_react.createElement(Box, { paddingY: "4" }, /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalTextSecondary",
		size: "14",
		weight: "medium"
	}, i18n2.t("connect.new_to_ethereum.description"))), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		gap: "4",
		justifyContent: "center"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		className: touchableStyles({
			active: "shrink",
			hover: "grow"
		}),
		cursor: "pointer",
		onClick: () => changeWalletStep("LEARN_COMPACT"),
		paddingY: "4",
		style: { willChange: "transform" },
		transition: "default"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		color: "accentColor",
		size: "14",
		weight: "bold"
	}, i18n2.t("connect.new_to_ethereum.learn_more.label"))))))), (compactModeEnabled ? walletStep !== "NONE" : true) && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, !compactModeEnabled && /* @__PURE__ */ import_react.createElement(Box, {
		background: "generalBorder",
		minWidth: "1",
		width: "1"
	}), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		margin: "16",
		style: { flexGrow: 1 }
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "12"
	}, /* @__PURE__ */ import_react.createElement(Box, { width: "28" }, headerBackButtonLink && /* @__PURE__ */ import_react.createElement(Box, {
		as: "button",
		className: touchableStyles({
			active: "shrinkSm",
			hover: "growLg"
		}),
		color: "accentColor",
		onClick: () => {
			headerBackButtonLink && changeWalletStep(headerBackButtonLink, true);
			headerBackButtonCallback?.();
		},
		paddingX: "8",
		paddingY: "4",
		style: {
			boxSizing: "content-box",
			height: 17,
			willChange: "transform"
		},
		transition: "default",
		type: "button"
	}, /* @__PURE__ */ import_react.createElement(BackIcon, null))), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		justifyContent: "center",
		style: { flexGrow: 1 }
	}, headerLabel && /* @__PURE__ */ import_react.createElement(Text, {
		color: "modalText",
		size: "18",
		textAlign: "center",
		weight: "heavy"
	}, headerLabel)), /* @__PURE__ */ import_react.createElement(CloseButton, { onClose })), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		style: { minHeight: compactModeEnabled ? 396 : 432 }
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "6",
		height: "full",
		justifyContent: "center",
		marginX: "8"
	}, walletContent)))));
}
var rotatingBorder = "_1am14412";
var scroll = "_1am14410";
var spinner = "_1am14413";
var LoadingSpinner = ({ wallet }) => {
	const width = 80;
	const height = 80;
	const radiusFactor = 20;
	const perimeter = 2 * (width + height - 4 * radiusFactor);
	return /* @__PURE__ */ import_react.createElement("svg", {
		className: spinner,
		viewBox: "0 0 86 86",
		width: "86",
		height: "86"
	}, /* @__PURE__ */ import_react.createElement("title", null, "Loading"), /* @__PURE__ */ import_react.createElement("rect", {
		x: "3",
		y: "3",
		width,
		height,
		rx: radiusFactor,
		ry: radiusFactor,
		strokeDasharray: `${perimeter / 3} ${2 * perimeter / 3}`,
		strokeDashoffset: perimeter,
		className: rotatingBorder,
		style: { stroke: wallet?.iconAccent || "#0D3887" }
	}));
};
function WalletButton({ onClose, wallet, connecting }) {
	const { connect, iconBackground, iconUrl, id, name, getMobileUri, ready, shortName, showWalletConnectModal } = wallet;
	const coolModeRef = useCoolMode(iconUrl);
	const initialized = (0, import_react.useRef)(false);
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	const onConnect = (0, import_react.useCallback)(async () => {
		const onMobileUri = async () => {
			const mobileUri = await getMobileUri?.();
			if (!mobileUri) return;
			if (mobileUri) setWalletConnectDeepLink({
				mobileUri,
				name
			});
			if (mobileUri.startsWith("http")) {
				const link = document.createElement("a");
				link.href = mobileUri;
				link.target = "_blank";
				link.rel = "noreferrer noopener";
				link.click();
			} else window.location.href = mobileUri;
		};
		if (id !== "walletConnect") onMobileUri();
		if (showWalletConnectModal) {
			showWalletConnectModal();
			onClose?.();
			return;
		}
		try {
			await connect?.();
		} catch {}
	}, [
		connect,
		getMobileUri,
		showWalletConnectModal,
		onClose,
		name,
		id
	]);
	(0, import_react.useEffect)(() => {
		if (connecting && !initialized.current) {
			onConnect();
			initialized.current = true;
		}
	}, [connecting, onConnect]);
	return /* @__PURE__ */ import_react.createElement(Box, {
		as: "button",
		color: ready ? "modalText" : "modalTextSecondary",
		disabled: !ready,
		fontFamily: "body",
		key: id,
		onClick: onConnect,
		ref: coolModeRef,
		style: {
			overflow: "visible",
			textAlign: "center"
		},
		testId: `wallet-option-${id}`,
		type: "button",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: "8",
		paddingTop: "10",
		position: "relative"
	}, connecting ? /* @__PURE__ */ import_react.createElement(LoadingSpinner, { wallet }) : null, /* @__PURE__ */ import_react.createElement(AsyncImage, {
		background: iconBackground,
		borderRadius: "13",
		boxShadow: "walletLogo",
		height: "60",
		src: iconUrl,
		width: "60"
	})), !connecting ? /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		textAlign: "center"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		as: "h2",
		color: wallet.ready ? "modalText" : "modalTextSecondary",
		size: "13",
		weight: "medium"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		as: "span",
		position: "relative"
	}, shortName ?? name, !wallet.ready && " (unsupported)")), wallet.recent && /* @__PURE__ */ import_react.createElement(Text, {
		color: "accentColor",
		size: "12",
		weight: "medium"
	}, i18n2.t("connect.recent"))) : null));
}
function MobileOptions({ onClose }) {
	const titleId = "rk_connect_title";
	const wallets = useWalletConnectors().filter((wallet) => wallet.isRainbowKitConnector);
	const { disclaimer: Disclaimer, learnMoreUrl } = (0, import_react.useContext)(AppContext);
	let headerLabel = null;
	let walletContent = null;
	let headerBackgroundContrast = false;
	let headerBackButtonLink = null;
	const [walletStep, setWalletStep] = (0, import_react.useState)("CONNECT");
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	const ios = isIOS();
	switch (walletStep) {
		case "CONNECT":
			headerLabel = i18n2.t("connect.title");
			headerBackgroundContrast = true;
			walletContent = /* @__PURE__ */ import_react.createElement(Box, null, /* @__PURE__ */ import_react.createElement(Box, {
				background: "profileForeground",
				className: scroll,
				display: "flex",
				paddingBottom: "20",
				paddingTop: "6",
				paddingX: "20",
				style: { gap: "calc((100% - 40px - 240px + 47px) / 4)" }
			}, wallets.filter((wallet) => wallet.ready).map((wallet) => {
				return /* @__PURE__ */ import_react.createElement(Box, {
					key: wallet.id,
					width: "60"
				}, /* @__PURE__ */ import_react.createElement(WalletButton, {
					onClose,
					wallet
				}));
			})), /* @__PURE__ */ import_react.createElement(Box, {
				background: "generalBorder",
				height: "1",
				marginBottom: "32",
				marginTop: "-1"
			}), /* @__PURE__ */ import_react.createElement(Box, {
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
				gap: "32",
				paddingX: "32",
				style: { textAlign: "center" }
			}, /* @__PURE__ */ import_react.createElement(Box, {
				display: "flex",
				flexDirection: "column",
				gap: "8",
				textAlign: "center"
			}, /* @__PURE__ */ import_react.createElement(Text, {
				color: "modalText",
				size: "16",
				weight: "bold"
			}, i18n2.t("intro.title")), /* @__PURE__ */ import_react.createElement(Text, {
				color: "modalTextSecondary",
				size: "16"
			}, i18n2.t("intro.description")))), /* @__PURE__ */ import_react.createElement(Box, {
				paddingTop: "32",
				paddingX: "20"
			}, /* @__PURE__ */ import_react.createElement(Box, {
				display: "flex",
				gap: "14",
				justifyContent: "center"
			}, /* @__PURE__ */ import_react.createElement(ActionButton, {
				label: i18n2.t("intro.get.label"),
				onClick: () => setWalletStep("GET"),
				size: "large",
				type: "secondary"
			}), /* @__PURE__ */ import_react.createElement(ActionButton, {
				href: learnMoreUrl,
				label: i18n2.t("intro.learn_more.label"),
				size: "large",
				type: "secondary"
			}))), Disclaimer && /* @__PURE__ */ import_react.createElement(Box, {
				marginTop: "28",
				marginX: "32",
				textAlign: "center"
			}, /* @__PURE__ */ import_react.createElement(Disclaimer, {
				Link: DisclaimerLink,
				Text: DisclaimerText
			})));
			break;
		case "GET": {
			headerLabel = i18n2.t("get.title");
			headerBackButtonLink = "CONNECT";
			const mobileWallets = wallets?.filter((wallet) => wallet.downloadUrls?.ios || wallet.downloadUrls?.android || wallet.downloadUrls?.mobile)?.splice(0, 3);
			walletContent = /* @__PURE__ */ import_react.createElement(Box, null, /* @__PURE__ */ import_react.createElement(Box, {
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
				height: "full",
				marginBottom: "36",
				marginTop: "5",
				paddingTop: "12",
				width: "full"
			}, mobileWallets.map((wallet, index) => {
				const { downloadUrls, iconBackground, iconUrl, name } = wallet;
				if (!downloadUrls?.ios && !downloadUrls?.android && !downloadUrls?.mobile) return null;
				return /* @__PURE__ */ import_react.createElement(Box, {
					display: "flex",
					gap: "16",
					key: wallet.id,
					paddingX: "20",
					width: "full"
				}, /* @__PURE__ */ import_react.createElement(Box, { style: {
					minHeight: 48,
					minWidth: 48
				} }, /* @__PURE__ */ import_react.createElement(AsyncImage, {
					background: iconBackground,
					borderColor: "generalBorder",
					borderRadius: "10",
					height: "48",
					src: iconUrl,
					width: "48"
				})), /* @__PURE__ */ import_react.createElement(Box, {
					display: "flex",
					flexDirection: "column",
					width: "full"
				}, /* @__PURE__ */ import_react.createElement(Box, {
					alignItems: "center",
					display: "flex",
					height: "48"
				}, /* @__PURE__ */ import_react.createElement(Box, { width: "full" }, /* @__PURE__ */ import_react.createElement(Text, {
					color: "modalText",
					size: "18",
					weight: "bold"
				}, name)), /* @__PURE__ */ import_react.createElement(ActionButton, {
					href: (ios ? downloadUrls?.ios : downloadUrls?.android) || downloadUrls?.mobile,
					label: i18n2.t("get.action.label"),
					size: "small",
					type: "secondary"
				})), index < mobileWallets.length - 1 && /* @__PURE__ */ import_react.createElement(Box, {
					background: "generalBorderDim",
					height: "1",
					marginY: "10",
					width: "full"
				})));
			})), /* @__PURE__ */ import_react.createElement(Box, { style: { marginBottom: "42px" } }), /* @__PURE__ */ import_react.createElement(Box, {
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
				gap: "36",
				paddingX: "36",
				style: { textAlign: "center" }
			}, /* @__PURE__ */ import_react.createElement(Box, {
				display: "flex",
				flexDirection: "column",
				gap: "12",
				textAlign: "center"
			}, /* @__PURE__ */ import_react.createElement(Text, {
				color: "modalText",
				size: "16",
				weight: "bold"
			}, i18n2.t("get.looking_for.title")), /* @__PURE__ */ import_react.createElement(Text, {
				color: "modalTextSecondary",
				size: "16"
			}, i18n2.t("get.looking_for.mobile.description")))));
			break;
		}
	}
	return /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column",
		paddingBottom: "36"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		background: headerBackgroundContrast ? "profileForeground" : "modalBackground",
		display: "flex",
		flexDirection: "column",
		paddingBottom: "4",
		paddingTop: "14"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		justifyContent: "center",
		paddingBottom: "6",
		paddingX: "20",
		position: "relative"
	}, headerBackButtonLink && /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		position: "absolute",
		style: {
			left: 0,
			marginBottom: -20,
			marginTop: -20
		}
	}, /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		as: "button",
		className: touchableStyles({
			active: "shrinkSm",
			hover: "growLg"
		}),
		color: "accentColor",
		display: "flex",
		marginLeft: "4",
		marginTop: "20",
		onClick: () => setWalletStep(headerBackButtonLink),
		padding: "16",
		style: {
			height: 17,
			willChange: "transform"
		},
		transition: "default",
		type: "button"
	}, /* @__PURE__ */ import_react.createElement(BackIcon, null))), /* @__PURE__ */ import_react.createElement(Box, {
		marginTop: "4",
		textAlign: "center",
		width: "full"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		as: "h1",
		color: "modalText",
		id: titleId,
		size: "20",
		weight: "bold"
	}, headerLabel)), /* @__PURE__ */ import_react.createElement(Box, {
		alignItems: "center",
		display: "flex",
		height: "32",
		paddingRight: "14",
		position: "absolute",
		right: "0"
	}, /* @__PURE__ */ import_react.createElement(Box, { style: {
		marginBottom: -20,
		marginTop: -20
	} }, /* @__PURE__ */ import_react.createElement(CloseButton, { onClose }))))), /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		flexDirection: "column"
	}, walletContent));
}
var MobileStatus = ({ onClose }) => {
	const { connector } = (0, import_react.useContext)(WalletButtonContext);
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	const connectorName = connector?.name || "";
	return /* @__PURE__ */ import_react.createElement(Box, null, /* @__PURE__ */ import_react.createElement(Box, {
		display: "flex",
		paddingBottom: "32",
		justifyContent: "center",
		alignItems: "center",
		background: "profileForeground",
		flexDirection: "column"
	}, /* @__PURE__ */ import_react.createElement(Box, {
		width: "full",
		display: "flex",
		justifyContent: "flex-end",
		marginTop: "18",
		marginRight: "24"
	}, /* @__PURE__ */ import_react.createElement(CloseButton, { onClose })), /* @__PURE__ */ import_react.createElement(Box, { width: "60" }, /* @__PURE__ */ import_react.createElement(WalletButton, {
		onClose,
		wallet: connector,
		connecting: true
	})), /* @__PURE__ */ import_react.createElement(Box, { marginTop: "20" }, /* @__PURE__ */ import_react.createElement(Text, {
		textAlign: "center",
		color: "modalText",
		size: "18",
		weight: "semibold"
	}, i18n2.t("connect.status.connect_mobile", { wallet: connectorName }))), /* @__PURE__ */ import_react.createElement(Box, {
		maxWidth: "full",
		marginTop: "8"
	}, /* @__PURE__ */ import_react.createElement(Text, {
		textAlign: "center",
		color: "modalText",
		size: "16",
		weight: "medium"
	}, i18n2.t("connect.status.confirm_mobile", { wallet: connectorName })))));
};
function ConnectOptions({ onClose }) {
	const { connector } = (0, import_react.useContext)(WalletButtonContext);
	return isMobile() ? connector ? /* @__PURE__ */ import_react.createElement(MobileStatus, { onClose }) : /* @__PURE__ */ import_react.createElement(MobileOptions, { onClose }) : /* @__PURE__ */ import_react.createElement(DesktopOptions, { onClose });
}
function ConnectModal({ onClose, open }) {
	const titleId = "rk_connect_title";
	const connectionStatus = useConnectionStatus();
	const { disconnect } = useDisconnect();
	const { isConnecting } = useConnection();
	const onAuthCancel = import_react.useCallback(() => {
		onClose();
		disconnect();
	}, [onClose, disconnect]);
	const onConnectModalCancel = import_react.useCallback(() => {
		if (isConnecting) disconnect();
		onClose();
	}, [
		onClose,
		disconnect,
		isConnecting
	]);
	if (connectionStatus === "disconnected") return /* @__PURE__ */ import_react.createElement(Dialog, {
		onClose: onConnectModalCancel,
		open,
		titleId
	}, /* @__PURE__ */ import_react.createElement(DialogContent, {
		bottomSheetOnMobile: true,
		padding: "0",
		wide: true
	}, /* @__PURE__ */ import_react.createElement(ConnectOptions, { onClose: onConnectModalCancel })));
	if (connectionStatus === "unauthenticated") return /* @__PURE__ */ import_react.createElement(Dialog, {
		onClose: onAuthCancel,
		open,
		titleId
	}, /* @__PURE__ */ import_react.createElement(DialogContent, {
		bottomSheetOnMobile: true,
		padding: "0"
	}, /* @__PURE__ */ import_react.createElement(SignIn, {
		onClose: onAuthCancel,
		onCloseModal: onClose
	})));
	return null;
}
function useModalStateValue() {
	const [isModalOpen, setModalOpen] = (0, import_react.useState)(false);
	return {
		closeModal: (0, import_react.useCallback)(() => setModalOpen(false), []),
		isModalOpen,
		openModal: (0, import_react.useCallback)(() => setModalOpen(true), [])
	};
}
var ModalContext = (0, import_react.createContext)({
	accountModalOpen: false,
	chainModalOpen: false,
	connectModalOpen: false,
	isWalletConnectModalOpen: false,
	setIsWalletConnectModalOpen: () => {}
});
function ModalProvider({ children }) {
	const { closeModal: closeConnectModal, isModalOpen: connectModalOpen, openModal: openConnectModal } = useModalStateValue();
	const { closeModal: closeAccountModal, isModalOpen: accountModalOpen, openModal: openAccountModal } = useModalStateValue();
	const { closeModal: closeChainModal, isModalOpen: chainModalOpen, openModal: openChainModal } = useModalStateValue();
	const [isWalletConnectModalOpen, setIsWalletConnectModalOpen] = (0, import_react.useState)(false);
	const connectionStatus = useConnectionStatus();
	const { chainId } = useConnection();
	const { chains } = useConfig();
	const isCurrentChainSupported = chains.some((chain) => chain.id === chainId);
	const closeModals = (0, import_react.useCallback)(({ keepConnectModalOpen = false } = {}) => {
		if (!keepConnectModalOpen) closeConnectModal();
		closeAccountModal();
		closeChainModal();
	}, [
		closeConnectModal,
		closeAccountModal,
		closeChainModal
	]);
	const isUnauthenticated = useAuthenticationStatus() === "unauthenticated";
	useConnectionEffect({
		onConnect: () => closeModals({ keepConnectModalOpen: isUnauthenticated }),
		onDisconnect: () => closeModals()
	});
	(0, import_react.useEffect)(() => {
		if (isUnauthenticated) closeModals();
	}, [isUnauthenticated, closeModals]);
	return /* @__PURE__ */ import_react.createElement(ModalContext.Provider, { value: (0, import_react.useMemo)(() => ({
		accountModalOpen,
		chainModalOpen,
		connectModalOpen,
		isWalletConnectModalOpen,
		openAccountModal: isCurrentChainSupported && connectionStatus === "connected" ? openAccountModal : void 0,
		openChainModal: connectionStatus === "connected" ? openChainModal : void 0,
		openConnectModal: connectionStatus === "disconnected" || connectionStatus === "unauthenticated" ? openConnectModal : void 0,
		setIsWalletConnectModalOpen
	}), [
		connectionStatus,
		accountModalOpen,
		chainModalOpen,
		connectModalOpen,
		openAccountModal,
		openChainModal,
		openConnectModal,
		isCurrentChainSupported,
		isWalletConnectModalOpen
	]) }, children, /* @__PURE__ */ import_react.createElement(ConnectModal, {
		onClose: closeConnectModal,
		open: connectModalOpen
	}), /* @__PURE__ */ import_react.createElement(AccountModal, {
		onClose: closeAccountModal,
		open: accountModalOpen
	}), /* @__PURE__ */ import_react.createElement(ChainModal, {
		onClose: closeChainModal,
		open: chainModalOpen
	}));
}
function useModalState() {
	const { accountModalOpen, chainModalOpen, connectModalOpen } = (0, import_react.useContext)(ModalContext);
	return {
		accountModalOpen,
		chainModalOpen,
		connectModalOpen
	};
}
function useAccountModal() {
	const { accountModalOpen, openAccountModal } = (0, import_react.useContext)(ModalContext);
	return {
		accountModalOpen,
		openAccountModal
	};
}
function useChainModal() {
	const { chainModalOpen, openChainModal } = (0, import_react.useContext)(ModalContext);
	return {
		chainModalOpen,
		openChainModal
	};
}
function useWalletConnectOpenState() {
	const { isWalletConnectModalOpen, setIsWalletConnectModalOpen } = (0, import_react.useContext)(ModalContext);
	return {
		isWalletConnectModalOpen,
		setIsWalletConnectModalOpen
	};
}
function useConnectModal() {
	const { connectModalOpen, openConnectModal } = (0, import_react.useContext)(ModalContext);
	const { isWalletConnectModalOpen } = useWalletConnectOpenState();
	return {
		connectModalOpen: connectModalOpen || isWalletConnectModalOpen,
		openConnectModal
	};
}
var noop = () => {};
function ConnectButtonRenderer({ children }) {
	const isMounted = useIsMounted();
	const { address } = useConnection();
	const { chainId } = useConnection();
	const { chains: wagmiChains } = useConfig();
	const isCurrentChainSupported = wagmiChains.some((chain) => chain.id === chainId);
	const rainbowkitChainsById = useRainbowKitChainsById();
	const authenticationStatus = useAuthenticationStatus() ?? void 0;
	const rainbowKitChain = chainId ? rainbowkitChainsById[chainId] : void 0;
	const chainName = rainbowKitChain?.name ?? void 0;
	const chainIconUrl = rainbowKitChain?.iconUrl ?? void 0;
	const chainIconBackground = rainbowKitChain?.iconBackground ?? void 0;
	const resolvedChainIconUrl = useAsyncImage(chainIconUrl);
	const showRecentTransactions = (0, import_react.useContext)(ShowRecentTransactionsContext);
	const hasPendingTransactions = useRecentTransactions().some(({ status }) => status === "pending") && showRecentTransactions;
	const { showBalance } = useShowBalance();
	const computeShouldShowBalance = () => {
		if (typeof showBalance === "boolean") return showBalance;
		if (showBalance) return normalizeResponsiveValue(showBalance)[isMobile() ? "smallScreen" : "largeScreen"];
		return true;
	};
	const { balance, ensAvatar, ensName } = useProfile({
		address,
		includeBalance: computeShouldShowBalance()
	});
	const displayBalance = balance ? `${abbreviateETHBalance(Number.parseFloat(balance.formatted))} ${balance.symbol}` : void 0;
	const { openConnectModal } = useConnectModal();
	const { openChainModal } = useChainModal();
	const { openAccountModal } = useAccountModal();
	const { accountModalOpen, chainModalOpen, connectModalOpen } = useModalState();
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, children({
		account: address ? {
			address,
			balanceDecimals: balance?.decimals,
			balanceFormatted: balance?.formatted,
			balanceSymbol: balance?.symbol,
			displayBalance,
			displayName: ensName ? formatENS(ensName) : formatAddress(address),
			ensAvatar: ensAvatar ?? void 0,
			ensName: ensName ?? void 0,
			hasPendingTransactions
		} : void 0,
		accountModalOpen,
		authenticationStatus,
		chain: chainId ? {
			hasIcon: Boolean(chainIconUrl),
			iconBackground: chainIconBackground,
			iconUrl: resolvedChainIconUrl,
			id: chainId,
			name: chainName,
			unsupported: !isCurrentChainSupported
		} : void 0,
		chainModalOpen,
		connectModalOpen,
		mounted: isMounted(),
		openAccountModal: openAccountModal ?? noop,
		openChainModal: openChainModal ?? noop,
		openConnectModal: openConnectModal ?? noop
	}));
}
ConnectButtonRenderer.displayName = "ConnectButton.Custom";
var defaultProps = {
	accountStatus: "full",
	chainStatus: {
		largeScreen: "full",
		smallScreen: "icon"
	},
	label: "Connect Wallet",
	showBalance: {
		largeScreen: true,
		smallScreen: false
	}
};
function ConnectButton({ accountStatus = defaultProps.accountStatus, chainStatus = defaultProps.chainStatus, label = defaultProps.label, showBalance = defaultProps.showBalance }) {
	const chains = useRainbowKitChains();
	const connectionStatus = useConnectionStatus();
	const { setShowBalance } = useShowBalance();
	const [ready, setReady] = (0, import_react.useState)(false);
	const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
	(0, import_react.useEffect)(() => {
		setShowBalance(showBalance);
		if (!ready) setReady(true);
	}, [showBalance, setShowBalance]);
	return ready ? /* @__PURE__ */ import_react.createElement(ConnectButtonRenderer, null, ({ account, chain, mounted, openAccountModal, openChainModal, openConnectModal }) => {
		const ready2 = mounted && connectionStatus !== "loading";
		const unsupportedChain = chain?.unsupported ?? false;
		return /* @__PURE__ */ import_react.createElement(Box, {
			display: "flex",
			gap: "12",
			...!ready2 && {
				"aria-hidden": true,
				style: {
					opacity: 0,
					pointerEvents: "none",
					userSelect: "none"
				}
			}
		}, ready2 && account && connectionStatus === "connected" ? /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, chain && (chains.length > 1 || unsupportedChain) && /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			"aria-label": "Chain Selector",
			as: "button",
			background: unsupportedChain ? "connectButtonBackgroundError" : "connectButtonBackground",
			borderRadius: "connectButton",
			boxShadow: "connectButton",
			className: touchableStyles({
				active: "shrink",
				hover: "grow"
			}),
			color: unsupportedChain ? "connectButtonTextError" : "connectButtonText",
			display: mapResponsiveValue(chainStatus, (value) => value === "none" ? "none" : "flex"),
			fontFamily: "body",
			fontWeight: "bold",
			gap: "6",
			key: unsupportedChain ? "unsupported" : "supported",
			onClick: openChainModal,
			paddingX: "10",
			paddingY: "8",
			testId: unsupportedChain ? "wrong-network-button" : "chain-button",
			transition: "default",
			type: "button"
		}, unsupportedChain ? /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			display: "flex",
			height: "24",
			paddingX: "4"
		}, i18n2.t("connect_wallet.wrong_network.label")) : /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			display: "flex",
			gap: "6"
		}, chain.hasIcon ? /* @__PURE__ */ import_react.createElement(Box, {
			display: mapResponsiveValue(chainStatus, (value) => value === "full" || value === "icon" ? "block" : "none"),
			height: "24",
			width: "24"
		}, /* @__PURE__ */ import_react.createElement(AsyncImage, {
			alt: chain.name ?? "Chain icon",
			background: chain.iconBackground,
			borderRadius: "full",
			height: "24",
			src: chain.iconUrl,
			width: "24"
		})) : null, /* @__PURE__ */ import_react.createElement(Box, { display: mapResponsiveValue(chainStatus, (value) => {
			if (value === "icon" && !chain.iconUrl) return "block";
			return value === "full" || value === "name" ? "block" : "none";
		}) }, chain.name ?? chain.id)), /* @__PURE__ */ import_react.createElement(DropdownIcon, null)), !unsupportedChain && /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			as: "button",
			background: "connectButtonBackground",
			borderRadius: "connectButton",
			boxShadow: "connectButton",
			className: touchableStyles({
				active: "shrink",
				hover: "grow"
			}),
			color: "connectButtonText",
			display: "flex",
			fontFamily: "body",
			fontWeight: "bold",
			onClick: openAccountModal,
			testId: "account-button",
			transition: "default",
			type: "button"
		}, account.displayBalance && /* @__PURE__ */ import_react.createElement(Box, {
			display: mapResponsiveValue(showBalance, (value) => value ? "block" : "none"),
			padding: "8",
			paddingLeft: "12"
		}, account.displayBalance), /* @__PURE__ */ import_react.createElement(Box, {
			background: normalizeResponsiveValue(showBalance)[isMobile() ? "smallScreen" : "largeScreen"] ? "connectButtonInnerBackground" : "connectButtonBackground",
			borderColor: "connectButtonBackground",
			borderRadius: "connectButton",
			borderStyle: "solid",
			borderWidth: "2",
			color: "connectButtonText",
			fontFamily: "body",
			fontWeight: "bold",
			paddingX: "8",
			paddingY: "6",
			transition: "default"
		}, /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			display: "flex",
			gap: "6",
			height: "24"
		}, /* @__PURE__ */ import_react.createElement(Box, { display: mapResponsiveValue(accountStatus, (value) => value === "full" || value === "avatar" ? "block" : "none") }, /* @__PURE__ */ import_react.createElement(Avatar, {
			address: account.address,
			imageUrl: account.ensAvatar,
			loading: account.hasPendingTransactions,
			size: 24
		})), /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			display: "flex",
			gap: "6"
		}, /* @__PURE__ */ import_react.createElement(Box, { display: mapResponsiveValue(accountStatus, (value) => value === "full" || value === "address" ? "block" : "none") }, account.displayName), /* @__PURE__ */ import_react.createElement(DropdownIcon, null)))))) : /* @__PURE__ */ import_react.createElement(Box, {
			as: "button",
			background: "accentColor",
			borderRadius: "connectButton",
			boxShadow: "connectButton",
			className: touchableStyles({
				active: "shrink",
				hover: "grow"
			}),
			color: "accentColorForeground",
			fontFamily: "body",
			fontWeight: "bold",
			height: "40",
			key: "connect",
			onClick: openConnectModal,
			paddingX: "14",
			testId: "connect-button",
			transition: "default",
			type: "button"
		}, mounted && label === "Connect Wallet" ? i18n2.t("connect_wallet.label") : label));
	}) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null);
}
ConnectButton.__defaultProps = defaultProps;
ConnectButton.Custom = ConnectButtonRenderer;
var border = "_1y2lnfi0";
var maxWidth = "_1y2lnfi1";
function WalletButtonRenderer({ wallet = "rainbow", children }) {
	const isMounted = useIsMounted();
	const { openConnectModal } = useConnectModal();
	const { connectModalOpen } = useModalState();
	const { connector, setConnector } = (0, import_react.useContext)(WalletButtonContext);
	const [firstConnector] = useWalletConnectors().filter((wallet2) => wallet2.isRainbowKitConnector).filter((_wallet) => _wallet.id.toLowerCase() === wallet.toLowerCase()).sort((a, b) => a.groupIndex - b.groupIndex);
	if (!firstConnector) throw new Error("Connector not found");
	const connectionStatus = useConnectionStatus();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [isError, setIsError] = (0, import_react.useState)(false);
	const mobile = isMobile();
	(0, import_react.useEffect)(() => {
		if (!connectModalOpen && connector) setConnector(null);
	}, [
		connectModalOpen,
		connector,
		setConnector
	]);
	const { isConnected, isConnecting } = useConnection();
	useConnectionEffect({
		onConnect: () => {
			if (isError) setIsError(false);
		},
		onDisconnect: clearLatestWalletId
	});
	const isLastWalletIdConnected = (0, import_react.useMemo)(() => {
		const lastWalletId = getLatestWalletId();
		if (!lastWalletId || !firstConnector?.id) return false;
		if (!isConnected) return false;
		return lastWalletId === firstConnector?.id;
	}, [isConnected, firstConnector]);
	const connectWallet = async () => {
		try {
			setLoading(true);
			if (isError) setIsError(false);
			await firstConnector?.connect?.();
		} catch {
			setIsError(true);
		} finally {
			setLoading(false);
		}
	};
	const ready = !isConnecting && !!openConnectModal && firstConnector && !(connectionStatus === "loading");
	const isNotSupported = !firstConnector?.installed || !firstConnector?.ready;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, children({
		error: isError,
		loading,
		connected: isLastWalletIdConnected,
		ready,
		mounted: isMounted(),
		connector: firstConnector,
		connect: async () => {
			addLatestWalletId(firstConnector?.id || "");
			if (mobile || isNotSupported) {
				openConnectModal?.();
				setConnector(firstConnector);
				return;
			}
			await connectWallet();
		}
	}));
}
var WalletButton2 = ({ wallet }) => {
	return /* @__PURE__ */ import_react.createElement(WalletButtonRenderer, { wallet }, ({ ready, connect, connected, mounted, connector, loading }) => {
		const isDisabled = !ready || loading;
		const { i18n: i18n2 } = (0, import_react.useContext)(I18nContext);
		const connectorName = connector?.name || "";
		if (!mounted) return;
		return /* @__PURE__ */ import_react.createElement(Box, {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			disabled: isDisabled,
			pointerEvents: isDisabled ? "none" : "all"
		}, /* @__PURE__ */ import_react.createElement(Box, {
			as: "button",
			borderRadius: "menuButton",
			borderStyle: "solid",
			borderWidth: "1",
			className: [
				maxWidth,
				border,
				touchableStyles({
					active: "shrink",
					hover: "grow"
				})
			],
			minHeight: "44",
			onClick: connect,
			disabled: !ready || loading,
			padding: "6",
			style: { willChange: "transform" },
			testId: `wallet-button-${connector?.id || ""}`,
			transition: "default",
			width: "full",
			background: "connectButtonBackground"
		}, /* @__PURE__ */ import_react.createElement(Box, {
			color: "modalText",
			fontFamily: "body",
			fontSize: "16",
			fontWeight: "bold",
			transition: "default",
			display: "flex",
			alignItems: "center"
		}, /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			display: "flex",
			flexDirection: "row",
			gap: "12",
			paddingRight: "6"
		}, /* @__PURE__ */ import_react.createElement(Box, null, loading ? /* @__PURE__ */ import_react.createElement(SpinnerIcon, null) : /* @__PURE__ */ import_react.createElement(AsyncImage, {
			background: connector?.iconBackground,
			borderRadius: "6",
			height: "28",
			src: connector?.iconUrl,
			width: "28"
		})), /* @__PURE__ */ import_react.createElement(Box, {
			alignItems: "center",
			display: "flex",
			flexDirection: "column",
			color: "modalText"
		}, /* @__PURE__ */ import_react.createElement(Box, { testId: `wallet-button-label-${connector?.id || ""}` }, loading ? i18n2.t("connect.status.connecting", { wallet: connectorName }) : connectorName)), connected ? /* @__PURE__ */ import_react.createElement(Box, {
			background: "connectionIndicator",
			borderColor: "selectedOptionBorder",
			borderRadius: "full",
			borderStyle: "solid",
			borderWidth: "1",
			height: "8",
			width: "8"
		}) : null))));
	});
};
WalletButton2.Custom = WalletButtonRenderer;
var computeWalletConnectMetaData = ({ appName, appDescription, appUrl, appIcon }) => {
	return {
		name: appName,
		description: appDescription ?? appName,
		url: appUrl ?? (typeof window !== "undefined" ? window.location.origin : ""),
		icons: [...appIcon ? [appIcon] : []]
	};
};
function omitUndefinedValues(obj) {
	return Object.fromEntries(Object.entries(obj).filter(([_key, value]) => value !== void 0));
}
function uniqueBy(items, key) {
	const filtered = [];
	for (const item of items) if (!filtered.some((x) => x[key] === item[key])) filtered.push(item);
	return filtered;
}
var connectorsForWallets = (walletList, { projectId, walletConnectParameters, appName, appDescription, appUrl, appIcon }) => {
	if (!walletList.length) throw new Error("No wallet list was provided");
	for (const { wallets, groupName } of walletList) if (!wallets.length) throw new Error(`No wallets provided for group: ${groupName}`);
	let index = -1;
	const connectors = [];
	const visibleWallets = [];
	const potentiallyHiddenWallets = [];
	const walletConnectMetaData = computeWalletConnectMetaData({
		appName,
		appDescription,
		appUrl,
		appIcon
	});
	for (const [groupIndex, { groupName, wallets }] of walletList.entries()) for (const createWallet of wallets) {
		index++;
		const wallet = createWallet({
			projectId,
			appName,
			appIcon,
			options: {
				metadata: walletConnectMetaData,
				...walletConnectParameters
			},
			walletConnectParameters: {
				metadata: walletConnectMetaData,
				...walletConnectParameters
			}
		});
		if (wallet?.iconAccent && !isHexString(wallet?.iconAccent)) throw new Error(`Property \`iconAccent\` is not a hex value for wallet: ${wallet.name}`);
		const walletListItem = {
			...wallet,
			groupIndex: groupIndex + 1,
			groupName,
			index
		};
		if (typeof wallet.hidden === "function") potentiallyHiddenWallets.push(walletListItem);
		else visibleWallets.push(walletListItem);
	}
	const walletListItems = uniqueBy([...visibleWallets, ...potentiallyHiddenWallets], "id");
	for (const { createConnector: createConnector6, groupIndex, groupName, hidden, ...walletMeta } of walletListItems) {
		if (typeof hidden === "function") {
			if (hidden()) continue;
		}
		const walletMetaData = (additionalRkParams) => {
			return { rkDetails: omitUndefinedValues({
				...walletMeta,
				groupIndex,
				groupName,
				isRainbowKitConnector: true,
				...additionalRkParams ? additionalRkParams : {}
			}) };
		};
		if (walletMeta.id === "walletConnect") connectors.push(createConnector6(walletMetaData({
			isWalletConnectModalConnector: true,
			showQrModal: true
		})));
		const connector = createConnector6(walletMetaData());
		connectors.push(connector);
	}
	return connectors;
};
var walletConnectInstances = /* @__PURE__ */ new Map();
var getOrCreateWalletConnectInstance = ({ projectId, walletConnectParameters, rkDetailsShowQrModal, rkDetailsIsWalletConnectModalConnector }) => {
	let config = {
		telemetryEnabled: false,
		...walletConnectParameters ? walletConnectParameters : {},
		projectId,
		showQrModal: false
	};
	if (rkDetailsShowQrModal) config = {
		...config,
		showQrModal: true
	};
	if (!("customStoragePrefix" in config)) config = {
		...config,
		customStoragePrefix: rkDetailsIsWalletConnectModalConnector ? "clientOne" : "clientTwo"
	};
	const serializedConfig = JSON.stringify(config);
	const sharedWalletConnector = walletConnectInstances.get(serializedConfig);
	if (sharedWalletConnector) return sharedWalletConnector;
	const newWalletConnectInstance = walletConnect(config);
	walletConnectInstances.set(serializedConfig, newWalletConnectInstance);
	return newWalletConnectInstance;
};
function createWalletConnectConnector({ projectId, walletDetails, walletConnectParameters }) {
	return createConnector((config) => ({
		...getOrCreateWalletConnectInstance({
			projectId,
			walletConnectParameters,
			rkDetailsShowQrModal: walletDetails.rkDetails.showQrModal,
			rkDetailsIsWalletConnectModalConnector: walletDetails.rkDetails.isWalletConnectModalConnector
		})(config),
		...walletDetails
	}));
}
function getWalletConnectConnector({ projectId, walletConnectParameters }) {
	const exampleProjectId = "21fef48091f12692cad574a6f7753643";
	if (!projectId || projectId === "") throw new Error("No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure");
	if (projectId === "YOUR_PROJECT_ID") projectId = exampleProjectId;
	return (walletDetails) => createWalletConnectConnector({
		projectId,
		walletDetails,
		walletConnectParameters
	});
}
function getExplicitInjectedProvider(flag) {
	const _window = typeof window !== "undefined" ? window : void 0;
	if (typeof _window === "undefined" || typeof _window.ethereum === "undefined") return;
	const providers = _window.ethereum.providers;
	return providers ? providers.find((provider) => provider[flag]) : _window.ethereum[flag] ? _window.ethereum : void 0;
}
function getWindowProviderNamespace(namespace) {
	const providerSearch = (provider, namespace2) => {
		const [property, ...path] = namespace2.split(".");
		const _provider = provider[property];
		if (_provider) {
			if (path.length === 0) return _provider;
			return providerSearch(_provider, path.join("."));
		}
	};
	if (typeof window !== "undefined") return providerSearch(window, namespace);
}
function hasInjectedProvider({ flag, namespace }) {
	if (namespace && typeof getWindowProviderNamespace(namespace) !== "undefined") return true;
	if (flag && typeof getExplicitInjectedProvider(flag) !== "undefined") return true;
	return false;
}
function getInjectedProvider({ flag, namespace }) {
	const _window = typeof window !== "undefined" ? window : void 0;
	if (typeof _window === "undefined") return;
	if (namespace) {
		const windowProvider = getWindowProviderNamespace(namespace);
		if (windowProvider) return windowProvider;
	}
	const providers = _window.ethereum?.providers;
	if (flag) {
		const provider = getExplicitInjectedProvider(flag);
		if (provider) return provider;
	}
	if (typeof providers !== "undefined" && providers.length > 0) return providers[0];
	return _window.ethereum;
}
function createInjectedConnector(provider) {
	return (walletDetails) => {
		const injectedConfig = provider ? { target: () => ({
			id: walletDetails.rkDetails.id,
			name: walletDetails.rkDetails.name,
			provider
		}) } : {};
		return createConnector((config) => ({
			...injected(injectedConfig)(config),
			...walletDetails
		}));
	};
}
function getInjectedConnector({ flag, namespace, target }) {
	return createInjectedConnector(target ? target : getInjectedProvider({
		flag,
		namespace
	}));
}
var baseAccount = ({ appName, appIcon }) => {
	const { preference, ...optionalConfig } = baseAccount;
	return {
		id: "baseAccount",
		name: "Base Account",
		shortName: "Base Account",
		rdns: "app.base.account",
		iconUrl: async () => (await import("./baseAccount-44UITRK7-BNfgE_Bv.js")).default,
		iconAccent: "#0000FF",
		iconBackground: "#0000FF",
		installed: true,
		createConnector: (walletDetails) => {
			const connector = baseAccount$1({
				appName,
				appLogoUrl: appIcon,
				...optionalConfig,
				preference: {
					telemetry: false,
					...preference || {}
				}
			});
			return createConnector((config) => ({
				...connector(config),
				...walletDetails
			}));
		}
	};
};
function isMetaMask(ethereum) {
	if (!ethereum?.isMetaMask) return false;
	if (ethereum.isBraveWallet && !ethereum._events && !ethereum._state) return false;
	if (ethereum.isApexWallet) return false;
	if (ethereum.isAvalanche) return false;
	if (ethereum.isBackpack) return false;
	if (ethereum.isBifrost) return false;
	if (ethereum.isBitKeep) return false;
	if (ethereum.isBitski) return false;
	if (ethereum.isBinance) return false;
	if (ethereum.isBlockWallet) return false;
	if (ethereum.isCoinbaseWallet) return false;
	if (ethereum.isDawn) return false;
	if (ethereum.isEnkrypt) return false;
	if (ethereum.isExodus) return false;
	if (ethereum.isFrame) return false;
	if (ethereum.isFrontier) return false;
	if (ethereum.isGamestop) return false;
	if (ethereum.isHyperPay) return false;
	if (ethereum.isImToken) return false;
	if (ethereum.isKuCoinWallet) return false;
	if (ethereum.isMathWallet) return false;
	if (ethereum.isNestWallet) return false;
	if (ethereum.isOkxWallet || ethereum.isOKExWallet) return false;
	if (ethereum.isOneInchIOSWallet || ethereum.isOneInchAndroidWallet) return false;
	if (ethereum.isOpera) return false;
	if (ethereum.isPhantom) return false;
	if (ethereum.isZilPay) return false;
	if (ethereum.isPortal) return false;
	if (ethereum.isxPortal) return false;
	if (ethereum.isRabby) return false;
	if (ethereum.isRainbow) return false;
	if (ethereum.isStatus) return false;
	if (ethereum.isTalisman) return false;
	if (ethereum.isTally) return false;
	if (ethereum.isTokenPocket) return false;
	if (ethereum.isTokenary) return false;
	if (ethereum.isTrust || ethereum.isTrustWallet) return false;
	if (ethereum.isCTRL) return false;
	if (ethereum.isZeal) return false;
	if (ethereum.isCoin98) return false;
	if (ethereum.isMEWwallet) return false;
	if (ethereum.isSafeheron) return false;
	if (ethereum.isSafePal) return false;
	if (ethereum.isWigwam) return false;
	if (ethereum.isZerion) return false;
	if (ethereum.__seif) return false;
	return true;
}
var metaMaskWallet = ({ projectId, walletConnectParameters }) => {
	const { ...optionalConfig } = metaMaskWallet;
	const isMetaMaskInjected = typeof window !== "undefined" ? isMetaMask(window.ethereum) : false;
	const shouldUseWalletConnect = !isMetaMaskInjected && !isMobile();
	const shouldUseMetaMaskConnector = isMetaMaskInjected || isMobile();
	return {
		id: "metaMask",
		name: "MetaMask",
		rdns: "io.metamask",
		iconUrl: async () => (await import("./metaMaskWallet-SITXT2FV-CSxivJOe.js")).default,
		iconAccent: "#f6851a",
		iconBackground: "#fff",
		installed: isMetaMaskInjected ? isMetaMaskInjected : void 0,
		downloadUrls: {
			android: "https://play.google.com/store/apps/details?id=io.metamask",
			ios: "https://apps.apple.com/us/app/metamask/id1438144202",
			mobile: "https://metamask.io/download",
			qrCode: "https://metamask.io/download",
			chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
			edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",
			firefox: "https://addons.mozilla.org/firefox/addon/ether-metamask",
			opera: "https://addons.opera.com/extensions/details/metamask-10",
			browserExtension: "https://metamask.io/download"
		},
		mobile: { getUri: shouldUseMetaMaskConnector ? (uri) => uri : void 0 },
		qrCode: shouldUseWalletConnect ? {
			getUri: (uri) => `https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`,
			instructions: {
				learnMoreUrl: "https://metamask.io/faqs/",
				steps: [
					{
						description: "wallet_connectors.metamask.qr_code.step1.description",
						step: "install",
						title: "wallet_connectors.metamask.qr_code.step1.title"
					},
					{
						description: "wallet_connectors.metamask.qr_code.step2.description",
						step: "create",
						title: "wallet_connectors.metamask.qr_code.step2.title"
					},
					{
						description: "wallet_connectors.metamask.qr_code.step3.description",
						step: "refresh",
						title: "wallet_connectors.metamask.qr_code.step3.title"
					}
				]
			}
		} : void 0,
		extension: { instructions: {
			learnMoreUrl: "https://metamask.io/faqs/",
			steps: [
				{
					description: "wallet_connectors.metamask.extension.step1.description",
					step: "install",
					title: "wallet_connectors.metamask.extension.step1.title"
				},
				{
					description: "wallet_connectors.metamask.extension.step2.description",
					step: "create",
					title: "wallet_connectors.metamask.extension.step2.title"
				},
				{
					description: "wallet_connectors.metamask.extension.step3.description",
					step: "refresh",
					title: "wallet_connectors.metamask.extension.step3.title"
				}
			]
		} },
		createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
			projectId,
			walletConnectParameters
		}) : ((walletDetails) => {
			return createConnector((config) => {
				const metamaskConnector = metaMask({
					dappMetadata: {
						connector: "rainbowkit",
						name: walletConnectParameters?.metadata?.name,
						iconUrl: walletConnectParameters?.metadata?.icons[0],
						url: walletConnectParameters?.metadata?.url
					},
					headless: true,
					checkInstallationImmediately: false,
					enableAnalytics: false,
					...optionalConfig
				})(config);
				return {
					...metamaskConnector,
					...walletDetails,
					getChainId: async () => {
						try {
							return await metamaskConnector.getChainId();
						} catch {
							return config.chains[0]?.id ?? 1;
						}
					}
				};
			});
		})
	};
};
var rainbowWallet = ({ projectId, walletConnectParameters }) => {
	const isRainbowInjected = hasInjectedProvider({ flag: "isRainbow" });
	const shouldUseWalletConnect = !isRainbowInjected;
	const getUri = (uri) => {
		return isAndroid() ? uri : isIOS() ? `rainbow://wc?uri=${encodeURIComponent(uri)}&connector=rainbowkit` : `https://rnbwapp.com/wc?uri=${encodeURIComponent(uri)}&connector=rainbowkit`;
	};
	return {
		id: "rainbow",
		name: "Rainbow",
		rdns: "me.rainbow",
		iconUrl: async () => (await import("./rainbowWallet-O26YNBMX-C6y44kew.js")).default,
		iconBackground: "#0c2f78",
		installed: !shouldUseWalletConnect ? isRainbowInjected : void 0,
		downloadUrls: {
			android: "https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Drainbowkit&utm_source=rainbowkit",
			ios: "https://apps.apple.com/app/apple-store/id1457119021?pt=119997837&ct=rainbowkit&mt=8",
			mobile: "https://rainbow.download?utm_source=rainbowkit",
			qrCode: "https://rainbow.download?utm_source=rainbowkit&utm_medium=qrcode",
			browserExtension: "https://rainbow.me/extension?utm_source=rainbowkit"
		},
		mobile: { getUri: shouldUseWalletConnect ? getUri : void 0 },
		qrCode: shouldUseWalletConnect ? {
			getUri,
			instructions: {
				learnMoreUrl: "https://learn.rainbow.me/connect-to-a-website-or-app?utm_source=rainbowkit&utm_medium=connector&utm_campaign=learnmore",
				steps: [
					{
						description: "wallet_connectors.rainbow.qr_code.step1.description",
						step: "install",
						title: "wallet_connectors.rainbow.qr_code.step1.title"
					},
					{
						description: "wallet_connectors.rainbow.qr_code.step2.description",
						step: "create",
						title: "wallet_connectors.rainbow.qr_code.step2.title"
					},
					{
						description: "wallet_connectors.rainbow.qr_code.step3.description",
						step: "scan",
						title: "wallet_connectors.rainbow.qr_code.step3.title"
					}
				]
			}
		} : void 0,
		createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
			projectId,
			walletConnectParameters
		}) : getInjectedConnector({ flag: "isRainbow" })
	};
};
var safeWallet = () => ({
	id: "safe",
	name: "Safe",
	iconAccent: "#12ff80",
	iconBackground: "#fff",
	iconUrl: async () => (await import("./safeWallet-5MNKTR5Z-COeZ3-AY.js")).default,
	installed: !(typeof window === "undefined") && window?.parent !== window,
	downloadUrls: {},
	createConnector: (walletDetails) => {
		return createConnector((config) => ({
			...safe()(config),
			...walletDetails
		}));
	}
});
var walletConnectWallet = ({ projectId, options }) => {
	const getUri = (uri) => uri;
	return {
		id: "walletConnect",
		name: "WalletConnect",
		installed: void 0,
		iconUrl: async () => (await import("./walletConnectWallet-YHWKVTDY-BXSqRWOp.js")).default,
		iconBackground: "#3b99fc",
		qrCode: { getUri },
		createConnector: getWalletConnectConnector({
			projectId,
			walletConnectParameters: options
		})
	};
};
var createDefaultTransports = (chains) => {
	return chains.reduce((acc, chain) => {
		const key = chain.id;
		acc[key] = http();
		return acc;
	}, {});
};
var getDefaultConfig = ({ appName, appDescription, appUrl, appIcon, wallets, projectId, walletConnectParameters, ...wagmiParameters }) => {
	const { transports, chains, ...restWagmiParameters } = wagmiParameters;
	const metadata = computeWalletConnectMetaData({
		appName,
		appDescription,
		appUrl,
		appIcon
	});
	return createConfig({
		connectors: connectorsForWallets(wallets || [{
			groupName: "Popular",
			wallets: [
				safeWallet,
				rainbowWallet,
				baseAccount,
				metaMaskWallet,
				walletConnectWallet
			]
		}], {
			projectId,
			appName,
			appDescription,
			appUrl,
			appIcon,
			walletConnectParameters: {
				metadata,
				...walletConnectParameters
			}
		}),
		chains,
		transports: transports || createDefaultTransports(chains),
		...restWagmiParameters
	});
};
function getDefaultWallets(parameters) {
	const wallets = [{
		groupName: "Popular",
		wallets: [
			safeWallet,
			rainbowWallet,
			baseAccount,
			metaMaskWallet,
			walletConnectWallet
		]
	}];
	if (parameters) return {
		connectors: connectorsForWallets(wallets, parameters),
		wallets
	};
	return { wallets };
}
function useAddRecentTransaction() {
	const store = useTransactionStore();
	const { address } = useConnection();
	const chainId = useChainId();
	return (0, import_react.useCallback)((transaction) => {
		if (!address || !chainId) throw new Error("No address or chain ID found");
		store.addTransaction(address, chainId, transaction);
	}, [
		store,
		address,
		chainId
	]);
}
var __private__ = {
	DesktopOptions,
	dialogContent,
	dialogContentMobile,
	MobileOptions
};
//#endregion
export { ConnectButton, RainbowKitAuthenticationProvider, RainbowKitProvider, WalletButton2 as WalletButton, __private__, connectorsForWallets, createAuthenticationAdapter, cssObjectFromTheme, cssStringFromTheme, darkTheme, getDefaultConfig, getDefaultWallets, getWalletConnectConnector, lightTheme, midnightTheme, useAccountModal, useAddRecentTransaction, useChainModal, useConnectModal };

//# sourceMappingURL=@rainbow-me_rainbowkit.js.map