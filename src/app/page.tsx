"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Speedometer } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/34327213/pexels-photo-34327213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"                               Lime Green Aston Martin"},
  {"id":"about-image","url":"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation."},
  {"id":"product-1","url":"https://images.pexels.com/photos/29406740/pexels-photo-29406740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"High-speed Formula 1 car racing on wet track showcasing power and precision."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/8867231/pexels-photo-8867231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling woman in call center with headset and microphone at office desk."}
];

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarStyleApple
          navItems={[{name: "Home", id: "#"}, {name: "About Us", id: "about"}, {name: "Products", id: "products"}, {name: "Contact", id: "contact"}]}
          brandName="Ferrari Showroom"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Ferrari Showroom"
            description="Experience the thrill of luxury and performance."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            alt={assetMap.find(a => a.id === "hero-image")?.alt ?? "Luxury car showroom"}
            buttons={[
              { text: "View Models", href: "products" },
              { text: "Book a Test Drive", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Learn more about our passion for excellence and innovation."
            bulletPoints={[
              { title: "Heritage", description: "Decades of automotive excellence", icon: Award },
              { title: "Performance", description: "Unmatched speed and precision", icon: Speedometer }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            alt={assetMap.find(a => a.id === "about-image")?.alt ?? "Ferrari team meeting"}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Our Models"
            description="Discover our latest models and innovations."
            products={[
              { id: "1", name: "Ferrari F8 Tributo", price: "$280,000", imageSrc: assetMap.find(a => a.id === "product-1")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "product-1")?.alt ?? "Ferrari car 1" },
              { id: "2", name: "Ferrari 812 Superfast", price: "$335,000", imageSrc: assetMap.find(a => a.id === "product-1")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "product-1")?.alt ?? "Ferrari car 1" },
              { id: "3", name: "Ferrari Portofino", price: "$215,000", imageSrc: assetMap.find(a => a.id === "product-1")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "product-1")?.alt ?? "Ferrari car 1" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch"
            description="Our team is ready to assist you with anything you need."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url ?? "/public/images/placeholder.webp"}
            alt={assetMap.find(a => a.id === "contact-image")?.alt ?? "Contact section image"}
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Company",
                items: [
                  { label: "About Us", href: "about" },
                  { label: "Careers", href: "careers" }
                ]
              },
              {
                title: "Products",
                items: [
                  { label: "All Models", href: "products" },
                  { label: "Test Drive", href: "contact" }
                ]
              }
            ]}
            logoSrc="/brand/ferrari-logo.svg"
            copyrightText="© 2025 Ferrari Showroom"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
