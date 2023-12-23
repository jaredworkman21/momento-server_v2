import { IStabilityAIApiAccess, IStabilityText2ImageRequest, IStabilityText2ImageResponse, IStabilityImage2ImageRequest } from "../interface"
import fetch from 'node-fetch'
import * as FormData from 'form-data'
import * as dotenv from 'dotenv';


class StablilityAIApiAccess implements IStabilityAIApiAccess {
    async generateText2Image(req: IStabilityText2ImageRequest): Promise<IStabilityText2ImageResponse> {

        dotenv.config();
        const engineId = 'stable-diffusion-v1-6'
        const apiHost = process.env.API_HOST ?? 'https://api.stability.ai'
        const apiKey = process.env.STABILITY_API_KEY

        if (!apiKey) throw new Error('Missing Stability API key.')

        const response = await fetch(
        `${apiHost}/v1/generation/${engineId}/text-to-image`,
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
            text_prompts: [
                {
                text: 'A lighthouse on a cliff',
                },
            ],
            cfg_scale: req.cfgScale,
            height: req.height,
            width: req.width,
            steps: req.steps,
            samples: req.samples,
            }),
        }
        )

        if (!response.ok) {
        throw new Error(`Non-200 response: ${await response.text()}`)
        }

        const responseJSON = (await response.json()) as IStabilityText2ImageResponse

        return responseJSON
        // responseJSON.artifacts.forEach((image, index) => {
        // fs.writeFileSync(
        //     `./out/v1_txt2img_${index}.png`,
        //     Buffer.from(image.base64, 'base64')
        // )
        // })

    }

    async generateImage2Image(req: IStabilityImage2ImageRequest): Promise<IStabilityText2ImageResponse> {

        dotenv.config();
        const engineId = 'stable-diffusion-xl-1024-v1-0'
        const apiHost = process.env.API_HOST ?? 'https://api.stability.ai'
        const apiKey = process.env.STABILITY_API_KEY
        
        if (!apiKey) throw new Error('Missing Stability API key.')
        
        const formData = new FormData()
        formData.append('init_image', req.initImage)
        formData.append('init_image_mode', req.initImageMode)
        formData.append('image_strength', req.imageStrength)
        let i = 0
        req.textPrompts.forEach(prompt => {
            formData.append('text_prompts[' + i + '][text]', prompt.text)
            formData.append('text_prompts[' + i + '][weight]', prompt.weight)
        })
        i = 0
        formData.append('cfg_scale', req.cfgScale)
        formData.append('samples', req.samples)
        formData.append('steps', req.steps)
        
        const response:any = await fetch(
          `${apiHost}/v1/generation/${engineId}/image-to-image`,
          {
            method: 'POST',
            headers: {
              ...formData.getHeaders(),
              Accept: 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
            body: formData,
          }
        )
        
        if (!response.ok) {
          throw new Error(`Non-200 response: ${await response.text()}`)
        }
        
        const responseJSON = (await response.json()) as IStabilityText2ImageResponse

        return responseJSON
        
        // responseJSON.artifacts.forEach((image, index) => {
        //   fs.writeFileSync(
        //     `out/v1_img2img_${index}.png`,
        //     Buffer.from(image.base64, 'base64')
        //   )
        // })
    }
}

export default new StablilityAIApiAccess()
