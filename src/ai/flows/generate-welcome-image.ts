// use server'
'use server';
/**
 * @fileOverview Generates a welcome image for the Legacy Housewares website.
 *
 * - generateWelcomeImage - A function that generates a welcome image.
 * - GenerateWelcomeImageInput - The input type for the generateWelcomeImage function.
 * - GenerateWelcomeImageOutput - The return type for the generateWelcomeImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWelcomeImageInputSchema = z.object({
  shouldAddLogo: z
    .boolean()
    .describe('Whether or not to add the Legacy Housewares logo to the generated image.'),
});
export type GenerateWelcomeImageInput = z.infer<typeof GenerateWelcomeImageInputSchema>;

const GenerateWelcomeImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated welcome image.'),
});
export type GenerateWelcomeImageOutput = z.infer<typeof GenerateWelcomeImageOutputSchema>;

export async function generateWelcomeImage(input: GenerateWelcomeImageInput): Promise<GenerateWelcomeImageOutput> {
  return generateWelcomeImageFlow(input);
}

const generateWelcomeImagePrompt = ai.definePrompt({
  name: 'generateWelcomeImagePrompt',
  input: {schema: GenerateWelcomeImageInputSchema},
  prompt: `Generate a relevant background image for the Legacy Housewares website, suggesting houseware in a vintage setting.  

  {{#if shouldAddLogo}}
  Add the Legacy Housewares logo tastefully to the generated image.
  {{/if}}
  `,
});

const generateWelcomeImageFlow = ai.defineFlow(
  {
    name: 'generateWelcomeImageFlow',
    inputSchema: GenerateWelcomeImageInputSchema,
    outputSchema: GenerateWelcomeImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: generateWelcomeImagePrompt,
      input: input,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media?.url) {
      throw new Error('Image generation failed to return an image.');
    }

    return {imageUrl: media.url};
  }
);
