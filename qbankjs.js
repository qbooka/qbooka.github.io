async function sendRequest(url, data, method) {
    // var url = 'https://learning.motion.ac.in/motioneducation/api/ots/get/freepaidspt/tests';
    var pid = "MTEN"
    console.log(pid)
    var data = data;
    var url = "http://qbook.pythonanywhere.com?pid=" + pid
    var response = await fetch(url, {
        method: 'GET',

    });

    return await response.text()
}

var testData = []
var subjects = []
var Questions = []
// var presentVIew = 10
var existOption = false


function QuestionAnswer(paper_id) {

    var url = "https://learning.motion.ac.in/motioneducation/api/user/cpsQuestionDetailsBySubTopic";
    var method = "Post"
    var data = '{"paper_id":9447}';
    (async () => {
        var text = await sendRequest(url, data, method)
        var jdata = JSON.parse(text)
        if (jdata['data'][0]['option'] !== null) {
            existOption = true
            console.log('option hai')
        }
        testData.push(jdata['data']);
        var subjectDAta = GetUniqueValue(testData[0], 'subject')
        subjects.push(subjectDAta)
        var smallObj = {}
        var spe = {}
        var test = ''
        var tests = ''
        for (let y in jdata['data']) {
            var Qid = jdata['data'][y]['qid']
            var subName = jdata['data'][y]['subject']
            var sectionName = jdata['data'][y]['section_name']
            var uni = (subName + sectionName).replace(/\s/g, "")
            if (y == 0) {
                test = subName
                tests = uni
                spe[subName] = Qid
                spe[uni] = Qid
                // alert(subName + "--->" + sectionName + "-->" + Qid)
            } else {
                if (subName !== test) {
                    test = subName
                    // alert("match found" + subName + "-->" + Qid)
                    spe[subName] = Qid

                }
                if (uni !== tests) {
                    tests = uni
                    spe[uni] = Qid
                    // alert("match found " + uni + "-->" + Qid)
                }
            }
        }
        for (let x in jdata['data']) {
            var Qid = jdata['data'][x]['qid']
            var subName = jdata['data'][x]['subject']
            // scount=parseInt(x)+1
            var sectionName = jdata['data'][x]['section_name']
            var uni = (subName + sectionName).replace(/\s/g, "")
            var type = jdata['data'][x]['type']
            var answertype = jdata['data'][x]['answer_type_id']
            
            var paperId = jdata['data'][x]['paper_id']
            var sections = GetUniqueValueExtra(jdata['data'], 'section_name', subName)
            // console.log(sections)

            var noOfq = jdata['data'].length
            var currentq = parseInt(x) + 1
            // console.log(typeof(currentq)+" "+currentq)
            var npOption = []
            var quesin = jdata['data'][x]['q_text']
            var html = quesin
            const parser = new DOMParser();
            var htmlDoc = parser.parseFromString(html, 'text/html');
            var elems = htmlDoc.getElementsByTagName("p");
            var qfromq=''
            if (htmlDoc.querySelectorAll("p").length == 5) {
                for (let i = 0; i < htmlDoc.querySelectorAll("p").length; i++) {

                    // console.log(htmlDoc.querySelectorAll("p")[i]);
                    try {
                        var singleOption=htmlDoc.querySelectorAll("p")[parseInt(i) + 1].outerHTML
                        var insideOption = {
                            'is_correct': jdata['data'][x]['option'][i]['is_correct'],
                            'is_user_correct_ans': jdata['data'][x]['option'][i]['is_user_correct_ans'],
                            'lang_id': 2,
                            'option': singleOption,
                            'option_id': jdata['data'][x]['option'][i]['option_id'],
                            'qid': jdata['data'][x]['option'][i]['qid']
                        }
                        npOption.push(insideOption)
                        // qfromq=htmlDoc.querySelectorAll("p")[0].outerHTML
                    } catch {
                        ''
                    }
                }
                var optionData = npOption
                var optionInQ=true
                // console.log(htmlDoc.querySelectorAll("p")[0])
                var quesin = htmlDoc.querySelectorAll("p")[0].outerHTML
                // console.log(quesin)
            }else {
                var optionData = jdata['data'][x]['option']
                var optionInQ=false

                // var quesin = jdata['data'][x]['q_text']
            }
            // console.log(npOption)
            var nextQsnId = jdata['data'][parseInt(x) + 1]
            var pre = jdata['data'][parseInt(x) - 1]
            // console.log(nextQsnId)
            var obj = {
                'subject': subName,
                'section_name': sectionName,
                'paperId': paperId,
                'total_Qs': noOfq,
                'current_Qs': currentq,
                'sections': sections,
                'uni_identity': spe,
                'subjects': subjects[0],
                'section_id': uni,
                'q_text': quesin,
                'type': type,
                'next_Qid': nextQsnId,
                'pre_Qid': pre,
                'answer_type_id': answertype,
                'option': optionData,
                'opt_inQ':optionInQ

            }
            smallObj[Qid] = obj


        }
        Questions.push(smallObj)
        console.log(Questions)
        renderQuestions()


    })()


 



}

function renderQuestions() {
    for (let i in Questions[0]) {
        // console.log(i)
        var question = Questions[0][i]['q_text']
        var qno = Questions[0][i]['current_Qs']
        var qid = (i)
        // console.log(qid)
        // var sectionId = jsons['data'][i]['sec_id']
        // var sectionName = jsons['data'][i]['section_name']
        // var answerType = jsons['data'][i]['answer_type']
        var type = Questions[0][i]['type']
        // var toughness = jsons['data'][i]['toughness']

        var html = question
        const parser = new DOMParser();
        var htmlDoc = parser.parseFromString(html, 'text/html');
        // for (el of htmlDoc.querySelectorAll("p")) {
        //    console.log(el)


        // }

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
            var class1 = "show"
        }
        var string = htmlDoc.getElementsByTagName('html')[0].innerHTML;
        // console.log(i)
        let target = `
        <div class="sub_section_wrapper " id="${qno}">
        <div class="sub_sub_section_wrapper_2">
        <div class="text_content_wrapper">
            <div class="typeLanguageWrapper"><span>Question type: ${type}</span></div>
            <div class="questionBox" id="showQuestions"><span class="text_content">${qno}.</span><span style="display: flex;"></span>
            <div class="${class1}" id="${i}">
              ${string}
            </div>
            </div>
        </div>
    </div>
    
   
    `
        // <div class="btn_wrapper"><button>Previous</button></div>
        document.querySelector('#allContainer').insertAdjacentHTML("beforeend", target)
        for (let x in Questions[0][i]['option']) {
            if (Questions[0][i]['option'][x]['is_correct'] == '1') {
                var correctOption = Questions[0][i]['option'][x]['option_id']
            }
        }

        for (let x in Questions[0][i]['option']) {
            var option = Questions[0][i]['option'][x]['option']
            // var correct = jsons['data'][i]['option'][x]['is_correct']
            // console.log(correct)
            var htmlOptin = option
            // console.log(typeof(x))
            // console.log(x+1)
            var option_id = Questions[0][i]['option'][x]['option_id']
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
            var levelId = option_id + "li"
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
    //     if (qno == "1") {
    //         var NoOfQUES = Questions[0][i]['total_Qs']
    //         let html = `
    //         <div class="sub_sub_section_wrapper_5">
    //     <div class="left_side_wrapper">
          
    //     </div>
    //     <div class="right_side_wrapper">
    //         <div class="btn_wrapper"><button onClick=nextButtonClick('${qno}','1','${NoOfQUES}','progressId')>Next</button></div>
    //     </div>
    // </div>`
    //         document.querySelector("[id='" + qno + "']").insertAdjacentHTML("beforeend", html)
    //         document.getElementById(qno).style.display = "block"
    //         UpdateProgressBar(qno, NoOfQUES, qno, "progressId")
    //     } else {
    //         if (qno == NoOfQUES) {
    //             let html = `
    //         <div class="sub_sub_section_wrapper_5">
    //     <div class="left_side_wrapper">
    //     <div class="btn_wrapper"><button onClick=preButtonClick('${qno}','1','${NoOfQUES}','progressId')>Previous</button></div>
          
    //     </div>
    //     <div class="right_side_wrapper">
           
    //     </div>
    // </div>`
    //             document.querySelector("[id='" + qno + "']").insertAdjacentHTML("beforeend", html)
    //             document.getElementById(qno).style.display = "none"

    //         } else {
    //             let html = `
    //             <div class="sub_sub_section_wrapper_5">
    //         <div class="left_side_wrapper">
    //         <div class="btn_wrapper"><button onClick=preButtonClick('${qno}','1','${NoOfQUES}','progressId')>Previous</button></div>
    //         </div>
    //         <div class="right_side_wrapper">
    //             <div class="btn_wrapper"><button onClick=nextButtonClick('${qno}','1','${NoOfQUES}','progressId')>Next</button></div>
    //         </div>
    //     </div>`
    //             document.querySelector("[id='" + qno + "']").insertAdjacentHTML("beforeend", html)
    //             document.getElementById(qno).style.display = "block"
    //         }


    //     }
    }



}
{/* paper_id = '3350'
QuestionAnswer(paper_id) */}


function GetUniqueValue(data, valueName) {
    var array = new Array(); // or the shortcut: = []
    for (i in data) {
        // console.log(data[i][valueName])
        var toPush = data[i][valueName]
        array.push(toPush);
    }
    var uniqueVA = [...new Set(array)]
    // console.log(uniqueVA)
    // array.push (  {"cool":"34.39","also cool":"45459"} );


    return uniqueVA


}
function GetUniqueValueExtra(data, valueName, extraCondi) {
    var array = new Array(); // or the shortcut: = []
    for (i in data) {
        // console.log(data[i][valueName])
        if (data[i]['subject'] == extraCondi) {
            var toPush = data[i][valueName]
            array.push(toPush);
        }
        // var toPush=data[i][valueName]
        // array.push ( toPush );
    }
    var uniqueVA = [...new Set(array)]
    // console.log(uniqueVA)
    // array.push (  {"cool":"34.39","also cool":"45459"} );


    return uniqueVA


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



function OptionHandle(id) {
    let arr = [];
    document.querySelector('#' + id).onchange = function (e) {
        if (this.querySelectorAll('option:checked').length <= 1) {
            arr = Array.apply(null, this.querySelectorAll('option:checked'));
        } else {
            Array.apply(null, this.querySelectorAll('option')).forEach(function (e) {
                e.selected = arr.indexOf(e) > -1;
            });
        }
    }
}

function optionClickHandler(checkbox, Oid, id, name, correctOption) {
    // console.log(correct)
    var checkboxes = document.getElementsByName(name)
    // if (checkbox.id==correctOption){
    //     className=" classCorrect"
    //     addClass(className,Oid)
    // }
    if (checkbox.id !== correctOption) {
        className = " classWrong"
        addClass(className, Oid)
    }
    className = " classCorrect"
    addClass(className, correctOption + "li")
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
        item.disabled = true
    })

}

function addClass(className, id) {
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

function removeClass(classname, element) {
    var cn = element.className;
    var rxp = new RegExp("\\s?\\b" + classname + "\\b", "g");
    cn = cn.replace(rxp, '');
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
