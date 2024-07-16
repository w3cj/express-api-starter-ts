// eslint-disable-next-line import/no-extraneous-dependencies
import * as z from 'zod';

const Task = z.object({
  content: z.string().min(1),
  done: z.boolean().default(false),
});

type Task = z.infer<typeof Task>;

export default Task;