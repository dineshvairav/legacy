
"use client";

import {
  CookingPot,
  Gem,
  Flame,
  Layers,
  Sparkles,
  Container,
  Blender,
  Wrench,
  Mail,
  MapPin,
  Phone,
  Star,
  Bell,
  X,
  Sun,
  Moon,
  type LucideProps,
} from "lucide-react";

export const Icons = {
  CookingPot,
  Gem,
  Flame,
  Layers,
  Sparkles,
  Container,
  Blender,
  Wrench,
  Mail,
  MapPin,
  Phone,
  Star,
  Bell,
  X,
  Sun,
  Moon,
};

export type IconName = keyof typeof Icons;

export const Icon = ({ name, ...props }: { name: IconName } & LucideProps) => {
  const LucideIcon = Icons[name];
  if (!LucideIcon) {
    return null;
  }
  return <LucideIcon {...props} />;
};
