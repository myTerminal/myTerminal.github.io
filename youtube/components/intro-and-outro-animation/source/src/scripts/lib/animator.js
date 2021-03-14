/* global window document */

export const executeAfterDelay = (onDone, delay) => {
    window.setTimeout(
        onDone,
        delay
    );
};

const progressToState = state => {
    document.body.className += ` state-${state}`;
};

const runNextState = (currentStateIndex, states) => {
    if (currentStateIndex < states.length) {
        const currentState = states[currentStateIndex];

        const result = currentState.step();
        progressToState(currentState.name);

        const runNextStep = () => {
            runNextState(currentStateIndex + 1, states);
        };

        if (result && result.then) {
            result.then(runNextStep);
        } else {
            executeAfterDelay(
                runNextStep,
                currentState.duration
            );
        }
    }
};

export const runAnimation = states => {
    runNextState(0, states);
};
