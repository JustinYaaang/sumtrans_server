var convertapi = require('convertapi')('DaTFjz8KEp47G5pB');
var unirest = require('unirest');
const PDFDocument = require('pdfkit');
var fs = require("fs");

API_KEY = "ef481a34d9msh49b3c6964d8af2ep1f3bd8jsnd5a7eb6d7347"
API_HOST = "meaningcloud-summarization-v1.p.rapidapi.com"
URL = "https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0?"
SENTENCE_NUM = 5
target_url = "http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStar_Trek"
// http://en.wikipedia.org/wiki/Star_Trek
// http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStar_Trek&sentences=5

module.exports = 
{
  convert_pdf_to_txt: function (file){
    convertapi.convert('txt', {
        File: file
    }, 'pdf').then(function(result) {
        console.log(result)
        result.saveFiles('output_txt');
    });
  },


  
  convert_data_to_pdf: function(data, filename){
    // generate pdf
    fs.appendFile(filename, data, (err) => {
      if (!err){
        console.log("Successfully Written to File.");
      }
      else {
        console.log(err);
      }
    });
  }

};

// Private variables and functions which will not be accessible outside this file
var privateFunction = function () 
{
};
// function summarize_url() {
//     unirest.get(URL + "url=" + target_url + "&sentences=" + SENTENCE_NUM)
//     .header("X-RapidAPI-Host", API_HOST)
//     .header("X-RapidAPI-Key", API_KEY)
//     .header("Accept", "application/json")
//     .end(function (result) {
//       console.log(result.status, result.headers, result.body);
//     });
// } 

// function summarize_txt() {
//     unirest.get(URL + "txt=Meeting+Minute++Purpose%3A+Introductions+and+Project+Brief+Date%3A+30th+May+2019%2C+3%3A00PM+Location%3A+Virtual+Meeting+(Zoom)+Attendance%3A+Joseph+Connor+(NHS+Contact+Person)%2C+ADEGBUYI+Adebusola%2C+BAFATAKIS+Nikolaos%2C+SONG+Chen%2C+FAN+Yiming%2C+YANG+Chong+++After+introductions%2C+Joseph+stated+we+will+be+working+on+a+Mental+Health+Application%2C+a+Decision+Support+System+that+does+three+major+things+Triage%2C+Referral+and+Treatment(Refraining%2C+Medication%2C+EMDR).+Due+to+a+recent+development%2C+this+type+of+system+is+classified+as+a+medical+device(high+risk)+based+on+the+Clinical+Risk+Assessment+Tool+-+DCB0129+hence+it+requires+approval.++Background+-+Excerpt+from+Meeting+%22One(1)+in+four(4)+people+have+mental+health+issues.+As+a+result+understaffing%2C+there+is+a+need+to+triage+and+try+to+treat+people+early+in+the+cycle.+We+cannot+help+people+in+person%2C+but+that%E2%80%99s+not+possible%2C+hence+triaging.+There+is+a+6+month+window+between+poor+mental+health+diagnosis+to+psychosis%2C+hence+early+diagnosis+is+important.+Triaging+is+based+on+location+and+condition+using+self-referral+forms.%E2%80%9D++Goals+-+Extracted+From+Meeting+Goal+-+Making+people%E2%80%99s+lives+easier+by+asking+questions+%E2%80%93+Too+broad+Goal+%E2%80%93+Reduce+questioning+time+Goal+%E2%80%93+Promote+truthful+answers%2C+more+accurate+information+at+patient%E2%80%99s+convenience+Goal+%E2%80%93+Gather+information+and+triage+based+on+severity+Goal+%E2%80%93+Automate+triaging+Goal+%E2%80%93+Provide+advice+until+medical+personnel+is+available++Similar+Systems+%E2%97%8F%09Mental+Health+Chatbox+%E2%97%8F%09X2AI+%E2%80%93+Online+CBT+%E2%97%8F%09Woebot+-+Refraining+%E2%97%8F%09CBT+%E2%80%93+Cognitive+Behavioural+Therapy++Ethical+Issues+-+None+Since+there+will+be+no+access+to+real+or+anonymised+data+at+any+point+in+the+project+++Systems+Design%2C+Integration+and+Challenges+%E2%97%8F%09Iaptus+-+Maiden+Health+(Capture+results+of+triage)+%E2%80%93+Online+record%2C+we+might+have+to+push+records+to.+%E2%97%8F%09Rio+%E2%80%93+this+system+has+no+API+We+might+have+to+replicate+these+systems+and+make+open+source+%E2%80%93+AGP3L+++Desired+Software+Outputs+Joseph+stated+the+following+as+desired+outputs+in+order+of+product+maturity+with+possible+deployment+in+6+months+%E2%97%8F%09Triage+%E2%97%8F%09Treat+%E2%97%8F%09Referral+%E2%97%8F%09Open+System+-+AGP3L++Potential+Questions+for+Users+Based+on+these+questions+below%2C+Gatsetting(measures+Anxiety)+and+PHQ9(measures+Low+Depression)+scores+are+generated+for+triaging%3A+%E2%97%8F%09Personal+Questions%3F++%E2%97%8F%09Why+are+you+attending%3F++%E2%97%8F%09Impact+on+your+life%3F++%E2%97%8F%09How+does+it+affect+your+mood%3F+%E2%97%8F%09Physical+Health%3F++%E2%97%8F%09Children%3F++%E2%97%8F%09Pregnant%3F++%E2%97%8F%09At+risk+of+harming+yourself%3F++%E2%97%8F%09Harming+others%3F++%E2%97%8F%09Suicidal%3F++%E2%97%8F%09How+you%E2%80%99d+enact+the+thoughts%3F++Potential+Risks+We+identified+the+following+risks+from+the+discussion+so+far%3A+%E2%97%8F%09Access+to+Personal+Identifiable++%E2%97%8F%09Risk+of+wrong+diagnosis+and+triaging++Conclusion+The+team+asked+if+there+has+been+any+market+evaluation+or+clinical+trial+has+been+carried+out+to+measure+the+effectiveness+of+automating+mental+health+care.+Joseph+responded+that+while+there+has+been+no+research+to+validate+this%2C+a+similar+system(Mental+Triage+Chatbox)+has+gained+momentum+amongst+clinicians+with+about+1.8+million+users.+++Towards+the+end+of+the+meeting+Joseph+broached+the+idea+of+an+alternative+project+called+%E2%80%9CDialogue+Monitoring%E2%80%9D+for+mental+health+emergency+services(+London+Ambulance+Service)+which+involves+synthesising+voice+calls+real+time%2C+converting+speech+to+text+and+providing+prompts+to+operators.++He+stated+this+is+relevant+because+about+6%25+emergency+calls+are+mental+health+calls+and+while+these+calls+are+audited+manually+later+to+evaluate+the+adequacy+of+handling+these+matters%2C+a+more+robust+solution+would+be+one+that+helps+operators+handle+cases+real-time+by+providing+cues+on+when+to+speak%2C+listen+and+what+to+ask.+++He+also+stressed+that+the+%E2%80%9CDialogue+Monitoring%E2%80%9D+project+is+similar+to+the+%E2%80%9CTriage%E2%80%9D+solution%2C+except+the+former+targets+individuals+later+in+the+cycle+especially+desperate+people%2C+whereas+the+latter+aims+to+help+people+early.++The+decision+of+which+of+these+projects+we+will+be+going+forward+with+will+be+communicated+with++the+team+after+Joseph+meets+with+NHSRA+and+other+stakeholders+on+Thursday+6th+June+2019.++Action+Points++Item%09Assigned+To+Research+Similar+Systems%09Everyone+Read+%26+Prepare+Summary+Slides+for+Triaging+and++Dialogue+Monitoring%09Everyone+Set+up+meeting+with+Emmanuel+Lieter%09Busola+Write+report+for+this+week%09Busola+Book+meeting+space+for+next+week%E2%80%99s+meeting%09Nick+Create+Overleaf+Document+for+final+project+report%09Nick+++Planned+Meeting+Client+Meeting+on+5th+June+2019%2C+3%3A00PM+++++Time+June+5th+10%3A00+am-++++++++++++++++++Are+you+alone+at+the+moment%3F&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStar_Trek&sentences=5")
//     .header("X-RapidAPI-Host", API_HOST)
//     .header("X-RapidAPI-Key", API_KEY)
//     .header("Accept", "application/json")
//     .end(function (result) {
//       console.log(result.status, result.headers, result.body);
//     });
// }

// function summarize_pdf(){
//     // unirest.get("https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0?url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStar_Trek&doc=%2FUsers%2Fchongyang%2FDownloads%2FCL-dialog.pdf&sentences=5")
//     // .header("X-RapidAPI-Host", "meaningcloud-summarization-v1.p.rapidapi.com")
//     // .header("X-RapidAPI-Key", "ef481a34d9msh49b3c6964d8af2ep1f3bd8jsnd5a7eb6d7347")
//     // .header("Accept", "application/json")
//     // .end(function (result) {
//     //   console.log(result.status, result.headers, result.body);
//     // });

//     // unirest.get("https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0?url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStar_Trek&sentences=5")
//     unirest.get("https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0?doc=%2FUsers%2Fchongyang%2FDownloads%2Ftemplate_weeklyreports.pdf&sentences=5")
//     .header("X-RapidAPI-Host", "meaningcloud-summarization-v1.p.rapidapi.com")
//     .header("X-RapidAPI-Key", "ef481a34d9msh49b3c6964d8af2ep1f3bd8jsnd5a7eb6d7347")
//     .header("Accept", "application/json")
//     .end(function (result) {
//       console.log(result.status);
//       console.log(result.headers);
//       console.log(result.body)
//     });
// }

