var topics = ["HTML", "CSS", "Git", "JavaScript"];

function listTopics() {
  for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
}

function selectTopic() {
  if (topics === "HTML") {
    console.log("Let's study HTML!");
  } else if (topics === "CSS") {
    console.log("Let's study CSS!");
  } else if (topics === "Git") {
    console.log("Let's study Git!");
  } else if (topics === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

listTopics();
