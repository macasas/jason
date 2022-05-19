// /*
// We import js-son and assign Belief, Plan, Agent, and Environment to sepearate consts for the sake of
// convenience:
// */
// const { Belief, Plan, Agent, Environment } = require('js-son-agent')

// // Starting point
// const beliefs = {
//     ...Belief('model', { 
//         valid: true 
//     }),
//     ...Belief('requests', [])
// }

// const plansGuardian = [
//     Plan(beliefs => !beliefs.model.valid && beliefs.requests.includes('snapshot'), () => [{ model: 'modelInvalid' }]),
//     Plan(beliefs => beliefs.model.valid && beliefs.requests.includes('snapshot'), () => [{ model: 'snapshot' }]),
//     Plan(beliefs => beliefs.model.valid && beliefs.requests.includes('undo'), () => [{ model: 'undo' }]),
//     Plan(beliefs => beliefs.model.valid && beliefs.requests.includes('redo'), () => [{ model: 'redo' }]),
// ];
// const plansValidator = [
//     Plan(beliefs => !beliefs.model.valid && beliefs.requests.includes('validate'), () => [{ model: 'validate' }]),
//     Plan(beliefs => beliefs.model.valid && beliefs.requests.includes('validate'), () => [{ model: 'alreadyValid' }])
// ];
// const plansUpdater = [
//     Plan(beliefs => !beliefs.model.valid && beliefs.requests.includes('update'), () => [{ model: 'cannotUpdate' }]),
//     Plan(beliefs => beliefs.model.valid && beliefs.requests.includes('update'), () => [{ model: 'update' }])
// ];
// const plansListener = [];

// const guardian = new Agent('guardian', beliefs, {}, plansGuardian)
// const validator = new Agent('validator', beliefs, {}, plansValidator)
// const updater = new Agent('updater', beliefs, {}, plansUpdater)
// const listener = new Agent('listener', beliefs, {}, plansListener)

// /*
// Now, as we have the agents defined, we need to specify the environment.
// First, we set the environments state, which is--in our case--consistent with the agents' beliefs:
// */
// const state = {
//     model: { valid: true },
//     requests: []
// }
// const importState = (newModel) => {
//     state.model = Object.create(state, newModel);
// }
// /*
// To define how the environment processes agent actions, we implement the ``updateState`` function.
// The function takes an agent's actions, as well as the agent ID and the current state to determine
// the environment's state update that is merged into the new state
// ``state = { ...state, ...stateUpdate }``.
// */
// const updateState = (actions, agentId, currentState) => {
//     const stateUpdate = {
//         requests: currentState.requests
//     }
//     actions.forEach(action => {

//         // Guardian
//         if (action.some(action => action.model === 'snapshot')) {
//             stateUpdate.model = { valid: true }
//             stateUpdate.requests.push('lock')

//         }
//         if (action.some(action => action.model === 'ignoreSnapshotRequest')) {

//         }
//         if (action.some(action => action.model === 'undo')) {

//         }
//         if (action.some(action => action.model === 'redo')) {

//         }
//         // Validator 
//         if (action.some(action => action.model === 'validate')) {

//         }
//         if (action.some(action => action.model === 'ignoreValidationRequest')) {

//         }
//         // Updater 
//         if (action.some(action => action.model === 'update')) {

//         }
//         if (action.some(action => action.model === 'ignoreUpdateRequest')) {

//         }
//         // Listener 
//         // comes from intent handler

//         // if (action.some(action => action.request === 'snapshot')) {
//         //     stateUpdate.requests.push('lock')
//         //     console.log(`${agentId}: Request: lock door`)
//         // }
//         // if (action.some(action => action.request === 'unlock')) {
//         //     stateUpdate.requests.push('unlock')
//         //     console.log(`${agentId}: Request: unlock door`)
//         // }

//         // if (action.some(action => action.announce)) {
//         //     console.log(`${agentId}: ${action.find(action => action.announce).announce}`)
//         // }

//         // if (action.some(action => action.door === 'lock')) {
//         //     stateUpdate.door = { locked: true }
//         //     stateUpdate.requests = []
//         //     console.log(`${agentId}: Lock door`)
//         // }
//         // if (action.some(action => action.door === 'unlock')) {
//         //     stateUpdate.door = { locked: false }
//         //     stateUpdate.requests = []
//         //     console.log(`${agentId}: Unlock door`)
//         // }
//     })
//     return stateUpdate
// }


// /*
// To simulate a partially observable world, we can specify the environment's ``stateFilter`` function,
// which determines how the state update should be shared with the agents.
// However, in our case we simply communicate the whole state update to all agents,
// which is also the default behavior of the environment, if no ``stateFilter`` function is specified.
// */
// const stateFilter = state => state

// /* We instantiate the environment with the specified agents, state, update function, and filter
// function:
// */
// const environment = new Environment(
//     [
//         guardian,
//         validator,
//         updater,
//         listener
//     ],
//     state,
//     updateState,
//     stateFilter
// )

// module.exports = environment;