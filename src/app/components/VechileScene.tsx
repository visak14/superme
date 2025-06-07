"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    label: "Passenger vehicles",
    description: "Reviving up innovation from interior to exterior.",
    video1: "/videos/Passenger Alpha - Trim.mp4",
  },
  {
    label: "Commercial vehicles",
    description: "Advancing engineering for heavy-duty vehicles.",
    video1: "/videos/Commercial Alpha.mp4",
  },
];

export default function VechileScene() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const containerControls = useAnimation();
  const stepperControls = useAnimation();
  const videoControls = useAnimation();

  const handleScroll = () => {
    const newIndex = Math.min(
      steps.length - 1,
      Math.floor(window.scrollY / window.innerHeight)
    );
    setActiveStep(newIndex);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      videoRef1.current?.pause();
    } else {
      videoRef1.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.load();
      if (isPlaying) {
        videoRef1.current.play();
      }
    }
  }, [activeStep]);

  useEffect(() => {
    if (isInView) {
      containerControls.start({ opacity: 1 });
      stepperControls.start({ y: 0, opacity: 1 });
      videoControls.start({ y: 0, opacity: 1 });
    }
  }, [isInView, activeStep]);

  useEffect(() => {
    const video = videoRef1.current;
    if (!video) return;

    const updateProgress = () => {
      const current = video.currentTime;
      const duration = video.duration || 1;
      setProgress(current / duration);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [videoRef1]);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <motion.div
      ref={sectionRef}
      className="relative z-0 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={containerControls}
      transition={{ duration: 0.6 }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="absolute top-10 w-full flex justify-center z-10 px-4">
          <h1 className="text-center font-semibold text-md sm:text-3xl md:text-4xl lg:text-4xl max-w-3xl w-full">
            Evolving the drive with 360-degree comprehensive solutions
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-9xl px-20 mx-auto gap-8">
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center relative px-2 sm:px-6"
            initial={{ y: 100, opacity: 0 }}
            animate={stepperControls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-600">
              <div
                className={cn(
                  "absolute left-0 w-px bg-white transition-all duration-300",
                  activeStep === 0 ? "top-0 h-1/2" : "h-0"
                )}
              />

              <div
                className={cn(
                  "absolute left-0 w-px bg-white transition-all duration-300",
                  activeStep === 1 ? "bottom-0 h-1/2" : "h-0"
                )}
              />
            </div>

            <div className="flex flex-col space-y-10 sm:space-y-14 lg:space-y-20 pl-4 sm:pl-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="cursor-pointer group relative"
                  onClick={() => setActiveStep(index)}
                >
                  <h2
                    className={cn(
                      "text-2xl transition-all duration-300 mb-2",
                      activeStep === index
                        ? "text-white font-bold"
                        : "text-gray-400 group-hover:text-gray-200"
                    )}
                  >
                    {step.label}
                  </h2>
                  <p
                    className={cn(
                      "text-lg max-w-sm leading-relaxed transition-all duration-300",
                      activeStep === index
                        ? "text-gray-200"
                        : "text-gray-500 group-hover:text-gray-300"
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-3/2 flex items-center justify-center relative px-4 sm:px-0"
            initial={{ y: 100, opacity: 0 }}
            animate={videoControls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <video
              ref={videoRef1}
              key={steps[activeStep].video1}
              src={steps[activeStep].video1}
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl rounded-lg shadow-lg"
              loop
              muted
              autoPlay
              height={500}
              width={500}
            />

            <div className="absolute right-4 sm:right-10 md:right-20 flex flex-col sm:flex-row gap-10 sm:gap-20 -bottom-28 sm:bottom-[-5rem] items-center">
              <Image
                src="/images/Frame 1073714003.png"
                alt="Vehicle Image"
                width={200}
                height={150}
                className="rounded-lg shadow-lg w-44 sm:w-60 md:w-80 h-auto"
              />

              <div className="relative group w-8 h-8 sm: mt sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                <svg
                  className="absolute inset-0 w-full h-full -mt-8 lg:mt-0 sm:mt-0 md:mt-0 transform -rotate-90"
                  viewBox="0 0 40 40"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="1"
                    fill="none"
                    className="drop-shadow-sm"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-300 ease-out drop-shadow-lg"
                    style={{
                      filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))",
                    }}
                  />
                </svg>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute inset-0 -mt-8 lg:mt-0 sm:mt-0 md:mt-0 w-full h-full rounded-full bg-transparent hover:bg-white/10 text-white border-0 transition-all duration-200 group-hover:scale-105"
                  onClick={togglePlayback}
                >
                  {isPlaying ? (
                    <Pause size={16} className="drop-shadow-sm" />
                  ) : (
                    <Play size={16} className="ml-0.5 drop-shadow-sm" />
                  )}
                </Button>

                <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-[200vh]" />
    </motion.div>
  );
}
