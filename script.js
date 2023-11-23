function drop(){
    let inp = document.getElementById("input").value;
       if(inp == 'Anime') {
   
       document.getElementById('anime1').style.boxShadow = '5px 5px 5px ';
       document.getElementById('anime2').style.boxShadow = '5px 5px 5px ';
       document.getElementById('anime3').style.boxShadow = '5px 5px 5px ';
   
       document.getElementById('hidden').style.display = 'block';
   }
   if(inp == 'Manga'){
       document.getElementById('manga1').style.boxShadow = '5px 5px 5px ';
       document.getElementById('manga2').style.boxShadow = '5px 5px 5px ';
       document.getElementById('manga3').style.boxShadow = '5px 5px 5px ';
       
       document.getElementById('hidden').style.display = 'block';
   }
   
    }
    function drop1(){
       let inp = document.getElementById("input").value; 
   
   
   if(inp == 'Manga'){
       
       document.getElementById('manga1').style.display = 'none';
       document.getElementById('manga2').style.display = 'none';
       document.getElementById('manga3').style.display = "none"
       document.getElementById('manga4').style.display = "block"
       document.getElementById('manga5').style.display = "block"
       document.getElementById('manga6').style.display = "block"

   }
   if(inp == 'Anime'){
       document.getElementById('anime1').style.display  = 'none';
       document.getElementById('anime2').style.display = 'none';
       document.getElementById('anime3').style.display = 'none';
       document.getElementById('anime4').style.display = 'block';
       document.getElementById('anime5').style.display = "block"
       document.getElementById('anime6').style.display = "block"

       document.getElementById('manga').style.flexDirection = "row"
       
   }
}