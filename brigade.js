const { events, Job } = require("brigadier")

events.on("webhook", () => {
  var job = new Job("do-nothing", "alpine:3.8")
  job.tasks = [
    "echo Hello",
    "echo World"
  ]
  job.run()
})