import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types.js";
import { someFormSchema } from "../schemas.js";
import { fail, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(someFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, someFormSchema);
		if (!form.valid) return fail(400, { form });
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return {
			form
		};
	}
};
