import { SCRIPTS } from "./scripts.js";

type Script = {
	name: string;
	ranges: number[][];
	direction: string;
	year: number;
	living: boolean;
	link: string;
};

/**  @function
 * @param {string} text */
function dominantDirection(text: string) {
	const symbols = Array.from(text);
	const scriptMap = symbols.reduce<{ [key: string]: number }>(
		(acc, char: string) => {
			const code = char.charCodeAt(0);
			const script = characterScript(code)!;
			if (script == null) return acc;
			if (acc[script.direction] == undefined) {
				acc[script.direction] = 1;
				return acc;
			}
			if (acc[script.direction] != undefined) {
				acc[script.direction]++;
				return acc;
			}
			return acc;
		},
		{},
	);
	let max = Math.max(scriptMap.rtl, scriptMap.ltr);
	if (max == scriptMap.rtl) return "rtl";
	return "ltr";
}

function characterScript(code: number): Script | null {
	for (let script of SCRIPTS) {
		if (
			script.ranges.some(([from, to]) => {
				return code >= from && code < to;
			})
		) {
			return script;
		}
	}
	return null;
}

// → ltr
console.log(dominantDirection("Hello!"));
// → rtl
console.log(dominantDirection("Hey, مساء الخير"));
