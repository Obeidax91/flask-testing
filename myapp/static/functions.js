function openLink(url) {
    var newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.focus();
    } else {
        alert('Der Popup-Blocker Ihres Browsers hat das Öffnen des Links verhindert. Bitte erlauben Sie Popups für diese Website.');
    }
}

const link = {
    Prozess1: 'https://www.google.de/',
    Prozess2: '/static/TeilProzesse/Prozess2/Network Diagramm.jpeg',
    Prozess3: 'https://www.youtube.com/',
    //Prozess4: 'static/documents',
    //Prozess5: 'file:///D:/Users/Desktop/TeilProzesse/Prozess5',
    //Prozess6: 'file:///D:/Users/Desktop/TeilProzesse/Prozess6',
    Prozess7:   'file:///D:/Users/Desktop/TeilProzesse/Prozess7',
    Prozess8:   'file:///D:/Users/Desktop/TeilProzesse/Prozess8',
    Prozess9:   'file:///D:/Users/Desktop/TeilProzesse/Prozess9',
    Prozess10:  'file:///D:/Users/Desktop/TeilProzesse/Prozess10',
    Prozess11:  'file:///D:/Users/Desktop/TeilProzesse/Prozess11',
    Prozess12:  'file:///D:/Users/Desktop/TeilProzesse/Prozess12',
    lucidchart: 'https://lucid.app/documents/#/home?folder_id=recent',
    google:     'https://www.google.de/',
    chatgpt:    'https://chatgpt.com/c/676bec8c-8e88-8002-b49b-059888fab7a1',
    calctree:   'https://www.calctree.com/',
    grabcad:    'https://grabcad.com/dashboard',
    octoprint:  'http://octpi.local/',
    Prozess19:  'file:///D:/Users/Desktop/TeilProzesse/Prozess19',
    Prozess20:  'file:///D:/Users/Desktop/TeilProzesse/Prozess20',

    // Weitere Links...
};

document.querySelectorAll('table button').forEach((button, index) => {
    const processNumber = index + 1; // Get process number (1 to 32)
    
    // Set the background image dynamically
    //button.style.backgroundImage = `url('static/images/p${processNumber}.jpg')`;
    //button.style.backgroundSize = 'cover'; // Ensures the image covers the button
    //button.style.backgroundPosition = 'center'; // Centers the image within the button
    //button.style.backgroundRepeat = 'no-repeat'; // Prevents the image from repeating

    // Adjust text color for better visibility if needed
    button.style.color = 'white'; 
    button.style.fontWeight = 'bold'; 
});




/*
document.querySelectorAll('table button').forEach((button, index) => {
    const processNumber = index + 1; // Get process number (1 to 32)
    
    // Create an <img> element
    const img = document.createElement('img');
    img.src = `static/images/p${processNumber}.jpg`; // Set the image source dynamically
    img.alt = `p${processNumber}`; // Set an alt attribute for accessibility
    img.style.width = '100px'; // Set the image width
    img.style.height = '100px'; // Set the image height
    img.style.marginRight = '10px'; // Add space between the image and the text
    
    // Add the image to the button
    button.prepend(img); // Places the image before the button's text
});
*/

