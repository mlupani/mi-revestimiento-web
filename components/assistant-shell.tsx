'use client';

import dynamic from 'next/dynamic';

const AssistantPanel = dynamic(
  async () => {
    const mod = await import('@/components/assistant-panel');
    return mod.AssistantPanel;
  },
  { ssr: false }
);

export function AssistantShell () {
  return <AssistantPanel />;
}
