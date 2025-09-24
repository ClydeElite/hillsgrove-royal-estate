import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Placeholder video URL - replace with actual property video
  const videoUrl = "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4";

  const togglePlay = () => {
    const video = document.getElementById("property-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById("property-video") as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    const video = document.getElementById("property-video") as HTMLVideoElement;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <section id="video" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="bg-primary text-white mb-4">PROPERTY WALKTHROUGH</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Virtual <span className="text-primary">Tour</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a comprehensive video tour of this exceptional property and experience every detail
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="relative bg-black">
            {/* Video Player */}
            <video
              id="property-video"
              className="w-full h-auto max-h-[600px]"
              poster="/placeholder.svg"
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={togglePlay}
                    className="text-white hover:bg-white/20 p-2"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="text-white hover:bg-white/20 p-2"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleFullscreen}
                    className="text-white hover:bg-white/20 p-2"
                  >
                    <Maximize className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  onClick={togglePlay}
                  className="bg-primary/90 hover:bg-primary text-white rounded-full w-20 h-20 p-0"
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Video Description */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Complete Property Walkthrough</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Experience every room, every detail, and every luxury feature of this magnificent 7-bedroom villa. 
            From the grand entrance to the private elevator, swimming pool, and premium amenities - see it all in this comprehensive video tour.
          </p>
        </div>
      </div>
    </section>
  );
};