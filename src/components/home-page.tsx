"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icon, IconName } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { UshaAppLogo } from "@/components/logo";

type Product = { name: string; icon: IconName };
type Service = { name: string; description: string, icon: IconName };
type Contact = { address: string; phone: string; email: string };

type HomePageProps = {
  imageUrl: string;
  products: Product[];
  services: Service[];
  contact: Contact;
};

export function HomePage({ imageUrl, products, services, contact }: HomePageProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0">
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="font-headline text-3xl font-bold text-foreground">
              ushªOªpp
            </h1>
            <p className="text-sm font-body text-muted-foreground tracking-wide">
              Since 1960 | Wholesale & Retail*
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow pt-[136px] sm:pt-[80px]">
        <section
          className="relative flex items-center justify-center h-[calc(100vh-136px)] sm:h-[calc(100vh-80px)] bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${imageUrl})` }}
          data-ai-hint="modern kitchenware"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </section>

        <div className="container mx-auto px-4 py-16 md:py-24 space-y-16">
           <div className="text-center">
              <Button onClick={() => setShowDetails(true)} className="mr-4">
                Get Started
              </Button>
              <Button variant="outline" onClick={() => setShowAboutUs(!showAboutUs)}>
                Know More
              </Button>
            </div>

           {showAboutUs && (
              <div className="py-4 space-y-16">
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center tracking-wide">
                  Quality and Tradition Since 1960. We offer a wide range of houseware products and expert repair services to keep your cherished items in perfect condition.
                </p>

                <div className="max-w-md mx-auto">
                  <div className="space-y-6">
                    <h3 className="font-headline text-3xl text-center">Contact Information</h3>
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{contact.address}</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="Phone" className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="Mail" className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showDetails && (
                <div className="space-y-16 md:space-y-24">
                    <Alert>
                        <Icon name="Bell" className="h-4 w-4" />
                        <AlertTitle>Special Announcement!</AlertTitle>
                        <AlertDescription>
                            We now service all pressure cookers, LPG stoves, and mixers purchased from ushªOªpp Housewares.
                        </AlertDescription>
                    </Alert>

                    <section>
                        <h2 className="font-headline text-4xl font-bold text-center mb-12">Our Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products.map((product) => (
                            <Card key={product.name} className="group text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 hover:backdrop-blur-sm">
                                <CardHeader>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                    <Icon name={product.icon} className="h-6 w-6 text-primary transition-colors group-hover:text-muted-foreground" />
                                </div>
                                </CardHeader>
                                <CardContent>
                                <CardTitle className="font-body font-semibold text-lg transition-colors group-hover:text-muted-foreground">{product.name}</CardTitle>
                                </CardContent>
                            </Card>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-headline text-4xl font-bold text-center mb-12">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((service) => (
                            <Card key={service.name} className="group text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 hover:backdrop-blur-sm">
                                <CardHeader>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                                    <Icon name={service.icon} className="h-6 w-6 text-primary transition-colors group-hover:text-muted-foreground" />
                                </div>
                                <CardTitle className="font-body font-semibold text-lg mt-4 transition-colors group-hover:text-muted-foreground">{service.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                <p className="text-muted-foreground tracking-wide transition-colors group-hover:text-muted-foreground/80">{service.description}</p>
                                </CardContent>
                            </Card>
                            ))}
                        </div>
                    </section>
                </div>
            )}
        </div>
      </main>

      <footer className="text-center p-6 bg-primary text-primary-foreground font-body">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4">
          <a href="https://shop.usha1960.trade/" target="_blank" rel="noopener noreferrer" aria-label="UshaApp Website" className="logo-container">
            <UshaAppLogo />
          </a>
          <p className="tracking-wide">&copy; {new Date().getFullYear()} ushªOªpp Housewares. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
