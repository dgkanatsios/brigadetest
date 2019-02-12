const { events, Job } = require("brigadier")

events.on("simpleevent", () => {
  var job = new Job("do-nothing", "alpine:3.8")
  job.tasks = [
    "echo HelloSimpleEvent",
    "echo WorldSimpleEvent"
  ]
  job.run()
})

events.on("cloudevent", () => {
  var job = new Job("do-nothing", "alpine:3.8")
  job.tasks = [
    "echo HelloCloudEvent",
    "echo WorldCloudEvent"
  ]
  job.run()
})
