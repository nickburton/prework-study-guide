var topics = ["HTML", "CSS", "Git", "JavaScript"];

function listTopics() {
  for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
}

function selectTopic() {
  if (topics[0] === "HTML") {
    console.log("Let's study HTML!");
  } else if (topics[0] === "CSS") {
    console.log("Let's study CSS!");
  } else if (topics[0] === "Git") {
    console.log("Let's study Git!");
  } else if (topics[0] === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

listTopics();
