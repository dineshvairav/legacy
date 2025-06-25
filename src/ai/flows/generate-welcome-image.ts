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
    .describe('Whether or not to add the ushªOªpp Housewares logo to the generated image.'),
});
export type GenerateWelcomeImageInput = z.infer<typeof GenerateWelcomeImageInputSchema>;

const GenerateWelcomeImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated welcome image.'),
});
export type GenerateWelcomeImageOutput = z.infer<typeof GenerateWelcomeImageOutputSchema>;

export async function generateWelcomeImage(input: GenerateWelcomeImageInput): Promise<GenerateWelcomeImageOutput> {
  return generateWelcomeImageFlow(input);
}

const generateWelcomeImageFlow = ai.defineFlow(
  {
    name: 'generateWelcomeImageFlow',
    inputSchema: GenerateWelcomeImageInputSchema,
    outputSchema: GenerateWelcomeImageOutputSchema,
  },
  async (input) => {
    const prompt = `A collection of modern, sleek stainless steel and black houseware products, including pots, pans, and small appliances. The items are arranged neatly on a reflective white surface against a minimalist, dark gray background. The lighting is bright and clean, creating a professional product photography look. ${
      input.shouldAddLogo ? 'The ushªOªpp Housewares logo is tastefully added to the image.' : ''
    }`;

    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: prompt,
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
