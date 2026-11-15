import { z } from "zod";

/** The shape of content/curriculum.json that the platform relies on. */
export const CurriculumSchema = z.object({
  platform_name: z.string().min(1),
  platform_description: z.string().min(1),
  units: z
    .array(
      z.object({
        unit: z.number().int(),
        day: z.number().int().min(1),
        title: z.string().min(1),
        locked_title: z.string().optional(),
        estimated_minutes: z.number().int().positive(),
        lessons: z
          .array(
            z.object({
              id: z.string().regex(/^\d+\.\d+$/),
              order: z.number().int().min(1),
              title: z.string().min(1),
              file: z.string().min(1),
              estimated_minutes: z.number().int().positive(),
            }),
          )
          .min(1),
      }),
    )
    .min(1),
});

export type Curriculum = z.infer<typeof CurriculumSchema>;
