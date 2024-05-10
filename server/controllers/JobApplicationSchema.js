import JobApplication from "../models/applyJob.js";


export const createJobApplication = async (req, res) => {
    try {
        const { firstName,lastName,age,degree,experience,cv,location,job,email} = req.body;

        if (!firstName || !lastName || !age || !degree || !experience || !cv || !location || !job) {
            return res.status(400).json({ message: "Please Provide All Required Fields" });
        }

        const jobApplication = new JobApplication({
            firstName,lastName,age,degree,experience,cv,location,job,email
        });

        await jobApplication.save();

        res.status(200).json({
            success: true,
            message: "Job Application Submitted Successfully",
            jobApplication,
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const getJobApplication = async (req, res) => {
    try {
        const jobApplications = await JobApplication.find();

        res.status(200).json({
            success: true,
            jobApplications,
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}