
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icon, IconName } from "@/components/icons";

type Product = { name: string; icon: IconName };
type Service = { name: string; description: string, icon: IconName };
type Contact = { address: string; phone: string; email: string };
type Testimonial = { name: string; quote: string; rating: number };

type HomePageProps = {
  imageUrl: string;
  products: Product[];
  services: Service[];
  contact: Contact;
  testimonials: Testimonial[];
};

export function HomePage({ imageUrl, products, services, contact, testimonials }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <main className="flex-grow">
        <section
          className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${imageUrl})` }}
          data-ai-hint="vintage houseware"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center p-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-lg">
              Legacy Housewares
            </h1>
            <p className="mt-4 text-lg md:text-xl font-body">
              Since 1960 | Wholesale & Retail
            </p>
          </div>
        </section>

        <section id="about" className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 py-16 md:py-24 space-y-16">
                <div className="text-center">
                    <h2 className="font-headline text-4xl font-bold mb-4">About Us</h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        Quality and Tradition Since 1960. We offer a wide range of houseware products and expert repair services to keep your cherished items in perfect condition.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <h3 className="font-headline text-3xl">Contact Information</h3>
                        <div className="flex items-start gap-4">
                            <Icon name="MapPin" className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <p>{contact.address}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Icon name="Phone" className="h-5 w-5 text-primary flex-shrink-0" />
                            <p>{contact.phone}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Icon name="Mail" className="h-5 w-5 text-primary flex-shrink-0" />
                            <p>{contact.email}</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-headline text-3xl">From Our Customers</h3>
                        <div className="space-y-6">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="bg-background">
                            <CardContent className="pt-6">
                                <div className="flex mb-2">
                                {Array(testimonial.rating).fill(0).map((_, i) => (
                                    <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                ))}
                                </div>
                                <blockquote className="italic">"{testimonial.quote}"</blockquote>
                                <p className="text-right font-bold mt-2">- {testimonial.name}</p>
                            </CardContent>
                            </Card>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="container mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-24">
          <Alert>
            <Icon name="Bell" className="h-4 w-4" />
            <AlertTitle>Special Announcement!</AlertTitle>
            <AlertDescription>
              We now service all pressure cookers, LPG stoves, and mixers purchased from Legacy Housewares.
            </AlertDescription>
          </Alert>

          <section>
            <h2 className="font-headline text-4xl font-bold text-center mb-12">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card key={product.name} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Icon name={product.icon} className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-body font-semibold text-lg">{product.name}</CardTitle>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-headline text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.name} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                     <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                       <Icon name={service.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-body font-semibold text-lg mt-4">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="text-center p-6 bg-primary text-primary-foreground font-body">
        <p>&copy; {new Date().getFullYear()} Legacy Housewares. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
