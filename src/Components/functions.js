export const convertDuration=(duration)=>{
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return "0:00"; // Handle invalid input

    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    const seconds = match[3] ? parseInt(match[3], 10) : 0;

    // Format the time as "H:MM:SS" or "M:SS" depending on the presence of hours
    let formattedTime = "";
    if (hours > 0) {
        formattedTime += `${hours}:`;
    }
    formattedTime += `${minutes < 10 && hours > 0 ? '0' : ''}${minutes}:`;
    formattedTime += `${seconds < 10 ? '0' : ''}${seconds}`;
    return formattedTime;
}
export const getTimeDifference=(publishedDate)=>{
    const publishedTime = new Date(publishedDate).getTime();
    const currentTime = new Date().getTime();
    
    const differenceInSeconds = Math.floor((currentTime - publishedTime) / 1000);
    
    // Calculate years, months, days, hours, minutes, and seconds
    const years = Math.floor(differenceInSeconds / (365 * 24 * 60 * 60));
    const months = Math.floor((differenceInSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    const days = Math.floor((differenceInSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((differenceInSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((differenceInSeconds % (60 * 60)) / 60);
    const seconds = differenceInSeconds % 60;
    
    // Construct the time difference string
    let timeDifference = "";
    if (years >= 1) {
        timeDifference += `${years} year${years > 1 ? 's' : ''}`;
    } else if (months >= 1) {
        timeDifference += `${months} month${months > 1 ? 's' : ''}`;
    } else if (days >= 1) {
        timeDifference += `${days} day${days > 1 ? 's' : ''}`;
    } else if (hours >= 1) {
        timeDifference += `${hours} hour${hours > 1 ? 's' : ''}`;
    } else if (minutes >= 1) {
        timeDifference += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
        timeDifference += `${seconds} second${seconds > 1 ? 's' : ''}`;
    }

    return timeDifference;
}
export const convertViews=(views)=>{
    // Convert views to a number
    views = parseInt(views);

    // Check if views are in millions
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    }
    // Check if views are in thousands
    else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    } else {
        return views.toString();
    }
}