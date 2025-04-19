
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const Gallery = () => {
  // Mock data for the gallery
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Marathon runners",
      event: "City Marathon 2025",
      date: "May 15, 2025",
      venue: "Central Stadium",
      category: "Running"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Basketball game",
      event: "Regional Basketball Cup",
      date: "June 5, 2025",
      venue: "Sports Complex",
      category: "Basketball"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cricket match",
      event: "Summer Cricket League",
      date: "July 8, 2025",
      venue: "National Stadium",
      category: "Cricket"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tennis match",
      event: "Tennis Open",
      date: "August 12, 2025",
      venue: "Tennis Academy",
      category: "Tennis"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Swimming competition",
      event: "Swimming Championship",
      date: "September 3, 2025",
      venue: "Aquatic Center",
      category: "Swimming"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Martial arts competition",
      event: "Martial Arts Tournament",
      date: "October 10, 2025",
      venue: "Combat Arena",
      category: "Martial Arts"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1626224583764-f87db24ac1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Badminton match",
      event: "Badminton League",
      date: "November 5, 2025",
      venue: "Indoor Sports Hall",
      category: "Badminton"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1574271143515-5cddf8da19be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Volleyball match",
      event: "Volleyball Challenge",
      date: "December 1, 2025",
      venue: "Community Center",
      category: "Volleyball"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Half marathon",
      event: "Half Marathon",
      date: "April 20, 2025",
      venue: "Riverside Park",
      category: "Running"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Football match",
      event: "City Football Cup",
      date: "April 30, 2025",
      venue: "Main Stadium",
      category: "Football"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Award ceremony",
      event: "Sports Awards Night",
      date: "December 15, 2025",
      venue: "City Hall",
      category: "Events"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Table tennis match",
      event: "Table Tennis Tournament",
      date: "October 20, 2025",
      venue: "Sports Center",
      category: "Table Tennis"
    }
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2 text-sport-blue">Event Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through photos from our past and upcoming sports events.
              Click on any image to view details and download.
            </p>
          </div>
          
          <GalleryGrid images={galleryImages} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Gallery;
