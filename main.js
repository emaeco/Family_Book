var images = ["mom.JPG","papa.JPG","savi.JPG","Aarna7.jpeg"];
var names = ["Sapna Tomar",
             "Vijay Singh Tomar",
                "Aarya Tomar", 
                "Aarna"];
var i = 0;
function update()
{
   
    var numbers_of_family_member_in_array = 4
    if(i >= numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    i++;
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
