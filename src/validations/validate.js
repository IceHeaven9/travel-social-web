export function validate(schema, payload) {
	return schema.validate(payload, {
		abortEarly: false,
		allowUnknown: false,
		stripUnknown: true,
	});
}
