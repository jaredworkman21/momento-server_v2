export interface IStabilityAIApiAccess {
    generateText2Image: (req: IStabilityText2ImageRequest) => Promise<IStabilityText2ImageResponse>
    generateImage2Image: (req: IStabilityImage2ImageRequest) => Promise<IStabilityText2ImageResponse>
}

export type IStabilityText2ImageResponse = {
    artifacts: Array<{
        base64: string
        seed: number
        finishReason: string
      }>
}

export type IStabilityText2ImageRequest = {
    cfgScale: number
    clipGuidancePreset: string
    height: number
    width: number
    sampler: string
    samples: number
    steps: number
    textPrompts: PromptForApi[]
}

export type IStabilityImage2ImageRequest = {
    imageStrength: number
    initImageMode: string
    initImage: string
    cfgScale: number
    clipGuidancePreset: string
    height: number
    width: number
    sampler: string
    samples: number
    steps: number
    textPrompts: PromptForApi[]
}

export type PromptForApi = {
    text: string
    weight: number
}
