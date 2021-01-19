var get_distractor_tilts = function(ref_index, TD_Similarity, DD_Similarity) {

	let ref_val = (TD_Similarity == 'HI') ? ref_index : (ref_index + 90);

	let distractor_tilts = []

	if (DD_Similarity == 'HI') {
		let adjustment = randomChoice([-20, 20])
		let tilt = (ref_val + adjustment)
		distractor_tilts.push(tilt)
	}
	else {
		let adjustment = [-40, -20, 20, 40]
		for (let i=0; i<adjustment.length; i++) {
			let tilt = (ref_val + adjustment[i])
			distractor_tilts.push(tilt)
		}
	}
	return distractor_tilts
}