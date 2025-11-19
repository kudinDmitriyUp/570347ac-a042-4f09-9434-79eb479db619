"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, Bed, Sparkles, Gift, TrendingUp, Heart, MessageCircle, Handshake, HelpCircle, MapPin, Star, Award, ThumbsUp, Calendar, Users, Linkedin } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="grid"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" }
          ]}
          brandName="Grand Boutique"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Luxury Redefined"
          description="Experience unparalleled elegance and sophistication at Grand Boutique, where every detail is crafted for discerning travelers seeking the extraordinary."
          tag="Welcome"
          tagIcon={Crown}
          buttons={[
            { text: "Explore Rooms", href: "rooms" },
            { text: "Book Now", href: "https://booking.example.com" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547270315-ueluvoos.jpg"
          imageAlt="Grand Boutique Hotel elegant exterior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Grand Boutique, we believe luxury is found in the finest details. Our carefully curated spaces blend timeless elegance with modern sophistication, creating an atmosphere where memories are made and dreams come true. Each guest experience is personally crafted by our dedicated team who understand that true hospitality goes beyond accommodation—it's about creating moments that last a lifetime."
        />
      </div>

      <div id="rooms" data-section="rooms">
        <FeatureCardSeven
          title="Exquisite Accommodations"
          description="Each room tells a story of refined luxury and comfort"
          tag="Our Rooms"
          tagIcon={Bed}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Deluxe Suite",
              description: "Spacious elegance with city views, marble bathroom, king-size bed, and private sitting area. Perfect for business travelers and couples seeking refined comfort.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547271981-x8w5h3ci.jpg",
              imageAlt: "Deluxe Suite interior"
            },
            {
              id: 2,
              title: "Premium Room",
              description: "Contemporary design meets classic comfort with premium amenities, rainfall shower, and curated local artwork. Your sanctuary in the heart of the city.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547272769-xp4oo9ph.jpg",
              imageAlt: "Premium Room interior"
            },
            {
              id: 3,
              title: "Presidential Suite",
              description: "The pinnacle of luxury featuring panoramic views, private terrace, butler service, and bespoke furnishings. An unforgettable experience awaits.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547273588-9fbpoem1.jpg",
              imageAlt: "Presidential Suite interior"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <ProductCardOne
          title="Exceptional Amenities"
          description="Indulge in world-class facilities and services"
          tag="Amenities"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          products={[
            {
              id: "spa",
              name: "Wellness Spa",
              price: "Included",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547274341-xb7mjmdl.jpg",
              imageAlt: "Luxury spa wellness center"
            },
            {
              id: "restaurant",
              name: "Fine Dining",
              price: "à la carte",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547277072-piatj7rk.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              id: "concierge",
              name: "Personal Concierge",
              price: "24/7",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547277753-1g8oicvl.jpg",
              imageAlt: "Concierge service"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Exclusive Packages"
          description="Choose the perfect experience for your stay"
          tag="Packages"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="blur-reveal"
          plans={[
            {
              id: "luxury",
              badge: "Popular Choice",
              badgeIcon: Star,
              price: "$450/night",
              subtitle: "Perfect for discerning travelers",
              features: [
                "Deluxe Suite accommodation",
                "Daily continental breakfast",
                "Spa access included",
                "Complimentary Wi-Fi",
                "24/7 concierge service"
              ]
            },
            {
              id: "premium",
              badge: "Best Value",
              badgeIcon: Award,
              price: "$650/night",
              subtitle: "Ultimate luxury experience",
              features: [
                "Premium Room with city view",
                "Gourmet breakfast & dinner",
                "Full spa treatments",
                "Private butler service",
                "Airport transfer included"
              ]
            },
            {
              id: "presidential",
              badge: "Exclusive",
              badgeIcon: Crown,
              price: "$1,200/night",
              subtitle: "The epitome of luxury",
              features: [
                "Presidential Suite with terrace",
                "All meals included",
                "Personal spa therapist",
                "Dedicated butler & driver",
                "Helicopter transfer available"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Our commitment to exceptional service reflected in guest satisfaction"
          tag="Achievements"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          metrics={[
            {
              id: "1",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rate from verified reviews",
              icon: ThumbsUp
            },
            {
              id: "2",
              value: "15",
              title: "years",
              description: "Years of exceptional hospitality service",
              icon: Calendar
            },
            {
              id: "3",
              value: "50k+",
              title: "guests",
              description: "Satisfied guests from around the world",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Dedicated professionals committed to your exceptional experience"
          tag="Our People"
          tagIcon={Heart}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Isabella Chen",
              role: "General Manager",
              description: "With over 15 years in luxury hospitality, Isabella ensures every guest receives personalized attention and exceptional service.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547295635-my03fpum.jpg",
              imageAlt: "Isabella Chen, General Manager",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/isabellachen"
                }
              ]
            },
            {
              id: "2",
              name: "Marcus Thompson",
              role: "Head Concierge",
              description: "Marcus's extensive knowledge of the city and passion for hospitality makes every guest request possible, no matter how unique.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547296484-ywrcdqwt.jpg",
              imageAlt: "Marcus Thompson, Head Concierge",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/marcusthompson"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Authentic experiences from our valued guests"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahm_exec",
              testimonial: "Absolutely stunning hotel with impeccable service. Every detail was perfect, from the luxurious room to the exceptional dining experience. Will definitely return!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547280469-q2d0fuey.png",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "David Rodriguez",
              handle: "@davidr_travel",
              testimonial: "The Presidential Suite exceeded all expectations. The staff went above and beyond to make our anniversary celebration truly memorable. Five-star experience throughout!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547281316-9cinxhwy.jpg",
              imageAlt: "David Rodriguez"
            },
            {
              id: "3",
              name: "Emma Wilson",
              handle: "@emmaw_lifestyle",
              testimonial: "From the moment we arrived, we felt like royalty. The attention to detail, the spa treatments, and the personalized service made this the best hotel stay ever.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547286481-ezw1bnmr.jpg",
              imageAlt: "Emma Wilson"
            },
            {
              id: "4",
              name: "Michael Chang",
              handle: "@mchang_biz",
              testimonial: "Perfect for business travel. The concierge team made all arrangements seamless, and the facilities were exactly what I needed for important meetings.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547295105-2rdva3cr.jpg",
              imageAlt: "Michael Chang"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Organizations"
          description="Preferred accommodation partner for luxury travel and corporate events"
          tag="Partnerships"
          tagIcon={Handshake}
          textboxLayout="default"
          speed={30}
          showCard={true}
          logos={["/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp"]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about your stay at Grand Boutique"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "checkin",
              title: "What are your check-in and check-out times?",
              content: "Check-in is from 3:00 PM and check-out is until 12:00 PM. Early check-in and late check-out can be arranged subject to availability for an additional fee."
            },
            {
              id: "parking",
              title: "Do you offer parking facilities?",
              content: "Yes, we provide complimentary valet parking for all guests. Our secure parking facility is available 24/7 with direct access to the hotel."
            },
            {
              id: "pets",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets in designated rooms for an additional fee of $50 per night. Please inform us during booking to ensure pet-friendly accommodation."
            },
            {
              id: "cancellation",
              title: "What is your cancellation policy?",
              content: "Cancellations can be made up to 48 hours before arrival without penalty. Cancellations within 48 hours will be charged for one night's stay."
            },
            {
              id: "amenities",
              title: "What amenities are included with my stay?",
              content: "All stays include complimentary Wi-Fi, access to our fitness center and spa facilities, 24/7 concierge service, and daily housekeeping. Premium packages include additional dining and spa credits."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Experience Grand Boutique"
          description="Subscribe to our newsletter for exclusive offers, seasonal packages, and insider access to the finest luxury experiences."
          tagIcon={MapPin}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763547298978-utl97ji1.jpg"
          imageAlt="Grand Boutique Hotel lobby"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive exclusive offers and updates. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Boutique"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Press & Awards", href: "press" },
                { label: "Careers", href: "careers" }
              ]
            },
            {
              items: [
                { label: "Book Now", href: "https://booking.example.com" },
                { label: "Contact", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Events", href: "events" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}