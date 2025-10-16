import hotelManagement from "../routes/projectDetails/hotelManagement";
import energyForecasting from "../routes/projectDetails/energyForecasting";
import personalPortfolio from "../routes/projectDetails/personalPortfolio";

const Projects_Data = [
    {
        p_no:"01",
        p_name:"Hotel Management System",
        p_desc: "Hotel Management System designed using .NET framework...",
        details: hotelManagement,
    },
    {
        p_no:"02",
        p_name:"Energy Forecasting Model",
        p_desc: "Energy Forecasting Model designed using PySpark and AWS EMR",
        details: energyForecasting,
    },
    {
        p_no:"03",
        p_name:"Personal Portfolio",
        p_desc: "Personal Portfolio designed using React...",
        details: personalPortfolio,
    },
]

export default Projects_Data