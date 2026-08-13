import { site } from '@/lib/site';

export function whatsappLink (text: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function productWhatsappLink (productName: string) {
  return whatsappLink(site.whatsappMessages.product(productName));
}
