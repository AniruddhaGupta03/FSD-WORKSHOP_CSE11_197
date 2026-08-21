import { EventEmitter } from "node:events";

function createUserEvents() {
  const emitter = new EventEmitter();

  return {
    addEventListener(eventName, listener) {
      emitter.on(eventName, listener);
    },

    removeEventListener(eventName, listener) {
      emitter.off(eventName, listener);
    },

    dispatchEvent(eventName, ...argumentsList) {
      const event = {
        target: this,
        currentTarget: this,
        eventName: eventName,
        ...argumentsList[0]
      };

      emitter.emit(eventName, event);
    }
  };
}

const button = createUserEvents();

button.addEventListener("save", () => {
  console.log("saving...");
});

function handleClick(event) {
  console.log("mouse clicked");
  console.log(event, event.eventName);
  console.log(`message: ${event.details}`);
}

button.addEventListener("click", handleClick);

button.dispatchEvent("save");

button.dispatchEvent("click", {
  details: "button clicked"
});

button.addEventListener("submit", () => {
  console.log("data submitted successfully");
});

button.dispatchEvent("submit");