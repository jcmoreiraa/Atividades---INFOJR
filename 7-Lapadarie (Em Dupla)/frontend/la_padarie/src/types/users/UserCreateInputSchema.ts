import { z } from 'zod';

export const UserCreateInputSchema = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  breads: z.coerce.number().int().min(1, { message: "Must be more than 1" }).max(100, { message: "Maximum 100 breads per client" })
}).strict();

export default UserCreateInputSchema;
