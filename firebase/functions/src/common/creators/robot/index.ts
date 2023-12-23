// import { IRobot, IVitals } from "../../../access/robot-data/interface";
// import { faker } from '@faker-js/faker';
// import RobotAccess from "../../../access/robot-data/service";

// class Creators {
//     createRobot(overrides: Partial<IRobot> = {}): IRobot {
//         return {
//             id: faker.datatype.uuid(),
//             nickName: faker.internet.userName(),
//             creatorId: faker.datatype.uuid(),
//             vitals: {},
//             relationshipIds: [],
//             knowledgeQA: {},
//             knowledgeVocab: {},
//             knowledgeVocabLearned: {},
//             personalityLearned: {},
//             ...overrides
//         } as IRobot
//     }
//     createVitals(overrides: Partial<IVitals> = {}): IVitals {
//         return {
//             happiness: faker.datatype.number,
//             bordem: faker.datatype.number,
//             hunger: faker.datatype.number,
//             energy: faker.datatype.number,
//             ...overrides
//         } as IVitals
//     }
//     async createAndSaveRobot(overrides: Partial<IRobot> = {}, collection: string): Promise<IRobot> {
//         const createdRobot = this.createRobot(overrides)
//         await RobotAccess.createRobot({robot: createdRobot, collection})
//         return createdRobot
//     }
// }

// export default new Creators()