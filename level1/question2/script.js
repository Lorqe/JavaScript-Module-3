//Console.log out elements in JSON file

(function() {
    
    // Video elements minus author
    var video = Object.entries(jsonData.video[0]);
    

    for(var i = 0; i < video.length -1; i++) {
    var obj = video[i];

    console.log(obj[1]);
    
    }
    
    // Only Author elements
    var author = Object.entries(jsonData.video[0].author.data[0]);
    
    for(var i = 0; i < author.length; i++) {
    var obj = author[i];

    console.log(obj[1]);
    
    }
    
})();