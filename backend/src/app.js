const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const apiRoutes = require("./routes/api")
const { errorHandler, AppError } = require("./utils/errors")
const connectDB = require("./config/db")

const app = express()

// Security Middlewares
app.use(helmet())

// Enable CORS for all routes
app.use(cors())

// Connect to Database
app.use(async (req, res, next) => {
	try {
		await connectDB()
		next()
	} catch (error) {
		next(error)
	}
})

// Body parser
app.use(express.json({ limit: "10kb" }))

// Home route — server status
app.get("/", (req, res) => {
	res.status(200).json({
		status: "active",
		service: "RWA Token Risk Analyzer API",
		timestamp: new Date().toISOString(),
	})
})

// API Routes
app.use("/api", apiRoutes)

// Handle undefined routes
app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

// Global Error Handling Middleware
app.use(errorHandler)

module.exports = app
