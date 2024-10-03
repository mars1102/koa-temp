/**
 * 新建用户schema
 */
export const createUserSchema = {
  additionalProperties: false,
  properties: {
    name: { type: "string", minLength: 3, maxlength: 8 },
    code: { type: "string" },
    password: { type: "string" },
  },
};
