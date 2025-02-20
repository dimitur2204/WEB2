function deepEqual(obj1, obj2) {
	if (obj1 === obj2) {
		return true;
	}
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	if (keys1.length != keys2.length) return false;

	for (let i = 0; i < keys1.length; i++) {
		const el1 = obj1[keys1[i]];
		const el2 = obj2[keys2[i]];

		if (typeof el1 === "object" && typeof el2 === "object") {
			return deepEqual(el1, el2);
		}

		if (el1 !== el2) {
			return false;
		}
	}
	return true;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// // → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
