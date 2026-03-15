#!/bin/bash

# Configuration
INPUT_VIDEO=$1
OUTPUT_DIR="public/robot-sequence"
FRAME_RATE=30 # Adjust framerate if needed (e.g. if the video is too long)

if [ -z "$INPUT_VIDEO" ]; then
  echo "Usage: ./scripts/extract-frames.sh path/to/your/video.mp4"
  exit 1
fi

if ! command -v ffmpeg &> /dev/null
then
    echo "ffmpeg could not be found. Please install it using: brew install ffmpeg"
    exit 1
fi

echo "Creating directory $OUTPUT_DIR..."
mkdir -p "$OUTPUT_DIR"

echo "Extracting frames from $INPUT_VIDEO..."
# This extracts frames as webp formats, 0001.webp, 0002.webp etc.
# scale is set to a reasonable max width to optimize performance on canvas
ffmpeg -i "$INPUT_VIDEO" -vf "scale='min(1920,iw)':-1,fps=$FRAME_RATE" -qscale:v 2 "$OUTPUT_DIR/%04d.webp"

echo "Done! Extracted frames to $OUTPUT_DIR"
echo "Make sure to update FRAME_COUNT in app/robot/page.tsx to match the total number of frames generated!"
