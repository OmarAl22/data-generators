var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
//const helper = require(file2+'/utils/helper.js');

var title = ["I Didnt Mean To","Soul Deep","Amor De Cabaret","Something Girls","Face the Ashes","The Moon And I  Ordinary Day Album Version ","Keepin It Real  Skit ","Drop of Rain","Pink World","Insatiable  Instrumental Version ","Young Boy Blues","The Urgency  LP Version ","La Culpa","Auguri Cha Cha","Tonight Will Be Alright","Floating","High Tide","Sohna Nee Sohna Data","Caught In A Dream","Synthetic Dream","Broken-Down Merry-Go-Round","Kassie Jones","Setanta matins","Setting Fire to Sleeping Giants","James  Hold The Ladder Steady ","Made Like This  Live ","Superconfidential","I Think My Wife Is Running Around On Me  Taco Hell ","Spanish Grease","Crazy Mixed Up World","Do You Finally Need A Friend","The Emperor Falls","Twist and Shout","It Makes No Difference Now","Laws Patrolling  Album Version ","ADA3nde va Chichi","Barking Dogs  From Piouhgd" ,"OUTE ENA EFHARISTO","Midnight Swim","In A Subtle Way","Spin","Burning In The Aftermath","Angie  1993 Digital Remaster ","Sabor Guajiro","Human Cannonball","Glory Be","Crossfire","I Cant Be Satisfied","Nashville Parthenon","Cocain Ducks","Human Being","The More I See You","Certain Things We Do","Forming","MafuA!","Driving Home For Christmas","Spooks In Space","Tous Les GarASSons Et Les Filles","Too Much Saturn","Movement 4 from Kiss  Album Version ","Stream","Make Me Over","Deform  live ","Wicker Chair","An ti chans","I Will Love Again  JJs Club Radio ","Stickin In My Eye","Ota kiinni","Entre CanAbales","Rosemary Recalls","Sudanese Dance","Where The Thunder Roars  Tales Of Wonder Album Version ","Wanna Be A Player","Panama  Remastered Album Version ","Lets Get It Started","Metal","She Fell Away  2009 Digital Remaster ","Next Time","Its My Party","Complicate It","Monde De Fou","Opus a Satana  Part 2 ","This Melody  Live ","Im Gone This Time","You Feel Good All Over","Indian Love Call","You Can Still Be Free","I Never Came","Dixie","Commercial Reign","Hourglass","Wake","Caricia Y Herida","Le tortillard","WKYA  drop ","TerA$slintu","Nows The Time To Fall In Love","Grim Prospects  Gross Prospects Bad Trip Remix ","Mangos"];
var artistname = ["Casual","The Box Tops","Sonora Santanera","Adam Ant","Gob","Jeff And Sheri Easter","Rated R","Tweeterfriendly Music","Planet P Project","Clp","JennyAnyKind","Wayne Watson","Andy Andy","Bob Azzam","Lionel Richie","Blue Rodeo","Richard Souther","Faiz Ali Faiz","Tesla","lextrical","Jimmy Wakely","Alice Stuart","Elena","The Dillinger Escape Plan","SUE THOMPSON","Five Bolt Main","Clp","Tim Wilson","Willie Bobo","Faye Adams","Terry Callier","John Wesley","The Shangri-Las","Billie Jo Spears","Mike Jones (Featuring CJ_ Mello & Lil' Bran)","Sierra Maestra","Butthole Surfers","Despina Vandi","Javier Navarrete","Jacob Young","Scarlet's Remains","The Suicide Machines","The Rolling Stones","Roberto Torres","Loudon Wainwright III","R.L. Burnside","Stevie Ray Vaughan","John Hammond","Casiotone For The Painfully Alone","Ec8or","The New York Dolls","Eliane Elias","Lost Boyz","The Germs","Yamandu Costa","Chris Rea","Perrey And Kingsley","Eurythmics","Francis Dunnery","John Cale","Suzanne Ciani","Vickie Winans","The Berzerker","Kings Of Leon","Edith Lefel","Taras","NOFX","Murskahumppa","Soda Stereo","Bruce Rowland","Xcultures","White Heart","Heavy D / McGruff","Van Halen","Black Eyed Peas","Nine Inch Nails","Nick Cave & The Bad Seeds","Nadine Renee","Lesley Gore","Smartbomb","Suburbs","Emperor","Julien Clerc","Glen Campbell","T.G. Sheppard","Slim Whitman","Savage Garden","Queens Of The Stone Age","Hank Penny & The Lincoln Penny Orchestra","Inspiral Carpets","Borialis","The Dirty Skirts","Flor Silvestre","BA(c)zu","Redman","Solistiyhtye Suomi","Eddie Cantor","Schizoid","Kai Winding"];

for(var i=0 ; i < 30; i++){
 
var record1 = {
 
endTime:randomDate(new Date(2011, 0, 1), new Date()), 
artistName: artistname[getFakeNumber(0,100)], 
trackName: title[getFakeNumber(0,100)], 
msPlayed: getFakeNumber(0,300000), 
 
 
};
 
 var json = JSON.stringify(record1);
console.log(json);
function getFakeNumber(a, b) {
  return Math.floor(Math.random() * b);             
}


function randomDate(start, end) {
  var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  var date_string = date.toISOString().replace("T", " ").substring(0,date.toISOString().length-8);
  return date_string;
}


}