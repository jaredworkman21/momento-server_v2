export interface IStableDiffusionApiAccess {
    generateText2Image: (req: ISDText2ImageRequest) => Promise<ISDText2ImageRequest>
    generateImage2Image: (req: ISDText2ImageRequest) => Promise<ISDText2ImageRequest>
}//test

export type ISDText2ImageResponse = {
    status: string
    generationTime: number,
    id: string,
    output: string[]
    meta: SDText2ImageMetadata
}

export type SDText2ImageMetadata = {
    prompt: string
    modelId: string
    negativePrompt: string
    scheduler: string,
    safetychecker: string,
    W: number,
    H: number,
    guidance_scale: number,
    seed: number,
    steps: number,
    n_samples: number,
    full_url: string,
    upscale: string,
    multi_lingual: string,
    panorama: string,
    self_attention: string,
    embeddings: string,
    lora: string,
    outdir: string,
    file_prefix: string
}

export type ISDText2ImageRequest = {
    key: string
    modelId: string
    prompt: string
    negativePrompt: string
    width: number
    height: number
    samples: number
    numReferenceSteps: number
    safetyChecker: string
    enhancePrompt: string
    seed: string
    guidenceScale: number
    multiLingual: string
    panorama: string
    selfAttention: string
    upscale: string
    embeddingsModel: string
    loraModel: string
    tomesd: string
    clipSkip: string
    useKarrasSigmas: string
    vae: string
    loraStrength: string
    scheduler: string
    webhook: string
    trackId: string
}
