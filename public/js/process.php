<?php

    $function = $_POST['function'];
    
    $log = array();
    
    switch($function) {
    
       case('getState'):
           if (file_exists('chat.txt')) {
               $lines = file('chat.txt');
           }
           $log['state'] = count($lines); 
           break;  
      
       case('update'):
          $state = $_POST['state'];
          if (file_exists('chat.txt')) {
             $lines = file('chat.txt');
          }
          $count =  count($lines);
          if ($state == $count){
             $log['state'] = $state;
             $log['text'] = false;
          } else {
             $text= array();
             $log['state'] = $state + count($lines) - $state;
             foreach ($lines as $line_num => $line) {
                 if ($line_num >= $state){
                       $text[] =  $line = str_replace("\n", "", $line);
                 }
             }
             $log['text'] = $text; 
          }
            
          break;
       
       case('send'):
       	 $nickname = htmlentities(strip_tags($_POST['nickname']));
	     $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
	     $message = htmlentities(strip_tags($_POST['message']));
	     if (($message) != "\n") {
	       if (preg_match($reg_exUrl, $message, $url)) {
	          $message = preg_replace($reg_exUrl, '<a href="'.$url[0].'" target="_blank">'.$url[0].'</a>', $message);
	       } 
	          fwrite(fopen('chat.txt', 'a'), "<span>". $nickname . "</span>" . $message = str_replace("\n", " ", $message) . "\n"); 
	     }
         break;
    }
    echo json_encode($log);
?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script src="chat.js"></script>
<script>

  // ask user for name with popup prompt    
  var name = prompt("Enter your chat name:", "Guest");
 
  // default name is 'Guest'
  if (!name || name === ' ') {
    name = "Guest";  
  }
  
  // strip tags
  name = name.replace(/(<([^>]+)>)/ig,"");
  
  // display name on page
  $("#name-area").html("You are: <span>" + name + "</span>");
  
  // kick off chat
  var chat =  new Chat();

  $(function() {
  
     chat.getState(); 
     
     // watch textarea for key presses
     $("#sendie").keydown(function(event) {  
     
         var key = event.which;  
   
         //all keys including return.  
         if (key >= 33) {
           
             var maxLength = $(this).attr("maxlength");  
             var length = this.value.length;  
             
             // don't allow new content if length is maxed out
             if (length >= maxLength) {  
                 event.preventDefault();  
             }  
         }  
                                                                                                     });
     // watch textarea for release of key press
     $('#sendie').keyup(function(e) {  
                
        if (e.keyCode == 13) { 
        
              var text = $(this).val();
              var maxLength = $(this).attr("maxlength");  
              var length = text.length; 
               
              // send 
              if (length <= maxLength + 1) { 
                chat.send(text, name);  
                $(this).val("");
              } else {
                $(this).val(text.substring(0, maxLength));
              }  
        }
     });
  });
</script>
<body onload="setInterval('chat.update()', 1000)">