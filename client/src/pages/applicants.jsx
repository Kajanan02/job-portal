import React, {useEffect, useState} from 'react';
import {apiRequest} from "../utils/index.js";

function Applicants(props) {
    const [data,setData]=useState([])
    const [fetching,setIsFetching] =  useState(false)


    const getJobDetails = async () => {
        setIsFetching(true);

        try {
            const res = await apiRequest({
                url: "/job-application/get-job-applications/",
                method: "GET",
            });

            console.log(res?.jobApplications)
            setData(res?.jobApplications);
            setIsFetching(false);
        } catch (error) {
            setIsFetching(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getJobDetails()
    }, []);
    console.log()

    return (
        <div className={"container m-auto my-20"}>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Age</th>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2">degree</th>
                        <th className="px-4 py-2">experience</th>
                        <th className="px-4 py-2">cv</th>
                        <th className="px-4 py-2">email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                            <td className="border px-4 py-2">{item.firstName + " " +  item.lastName}</td>
                            <td className="border px-4 py-2">{item.age}</td>
                            <td className="border px-4 py-2">{item.location}</td>
                            <td className="border px-4 py-2">{item.degree}</td>
                            <td className="border px-4 py-2">{item.experience}</td>
                            <td className="border px-4 py-2 text-blue-500"><a target={"_blank"} href={item.cv}> Link</a> </td>
                            <td className="border px-4 py-2">{item?.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Applicants;