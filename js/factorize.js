var factorize =
	function(
		is_practice,
		search_task,    // Plugin to which trial defining factors will be passed to
		choices,        // Keys accepted as valid user input (first is mapped to 'present', second 'absent')
		set_sizes,       // Number of items to present during a given trial
		target_conds, // Sets whether target should be present, or absent, on a given trial
		TD_Sim,  // Sets visual similarity between target & distractor items
		DD_Sim   // Sets visual similarity between distractor items
	)
{
	trial_list = []


	// Randomly select target fill, also used as reference colour when generating distractor fills
	// Held constant throughout block
	let target_tilt = ranged_random(0, 179)

	let tilts = get_distractor_tilts(
		ref_index = target_tilt,
		TD_Similarity = TD_Sim,
		DD_Similarity = DD_Sim
	)

	for (let j=0; j < set_sizes.length; j++) {
		for (let k=0; k < target_conds.length; k++) {
			this_trial = {
				practice: is_practice,
				type: search_task,
				choices: choices,
				target_tilt: target_tilt,
				set_size: set_sizes[j],
				target_present: target_conds[k],
				TD_cond: TD_Sim,
				DD_cond: DD_Sim,
				distractor_tilts: tilts
			}
			trial_list.push(this_trial)
		}
	}

	return array_shuffle(trial_list)
}

