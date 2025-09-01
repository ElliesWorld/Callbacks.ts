/*Create a function that takes a URL string and a callback. 
Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'. */

type downloadFileFunction = (fileContent: string) => void;

const downloadFile = (url:string, showFile:downloadFileFunction): void => {
    console.log("Starting download from:", url);
    setTimeout(() => {
        const fileContent = `Downloaded data from ${url}`;
        showFile(fileContent); // Call the callback with the downloaded content
    }, 2000);
};

// This callback takes care of the downloaded file content
const showFile: downloadFileFunction = (fileContent: string) => {
    console.log("Downloaded content:", fileContent);
};

downloadFile("https://example.com/file.txt", showFile);