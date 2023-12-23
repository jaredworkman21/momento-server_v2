import type {Option} from 'fp-ts/Option'

export interface IGenerationManager {
    generate: (req: GenerationRequest) => Promise<GenerationResponse>
}

export type GenerationRequest = {
    type: GenerationType
    apiType: ApiType
    prompt: Prompt[]
    negativePrompt: string
    cfgScale: number
    clipGuidence: string
    sampler: string
    samples: number
    steps: number
    height: number
    width: number
    imageStrength: number
    initialImage: string
    initialImageType: string
    initialImageMode: string
    additionalRequestData: AdditionalRequestData
}

export enum ApiType {
    Stability = "stability",
    StableDiffusionApi = "stableDiffusionApi"
}

export type AdditionalRequestData ={
    modelId: string
    safetyChecker: string
    enhancePrompt: string
    seed: string
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

export type GenerationResponse = {
    data: Option<GenerationResponseMetadata>
}

export type Prompt = {
    text: string
    weight: number
}

export type GenerationResponseMetadata = {
    images: Image[]
    requestData: GenerationRequest
}

export type Image = {
    image: string
    imageType: ImageType
    seed: string
}

export enum ImageType{
    Base64 = "base64",
    Link = "link"
}

export enum GenerationType {
    Text2Img = "Text2Img",
    Img2Img = "Img2Img",
    EditImg = "EditImg"
}
