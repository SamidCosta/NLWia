import { Pipeline, pipeline } from "@xenova/transformers"
import { transcriptionExample } from "./utils/transcription.js"
export async function transcribe(audio) {
  try {
    //return transcriptionExample

    console.log("Realizando a transcrição...")
    const transcribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/wgisper-small"
    )

    const transcription = await transcribe(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe"
    })
    
  } catch (error) {
    throw new Error(error)
  }
}
