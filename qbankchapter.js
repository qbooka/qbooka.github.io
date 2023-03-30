
function Start() {
    var url = "https://learning.motion.ac.in/motioneducation/api/user/UserSubjectOTS";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            //   console.log(xhr.responseText);
            var jsons = JSON.parse(xhr.responseText)
            // renderClassData(jsons)
            //   console.log(xhr.status);
            console.log(jsons["data"]['subject']);
            for (let i in jsons['data']['subject']) {
                var imageurl = jsons['data']['subject'][i]['icon']
                var title = jsons['data']['subject'][i]['sub_name']
                var subjectId = jsons['data']['subject'][i]['sub_id']
                let target = ` <div class="col-md-6 col-lg-4 col-xl-3" id="subd"><div class="chooseSubjects">
                <div class="image_wrapper">
                 <img src=${imageurl}>
                </div>
                <div class="text_content_wrapper">
                
                <button type="button" class="btn btn-outline-dark btn-sm" onclick=subjectRequest('${title}');>${title}</button>
                
             </div>
             </div>
             </div>
                `;
                document.querySelector("#chooseSubject").insertAdjacentHTML("beforeend", target)
                // console.log(i)
            }
        }
    };
    var data = '{"course_id":44,"class_id":3}';

    xhr.send(data);
//     document.getElementById('startButton').style.display = "none";

}
function aler() {
    alert('hii')
}
function subjectRequest(data) {
    document.getElementById('subTopicInner').style.display = "block";
    document.querySelector('#subTopicInner').innerHTML = ''
    document.getElementById('subSUbTopicInner').style.display = "none";
    document.querySelector('#subSUbTopicInner').innerHTML = ''

    var url = "https://learning.motion.ac.in/motioneducation/api/user/pyqSubjectWiseTopics";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            //   console.log(xhr.responseText);
            var jsons = JSON.parse(xhr.responseText)
            let target = ` <div class="pyqSbjTpcListBox">
    
        <div class="subject_name" >${data}</div>
      
         
           
           <div class="row" id="${data}" >
           </div>
           </div>
        </div>`;
            document.querySelector("#subTopicInner").insertAdjacentHTML("beforeend", target)
            for (let i in jsons['data']) {
                var topicName = jsons['data'][i]["topic_name"]
                // console.log(i)
                let target = `
        <div class="col-lg-6 adjust">
        <div class=" subject_topics" onclick=subtopic('${btoa_utf8(topicName)}','subTopicInner','${data}') >
            <div class="sbjct_tpc_name">${topicName}</div>
            <div class="arrow">
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAABHNCSVQICAgIfAhkiAAAAPFJREFUOE+V0z8KwjAUBvA+cPNiDhWcdPUAQv8QUOiSQUWntkdwEXRRdPAO4mF6gNL6JdDS2MSkXVrK92vyXl6Jcz4qioJ7nvfJsuyOu/WiMAy3SCUiSUSLNE2vNiXQDKFbE3SBJMJRFM3rur64QomGwhYNgQpyhT3kArXIBo3IABOc4/4v0kG8W7mgKc7w0RwNnpltewrAtByxvc2/RvyCJcBJzqhuOOM49quqenbGqgVaZAM95AIUFASBj0KNW+qWIWsaAuRK+Jcm6P3LVLSuUQIdgNbyC0RKl3RA5hhj47Isd4DvPM/PpmCvJpdgN/MFtOWlk9RXGjYAAAAASUVORK5CYII=" alt="arrow">
            </div>
        </div>
       </div>`
                document.querySelector("#" + data).insertAdjacentHTML("beforeend", target)





            }
            console.log(jsons)
        }
    };

    var data2 = '{"subject":"' + data + '"}';
    //  console.log(data2)

    xhr.send(data2);

}




function subtopic(topicName, divId, subjectName) {
    document.getElementById('subTopicInner').style.display = "none";
    document.getElementById('subSUbTopicInner').style.display = "block";
    // alert('hua')
    var tname = atob_utf8(topicName)
    var url = "https://learning.motion.ac.in/motioneducation/api/user/cpsTopicWiseSubTopicsNew";
    // console.log(tname)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            var jsons = JSON.parse(xhr.responseText)
            let target = ` <div class="pyqSbjTpcListBox">
          <a class="backBtn" onClick=backTochapters('${divId}','subSUbTopicInner')><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAYAAADNGCeJAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAE6ADAAQAAAABAAAADgAAAAC4HwOVAAAAnUlEQVQ4EWNgwAJ4eFREOVmljnCxSG/FIo1TiAldBmTQv5/f9jP8Z7D+z/ifH10eHx/FMJhB//8zaDMyMlxlZucKxKcZpxzIIC5WqSucLFL/QTSIj1MxPonBZxDQtYygWAMFNj6XE5RjZLjPwcNhiBIBBDURUkC18IJZNMINBMc0LCyIoDFi88uXO6+Z2DmdGBgZjjL+Z/xAhBlwJQDBJjiHEw14DAAAAABJRU5ErkJggg==" alt="backBtn"></a>
    
        <div class="subject_name" >${tname}</div>
      
         
           
           <div class="row" id="${tname.replace(/ +/g, '')}" >
           </div>
           </div>
        </div>`;
            document.querySelector("#subSUbTopicInner").insertAdjacentHTML("beforeend", target)
            for (let i in jsons['data']) {
                var SubtopicName = jsons['data'][i]["sub_topic_name"]
                // console.log(SubtopicName)
                let target = `
        <div class="col-lg-6 adjust">
        <div class=" subject_topics" onclick=testInstruction('${subjectName}','${topicName}','${btoa_utf8(SubtopicName)}') >
            <div class="sbjct_tpc_name">${SubtopicName}</div>
            <div class="arrow">
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAABHNCSVQICAgIfAhkiAAAAPFJREFUOE+V0z8KwjAUBvA+cPNiDhWcdPUAQv8QUOiSQUWntkdwEXRRdPAO4mF6gNL6JdDS2MSkXVrK92vyXl6Jcz4qioJ7nvfJsuyOu/WiMAy3SCUiSUSLNE2vNiXQDKFbE3SBJMJRFM3rur64QomGwhYNgQpyhT3kArXIBo3IABOc4/4v0kG8W7mgKc7w0RwNnpltewrAtByxvc2/RvyCJcBJzqhuOOM49quqenbGqgVaZAM95AIUFASBj0KNW+qWIWsaAuRK+Jcm6P3LVLSuUQIdgNbyC0RKl3RA5hhj47Isd4DvPM/PpmCvJpdgN/MFtOWlk9RXGjYAAAAASUVORK5CYII=" alt="arrow">
            </div>
        </div>
       </div>`
                document.querySelector("#" + (tname.replace(/ +/g, ''))).insertAdjacentHTML("beforeend", target)





            }
            console.log(jsons);
        }
    };
    // console.log(atob_utf8(topicName))
    var data = '{"topic_name":"' + tname + '"}';

    xhr.send(data);






}
function backTochapters(data1, data2) {
    document.getElementById(data1).style.display = "block";
    document.querySelector('#' + data2).innerHTML = '';
    document.getElementById(data2).style.display = "none";
}
function backFromInstruction(data1) {
    document.getElementById('navbar').style.display = "block"
    document.getElementById('subSUbTopicInner').style.display = "block"
    document.getElementById('instructionInner').style.display = "none"
    document.getElementById('subjectVIsibility').style.display = "block"
    // document.getElementById(data1).style.display = "block";
    document.querySelector('#instructionInner').innerHTML = '';
    // document.getElementById(data2).style.display = "none";
}
function forwardTo(data1, data2) {
    document.getElementById(data1).style.display = "block";
    document.querySelector('#' + data2).innerHTML = '';
    document.getElementById(data2).style.display = "none";
}


function testInstruction(subject, topicName, subTopicName) {
    document.getElementById('navbar').style.display = "none"
    document.getElementById('subSUbTopicInner').style.display = "none"
    document.getElementById('instructionInner').style.display = "block"
    document.getElementById('subjectVIsibility').style.display = "none"
    var url = "https://learning.motion.ac.in/motioneducation/api/user/cpsPaperInstructions";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);


    xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            var jsons = JSON.parse(xhr.responseText)
            var paperId = jsons["data"]['paper_id']
            console.log(jsons);
            var paperName = jsons["data"]['paper_name']
            var instImage = "https://quizmaster.motion.ac.in" + jsons["data"]["instructions_image"]
            const pre = ""
            const from = "instructionInner"
            let target = `
          <div class="instructionScreenBox">
                    <a class="backBtn" onClick=backFromInstruction('${from}')>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAYAAADNGCeJAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAE6ADAAQAAAABAAAADgAAAAC4HwOVAAAAnUlEQVQ4EWNgwAJ4eFREOVmljnCxSG/FIo1TiAldBmTQv5/f9jP8Z7D+z/ifH10eHx/FMJhB//8zaDMyMlxlZucKxKcZpxzIIC5WqSucLFL/QTSIj1MxPonBZxDQtYygWAMFNj6XE5RjZLjPwcNhiBIBBDURUkC18IJZNMINBMc0LCyIoDFi88uXO6+Z2DmdGBgZjjL+Z/xAhBlwJQDBJjiHEw14DAAAAABJRU5ErkJggg==" alt="backBtn"></a>
                        <div class="instruction_title">Instruction Screen</div>
                        <div class="instruction_detailBox">
                            <div class="examTime">
                                <div class="examTitle">${paperName}</div>
                            </div>
                            <div class="instructions">
                                <h3>Set of Instructions</h3>
                                <div class="instPoint">
                                    <div class="img">
                                        <img src="${instImage}" alt="instructions_image"></div>
                                        <p>This Section contains a set of questions for practice</p>
                                        <p>Users can go to previous question by clicking on the previous button</p>
                                        <p>Users can go to next question by clicking on the next button</p>
                                        <h6>Best of luck</h6>
                                    </div>
                                </div>
                                <div class="examTime">
                                    <div class="examTitle"> Attempts Left : 1</div>
                                    <div class="examDurations">Time Left to Attempt : 15151 hrs and 52 minutes</div>
                                </div>
                                <div class="startTestBtn">
                                    <button onClick= QuestionAnswer('${paperId}')>Start Test</button>
                                </div>
                        </div>
                </div>
          
          `
            document.querySelector('#instructionInner').insertAdjacentHTML("beforeend", target)
















            //   QuestionAnswer(paperId)
            //   console.log(xhr.responseText);
        }
    };

    var data = '{"subject":"' + subject + '","sub_topic_name":"' + atob_utf8(subTopicName) + '","topic_name":{"topic_name":"' + atob_utf8(topicName) + '"}}';

    xhr.send(data);




}
// QuestionAnswer()

function QuestionAnswer(paper_id) {
    document.getElementById('instructionInner').style.display = "none"
    // var url = "https://learning.motion.ac.in/motioneducation/api/user/cpsQuestionDetailsBySubTopic";
    var pid = "MTEN"
    // console.log(pid)
    var data = data;
    var url = "http://qbook.pythonanywhere.com?pid=" + pid
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);


    xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");

    xhr.setRequestHeader("Content-Type", "application/json");


    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            var jsons = JSON.parse(xhr.responseText)
            console.log(jsons);
            NoOfQUES = jsons['data'].length
            for (let i in jsons['data']) {
                // console.log()
                var question = jsons['data'][i]['q_text']
                var qno = jsons['data'][i]['qno']
                var qid = (jsons['data'][i]['qid'])
                // console.log(qid)
                var sectionId = jsons['data'][i]['sec_id']
                var sectionName = jsons['data'][i]['section_name']
                var answerType = jsons['data'][i]['answer_type']
                var type = jsons['data'][i]['type']
                var toughness = jsons['data'][i]['toughness']

                var html = question
                const parser = new DOMParser();
                var htmlDoc = parser.parseFromString(html, 'text/html');


                for (el of htmlDoc.querySelectorAll("img[src]")) {
                    if (el.src.includes("http")) {
                        var data = ""

                    } else {
                        if (el.src.includes("ckfinder")) {
                            el.src = "https://quizmaster.motion.ac.in/" + "ckfinder" + (el.src).split("ckfinder")[1];

                        }


                    }


                }

                if (i == 0) {
                    var class1 = "show"
                } else {
                    var class1 = "hide"
                }
                var string = htmlDoc.getElementsByTagName('html')[0].innerHTML;
                // console.log(i)
                let target = `
                <div class="sub_section_wrapper " id="${qno}">
                <div class="sub_sub_section_wrapper_2">
                <div class="text_content_wrapper">
                    <div class="typeLanguageWrapper"><span>Question type: ${type}</span></div>
                    <div class="questionBox" id="showQuestions"><span class="text_content">${qno}.</span><span style="display: block;"></span>
                    <div class="" id="${i}">
                      ${string}
                    </div>
                    </div>
                </div>
            </div>
            
            <div class="sub_sub_section_wrapper_3">
                <div class="single_select_option_collection_wrapper show">
                    <div class="row" id="${qid}" >
                        
        
                        </div>
                    </div>
                </div>
                
                </div>
            `
                // <div class="btn_wrapper"><button>Previous</button></div>
                document.querySelector('#allContainer').insertAdjacentHTML("beforeend", target)
                for (let x in jsons['data'][i]['option']) {
                    if (jsons['data'][i]['option'][x]['is_correct']=='1'){
                        var correctOption=jsons['data'][i]['option'][x]['option_id']
                    }
                }

                for (let x in jsons['data'][i]['option']) {
                    var option = jsons['data'][i]['option'][x]['option']
                    var correct=jsons['data'][i]['option'][x]['is_correct']
                    // console.log(correct)
                    var htmlOptin = option
                    // console.log(typeof(x))
                    // console.log(x+1)
                    var option_id = jsons['data'][i]['option'][x]['option_id']
                    const parser = new DOMParser();
                    var htmlDocOpt = parser.parseFromString(htmlOptin, 'text/html');
                    var optionValue = letterValue(parseInt(x) + 1)
                    for (al of htmlDocOpt.querySelectorAll("img[src]")) {
                        if (al.src.includes("http")) {

                            
                        } else {
                            if (al.src.includes("ckfinder")) {
                                al.src = "https://quizmaster.motion.ac.in/" + "ckfinder" + (al.src).split("ckfinder")[1];

                            }


                        }
                    }
                    // if (correct=="1"){
                    //     var levelId=option_id+"#c"
                    // }else{
                    //     var levelId=option_id+"#w"
                    // }
                    var levelId=option_id+"li"
                    var string2 = htmlDocOpt.getElementsByTagName('html')[0].innerHTML;
                    var name = "current_question_" + qno
                    let htmlta = `
                    <div class="col-lg-6">
                     <div class="single_select">
                       <input type="checkbox" id="${option_id}" name="current_question_${qno}" class="" onClick="optionClickHandler(this,'${levelId}','${qid}','${name}','${correctOption}')">
                         <label for="${option_id}" id="${levelId}"  class="single_option_wrapper">
                            <div class="option_initial">
                                <p class="text_content_2">${optionValue}.</p>
                            </div>
                            <div class="option_final">
                                <div class="text_content_3">
                                ${string2}
                                </div>
                            </div>
                        </label>
                     </div>
                    </div>
                    
                    
                    `
                    document.querySelector("[id='" + qid + "']").insertAdjacentHTML("beforeend", htmlta)


                }
                if (qno == "1") {
                    let html = `
                    <div class="sub_sub_section_wrapper_5">
                <div class="left_side_wrapper">
                  
                </div>
                <div class="right_side_wrapper">
                    <div class="btn_wrapper"><button onClick=nextButtonClick('${qno}','1','${NoOfQUES}','progressId')>Next</button></div>
                </div>
            </div>`
                    document.querySelector("[id='" + qno + "']").insertAdjacentHTML("beforeend", html)
                    document.getElementById(qno).style.display = "block"
                    UpdateProgressBar(qno, NoOfQUES, qno, "progressId")
                } else {
                    if (qno == NoOfQUES) {
                        let html = `
                    <div class="sub_sub_section_wrapper_5">
                <div class="left_side_wrapper">
                <div class="btn_wrapper"><button onClick=preButtonClick('${qno}','1','${NoOfQUES}','progressId')>Previous</button></div>
                  
                </div>
                <div class="right_side_wrapper">
                   
                </div>
            </div>`
                        document.querySelector("[id='" + qno + "']").insertAdjacentHTML("beforeend", html)
                        document.getElementById(qno).style.display = "block"

                    } else {
                        let html = `
                        <div class="sub_sub_section_wrapper_5">
                    <div class="left_side_wrapper">
                    <div class="btn_wrapper"><button onClick=preButtonClick('${qno}','1','${NoOfQUES}','progressId')>Previous</button></div>
                    </div>
                    <div class="right_side_wrapper">
                        <div class="btn_wrapper"><button onClick=nextButtonClick('${qno}','1','${NoOfQUES}','progressId')>Next</button></div>
                    </div>
                </div>`
                        document.querySelector("[id='" + qno + "']").insertAdjacentHTML("beforeend", html)
                        document.getElementById(qno).style.display = "none"
                    }


                }
            }
        }
    };

    var data = '{"paper_id":' + paper_id + '}';

    xhr.send(data);




}




function UpdateProgressBar(min, max, current, idToplace) {
    document.getElementById(idToplace).style.display = "block"
    document.querySelector("#" + idToplace).innerHTML = ''
    WidthIndecimal = current / (max - (min - 1))
    width = WidthIndecimal * 100
    let html = `
    <h4>Test Question progress Indicator</h4>
    <div class="ProgressBar_Line">
    <div class="progressBar progress">
    <div role="progressbar" class="progress-bar" aria-valuenow="${current}" aria-valuemin="${min}" aria-valuemax="${max}" style="width: ${width}%;">
    </div>
   
    <span style="left: ${width}%;">${current}</span></div>
    </div>
    <div class="questionPercentage"><span>${min}</span><span>${max}</span></div>
    
   `
        ;
    document.querySelector("#" + idToplace).insertAdjacentHTML("beforeend", html)


    // console.log("working")
}


function nextButtonClick(curentQnumber, min, max, idToplace) {
    document.getElementById(curentQnumber).style.display = "none"
    document.getElementById(parseInt(curentQnumber) + 1).style.display = "block"
    UpdateProgressBar(min, max, parseInt(curentQnumber) + 1, idToplace)

    //  console.log(curentQnumber)


}
function preButtonClick(curentQnumber, min, max, idToplace) {
    document.getElementById(curentQnumber).style.display = "none"
    document.getElementById(parseInt(curentQnumber) - 1).style.display = "block"
    UpdateProgressBar(min, max, parseInt(curentQnumber) - 1, idToplace)
    //  console.log(curentQnumber)


}
function isValidURL(u) {
    //A precaution/solution for the problem written in the ***note***
    if (u !== "") {
        if (!elm) {
            elm = document.createElement('input');
            elm.setAttribute('type', 'url');
        }
        elm.value = u;
        return elm.validity.valid;
    }
    else {
        return false
    }
}

function letterValue(str) {
    // console.log(typeof(str))
    var anum = {
        1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F"
    }
    // console.log(anum[1])
    // if(str.length== 1) return anum[str] || ' ';
    return anum[str]
}
// letterValue("2")

function QuestionUpdate() {
    // <div class="sub_sub_section_wrapper_2">
    //     <h2>Exam Test</h2>
    //     <div class="text_content_wrapper">
    //         <div class="typeLanguageWrapper"><span>Question type: Single Correct</span></div>
    //         <div class="questionBox" id="showQuestions"><span class="text_content">1.</span><span style="display: block;"></span>
    //             <div class="${class1}" id="${i}">
    //                 ${string}
    //             </div>

    //         </div>
    //     </div>
    // </div>
}
function OptionUpdate() {
    let target = `
    <div class="sub_sub_section_wrapper_3">
                <div class="single_select_option_collection_wrapper show">
                    <div class="row" id="df" >
                        <div class="col-lg-6">
                    <div class="single_select"><input type="checkbox" id="1806469" name="current_question_0">
                    <label
                            for="1806469" class="single_option_wrapper">
                            <div class="option_initial">
                                <p class="text_content_2">A.</p>
                            </div>
                            <div class="option_final">
                                <p class="text_content_3">

                        

                                </p>
                            </div>
                        </label></div></div>
                    </div>
               </div>
    </div>
    
    `

}

function QuestionTypeUpdate() {

}
function SectionUpdate() {

}
function SubjectUpdate() {

}



function OptionHandle(id){
    let arr = [];
    document.querySelector('#'+id).onchange = function(e) {
      if (this.querySelectorAll('option:checked').length <= 1) {
          arr = Array.apply(null, this.querySelectorAll('option:checked'));
      } else {
        Array.apply(null, this.querySelectorAll('option')).forEach(function(e) {
            e.selected = arr.indexOf(e) > -1;
        });
      }
    }
}

function optionClickHandler(checkbox,Oid,id,name,correctOption) {
    // console.log(correct)
    var checkboxes = document.getElementsByName(name)
    // if (checkbox.id==correctOption){
    //     className=" classCorrect"
    //     addClass(className,Oid)
    // }
    if (checkbox.id!==correctOption){
        className=" classWrong"
        addClass(className,Oid)
    }
    className=" classCorrect"
    addClass(className,correctOption+"li")
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
        item.disabled= true
    })
    
}

function addClass(className,id) {
    console.log(id)
    var v = document.getElementById(id);
    v.className += className;
}

// function addClass( classname, element ) {
//     var cn = element.className;
//     //test for existance
//     if( cn.indexOf( classname ) != -1 ) {
//         return;
//     }
//     //add a space if the element already has class
//     if( cn != '' ) {
//         classname = ' '+classname;
//     }
//     element.className = cn+classname;
// }

function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}
































function btoa_utf8(value) {
    return btoa(
        String.fromCharCode(
            ...new TextEncoder('utf-8')
                .encode(value)
        )
    );
}
// decode a string
function atob_utf8(value) {
    const value_latin1 = atob(value);
    return new TextDecoder('utf-8').decode(
        Uint8Array.from(
            { length: value_latin1.length },
            (element, index) => value_latin1.charCodeAt(index)
        )
    )
}
