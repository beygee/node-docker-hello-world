import express from "express"
import client from "prom-client"
const app = express()

const PORT = process.env.PORT || 3000

client.collectDefaultMetrics()

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType)
  res.end(await client.register.metrics())
})

const counter = new client.Counter({
  name: "count_event",
  help: "count_event_help", // /metrics 페이지에서 표시되는 내용
})
app.get("/count", (req, res) => {
  counter.inc()
  // counter.inc(10)
  res.send("Count")
})

const gauge = new client.Gauge({
  name: "gauge_event",
  help: "metric_help",
  labelNames: ["method", "statusCode"],
})

app.get("/gauge", (req, res) => {
  gauge.set({ method: "GET", statusCode: "200" }, 100)
  res.send("Hello Beygee!")
})

app.get("/", (req, res) => {
  res.send("Hello Beygee!")
})

app.listen(PORT, () => {
  console.log(`Server created at ${PORT}`)
})
