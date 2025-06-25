
import { HomePage } from "@/components/home-page";
import { generateWelcomeImage } from "@/ai/flows/generate-welcome-image";
import type { IconName } from "@/components/icons";

export default async function Page() {
  let imageUrl = "https://placehold.co/1920x1080.png";
  try {
    const res = await generateWelcomeImage({ shouldAddLogo: true });
    if (res.imageUrl) {
      imageUrl = res.imageUrl;
    }
  } catch (error) {
    console.error("Failed to generate welcome image:", error);
    // Fallback to placeholder is handled by initial value
  }

  const products: { name: string; icon: IconName }[] = [
    { name: "Kitchen Items", icon: "CookingPot" },
    { name: "Presentation Articles", icon: "Gem" },
    { name: "Brassware", icon: "Flame" },
    { name: "Aluminum", icon: "Layers" },
    { name: "Stainless Steel", icon: "Sparkles" },
    { name: "Cast Iron", icon: "Container" },
    { name: "Small Appliances", icon: "Blend" },
  ];

  const services: { name: string; description: string, icon: IconName }[] = [
    { name: "Pressure Cookers", description: "Expert servicing for all brands from us.", icon: "Wrench" },
    { name: "LPG Stoves", description: "Cleaning and repair services from us.", icon: "Wrench" },
    { name: "Mixers", description: "Servicing for mixers purchased from us.", icon: "Wrench" },
  ];

  const contact = {
    address: "Usha Metals & Appliances, Fancy Bazaar, Changanacherry, 686101",
    phone: "(123) 456-7890",
    email: "contact@legacyhousewares.com",
  };

  return (
    <HomePage
      imageUrl={imageUrl}
      products={products}
      services={services}
      contact={contact}
    />
  );
}
