function getParagraph1()
{
    var inputs=[];

    for(var i = 1 ; i<6 ; i++)
    {
        inputs.push(document.getElementById("para1_input_box_"+i).value);
    }
    document.getElementById("showParagraph1").innerHTML=inputs.join(". ");
}

function getParagraph2()
{
    var inputs=[];

    for(var i = 1 ; i<6 ; i++)
    {
        inputs.push(document.getElementById("input_box_"+i).value);
    }
    document.getElementById("showParagraph2").innerHTML=inputs.join(". ");
}
function getParagraph3()
{
    var numbers=[];

    for(var j = 1 ; j<7 ; j++)
    {
        numbers.push(document.getElementById("number_box_"+j).value);
    }
    document.getElementById("showParagraph3").innerHTML=numbers.join(", ");
}