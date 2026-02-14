import mongoose from "mongoose";
import PageContentSchema from "../models/PageContentSchema";
import { connectToDatabase } from "../../core/utils/connectDatabase";

const defaultData = [
  {
    sectionId: "hero",
    content: {
      title: "INFINITY",
      subtitle: "THINKING OF A FANTASTIC VICINITY?",
      price1: "SMART 1 BHK 69.99 Lacs",
      price2: "PREMIUM 2 BHK 96.99 Lacs",
      bgImage:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", // Placeholder high-res building
    },
  },
  {
    sectionId: "about",
    content: {
      heading: "About Project",
      description:
        "Megaplex Prime is a premium township offering a blend of modern architecture and lush greenery. Experience the pinnacle of luxury living with world-class amenities and excellent connectivity.",
    },
  },
  {
    sectionId: "amenities",
    content: {
      heading: "Amenities",
      items: [
        { title: "Swimming Pool", icon: "pool" },
        { title: "Gymnasium", icon: "gym" },
        { title: "Club House", icon: "club" },
        { title: "Garden", icon: "tree" },
      ],
    },
  },
  {
    sectionId: "updates",
    content: {
      heading: "Construction Updates",
      updates: [
        {
          title: "Phase 1 Structure",
          status: "Completed",
          image:
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000",
        },
        {
          title: "Interior Finishing",
          status: "In Progress",
          image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000",
        },
        {
          title: "Landscaping",
          status: "Started",
          image:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=1000",
        },
      ],
    },
  },
  {
    sectionId: "faq",
    content: {
      heading: "Frequently Asked Questions",
      questions: [
        {
          q: "Where is the location?",
          a: "It is located in the prime sector of the city with easy access to the highway.",
        },
        {
          q: "Is parking available?",
          a: "Yes, we offer dedicated covered parking for all residents.",
        },
        {
          q: "What is the possession date?",
          a: "The expected possession date is December 2026.",
        },
      ],
    },
  },
  {
    sectionId: "footer",
    content: {
      email: "sales@megaplex.com",
      phone: "+91 98765 43210",
      copyright: "© 2026 Megaplex Prime. All rights reserved.",
    },
  },
];

const seedDB = async () => {
  try {
    console.log("🌱 Connecting to database...");
    await connectToDatabase();

    console.log("🧹 Clearing existing content...");
    await PageContentSchema.deleteMany({});

    console.log("💾 Seeding new data...");
    await PageContentSchema.insertMany(defaultData);

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedDB();
