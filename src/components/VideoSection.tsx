import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react";

// Local assets
import tourMp4 from "@/assets/videos/tour.mp4";           // <-- your file
// import tourWebm from "@/assets/videos/tour.webm";      // (optional, if you have)
// import tourPoster from "@/assets/videos/tour-poster.jpg"; // (optional)

const formatTime = (t: number) => {
  if (!Number.isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [showUI, setShowUI] = useState(true);        // auto-hide controls
  const [isBuffered, setIsBuffered] = useState(false);

  // Hide controls after inactivity
  useEffect(() => {
    if (!isPlaying) return; // keep visible when paused
    const id = setTimeout(() => setShowUI(false), 2000);
    const onMove = () => {
      setShowUI(true);
      clearTimeout(id);
      setTimeout(() => setShowUI(false), 2000);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchstart", onMove, { passive: true });
    return () => {
      clearTimeout(id);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onMove);
    };
  }, [isPlaying]);

  // Observe in-view to auto-pause offscreen
  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      setDuration(video.duration || 0);
    };
    const onTime = () => {
      setCurrent(video.currentTime || 0);
      // Detect if we have some buffered data
      try {
        setIsBuffered((video.buffered?.length ?? 0) > 0);
      } catch {
        // Intentionally ignore errors when checking buffered property
      }
    };
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("waiting", () => setIsBuffered(false));
    video.addEventListener("playing", () => setIsBuffered(true));

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", onTime);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const video = videoRef.current;
      if (!video) return;
      if (["Space", "KeyP"].includes(e.code)) {
        e.preventDefault();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
        setIsPlaying(!video.paused);
      } else if (e.code === "KeyM") {
        video.muted = !video.muted;
        setIsMuted(video.muted);
      } else if (e.code === "ArrowRight") {
        video.currentTime = Math.min(video.currentTime + 5, duration);
      } else if (e.code === "ArrowLeft") {
        video.currentTime = Math.max(video.currentTime - 5, 0);
      } else if (e.code === "KeyF") {
        if (video.requestFullscreen) video.requestFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [duration]);

  const progress = useMemo(
    () => (duration ? (current / duration) * 100 : 0),
    [current, duration]
  );

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (video?.requestFullscreen) video.requestFullscreen();
  };

  const onScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const pct = Number(e.target.value);
    const t = (pct / 100) * duration;
    video.currentTime = t;
    setCurrent(t);
  };

  const restart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsPlaying(true);
  };

  return (
    <section id="video" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative moving glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl animate-pulse-slow"
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <Badge className="bg-primary text-white mb-4">PROPERTY WALKTHROUGH</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Virtual <span className="text-primary">Tour</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a comprehensive video tour of this exceptional property and experience every detail
          </p>
        </div>

        <Card ref={containerRef} className="overflow-hidden shadow-2xl mx-auto max-w-5xl rounded-2xl">
          <div className="relative bg-black group">
            {/* Aspect-ratio container */}
            <div className="aspect-video w-full">
              <video
                ref={videoRef}
                id="property-video"
                className="h-full w-full object-cover"
                // poster={tourPoster}
                muted={isMuted}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                {/* Prefer modern codec first if you have it */}
                {/* {tourWebm && <source src={tourWebm} type="video/webm" />} */}
                <source src={tourMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Center Play (with ripple) when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 grid place-items-center">
                <button
                  onClick={togglePlay}
                  className="relative grid place-items-center w-24 h-24 rounded-full bg-primary text-white shadow-xl transition-transform hover:scale-105"
                  aria-label="Play video"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-ripple" />
                  <Play className="w-9 h-9 translate-x-[2px]" />
                </button>
              </div>
            )}

            {/* Overlay UI (auto-hide on inactivity while playing) */}
            <div
              className={`absolute inset-x-0 bottom-0 p-4 sm:p-5 transition-opacity duration-300
                ${showUI || !isPlaying ? "opacity-100" : "opacity-0"}
              `}
            >
              {/* Gradient backdrop for readability */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

              {/* Controls */}
              <div className="relative text-white">
                {/* Progress */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs tabular-nums">{formatTime(current)}</span>
                  <input
                    type="range"
                    value={progress}
                    onChange={onScrub}
                    min={0}
                    max={100}
                    className="flex-1 accent-primary bg-white/20 h-1.5 rounded-full [&::-webkit-slider-runnable-track]:rounded-full
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5
                               [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                  />
                  <span className="text-xs tabular-nums">{formatTime(duration)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={togglePlay}
                      className="text-white hover:bg-white/15"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleMute}
                      className="text-white hover:bg-white/15"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={restart}
                      className="hidden sm:inline-flex text-white hover:bg-white/15"
                      aria-label="Restart"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </Button>

                    {/* Buffer / loading dot */}
                    <span
                      className={`ml-2 hidden sm:inline-flex h-2 w-2 rounded-full ${
                        isBuffered ? "bg-emerald-400" : "bg-yellow-300 animate-pulse"
                      }`}
                      title={isBuffered ? "Buffered" : "Buffering"}
                    />
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleFullscreen}
                      className="text-white hover:bg-white/15"
                      aria-label="Fullscreen"
                    >
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle top bar for visual polish */}
            <div className="pointer-events-none absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />
          </div>
        </Card>

        {/* Video Description */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Complete Property Walkthrough</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Experience every room, every detail, and every luxury feature of this magnificent 7-bedroom villa. 
            From the grand entrance to the private elevator, swimming pool, and premium amenities—see it all in this comprehensive video tour.
          </p>
        </div>
      </div>
    </section>
  );
};
