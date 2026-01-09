'use client';

import { AiChatbot } from '@/components/chatbot/ai-chatbot';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';

export function ClientWrapper() {
  return (
    <>
      <AiChatbot />
      <WhatsAppButton phoneNumber="+923417548178" />
    </>
  );
}
