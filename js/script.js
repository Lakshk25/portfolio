const li = document.querySelectorAll('.nav-link');
const sec = document.querySelectorAll('section');

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
        li.forEach(ltx => ltx.classList.remove('active'));
        li[len].classList.add('active');
    }
    activeMenu();
    window.addEventListener('scroll', activeMenu);




















// <!DOCTYPE html>
// <html lang="en">
// <head>
// <title> w3codemasters</title>
// <meta charset="utf-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
// </head>
// <body>

// <style>
// body {
//     padding: 40px 100px;
//     background-color: #252323;
//     color: #fff;
// }
  
  
//   form {
//     max-width: 400px;
//     margin: 0 auto;
// }

// </style>
// <div class="container">
//   <form>
//     <div class="form-group">
//       <label for="usr">Name:</label>
//       <input type="text" class="form-control" id="usr" required tabIndex="1" autofocus>
//     </div>
//     <div class="form-group">
//       <label for="usr">Email:</label>
//       <input type="text" class="form-control" id="usr" required tabIndex="2">
//     </div>
//     <div class="form-group">
//       <label for="usr">City:</label>
//       <select class="form-control" required tabIndex="3">
//         <option>Jaipur</option>
//         <option>Jaipur</option>
//       </select>
//     </div>
//     <div class="form-group">
//       <label for="pwd">Picode:</label>
//       <input type="password" class="form-control" id="pwd" required tabIndex="4">
//     </div>
//     <div class="form-group">
//       <button class="btn btn-success" tabIndex="5"> Submit</button>
//     </div>
//   </form>
  
  
  
// <script type="text/javascript">
// $(document).on('keypress', 'input,select', function (e) {
//     if (e.which == 13) {
//         e.preventDefault();
//         var $next = $('[tabIndex=' + (+this.tabIndex + 1) + ']');
//         console.log($next.length);
//         if (!$next.length) {
//        $next = $('[tabIndex=1]');        }
//         $next.focus() .click();
//     }
// });
// </script>
  
  
  
// </div>
// </body>
// </html>
