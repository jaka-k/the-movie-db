export default function dateConvertor(dateString)  {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if(dateString) {
        const dateArray = dateString.split("-");
        dateArray.map(Number);
        const year = dateArray[0];
        const month = months[dateArray[1] - 1];
        const day = dateArray[2];
        const date = `${month} ${day}, ${year}`
        
        return date;
    } else {
        return null;
    }

}