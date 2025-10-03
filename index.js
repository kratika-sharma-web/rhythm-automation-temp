import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"

const app = express()
app.use(cors({
    origin: ["http://localhost:5173", "https://rhythm-automation-temp.vercel.app"],
    credentials: true
}))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
})
const Admins = mongoose.model('ra-admins', adminSchema)

const contactUsFormSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    comment: String
})
const ContactUsForm = mongoose.model('contact-us', contactUsFormSchema)

const careerFormSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    comment: String
})
const CareerForm = mongoose.model('careers', careerFormSchema)

const contactEmailSchema = new mongoose.Schema({
    email: String,
    comment: String
})
const ContactEmail = mongoose.model('contact-emails', contactEmailSchema)

// contactUs

app.post('/contactUsFormEntry', async (req, res) => {
    const { name, email, phone, message } = req.body
    try {
        const contactUsEntrySaved = new ContactUsForm({
            name: name,
            email: email,
            phone: phone,
            message: message,
            comment: ""
        })
        await contactUsEntrySaved.save()
        res.status(200).send({ message: "Data recorded Successfully!" })
    }
    catch (error) {
        res.status(500).send({ message: "Server error!" })
    }
})

// careers

app.post('/careerFormEntry', async (req, res) => {
    const { name, email, phone, message } = req.body
    try {
        const careerEntrySaved = new CareerForm({
            name: name,
            email: email,
            phone: phone,
            message: message,
            comment: ""
        })
        await careerEntrySaved.save()
        res.status(200).send({ message: "Data recorded Successfully!" })
    }
    catch (error) {
        res.status(500).send({ message: "Server error!" })
    }
})

// FooterBar

app.post('/contactEmailEntry', async (req, res) => {
    const { email } = req.body
    try {
        const contactEmailSaved = new ContactEmail({
            email: email,
            comment: ""
        })
        await contactEmailSaved.save()
        res.status(200).send({ message: "Email Saved Successfully!" })
    }
    catch (error) {
        res.status(500).send({ message: "Server error!" })
    }
})

// ra-admin

app.post('/adminLogin', async (req, res) => {
    const { username, password } = req.body
    try {
        const admin = await Admins.findOne({ username, password })
        if (admin) {
            const adminToken = jwt.sign(
                { id: admin._id, username: admin.username },
                'secret_key',
                { expiresIn: "3h" }
            )
            res.status(200).send({ message: "Login Successful!", adminToken, admin })
        }
        else {
            res.status(401).send({ message: "Invalid Credentials!" })
        }
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: "Server Error!" })
    }
})
const verifyAdminToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
        return res.status(401).send({ message: "No token provided!" })
    }
    jwt.verify(token, 'secret_key', (err, admin) => {
        if (err) {
            return res.status(403).send({ message: "Invalid or expired token!" })
        }
        req.admin = admin;
        next();
    })
}

// ra-admin-dashboard

app.get('/adminDashboard', verifyAdminToken, (req, res) => {
    res.status(200).send({ message: "Welcome to the Admin Dashboard!", admin: req.admin })
})

app.get('/adminFormsData', async (req, res) => {
    try {
        const contactUsList = await ContactUsForm.find({})
        const careersList = await CareerForm.find({})
        const contactEmailList = await ContactEmail.find({})
        res.status(200).json({ contactUsList, careersList, contactEmailList })
    }
    catch (error) {
        res.status(500).json({ message: "Server error!", error })
    }
})

app.post('/handleContactUsEntryDelete', async (req, res) => {
    const { deleteContactUsEntry } = req.body
    try {
        const deletedContactUsEntry = await ContactUsForm.findByIdAndDelete(deleteContactUsEntry)
        res.status(200).send({ message: "Contact Us form entry deleted successfully!", deletedContactUsEntry })
    }
    catch (error) {
        res.status(500).send({ message: "Server error!" })
    }
})

app.post('/handleCareerEntryDelete', async (req, res) => {
    const { deleteCareerEntry } = req.body
    try {
        const deletedCareerEntry = await CareerForm.findByIdAndDelete(deleteCareerEntry)
        res.status(200).send({ message: "Career form entry deleted successfully!", deletedCareerEntry })
    }
    catch (error) {
        res.status(500).send({ message: "Server error!" })
    }
})

app.post('/handleContactEmailEntryDelete', async (req, res) => {
    const { deleteContactEmailEntry } = req.body
    try {
        const deletedContactEmailEntry = await ContactEmail.findByIdAndDelete(deleteContactEmailEntry)
        res.status(200).send({ message: "Career form entry deleted successfully!", deletedContactEmailEntry })
    }
    catch (error) {
        res.status(500).send({ message: "Server error!" })
    }
})

app.post('/handleContactUsSaveComment', async (req, res) => {
    const { entryId, contactUsComment } = req.body
    try {
        const savedContactUsComment = await ContactUsForm.findByIdAndUpdate(entryId, { $set: { comment: contactUsComment } }, { new: true })
        res.status(200).send({ message: "Contact Us form comment saved successfully!", savedContactUsComment })
    }
    catch (error) {
        res.status(500).send({ message: "Server error!" })
    }
})

app.post('/handleCareerSaveComment', async (req, res) => {
    const { entryId, careerComment } = req.body
    try {
        const savedCareerComment = await CareerForm.findByIdAndUpdate(entryId, { $set: { comment: careerComment } }, { new: true })
        res.status(200).send({ message: "Career form comment saved successfully!", savedCareerComment })
    }
    catch (error) {
        res.status(500).send({ message: "Server error!" })
    }
})

app.post('/handleContactEmailSaveComment', async (req, res) => {
    const { entryId, contactEmailComment } = req.body
    try {
        const savedContactEmailComment = await ContactEmail.findByIdAndUpdate(entryId, { $set: { comment: contactEmailComment } }, { new: true })
        res.status(200).send({ message: "Contact Email comment saved successfully!", savedContactEmailComment })
    }
    catch (error) {
        res.status(500).send({ message: "Server error!" })
    }
})

app.listen(3001, () => {
    console.log("Server is running...")
})