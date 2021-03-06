import { getMonth } from './dateTimeConverters';

export function getSeason(day){
    let month = getMonth(day);    

    switch (month) {
        case "December":
        case "January":
        case "February":
            return {
                name: "winter",
                dark: "bg-blue-500",
                border: "border-blue-500",
                light: "bg-blue-400",
                text: "text-blue-50",
                darkText: "text-blue-500",
                canopy: "bg-green-600",
                canopyText: "text-green-600",
            }
        case "March":
        case "April":
        case "May":
            return {
                name: "spring",
                dark: "bg-green-500",
                border: "border-green-500",
                light: "bg-green-400",
                text: "text-green-50",
                darkText: "text-green-500",
                canopy: "bg-pink-200",
                canopyText: "text-pink-400",
            }
        case "June":
        case "July":
        case "August":
            return {
                name: "summer",
                dark: "bg-yellow-500",
                border: "border-yellow-500",
                light: "bg-yellow-400",
                text: "text-yellow-50",
                darkText: "text-yellow-500",
                canopy: "bg-green-300",
                canopyText: "text-green-400",
            }
        case "September":
        case "October":
        case "November":
            return {
                name: "autumn",
                dark: "bg-orange-500",
                border: "border-orange-500",
                light: "bg-orange-400",
                text: "text-orange-50",
                darkText: "text-orange-500",
                canopy: "bg-yellow-400",
                canopyText: "text-yellow-500",
            }
        default:
            return {
                name: "none",
                dark: "bg-gray-500",
                border: "border-gray-500",
                light: "bg-gray-400",
                text: "text-gray-50",
                darkText: "text-gray-500",
                canopy: "bg-gray-400",
            }
    }

};