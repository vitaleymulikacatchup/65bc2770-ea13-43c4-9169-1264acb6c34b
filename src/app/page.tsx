use client";

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
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/7731373/pexels-photo-7731373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of hands typing on a laptop and reviewing business documents, focused on finance and legal tasks."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/8867231/pexels-photo-8867231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling woman in call center with headset and microphone at office desk."},
  {"id":"microsoft-logo","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."},
  {"id":"google-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"apple-logo","url":"https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sleek black and white minimalist desktop setup featuring modern technology in an indoor setting."},
  {"id":"amazon-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"facebook-logo","url":"https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up view of the Facebook app logo on a digital screen with blurred background."},
  {"id":"twitter-logo","url":"https://images.pexels.com/photos/16211204/pexels-photo-16211204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hand holding smartphone with Twitter app open against blurred natural background."},
  {"id":"tesla-logo","url":"https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Tesla factory with parked cars during sunset, showcasing modern automotive industry vibes."}
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
