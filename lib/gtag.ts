export const reportConversion = (receiver: any) => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'conversion', {
    send_to: receiver,
  });

  return false;
};
