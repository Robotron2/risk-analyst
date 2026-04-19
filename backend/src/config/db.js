const mongoose = require("mongoose")
require("dotenv").config()

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/tka"

let cached = global.mongoose

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null }
}

const connectDB = async () => {
	if (cached.conn && cached.conn.connection.readyState === 1) {
		return cached.conn
	}

	if (!cached.promise) {
		if (!mongoURI) {
			throw new Error("MONGO_URI is not defined")
		}

		const opts = {
			bufferCommands: false,
		}

		cached.promise = mongoose
			.connect(mongoURI, opts)
			.then((mongooseInstance) => {
				console.log(`MongoDB Connected: ${mongooseInstance.connection.host}`)
				return mongooseInstance
			})
			.catch((error) => {
				cached.promise = null
				throw error
			})
	}

	try {
		cached.conn = await cached.promise
	} catch (error) {
		cached.promise = null
		throw error
	}

	return cached.conn
}

module.exports = connectDB
