
'use server';
/**
 * @fileOverview A chatbot flow for Uni Help Consultants.
 *
 * - runChatbotFlow - A function that streams responses for a chatbot conversation.
 */

import { ai } from '@/ai/genkit';
import { ChatbotInput, ChatbotInputSchema } from './chatbot-types';
import { services } from '@/lib/data.tsx';

// Generate a string of available services for the prompt
const availableServices = services.map(s => `- ${s.title}: ${s.shortDescription}`).join('\n');

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: { schema: ChatbotInputSchema },
  // System prompt to set the context for the AI
  system: `You are a friendly and helpful AI assistant for "Uni Help Consultants". Your goal is to assist users with their questions about studying abroad.

  You are an expert in the services we offer. Be concise and helpful. Guide users to relevant pages on the website if applicable.

  Here are the main services we offer:
  ${availableServices}

  When asked about services, you can provide a brief overview based on the list above. Do not make up services we do not offer.
  Keep your answers helpful but not too long.`,

  // The main prompt template using Handlebars syntax
  prompt: `{{#each history}}
{{#if (eq role 'user')}}
Human: {{{parts.[0].text}}}
{{else}}
AI: {{{parts.[0].text}}}
{{/if}}
{{/each}}
AI:`,
});

// Define the main chatbot flow
export async function runChatbotFlow(input: ChatbotInput) {
  const { stream } = await ai.generateStream({
    model: 'googleai/gemini-2.5-flash',
    prompt: await prompt.render(input),
    config: {
      temperature: 0.5,
      maxOutputTokens: 1024,
    },
  });

  // Create a new ReadableStream to pipe the chunks through
  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        controller.enqueue(chunk);
      }
      controller.close();
    },
  });

  return readableStream;
}
