import dlssData from "@/data/dlss-data.json";
import { notFound } from "next/navigation";

import { JobPost } from "@/types/dlss";
import JobDetailClient from "./client";

interface JobDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return dlssData.jobPosts.map((job) => ({
    id: job.id,
  }));
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = await params;
  const jobData = dlssData.jobPosts.find((j) => j.id === id);
  const job = jobData as JobPost | undefined;

  if (!job) {
    notFound();
  }

  const jobIndex = dlssData.jobPosts.findIndex((j) => j.id === id);
  const prevJob = (
    jobIndex > 0 ? dlssData.jobPosts[jobIndex - 1] : null
  ) as JobPost | null;
  const nextJob = (
    jobIndex < dlssData.jobPosts.length - 1
      ? dlssData.jobPosts[jobIndex + 1]
      : null
  ) as JobPost | null;

  return <JobDetailClient job={job} prevJob={prevJob} nextJob={nextJob} />;
}
