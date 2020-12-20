var readlinesync=require('readline-sync');
const chalk=require('chalk');
var score=0;
var quesone= " Which language is used for creating Web Pages?                (a). PASCAL ,                                                  (b). C,                                                        (c). HTML ,                                                    (d). Basic                                                      " ;
var ans="c";
var ques=console.log(chalk.yellow(quesone));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
  score=scrore+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
  score=score-1;
}

var questwo="What is the abbreviation of HTTP?                              (a). Hypertext tag path ,                                      (b). Hyper Text Transfer Protocol,                             (c). Hypertext transfer path ,                                 (d). None                                                       ";
var ans="b";
var ques=console.log(chalk.yellow(questwo));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
 score=score+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
  score=score-1;
}

var questhree="The entire web document is contained within ____               (a). Comments ,                                                (b). Tags ,                                                    (c). Web page ,                                                (d). HTML element                                              ";
var ans="d";
var ques=console.log(chalk.yellow(questhree));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
  score=score+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
}

var quesfour="HTML document should begin with the ____                       (a). <HEAD> tag ,                                              (b). <TITLE> tag ,                                             (c). <BODY> tag ,                                              (d). <HTML> tag                                              ";
var ans="d";
var ques=console.log(chalk.yellow(quesfour));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
  score=score+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
  score=score-1;
}


var quesfive="GIF is the abbreviation for ___                                (a).Graphics Interchange Format ,                              (b). Graphics Instruction Format   ,                           (c). Graphics Item Format ,                                    (d). Graphics Information Format                              ";
var ans="a";
var ques=console.log(chalk.yellow(quesfive));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
  score=score+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
  score=score-1;
}

var quessix="The <Font> tag is similar to ____                                (a). <BIG>tag ,                                                (b). <SMALL>tag ,                                              (c). <MARQUEE>tag ,                                            (d). <BIG>and<Small> tags                                      ";
var ans="d";
var ques=console.log(chalk.yellow(quessix));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
  score=score+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
  score=score-1;
}

var quessev="The HTML and HTTP standard are defined by ____                   (a). Web client ,                                              (b). Internet association ,                                    (c). WWW consortium ,                                          (d). WWW                                                       ";
var ans="c";
var ques=console.log(chalk.yellow(quessev));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
  score=score+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
  score=score-1;
}

var queseig="The tag used to add images to the HTML document is ____         (a). <FONT> ,                                                  (b). <HR> ,                                                    (c). <HI> ,                                                    (d). <IMG>                                                     ";
var ans="d";
var ques=console.log(chalk.yellow(queseig));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
  score=score+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
  score=score-1;
}

var quesnine="The ____ passes the information given by the user to a specified program.                                                       (a). User ,                                                    (b). Programmer ,                                              (c). Web Server ,                                              (d). Browser                                                   ";
var ans="c";
var ques=console.log(chalk.yellow(quesnine));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
  score=score+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
  score=score-1;
}

var questen="____ is used to store the data within the documents on the     server.                                                       (a). XML ,                                                     (b). HTML ,                                                    (c). DHTML ,                                                   (d). CGI                                                       ";
var ans="a";
var ques=console.log(chalk.yellow(questen));
var username=readlinesync.question(ques);
if(username==ans){
  console.log(chalk.bgGreen("you are right"));
  score=score+1;
}
else{
  console.log(chalk.bgRed("you are wrong"));
  score=score+1;
}

console.log("Your Score is",score);

