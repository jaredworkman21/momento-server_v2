// import IntentManager from "../service";
// import { FaceAnimation, FocusState, Intent, IntentRequest, IntentResponse, RobotCurrentState, RobotFocus } from "../interface";
// import { option } from "fp-ts";

// describe('intent', () => {
//     describe('analyze-intent', () => {
//         it('analyze the intent', async () => {
//             const intent:IntentRequest = {
//                 text: "hi benni",
//                 image: "",
//                 robotState: {
//                     robotProcessingStatus: false,
//                     robotCurrentState: RobotCurrentState.Converse,
//                     robotFocus: RobotFocus.None
//                 },
//                 conversation: ["hi benni"],
//                 focusState: FocusState.Monitoring,
//                 nlpMessages: []
//             }
//             const expected:Intent = {
//                 textResponse: "hello, I'm benni, your friend and teacher",
//                 animation: FaceAnimation.Happy,
//                 movement: "0f1b1",
//                 robotState: {
//                     robotProcessingStatus: false,
//                     robotCurrentState: RobotCurrentState.Converse,
//                     robotFocus: RobotFocus.None
//                 },
//                 conversation: ["hi benni", "hello, I'm benni, your friend and teacher"],
//                 focusState: FocusState.Monitoring,
//                 audioClip: [],
//                 nlpMessages: []
//             }
//             const maybeActual:IntentResponse = await IntentManager.analyzeIntent(intent);
//             const actual = option.toNullable(maybeActual.intent)
//             expect(actual).toStrictEqual(expected)
//         })
//     });
// })
