import { Hero } from '@/components/hero';
import { CategoryGrid } from '@/components/category-grid';
import { FeaturedProducts } from '@/components/featured-products';
import { Rooms } from '@/components/rooms';
import { AssistantCta } from '@/components/assistant-cta';

export default function Home () {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Rooms />
      <AssistantCta />
    </>
  );
}
