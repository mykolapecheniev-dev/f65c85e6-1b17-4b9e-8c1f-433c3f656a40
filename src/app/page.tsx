"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Collection", id: "products" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Bibi Studio"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogoBillboard
            logoText="Bibi Flowers Studio"
            description="Artisan floral arrangements crafted with love, bringing nature's beauty into your home and special occasions."
            buttons={[
              { text: "View Collection", href: "#products" },
              { text: "Contact Us", href: "#contact" },
            ]}
            buttonAnimation="slide-up"
            background={{ variant: "plain" }}
            imageSrc="https://pixabay.com/get/g93aa49e5139e9b4b4262f6d66c47e954b128af5f01ba8cd360714e25e7a930fe71f42a4ad2ded412f93cf3619e6a8142d034b40d3f1ca1dccc43e9ac9e06422f_1280.jpg"
            imageAlt="luxury flower arrangement workshop"
            mediaAnimation="blur-reveal"
            frameStyle="card"
          />
        </div>

        <div id="about" data-section="about">
          <InlineImageSplitTextAbout
            useInvertedBackground={false}
            heading={[
              { type: "text", content: "Our Philosophy" },
              { type: "image", src: "https://pixabay.com/get/g2f9e056ceda2b75572eccbc10f21e63b31500c63f7d6db6a138824cea7af9dd0f3e9c6827c594ca043849051f7d23b45ec93941b02fe47366df2a399f66d0e36_1280.jpg", alt: "Floral details" },
            ]}
            buttons={[{ text: "Learn More", href: "#about" }]}
            buttonAnimation="slide-up"
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardFour
            title="Seasonal Collections"
            description="Hand-picked blooms curated for your unique moments."
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            products={[
              { id: "p1", name: "Spring Essence", price: "$85", variant: "Seasonal", imageSrc: "https://pixabay.com/get/g08c1a7ae055c98c18985621d47e48ff04e51ecf0e0d02f8ae483380b1a9487619c380167b462460dc7883b17eb8a443d12eec854cf572aa28d6700e5501fa5f0_1280.jpg" },
              { id: "p2", name: "Rustic Charm", price: "$120", variant: "Wedding", imageSrc: "https://pixabay.com/get/g949b6dace0fe6299ea5893b15d103bd4d4f367ced7df20a6e11816975ec1a91ce0aad993b678f493862ca46c0dca33eca08632c3d2c7915ee21cc20c741793c3_1280.jpg" },
              { id: "p3", name: "Midnight Bouquet", price: "$95", variant: "Luxury", imageSrc: "https://pixabay.com/get/g91ec04faf065adbae79745de4ca2c4b71776a5cca69ade51ade90105e2d5da2bc47ba040c9090bfb250d87d1444bdb02bdbc5df5d332005dd0c63b9684ed1c9c_1280.jpg" }
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            cardTitle="Client Stories"
            cardTag="Reviews"
            cardAnimation="blur-reveal"
            useInvertedBackground={false}
            testimonials={[
              { id: "t1", name: "Alice M.", imageSrc: "https://pixabay.com/get/g9bad52a32f0fce067a2496a0c886823e73a100bc83e476d44f8cdd0d60a9e8b3a48aa2dd51592c0f966267f7becefa7ef5cd1a10160346254ff73bc9260c0a9e_1280.jpg" },
              { id: "t2", name: "John D.", imageSrc: "https://pixabay.com/get/gaed9b23f53bbdfc9199c53008abc47987001d96d65ede97ef154886df792006bef2fa801487942f980c3a207985b8f40c745a376d0efd2c3661d752f26a773dd_1280.jpg" },
              { id: "t3", name: "Sophie K.", imageSrc: "https://pixabay.com/get/gd44a87ed3604012b8be0556c649d9f9e8c7f2e4de40469c5a738fef83895be4b144e31d1c4018a69dbfbd1875f48d04c5fd8ba635d41da93d5d6fdea4590a0af_1280.jpg" },
              { id: "t4", name: "Marc B.", imageSrc: "https://pixabay.com/get/gde138ab665ec7aa206cce4ddc696ce293b44417cd9fc7c9e0b0115bb4d8921c068d6cf61898721027d0c3ec438a75afe4fb37e794a6ac78bdd1331c2ca552034_1280.jpg" }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            tag="Get in touch"
            title="Order your flowers"
            description="Ready to design your perfect arrangement? Drop us a note."
            tagIcon={Mail}
            background={{ variant: "plain" }}
            useInvertedBackground={true}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="https://pixabay.com/get/g4ecb58717ca46b1a2057a4b7118200fef36ae5f227350b7d24e60b1f2761d30e22c356c0e523a7261843e60ab6d51f514c2308121ae16c3ca36e315e7cea90b7_1280.jpg"
            columns={[
              {
                title: "Bibi Studio",                items: [
                  { label: "About", href: "#about" },
                  { label: "Shop", href: "#products" },
                ],
              },
              {
                title: "Legal",                items: [
                  { label: "Privacy", href: "#" },
                  { label: "Terms", href: "#" },
                ],
              },
            ]}
            copyrightText="© 2025 | Bibi Flowers"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
