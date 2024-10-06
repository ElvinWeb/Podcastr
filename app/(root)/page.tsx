"use client";

import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import React from "react";

function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {podcastData?.map(({ id, description, title, imgURL }) => (
            <PodcastCard
              description={description}
              podcastId={id}
              imgUrl={imgURL as string}
              title={title}
              key={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
