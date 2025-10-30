"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Crown, History, Leaf, Shield, Package, Users, Star, HelpCircle, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Products", id: "product" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Reviews", id: "testimonial" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="Garant"
          button={{
            text: "Shop Now",
            href: "product"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Snus Excellence"
          description="Experience the finest Swedish-style snus crafted with traditional methods and premium tobacco. Quality guaranteed since establishment."
          tag="Premium Quality"
          tagIcon={Award}
          buttons={[
            { text: "Shop Products", href: "product" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/10191850/pexels-photo-10191850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
          imageAlt="Premium Garant snus products"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Crafted with Tradition"
          description="We combine time-honored Swedish traditions with modern quality standards to create exceptional snus products that deliver consistent satisfaction."
          tag="Our Story"
          tagIcon={Crown}
          bulletPoints={[
            {
              title: "Traditional Methods",
              description: "Using authentic Swedish techniques passed down through generations",
              icon: History
            },
            {
              title: "Premium Tobacco",
              description: "Carefully selected tobacco leaves from the finest growing regions",
              icon: Leaf
            },
            {
              title: "Quality Control",
              description: "Rigorous testing ensures every batch meets our high standards",
              icon: Shield
            }
          ]}
          imageSrc="https://images.pexels.com/photos/27793721/pexels-photo-27793721.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="left"
          imageAlt="Garant snus production facility"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Our Premium Collection"
          description="Discover our carefully curated selection of premium snus varieties, each crafted to deliver exceptional flavor and satisfaction."
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "classic-original",
              name: "Garant Original",
              price: "€24.90",
              imageSrc: "https://images.pexels.com/photos/1637114/pexels-photo-1637114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Garant Original snus can"
            },
            {
              id: "strong-mint",
              name: "Garant Strong Mint",
              price: "€26.90",
              imageSrc: "https://images.pexels.com/photos/5328464/pexels-photo-5328464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Garant Strong Mint snus can"
            },
            {
              id: "white-portion",
              name: "Garant White Portion",
              price: "€25.90",
              imageSrc: "https://images.pexels.com/photos/15571674/pexels-photo-15571674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Garant White Portion snus can"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Master Craftsmen"
          description="Meet the experts behind Garant's exceptional snus products, each bringing decades of experience in tobacco craftsmanship."
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Erik Andersson",
              role: "Master Blender",
              description: "With over 25 years in tobacco blending, Erik ensures every Garant product meets our exacting standards.",
              imageSrc: "https://images.pexels.com/photos/3760532/pexels-photo-3760532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Erik Andersson, Master Blender"
            },
            {
              id: "2",
              name: "Anna Bergström",
              role: "Quality Director",
              description: "Anna oversees all quality control processes, maintaining the premium standards Garant is known for.",
              imageSrc: "https://images.pexels.com/photos/3975062/pexels-photo-3975062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Anna Bergström, Quality Director"
            },
            {
              id: "3",
              name: "Magnus Lindqvist",
              role: "Production Manager",
              description: "Magnus manages our production facilities with precision, ensuring consistent quality across all batches.",
              imageSrc: "https://images.pexels.com/photos/12776130/pexels-photo-12776130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Magnus Lindqvist, Production Manager"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who trust Garant for their premium snus needs."
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Lars Johansson",
              role: "Regular Customer",
              testimonial: "Garant delivers the most authentic Swedish snus experience. The quality is consistently excellent, and the flavor profiles are perfectly balanced.",
              imageSrc: "https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lars Johansson testimonial"
            },
            {
              id: "2",
              name: "Maria Svensson",
              role: "Premium User",
              testimonial: "I've tried many brands, but Garant stands out for its traditional craftsmanship and attention to detail. Every portion is perfect.",
              imageSrc: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Svensson testimonial"
            },
            {
              id: "3",
              name: "Thomas Nielsen",
              role: "Long-time Customer",
              testimonial: "The premium quality of Garant snus is unmatched. It's clear they use only the finest tobacco and traditional methods.",
              imageSrc: "https://images.pexels.com/photos/16763021/pexels-photo-16763021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Thomas Nielsen testimonial"
            },
            {
              id: "4",
              name: "Helena Karlsson",
              role: "Quality Enthusiast",
              testimonial: "Garant's commitment to quality shows in every product. The consistency and flavor depth are remarkable.",
              imageSrc: "https://images.pexels.com/photos/5938286/pexels-photo-5938286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Helena Karlsson testimonial"
            },
            {
              id: "5",
              name: "Peter Lundberg",
              role: "Satisfied Customer",
              testimonial: "Outstanding products with authentic Swedish character. Garant has become my go-to choice for premium snus.",
              imageSrc: "https://images.pexels.com/photos/5920774/pexels-photo-5920774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Peter Lundberg testimonial"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our premium snus products, shipping, and quality standards."
          tag="Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What makes Garant snus different from other brands?",
              content: "Garant uses traditional Swedish methods combined with premium tobacco selection and rigorous quality control. Our master blenders have decades of experience creating authentic, consistent products."
            },
            {
              id: "2",
              title: "How should I store my snus products?",
              content: "Store your snus in a cool, dry place, preferably in the refrigerator. Unopened cans can last several months when properly stored. Once opened, consume within a few weeks for optimal freshness."
            },
            {
              id: "3",
              title: "Do you ship internationally?",
              content: "We ship to select countries where snus is legal. Please check our shipping policy for specific regions and any restrictions that may apply to tobacco products."
            },
            {
              id: "4",
              title: "What nicotine strengths are available?",
              content: "Our products range from regular to strong nicotine levels. Each product page clearly indicates the nicotine content to help you choose the right strength for your preferences."
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8204396/pexels-photo-8204396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Customer support representative"
          mediaPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Updated"
          tagIcon={Mail}
          title="Join the Garant Community"
          description="Subscribe to receive updates about new products, exclusive offers, and insights from our master craftsmen."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing communications from Garant. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Products",
              items: [
                { label: "Original Snus", href: "product" },
                { label: "Mint Varieties", href: "product" },
                { label: "White Portion", href: "product" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Quality Standards", href: "about" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Shipping Info", href: "faq" }
              ]
            }
          ]}
          copyrightText="© 2025 Garant Snus. Premium Swedish-style tobacco products."
          logoSrc="/brand/garant-logo.svg"
        />
      </div>
    </ThemeProvider>
  );
}