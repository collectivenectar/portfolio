'use client';

import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { PinListItem } from "pinata-web3";

interface HeroCarouselProps {
  posts: PinListItem[];
}

const images = ["system-integration.png", "ux-research.png", "custom-applications.png"];

export default function HeroCarousel({ posts }: HeroCarouselProps) {

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

  const items = posts.map((post) => (
    <div key={post.id} className="w-full h-96">
      <img
        src={`https://ipfs.io/ipfs/${post.ipfs_pin_hash}`}
        alt={post.metadata.name || ''}
        onDragStart={handleDragStart}
        className="w-full h-full object-cover"
      />
    </div>
  ));

  const testItems = images.map((image, index) => {
    return (
        <img
        key={index}
          src={`/images/${image}`}
          alt={`Image ${index + 1}`}
          onDragStart={handleDragStart}
          className="w-full h-full object-cover"
          role="presentation"
          width={"100%"}
        />
    );
  })

  return (
    <div className="border border-red-300 w-full h-96">
      <AliceCarousel
      mouseTracking
      items={testItems}/>
    </div>
  );
}
