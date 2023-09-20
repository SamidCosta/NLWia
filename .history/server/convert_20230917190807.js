import fs from "fs"
import wav from "node-wav"
import ffmpeg from "fluent-ffmpeg"
import ffmpegStatic from "ffmpeg-static"

const filePath = "./tmp/audio.mp4"
const outputPath = filePath.replace(".mp4", ".wav")

export const convert = () => new Promise {
  console.log("Convertendo o video..."
  
  ffmpeg.setFfmpegPath(ffmpegStatic)
  ffmpeg()
  .input(filePath)
  )
}
