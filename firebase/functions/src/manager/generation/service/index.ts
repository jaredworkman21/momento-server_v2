import * as option from 'fp-ts/Option'
import { ApiType, GenerationRequest, GenerationResponse, GenerationResponseMetadata, GenerationType, IGenerationManager, Image, ImageType } from '../interface'
import StablilityAIApiAccess from '../../../access/stability-ai-api/service'
import { IStabilityImage2ImageRequest } from '../../../access/stability-ai-api/interface';

class GenerationManager implements IGenerationManager
 {
    async generate(req: GenerationRequest): Promise<GenerationResponse> {
        try {
            if (req.apiType = ApiType.Stability) {
                const stabilityRequest = mapStabilityRequest(req);
                let maybeResponse = await StablilityAIApiAccess.generateImage2Image(stabilityRequest)
                // image: string
                // imageType: ImageType
                // seed: string
                // requestData: GenerationRequest
                return {data: option.some({
                        images: mapArtifactToImage(maybeResponse.artifacts),
                        requestData: req
                    } as GenerationResponseMetadata)
                }
            }
            
            const stabilityRequest = mapStabilityRequest(req);
            let maybeResponse = await StablilityAIApiAccess.generateImage2Image(stabilityRequest)
            // image: string
            // imageType: ImageType
            // seed: string
            // requestData: GenerationRequest
            return {data: option.some({
                    images: mapArtifactToImage(maybeResponse.artifacts),
                    requestData: req
                } as GenerationResponseMetadata)
            }
        } catch(error){
            return { data: option.none}
        }
    }
}

const mapArtifactToImage = (artifact: Array<{
    base64: string
    seed: number
    finishReason: string
  }>):Image[] => {
    const images: Image[] = []
    artifact.forEach( a => {
        images.push({
            image: a.base64,
            imageType: ImageType.Base64,
            seed: a.seed
        } as unknown as Image)
    })
    return images
}

const mapStabilityRequest = (req: GenerationRequest):IStabilityImage2ImageRequest  => {
    return {
        imageStrength: req.imageStrength,
        initImageMode: req.initialImageMode,
        initImage: req.initialImage,
        cfgScale: req.cfgScale,
        clipGuidancePreset: req.clipGuidence,
        height: req.height,
        width: req.width,
        sampler: req.sampler,
        samples: req.samples,
        steps: req.steps,
        textPrompts: req.prompt,
    } as IStabilityImage2ImageRequest
}

export default new GenerationManager()