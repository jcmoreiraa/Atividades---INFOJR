import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.number().int(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  breads: z.number().int().min(1, { message: "Must be more than 1" }).max(100, { message: "Maximum 100 breads per client" }),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
