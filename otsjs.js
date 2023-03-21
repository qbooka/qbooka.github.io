function request() {



  const query = `
    query PathAction($orderBy_0: [subjectTopicsConnectionOrder]) {
        root {
          ...F7
        }
      }
      
      fragment F0 on Topic {
        id
        name
      }
      
      fragment F1 on Course {
        id
        name
        description
        hasDoubt
        _subjects1JSbcz: subjects(first: 15) {
          edges {
            node {
              id
              name
              _topics2xIjG5: topics(first: 200, orderBy: $orderBy_0) {
                edges {
                  node {
                    id
                    name
                    ...F0
                  }
                  id
                  cursor
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              }
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
      
      fragment F2 on Question {
        id
      }
      
      fragment F3 on Question {
        id
        question
        questionNum
        questionTitle
        explanationExists
        options @include(if: true)
        _ncertSentences2ASk0H: ncertSentences(first: 1) {
          total
        }
        _videoSentences47vAf0: videoSentences(first: 1) {
          total
        }
        correctOptionIndex
        ncert
        explanation
        paidAccess
        explanationWithAudio
        explanationWithoutAudio
        studentNote {
          id
          note
          studentAttachImgUri
        }
        bookmarkQuestion @include(if: true) {
          id
          questionId
          userId
        }
        _subTopics1oRyyE: subTopics(first: 10) @include(if: true) {
          edges {
            node {
              id
              name
            }
            id
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        userAnswer @include(if: true) {
          id
          userAnswer
          durationInSec
          incorrectAnswerReason
          incorrectAnswerOther
        }
        _questionDoubts24kVgG: questionDoubts(first: 1, hasAnswer: true) {
          edges {
            node {
              id
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        _hints1FhFeX: hints(first: 10) {
          edges {
            node {
              id
              hint
              position
              hintVideoLink {
                id
                name
                url
                time
                video {
                  id
                  name
                  _topics3kIoNJ: topics(first: 1) {
                    edges {
                      node {
                        id
                        name
                        subject {
                          id
                          name
                        }
                      }
                      id
                      cursor
                    }
                    pageInfo {
                      hasNextPage
                      hasPreviousPage
                    }
                  }
                }
              }
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        analytics {
          correctPercentage
          id
        }
        _questionDetails3wxeRf: questionDetails(last: 1) @include(if: true) {
          edges {
            node {
              year
              exam
              id
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        ...F2
      }
      
      fragment F4 on User {
        id
      }
      
      fragment F5 on User {
        role
        blockedUser
        userCourses {
          total
        }
        id
        ...F4
      }
      
      fragment F6 on Root {
        me {
          id
          role
          blockedUser
          phoneConfirmed
          profile {
            userId
            displayName
            picture
            id
          }
          userCourses {
            total
          }
        }
      }
      
      fragment F7 on Root {
        config {
          inQuesAdvert
          staticAssetsUrlPrefix
        }
        _course2mdoBp: course(id: "Q291cnNlOjg=") {
          id
          name
          description
          hasDoubt
          _subjects1JSbcz: subjects(first: 15) {
            edges {
              node {
                id
                name
                topics {
                  total
                }
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
          ...F1
        }
        _test2jBHYP: test(id: "VGVzdDoxODU0MTYy") @include(if: true) {
          id
          name
          description
          pdfURL
          numQuestions
        }
        _allQuestionscpV9D: allQuestions(courseId: "Q291cnNlOjg=", first: 10, strict: false, pastYear: false, questionType: [], masterclassType: [], questionSource: [], questionLevel: [], testId: "1854162", bookmark: false, incorrect: false, ncert: false) {
          totalCount
          edges {
            node {
              id
              questionNum
              questionTitle
              options
              explanationText
              correctOptionIndex
              _questionDetails3wxeRf: questionDetails(last: 1) {
                edges {
                  node {
                    id
                    year
                    exam
                  }
                  cursor
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              }
              _topics3kIoNJ: topics(first: 1) {
                edges {
                  node {
                    id
                    name
                  }
                  id
                  cursor
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              }
              ...F3
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        _course3Hgr1E: course(id: "Q291cnNlOjE4NzE=") {
          name
          fee
          discountedFee
          id
        }
        _course1Qmqub: course(id: "Q291cnNlOjA=") {
          name
          fee
          discountedFee
          id
        }
        _allQuestions1QQVDF: allQuestions(courseId: "Q291cnNlOjg=", first: 2000, strict: true, pastYear: false, questionType: [], masterclassType: [], questionSource: [], questionLevel: [], bookmark: false, testId: "1854162", ncert: false, removeHooks: true) @include(if: true) {
          edges {
            node {
              id
              questionNum
              questionTitle
              correctOptionIndex
              userAnswer {
                userAnswer
                id
              }
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        me {
          id
          blockedUser
          doubtCourses {
            total
          }
          userCourses {
            total
          }
          ...F5
          ...F4
        }
        ...F6
      }
      
    
    
    
    
    `

    ;
    // const url = 'http://qbook.pythonanywhere.com/';

// const response = await fetch(url);

// const text = await response.text();

// console.log(text);
  fetch("https://qbook.pythonanywhere.com?pid=9447", {
    method: "GET",
    // headers: {
    //   "accept": "*/*",
    //   "accept-language": "en-US,en;q=0.9",
    //   "content-type": "application/json",
    //   "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    //   "sec-ch-ua-mobile": "?0",
    //   "sec-ch-ua-platform": "\"Windows\"",
    //   "sec-fetch-dest": "empty",


    // },

    // body: JSON.stringify({ query })

  }).then(res => {
    return res.json();
  }).then(data => {
    //   hideLoader();
    console.log(data);
  })
}
// function getPosts(url) {
//     showLoader();
//     fetch('https://ugandafilmtalks.com/wp-json/wp/v2/posts?page=1').then(res => {
//       return res.json();
//     }).then(data => {
//       hideLoader();
//       generateHTML(data);
//     }).catch(err => {
//       console.log('There was an error while processing your request: ' + err)
//     })
//   }
// request()

async function sendRequest(url, data, method) {
  // var url = 'https://learning.motion.ac.in/motioneducation/api/ots/get/freepaidspt/tests';
  var pid="MISLEN"
  console.log(pid)
  var data = data;
  var url="https://qbook.pythonanywhere.com?pid="+pid
  var response = await fetch(url, {
    method: 'GET',
    headers: {
   
//        'mode': "cors",
      
        'authority': 'qbooka.github.io',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-US,en;q=0.9',
        'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    
  
  },
});
    // body: data,


  // var text =await response.text();
  // console.log();

  return await response.text()
  // 




}

var testData = []
var subjects = []
var Questions = []
// var presentVIew = 10
var existOption = false
function start() {

  var url = 'https://qbooka.github.io/p9447.json';
  // var url = 'https://learning.motion.ac.in/motioneducation/api/user/cpsQuestionDetailsBySubTopic';
  var method = "Post"
  var data = '{"paper_id":9447}';
  (async () => {
    showLoader()
    var text = await sendRequest(url, data, method)
    var jdata = JSON.parse(text)
    hideLoader()
    console.log(jdata)
    if (jdata['data'][0]['option'] !== null) {
      existOption = true
      console.log('option hai')
    }

    testData.push(jdata['data']);
    var subjectDAta = GetUniqueValue(testData[0], 'subject')
    subjects.push(subjectDAta)

    // for(let x in jdata['data']){
    // console.log(subjects)
    // }
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




    //    var scount=1
    for (let x in jdata['data']) {
      var Qid = jdata['data'][x]['qid']
      var subName = jdata['data'][x]['subject']
      // scount=parseInt(x)+1
      var sectionName = jdata['data'][x]['section_name']
      var uni = (subName + sectionName).replace(/\s/g, "")
      var type = jdata['data'][x]['type']
      var answertype = jdata['data'][x]['answer_type_id']
      var quesin = jdata['data'][x]['q_text']
      var paperId = jdata['data'][x]['paper_id']
      var sections = GetUniqueValueExtra(jdata['data'], 'section_name', subName)
      // console.log(sections)
      var optionData = jdata['data'][x]['option']
      var noOfq = jdata['data'].length
      var currentq = parseInt(x) + 1
      // console.log(typeof(currentq)+" "+currentq)

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
        'option': optionData

      }
      smallObj[Qid] = obj


    }
    Questions.push(smallObj)
    // console.log(spe)
    console.log(Questions)
    renderSubjectName(jdata)
  })()





}
start()
function showLoader() {
  var element = document.getElementById('root');
  let html = `
    <section class="loader_pop_up_wrapper">
    <div class="loader_pop_up_inner_wrapper">
        <div aria-busy="true" class=""><svg width="150" height="150" viewBox="0 0 38 38"
                xmlns="http://www.w3.org/2000/svg" aria-label="audio-loading">
                <defs>
                    <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                        <stop stop-color="#6d48ef" stop-opacity="0" offset="0%"></stop>
                        <stop stop-color="#6d48ef" stop-opacity=".631" offset="63.146%"></stop>
                        <stop stop-color="#6d48ef" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)">
                        <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="#6d48ef" stroke-width="2">
                            <animateTransform attributeName="transform" type="rotate" from="0 18 18"
                                to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
                        </path>
                        <circle fill="#fff" cx="36" cy="18" r="1">
                            <animateTransform attributeName="transform" type="rotate" from="0 18 18"
                                to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </g>
                </g>
            </svg></div>
    </div>
</section>
            `
    ;
  document.querySelector("#root2").insertAdjacentHTML("beforeend", html)
  // element.classList.add('show');
}

function hideLoader() {
  document.querySelector("#root2").innerHTML = ''
}
function renderSubjectName(data) {
  console.log(data['data'][0])
  var subjects1 = subjects[0]
  var Qid = data['data'][0]['qid']
  var specialData = Questions[0]
  var allData = specialData[Qid]
  var subjectName = allData['subject']
  var sectionName = allData['section_name']
  var currentQsn = allData['current_Qs']
  var totalQsn = allData['total_Qs']
  var subjectQsn = allData['uni_identity']
  var min = '1'
  var idToplace = 'progressBAR'
  presentVIew = Qid
  renderModal()
  for (i in subjects1) {
    sName = subjects1[i]
    var Qidf = subjectQsn[sName]
    if (i == 0) {
      let html = `
            <div class="single_select_subject"><input type="radio" id="${sName}" name="subject"
            value="${sName}" checked="" onclick="UpdateEverything(this,'${Qidf}')" ><label for="${sName}" >${sName}</label></div>
            `
        ;
      document.querySelector("#subjectsName").insertAdjacentHTML("beforeend", html)
      renderSection(this, sName, Qid)
      createQuestion(Qid.toString())
      UpdateProgressBar(min, totalQsn, currentQsn, idToplace)
      nextPrev(Qid)
    } else {
      let html = `
            <div class="single_select_subject"><input type="radio" id="${sName}" name="subject"
            value="${sName}"  onclick="UpdateEverything(this,'${Qidf}')" ><label for="${sName}" >${sName}</label></div>
            `
        ;
      document.querySelector("#subjectsName").insertAdjacentHTML("beforeend", html)
    }






  }

  // renderSection(data)


}

function renderSection(thi, sname, Qid) {
  document.querySelector("#sectionName").innerHTML = ''
  var specialData = Questions[0]
  var allData = specialData[Qid]
  var sectionName = allData['section_name']
  var SectionQsn = allData['uni_identity']
  for (let i in allData['sections']) {
    var diffSect = allData['sections'][i]
    var MAkeNAme = allData['subject'] + ((allData['sections'][i]).replace(/\s/g, ""))
    // var sName = SectionQsn
    var Qidf = SectionQsn[MAkeNAme]
    if (allData['sections'][i] == sectionName) {
      let html = `
            <div class="single_select_subject"><input type="radio" id="${MAkeNAme}" name="section"
            value="${diffSect}" checked="" onClick="UpdateEverything(this,'${Qidf}')" ><label for="${MAkeNAme}">${diffSect}</label></div>
        
                    `
        ;
      document.querySelector("#sectionName").insertAdjacentHTML("beforeend", html)
    } else {

      let html = `
            <div class="single_select_subject"><input type="radio" id="${MAkeNAme}" name="section"
            value="${diffSect}" onClick="UpdateEverything(this,'${Qidf}')"  ><label for="${MAkeNAme}">${diffSect}</label></div>
        
                    `
        ;
      document.querySelector("#sectionName").insertAdjacentHTML("beforeend", html)


    }
  }

  // currentViewid=Qid

  // console.log(n)
  // document.querySelector("#sectionName").innerHTML = ''
  // // var subjects = subjects[0]
  // var id = thi.id
  // for (i in subjects[0]) {
  //     try {
  //         if (subjects[0][i] == sname) {
  //             document.getElementById(sname).disabled = true;
  //         } else {
  //             document.getElementById(subjects[0][i]).disabled = false;
  //         }

  //     } catch (e) {

  //     }


  // }

  // var data = (testData[0])
  // var extraCondi = sname
  // var sections = GetUniqueValueExtra(data, 'section_name', extraCondi)
  // // console.log(sections)
  // for (x in sections) {
  //     var sectionName = sections[x]
  //     // console.log(sectionName)
  //     var sectionNameID = (sname + sectionName).replace(/\s/g, "");
  //     if (x == 0) {

  //         let html = `
  //     <div class="single_select_subject"><input type="radio" id="${sectionNameID}" name="section"
  //     value="${sectionName}" checked="" ><label for="${sectionNameID}">${sectionName}</label></div>

  //             `
  //             ;
  //         document.querySelector("#sectionName").insertAdjacentHTML("beforeend", html)
  //     } else {

  //         let html = `
  //         <div class="single_select_subject"><input type="radio" id="${sectionNameID}" name="section"
  //         value="${sectionName}" ><label for="${sectionNameID}">${sectionName}</label></div>

  //                 `
  //             ;
  //         document.querySelector("#sectionName").insertAdjacentHTML("beforeend", html)

  //     }

  // }







}
function autoScroll() {
  var div = document.getElementById("scrolele");
  div.style.display = '';
  var top = div.offsetTop;
  if (window.scrollTop != top)
    window.scrollTo(0, top);
}
function loadAutoScroll() {
  autoScroll();
  window.onload = null;
  return false;
}
function scrollAutoScroll() {
  autoScroll();
  window.setTimeout(function () { window.onscroll = null; }, 100);
  return false;
}
window.onload = loadAutoScroll;
window.onscroll = scrollAutoScroll;
function disableScroll() {
  // Get the current page scroll position
  scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
  window.onscroll = function () { };
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
// checkbox,Oid,id,name,correctOption
function onlyOne(checkbox, id) {
  // console.log(checkbox)
  var checkboxes = document.getElementsByName(checkbox)
  checkboxes.forEach((item) => {
    // console.log(item)
    if (item.id !== id) item.checked = false
  })
}

function nextPrev(id) {
  document.querySelector("#nextContainer").innerHTML = ''
  var specialData = Questions[0]
  var allData = specialData[id]

  var sectionName = allData['section_name']
  var currentQsn = allData['current_Qs']
  var totalQsn = allData['total_Qs']
  var sections = allData['sections']
  if (allData['next_Qid'] == null) {
    var pre = allData['pre_Qid']['qid']
    let html = `
        <div class="left_side_wrapper">
                                <div class="btn_wrapper"><button onClick="UpdateEverything(this,'${pre}')">Previous</button></div>
                            </div>
                            <div class="right_side_wrapper"></div>
       `
      ;
    document.querySelector("#nextContainer").insertAdjacentHTML("beforeend", html)

  } else {
    if (allData['pre_Qid'] == null) {
      var next = allData['next_Qid']['qid']
      let html = `
            <div class="left_side_wrapper"></div>
            <div class="right_side_wrapper">
                                <div class="btn_wrapper"><button onClick="UpdateEverything(this,'${next}')" >Next</button></div>
                            </div>
    
           `
        ;
      document.querySelector("#nextContainer").insertAdjacentHTML("beforeend", html)

    } else {
      var pre = allData['pre_Qid']['qid']
      var next = allData['next_Qid']['qid']
      let html = `
        <div class="left_side_wrapper">
                                <div class="btn_wrapper"><button onClick="UpdateEverything(this,'${pre}')">Previous</button></div>
                            </div>
                            <div class="right_side_wrapper">
                                <div class="btn_wrapper"><button onClick="UpdateEverything(this,'${next}')" >Next</button></div>
                            </div>
        
       `
        ;
      document.querySelector("#nextContainer").insertAdjacentHTML("beforeend", html)

    }

  }




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

function renderModal() {
  var data = (testData[0])
  for (i in data) {
    // var questionNumber= data[i]['display_number']
    var Question = data[i]['q_text']
    var Qid = data[i]['qid']
    var PaperId = data[i]['paper_id']
    var sectionName = data[i]['section_name']
    var subjectName = data[i]['subject']
    var type = data[i]['type']
    if (i == 0) {
      var currentViewm = " current_lblB"
    } else {
      var currentViewm = ""
    }
    let html2 = `
         <li class="col px-0 list-group-item" style="border: 0px;">
         <a class="unanswered_lblB ${currentViewm} btn text-left font-weight-light mx-1" data-bs-dismiss="modal" aria-label="Close" id="${Qid}B" onClick="UpdateEverything(this,'${Qid}')">${(parseInt(i) + 1)}</a></li>
         `
    document.querySelector("#gridDisplay").insertAdjacentHTML("beforeend", html2)
    var html = Question
    let parser = new DOMParser();
    var htmlDoc = parser.parseFromString(html, 'text/html');
    for (el of htmlDoc.querySelectorAll("img[src]")) {
      if (el.src.includes("http")) {
        var dadas = ""

      } else {
        if (el.src.includes("ckfinder")) {
          el.src = "https://quizmaster.motion.ac.in/" + "ckfinder" + (el.src).split("ckfinder")[1];

        }


      }


    }
    var string = htmlDoc.getElementsByTagName('html')[0].innerHTML;
    if (i == 0) {
      var currentView = " current_lbl"
    } else {
      var currentView = ""
    }
    let qhtml = `
        <div class="single_question_number_wrapper">
        <label class="unanswered_lbl ${currentView}" id="${Qid}Q" onClick="UpdateEverything(this,'${Qid}')">
                            <div class="questionBox">${(parseInt(i) + 1)}. <div class="QBox">
                                   ${string}
                                </div>
                            </div><img class="arrow"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAAABHNCSVQICAgIfAhkiAAAAKxJREFUKFNjZGBgsALiTCAuBuJXQIwTMAJlFgNxDBCfBmIffBpAisWAeAsQmxLSAFIMAkRpgCkmSgOyYoIa0BXj1YBNMU4NuBSja3gHFPDFpxikIQiIVwMxExCvxafYCRr+nED6JBBb4FKMrHA+UGESyBpsirEqxKYYp0J0xXgVIismqBCm2BXI2AjEIF/DPQNNYCgUyIMLgDgeSidiUwQTAykWgQb+LHwKQXIA/Wcr+uJAS4wAAAAASUVORK5CYII=">
                        </label></div>
        `

    document.querySelector('#leftQuestions').insertAdjacentHTML("beforeend", qhtml)

  }







}
function getOffset() {
  var el = document.querySelector('#progressBAR')

  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
function ChangeQcss(id, OldcssName) {
  // var data = (testData[0])
  // console.log(data[parseInt(i)])
  // // var PaperId = data[i]['paper_id']
  // var sectionName = data[i]['section_name']
  // var subjectName = data[i]['subject']
  // console.log(subjectName)
  // var type = data[i]['type']
  // UpdatateSubject(subjectName)
  // // console.log(th.classList)
  // var idForQ = th.id
  // console.log(presentVIew)
  // console.log(id)
  var idForM = id + "Q"
  var cssName = " current_lbl"
  // console.log(currentViewid+"tttt")
  // if(id !== presentVIew){
  //     removeClass(cssName,presentVIew+"Q")
  //     presentVIew=id

  // }


  // classNameQ = " current_lbl"
  // classNameB = " current_lblB"

  // addClass(cssName, idForQ)
  addClass(cssName, idForM)
}
function ChangeBcss(id, OldcssNAme) {
  // var oldclassName = th.classList["0"]
  var newClassName = ' current_lblB'
  // // console.log(newClassName)
  // replaceClass(newClassName, oldclassName, th.id)
  // // console.log(th.classList)
  // var idForM = th.id
  var idForQ = (id) + "B"
  // classNameQ = " current_lbl"
  // classNameB = " current_lblB"
  // scrool(idForQ)
  // addClass(classNameQ, idForQ)
  addClass(newClassName, idForQ)
}




function scrool(element_id) {
  disableScroll()
  // console.log(getAbsPosition("progressBAR"))
  // console.log("scrool id" + " " + element_id)

  // var element = this.element.nativeElement;
  var element = document.getElementById(element_id);
  // //  var scrolling_parent = element_to_show.parentElement;
  element.scrollIntoView({ behavior: 'smooth', block: "center", inline: 'start' })
  enableScroll()
}

function UpdatateSubject(suname) {
  var sData = subjects[0]
  var find = document.getElementById(suname);
  find.checked = true;
  // var find = document.getElementById(sname);
  // console.log(suname)



}
function UpdateSection(Qid) {
  document.querySelector("#sectionName").innerHTML = ''
  var specialData = Questions[0]
  var allData = specialData[Qid]
  var sectionName = allData['section_name']
  var SectionQsn = allData['uni_identity']
  for (let i in allData['sections']) {
    var diffSect = allData['sections'][i]
    var MAkeNAme = allData['subject'] + ((allData['sections'][i]).replace(/\s/g, ""))
    // var sName = SectionQsn
    var Qidf = SectionQsn[MAkeNAme]
    if (allData['sections'][i] == sectionName) {
      let html = `
            <div class="single_select_subject"><input type="radio" id="${MAkeNAme}" name="section"
            value="${diffSect}" checked="" onClick="UpdateEverything(this,'${Qidf}')" ><label for="${MAkeNAme}">${diffSect}</label></div>
        
                    `
        ;
      document.querySelector("#sectionName").insertAdjacentHTML("beforeend", html)
    } else {

      let html = `
            <div class="single_select_subject"><input type="radio" id="${MAkeNAme}" name="section"
            value="${diffSect}" onClick="UpdateEverything(this,'${Qidf}')"  ><label for="${MAkeNAme}">${diffSect}</label></div>
        
                    `
        ;
      document.querySelector("#sectionName").insertAdjacentHTML("beforeend", html)


    }
  }



}



function addClass(className, id) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  // console.log(id)
  // console.log(className)
  var v = document.getElementById(id);
  // console.log((v.className))

  v.className += className;
}
function removeClass(clas, id) {

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

  var v = document.getElementById(id);
  // console.log(v.classList)
  v.classList.remove(clas)
  // console.log(v.classList)
  // v.className += className;
}
function replaceClass(oldclassName, newClassName, id) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  var v = document.getElementById(id);
  // v.classList.remove(className)
  v.classList.replace(oldclassName.replace(/\s/g, ""), newClassName.replace(/\s/g, ""));
}
var checked = false

function UpdateEverything(thi, QuestionID) {
  // 

  var specialData = Questions[0]
  var allData = specialData[QuestionID]
  var subjectName = allData['subject']
  var sectionName = allData['section_name']
  var currentQsn = allData['current_Qs']
  var totalQsn = allData['total_Qs']
  var sections = allData['sections']
  var min = '1'
  var idToplace = 'progressBAR'
  var cssNAme = thi.classList[0]
  // console.log(cssNAme)
  // 'subject': subName,
  // 'section_name': sectionName,
  // 'paperId': paperId,
  // 'total_Qs': noOfq,
  // 'current_Qs': currentq,
  // 'sections': sections,
  // 'uni_identity': spe,
  // 'subjects': subjects[0],
  // 'section_id': uni
  UpdateProgressBar(min, totalQsn, currentQsn, idToplace)
  UpdatateSubject(subjectName)
  UpdateSection(QuestionID)
  scrool(QuestionID + "Q")
  // scrool(QuestionID+"B")
  ChangeQcss(QuestionID, cssNAme)
  ChangeBcss(QuestionID, cssNAme)
  // upDateAllcolor(QuestionID)
  checked = false
  reviewColor()
  removeCurrentView(cssNAme, QuestionID)

  // document.querySelector("#optiondiv").innerHTML = ''

  createQuestion(QuestionID)
  nextPrev(QuestionID)
  upDateAllANswerColor()
  upDateAllSkipedColor(QuestionID)




}
function createQuestion(id) {
  // checked=false
  document.querySelector("#qsndiv").innerHTML = ''
  createOption(id)
  var specialData = Questions[0]
  var allData = specialData[id]
  var subjectName = allData['subject']
  var sectionName = allData['section_name']
  var currentQsn = allData['current_Qs']
  var totalQsn = allData['total_Qs']
  var subjectQsn = allData['uni_identity']
  var question = allData['q_text']
  var type = allData['type']
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
  var string = htmlDoc.getElementsByTagName('html')[0].innerHTML;
  if (reviewed.indexOf(id) == -1) {
    var src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABkvfSiAAACfUlEQVRIDb1WPWgUQRR+b/bWWCpH1jtjEwTTCRaCP4hVQEFB8adQUMHKyjooFiJYWFlZScBCwUS0FKwkhYKFYuUVYmGSTS4cWHrZ233ON3e7t7fZHe/WMwN3+36+976d2Zl5j2mI0Ww2D4WBnCOWEyI8xUx7ESZCq8yyQsJLjstvPM/7/Ld0bAP4fvOiRPJAp56x4fo+brDiu/W6t9i3DUq5hGtrv6YlbD8XkiOD8OE0Jv7IzsSVWm3Xj2zEFkLf3zgpUfhKA6tZ8Ih6i5VzoV6ffJ+OGyAEGUn0TkTcNKiszMwBsZpNkyaEWMYo/P1JJ//XmWXfr6WcnYfj5VWxF9/sP5AhfbWX21CZGXZ3Y7RgLJm/l49d+v41ea+Md1DdfzCiy7eDQWNPY6UuYfdWoHe3fi7OkM09bec7M9aHNycylr7a41hUONTDn7N+gtElmQGXMjfI6NGlIsClcF2Vii4TpLkU7sYysWViwKXii7hMglFjwDXcfh81czFe9JLSarE/3xO0mYLNfJ/Nqrn8CuqZFg7YgGnfxrKi10/M8aXztzo0uS9Ku60yuBSKpxWVcn5ZcujFI5eOnwnNDzJsQw/NVUGl7gRyzxaEJXz7zKH1Zaarc5tUrYmB16YjM9uf35hOXQttKYwPXKrbFnDDhp6/71JFF6zrd4KEDHgQwwYfMPbBDXCZXYq2oAi82xM6djak0zc65O7YioINPmCALRoxR1IP/ZX1D2VbiiKS2I6Woz615yj05ByiB9F6KwaN8dnq5TYpE0JUZPQgpi0YExtyIWdc7ZE2IYRieg/dg2hxHDNtZfsZcCTfEEo8trVNjEnx3LZGOE0KeZyt/h/gqAEydACjTgAAAABJRU5ErkJggg=="
  } else {
    src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABkvfSiAAACYElEQVRIDb2WP2gUQRTGv7e5qBCEk3RJlcrCykLRQqwsthCEaBOsbKxOLKwkKILYqIVeZWMhIoIKAYsVUgQRVFQQBAtFCIg5QTk8OI542ZzjfLOZYW+z3u3cHg7c7fx53/vtzM7Me4ICpRb+2h8AJ5SSI0owC6VmjEykIQprIurFH2CpHu15P8ydDDKoha2T2uFVBbV3kJ0dE8gn/UKL9aj62PZln7nAC8dbcxubeKCUOpQVFGmLyOsdFSzceFpdzdpvA9bC9lGo3hNATWeN/drShEzM16Pdz9O6PuAWbFnDJtNGo9cl1tBjaagDchm7Md6Wn1n29aS5cxIH7PLqzZcUfrPxw+hbTSe+E46ZIXej3uqPkq7+/7NXprDvYLEV/vgmxp3LnX4HtiVyirvXzJBb3/Znn0Vh1A2ytYyAh7roOcu+jE+bDHOB8AbxEZaxJSvgdVXGiY+WrMDcjT6qErZkBe4iLuGosFRf+u4cFhaVMBSBCqBDTAkfXlIF+R4wnnmpShiTFTB4+vjorivcu94xP9Z9ClkVRmotulRE2Fjt4e61Dn580ypdvn5u48zFKczMTRSRg6yAaQEj9TDFy2dd3DzfdjDaE8w+jg0rZJBVoSHTAijkXt4/Gz1E93/j3Uqc6zPeAB7eWseXD5sIT+/KtXEMXXHx8FzYejVqSvFPytYAU47bUfUwm+4cMgfR/OYwsf+4NBPfidIBTUTWOYiG5q+dP0krTIoxb6M9XTggGyb30DnIeGZqkqi+fGYb0EKZg3Dd2R6lUEsf6eTJ+nGbxnakn/8tEU5DWR9nqv8XEOPxNW4ruigAAAAASUVORK5CYII="
  }
  let target = `
    <h2>Exam Test</h2>
    <div class="text_content_wrapper">
        <div class="typeLanguageWrapper"><span>Question type: ${type}</span>
        <div class="markReview">
        <div class="bookmark_image_wrapper"  onClick="reviewHandler(event)"><span>Mark For Review</span>
        <img  id="${id + "i"}"
                src="${src}">
        </div>
        <button><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFvSURBVHgBtVXdbYMwGDxbDNANQiZoOkEZIRskFeKJl25QRugIsEE2KBu03YBMUF4RSK5dPhfHxchuyEmnix3i+/5MWJZlj5AQQjCsiCiKmmEYYuR5vsGNoILnXddtrf1Y8k1SkF4VAJ/Ze5FM6LPSAisbJKRPpHusaLDDWKJGspRsJe9wWaYDxvIpvkveI8BAP/xBeiJ1ZaECqikIL4O9oSrCo3GQRiXJiCUdfoCnwc7xnCuDhtQrA7P+zOBcH2yDBh4Gdv01lvqgy1XBw8A+UKMmbfEPcI9o7H2Vqb7pekzN0RUwmj6XAYwf2NMRY8wooXXwmJoHmarREl9xOaYKhaG/VYgwj3bBYIsAuDKo6LAjZuqKqYRHWquMihADdXiCvyMbDL7w3afkA6YLZ06XnqyS1s8IzMCFWPIL43+GF0INdPMLTD1Qe6c1DRJMvalpfYbjvRQxxgTCoHtjo4L1Fuj7/vxzD9I03XDOY9wA3wJHYTcOXPfnAAAAAElFTkSuQmCC"></button>
    </div>
        
        </div>
        <div class="questionBox" id="showQuestions"><span class="text_content">${currentQsn}.</span><span style="display: block;"></span>
        <div class="qst" id="${i}">
          ${string}
        </div>

        </div>
        </div>
`
  // <div class="btn_wrapper"><button>Previous</button></div>
  document.querySelector('#qsndiv').insertAdjacentHTML("beforeend", target)

}
// 
function inArray(valueToCheck, array) {
  // console.log(valueToCheck)
  var length = array.length;
  // console.log("arr" + length)
  for (var i = 0; i < length; i++) {
    // console.log(typeof (array[i]['id']))
    // console.log(typeof (parseInt(valueToCheck)))
    if (parseInt(array[i]['id']) == parseInt(valueToCheck))
      // console.log("foundDAta")
      return true;
  }
  // console.log("Not foundDAta")
  return false;
}
var Options = []
var smallOpt = {}
var currqsDis = ""
var optionData = {}
var colorData = {

}
var reviewed = []
var answered = []
var reviewed = []
var currentQ = []
var skipped = []
function optionClickHandler(e, id) {
  console.log(id)
  console.log(e.target.id)
  var recToRemove = id;
  onlyOne(e.target.name, e.target.id)
  // console.log(e)
  if (document.getElementById(e.target.id).checked) {

    // console.log(answered.indexOf(recToRemove))
    if (answered.indexOf(recToRemove) == -1) {
      answered.push(id)

      console.log('checked')
    } else {
      // answered.splice(answered.indexOf(recToRemove)) 
      console.log('checked2')
    }
    // var recToRemove=currqsDis;
    // answered.splice(answered.indexOf(recToRemove))
    checked = true;
    console.log(answered)

  } else {
    console.log("notChecked")
    console.log(answered)
    //   var recToRemove=currqsDis;
    answered.splice(answered.indexOf(recToRemove), 1)
    checked = false
    console.log(answered)
  }
  // console.log(e.target.id)
  // console.log(e.target.name)

  // if (e.target.id.id!==correctOption){
  //     className=" classWrong"
  //     addClass(className,Oid)
  // }
  // className=" classCorrect"
  // addClass(className,correctOption+"li")
  // checkboxes.forEach((item) => {
  //     if (item !== checkbox) item.checked = false
  //     item.disabled= true
  // })

}

function storeOptionData(cdata, correctAnswer,id) {
  if (existOption == false) {
    var data = cdata['data'][0]
  } else {
    var data = cdata
  }

  var qid = id
  var specialData = Questions[0]
  var allData = specialData[qid]
  // console.log(cdata)


  var obj = {
    'answer_data': data,
    'QuestionData': allData,
    'correct_option': correctAnswer

  }
  optionData[qid] = obj
  // console.log(optionData)


}
function updateDisplayNumber(id) {
  // if (currqsDis !== '') {
  for (let i in Options) {
    if (parseInt(Options[i]['id']) == parseInt(currqsDis)) {
      document.getElementById(id + 'op').style.display = "flex"
    } else {
      try {
        document.getElementById(Options[i]['id']).style.display = "none"
      } catch (e) {
        // console.log(e)
      }

    }

  }
  currqsDis = parseInt(id)
  // }else{
  //     currqsDis = parseInt(id)
  // }
}
function createOption(id) {
  // console.log(Options)
  // console.log(id)
  // console.log(currqsDis)
  var specialData = Questions[0]
  var allData = specialData[id]
  var subjectName = allData['subject']
  var sectionName = allData['section_name']
  var currentQsn = allData['current_Qs']
  var totalQsn = allData['total_Qs']
  var paperId = allData['paperId']
  var question = allData['q_text']
  var type = allData['answer_type_id']
  var data = '{"paper_id":' + paperId + ',"qid":' + id + '}';
  var method = "Post";
  var url = 'https://learning.motion.ac.in/motioneducation/api/user/pyqQuestionDetailsAllNew';
  var OptionForQ = allData['option']
  console.log(OptionForQ)
  // var url = 'https://learning.motion.ac.in/motioneducation/api/user/cpsQuestionDetailsBySubTopic';
  var pdata = { 'id': id }
  if (currqsDis == "") {
    currqsDis = parseInt(id)
    Options.push(pdata)
    console.log(Options)
    if (existOption == false) {
      showLoader()
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          hideLoader()
          //   console.log(xhr.responseText);
          var jsons2 = JSON.parse(xhr.responseText)
          // renderClassData(jsons)
          console.log(jsons2);

          //   var text =  sendRequest(url, data, method)
          var jsons = jsons2
          //   console.log(jsons)
          for (let x in jsons['data'][0]['option']) {
            if (jsons['data'][0]['option'][x]['is_correct'] == '1') {
              var correctOption = jsons['data'][0]['option'][x]['option_id']
            }
          }
          storeOptionData(jsons2, correctOption,id)
          console.log("type for this question" + type)
          if (parseInt(type) !== 3) {

            let htmlta = `
                            
                          <div class="single_select_option_collection_wrapper " id="${id + "op"}" ;>
          
                          </div>
                            
                            
                            `
            document.querySelector('#opnC').insertAdjacentHTML("beforeend", htmlta)
            for (let x in jsons['data'][0]['option']) {
              var option = jsons['data'][0]['option'][x]['option']
              var correct = jsons['data'][0]['option'][x]['is_correct']
              // console.log(correct)
              var htmlOption = option
              // console.log(typeof(x))
              // console.log(x+1)
              var option_id = jsons['data'][0]['option'][x]['option_id']
              const parser = new DOMParser();
              var htmlDocOpt = parser.parseFromString(htmlOption, 'text/html');
              var optionValue = letterValue(parseInt(x) + 1)
              for (al of htmlDocOpt.querySelectorAll("img[src]")) {
                if (al.src.includes("http")) {
                } else {
                  if (al.src.includes("ckfinder")) {
                    al.src = "https://quizmaster.motion.ac.in/" + "ckfinder" + (al.src).split("ckfinder")[1];
                  }
                }
              }
              // ,'${levelId}','${id}','${name}','${correctOption}'
              var levelId = option_id + "li"
              var string2 = htmlDocOpt.getElementsByTagName('html')[0].innerHTML;
              var name = "current_question_" + currentQsn
              let htmlta = `
                            
                             <div class="single_select">
                               <input type="checkbox" id="${option_id}" name="current_question_${currentQsn}" class=""   onClick="optionClickHandler(event,'${id}')">
                                 <label for="${option_id}" id="${levelId}" value="${correctOption}"  class="single_option_wrapper  show">
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
                           
                            
                            
                            `
              document.querySelector("[id='" + id + "op" + "']").insertAdjacentHTML("beforeend", htmlta)


            }
            updateDisplayNumber(id)
          } else {
            let htmlta = `
                      <div class="input_wrapper show2" id="${id + "op"}" >
                      </div>
                          
                            
  
                            `
            document.querySelector('#opnC').insertAdjacentHTML("beforeend", htmlta)
            let htmlta2 = `
                  <div class="input_inner_wrapper"><input type="number" placeholder="Enter your answer" value=""></div>
                          
                            
  
                            `
            document.querySelector("[id='" + id + "op" + "']").insertAdjacentHTML("beforeend", htmlta2)
            updateDisplayNumber(id)
          }




          // console.log(i)
          // return jsons
        }
      };
      var data = data;

      xhr.send(data);
    } else {


      var jsons = OptionForQ
      console.log(jsons)
      for (let x in jsons) {
        if (jsons[x]['is_correct'] == '1') {
          var correctOption = jsons[x]['option_id']
        }
      }
      storeOptionData(OptionForQ, correctOption)
      if (parseInt(type) !== 3) {

        let htmlta = `
                        
                      <div class="single_select_option_collection_wrapper " id="${id + "op"}" ;>
      
                      </div>
                        
                        
                        `
        document.querySelector('#opnC').insertAdjacentHTML("beforeend", htmlta)
        for (let x in jsons) {
          var option = jsons[x]['option']
          var correct = jsons[x]['is_correct']
          // console.log(correct)
          var htmlOption = option
          // console.log(typeof(x))
          // console.log(x+1)
          var option_id = jsons[x]['option_id']
          const parser = new DOMParser();
          var htmlDocOpt = parser.parseFromString(htmlOption, 'text/html');
          var optionValue = letterValue(parseInt(x) + 1)
          for (al of htmlDocOpt.querySelectorAll("img[src]")) {
            if (al.src.includes("http")) {
            } else {
              if (al.src.includes("ckfinder")) {
                al.src = "https://quizmaster.motion.ac.in/" + "ckfinder" + (al.src).split("ckfinder")[1];
              }
            }
          }
          var levelId = option_id + "li"
          var string2 = htmlDocOpt.getElementsByTagName('html')[0].innerHTML;
          var name = "current_question_" + currentQsn
          let htmlta = `
                        
                         <div class="single_select">
                           <input type="checkbox" id="${option_id}" name="current_question_${currentQsn}" class=""   onClick="optionClickHandler(event,'${id}')">
                             <label for="${option_id}" id="${levelId}" value="${correctOption}" class="single_option_wrapper  show">
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
                       
                        
                        
                        `
          document.querySelector("[id='" + id + "op" + "']").insertAdjacentHTML("beforeend", htmlta)


        }
        updateDisplayNumber(id)
      } else {
        let htmlta = `
                  <div class="input_wrapper show2" id="${id + "op"}" >
                  </div>
                      
                        

                        `
        document.querySelector('#opnC').insertAdjacentHTML("beforeend", htmlta)
        let htmlta2 = `
              <div class="input_inner_wrapper"><input type="number" placeholder="Enter your answer" value=""></div>
                      
                        

                        `
        document.querySelector("[id='" + id + "op" + "']").insertAdjacentHTML("beforeend", htmlta2)
        updateDisplayNumber(id)





        // console.log(i)
        // return jsons



      }


    }


  } else {
    if (parseInt(currqsDis) !== parseInt(id)) {

      if (inArray(id, Options) == true) {
        // document.getElementById(id+'op').style.display = "block"
        document.getElementById(id + 'op').style.display = "flex"
        document.getElementById(currqsDis + "op").style.display = "none"
        // currqsDis=parseInt(id)
        updateDisplayNumber(id)

      } else {

        // document.getElementById(id+'op').style.display = "block"
        document.getElementById(currqsDis + "op").style.display = "none"
        Options.push(pdata)
        // currqsDis=parseInt(id)
        if (existOption == false) {
          showLoader()
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
          xhr.setRequestHeader("content-type", "application/json");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              console.log(xhr.status);
              hideLoader()
              //   console.log(xhr.responseText);
              var jsons2 = JSON.parse(xhr.responseText)
              // renderClassData(jsons)
              console.log(jsons2);

              //   var text =  sendRequest(url, data, method)
              var jsons = jsons2
              //   console.log(jsons)
              for (let x in jsons['data'][0]['option']) {
                if (jsons['data'][0]['option'][x]['is_correct'] == '1') {
                  var correctOption = jsons['data'][0]['option'][x]['option_id']
                }
              }
              storeOptionData(jsons2, correctOption,id)
              if (parseInt(type) !== 3) {

                let htmlta = `
                                    
                                  <div class="single_select_option_collection_wrapper " id="${id + "op"}" ;>
                  
                                  </div>
                                    
                                    
                                    `
                document.querySelector('#opnC').insertAdjacentHTML("beforeend", htmlta)
                for (let x in jsons['data'][0]['option']) {
                  var option = jsons['data'][0]['option'][x]['option']
                  var correct = jsons['data'][0]['option'][x]['is_correct']
                  // console.log(correct)
                  var htmlOption = option
                  // console.log(typeof(x))
                  // console.log(x+1)
                  var option_id = jsons['data'][0]['option'][x]['option_id']
                  const parser = new DOMParser();
                  var htmlDocOpt = parser.parseFromString(htmlOption, 'text/html');
                  var optionValue = letterValue(parseInt(x) + 1)
                  for (al of htmlDocOpt.querySelectorAll("img[src]")) {
                    if (al.src.includes("http")) {
                    } else {
                      if (al.src.includes("ckfinder")) {
                        al.src = "https://quizmaster.motion.ac.in/" + "ckfinder" + (al.src).split("ckfinder")[1];
                      }
                    }
                  }
                  var levelId = option_id + "li"
                  var string2 = htmlDocOpt.getElementsByTagName('html')[0].innerHTML;
                  var name = "current_question_" + currentQsn
                  let htmlta = `
                                    
                                     <div class="single_select">
                                       <input type="checkbox" id="${option_id}" name="current_question_${currentQsn}" class=""   onClick="optionClickHandler(event,'${id}')">
                                         <label for="${option_id}" id="${levelId}" value="${correctOption}" class="single_option_wrapper  show">
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
                                   
                                    
                                    
                                    `
                  document.querySelector("[id='" + id + "op" + "']").insertAdjacentHTML("beforeend", htmlta)


                }
                updateDisplayNumber(id)
              } else {
                let htmlta = `
                              <div class="input_wrapper show2" id="${id + "op"}" >
                              </div>
                                  
                                    
          
                                    `
                document.querySelector('#opnC').insertAdjacentHTML("beforeend", htmlta)
                let htmlta2 = `
                          <div class="input_inner_wrapper"><input type="number" placeholder="Enter your answer" value=""></div>
                                  
                                    
          
                                    `
                document.querySelector("[id='" + id + "op" + "']").insertAdjacentHTML("beforeend", htmlta2)
                updateDisplayNumber(id)
              }




              // console.log(i)
              // return jsons
            }
          };
          var data = data;

          xhr.send(data);




        } else {

          var jsons = OptionForQ

          for (let x in jsons) {
            if (jsons[x]['is_correct'] == '1') {
              var correctOption = jsons[x]['option_id']
            }
          }
          storeOptionData(OptionForQ, correctOption,id)
          if (parseInt(type) !== 3) {

            let htmlta = `
                              
                            <div class="single_select_option_collection_wrapper " id="${id + "op"}" ;>
            
                            </div>
                              
                              
                              `
            document.querySelector('#opnC').insertAdjacentHTML("beforeend", htmlta)
            for (let x in jsons) {
              var option = jsons[x]['option']
              var correct = jsons[x]['is_correct']
              // console.log(correct)
              var htmlOption = option
              // console.log(typeof(x))
              // console.log(x+1)
              var option_id = jsons[x]['option_id']
              const parser = new DOMParser();
              var htmlDocOpt = parser.parseFromString(htmlOption, 'text/html');
              var optionValue = letterValue(parseInt(x) + 1)
              for (al of htmlDocOpt.querySelectorAll("img[src]")) {
                if (al.src.includes("http")) {
                } else {
                  if (al.src.includes("ckfinder")) {
                    al.src = "https://quizmaster.motion.ac.in/" + "ckfinder" + (al.src).split("ckfinder")[1];
                  }
                }
              }
              var levelId = option_id + "li"
              var string2 = htmlDocOpt.getElementsByTagName('html')[0].innerHTML;
              var name = "current_question_" + currentQsn
              let htmlta = `
                              
                               <div class="single_select">
                                 <input type="checkbox" id="${option_id}" name="current_question_${currentQsn}" class=""   onClick="optionClickHandler(event,'${id}')">
                                   <label for="${option_id}" id="${levelId}" value="${correctOption}" class="single_option_wrapper  show">
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
                             
                              
                              
                              `
              document.querySelector("[id='" + id + "op" + "']").insertAdjacentHTML("beforeend", htmlta)


            }
            updateDisplayNumber(id)
          } else {
            let htmlta = `
                        <div class="input_wrapper show2" id="${id + "op"}" >
                        </div>
                            
                              
    
                              `
            document.querySelector('#opnC').insertAdjacentHTML("beforeend", htmlta)
            let htmlta2 = `
                    <div class="input_inner_wrapper"><input type="number" placeholder="Enter your answer" value=""></div>
                            
                              
    
                              `
            document.querySelector("[id='" + id + "op" + "']").insertAdjacentHTML("beforeend", htmlta2)
            updateDisplayNumber(id)
          }




          // console.log(i)
          // return jsons



        }

      }
    } else {

      updateDisplayNumber(id)

    }

  }




}







function removeCurrentView(cssName, id) {
  // var class1=((cssName).replace(/\s/g, "")).split('lbl')[0]
  // console.log(class1)
  if (id !== presentVIew) {

    try {
      removeClass("current_lblB", presentVIew + "B")
      removeClass("current_lbl", presentVIew + "Q")

      // removeClass("current_lbl", presentVIew + "Q")
      // removeClass("isGussedAnswerB", presentVIew + "B")
    } catch (e) {
      console.log(e)
    }
    presentVIew = id

  }
  if (id == presentVIew) {
    try {
      removeClass("isGussedAnswer", presentVIew + "Q")
      removeClass("isGussedAnswerB", presentVIew + "B")
    } catch (e) {
      console.log(e)
    }

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
function upDateAllcolor(id) {
  if (checked == true) {
    if (id !== presentVIew) {
      var cssName = " answered_lbl"
      var cssName2 = " answered_lblB"
      var idForM = presentVIew + "B"
      var idForB = presentVIew + "Q"
      addClass(cssName, idForB)
      addClass(cssName2, idForM)
      // removeClass("current_lblB", presentVIew + "B")
      // removeClass("current_lbl", presentVIew + "Q")
      // presentVIew = id

    }



    // console.log(currentViewid+"tttt")
    // if(id !== presentVIew){
    //     removeClass(cssName,presentVIew+"Q")
    //     presentVIew=id

    // }


    // classNameQ = " current_lbl"
    // classNameB = " current_lblB"

    // addClass(cssName, idForQ)

    // removeClass("current_lblB", presentVIew + "B")
    // removeClass("current_lbl", presentVIew + "Q")
    // presentVIew = id

  }
  console.log(checked)

}
function upDateAllANswerColor(id) {
  for (i in Options) {
    // console.log(Options[i])
    var clas = 'answered_lbl'
    var class2 = 'answered_lblB'
    var idQ = Options[i]['id'] + "Q"
    var idm = Options[i]['id'] + "B"
    removeClass(clas, idQ)
    removeClass(class2, idm)
    // console.log(i)
  }
  // for (i in answered){
  //     var clas='answered_lbl'
  //     var cssName=' answered_lbl'
  //     var idQ=answered[i]+"Q"
  //     removeClass(clas, idQ)
  //     console.log(answered[i])
  //     // addClass(cssName, idQ)
  //     // addClass(cssName2, idForM)
  // }
  for (i in answered) {
    var clas = ' answered_lblB'
    var cssName = ' answered_lbl'
    var idQ = answered[i] + "Q"
    var idm = answered[i] + "B"
    // removeClass(clas, idQ)
    // console.log(answered[i])
    addClass(cssName, idQ)
    addClass(clas, idm)
    // addClass(cssName2, idForM)
  }
}
function upDateAllSkipedColor(id) {
  for (i in Options) {
    // console.log(Options[i])
    if (answered.indexOf(Options[i]['id']) == -1) {
      if (parseInt(Options[i]['id']) !== parseInt(id)) {
        var clas = ' review_lblB'
        var cssName = ' review_lbl'
        var idQ = Options[i]['id'] + "Q"
        var idm = Options[i]['id'] + "B"
        var clas2 = 'review_lbl'
        var class2 = 'review_lblB'
        // try{
        //     removeClass(clas, idQ)
        //     removeClass(class2, idm)
        // }catch(e){
        //     console.log(e)
        // }

        // removeClass(clas, idQ)
        // console.log(answered[i])
        addClass(cssName, idQ)
        addClass(clas, idm)

      } else {
        // var clas=' review_lblB'
        // var cssName=' review_lbl'
        var idQ = Options[i]['id'] + "Q"
        var idm = Options[i]['id'] + "B"
        var clas = 'review_lbl'
        var class2 = 'review_lblB'
        try {
          removeClass(clas, idQ)
          removeClass(class2, idm)
        } catch (e) {
          console.log(e)
        }
      }





      // answered.push(id)

      // console.log('checked')
    } else {
      // var clas=' review_lblB'
      // var cssName=' review_lbl'
      // var idQ=Options[i]['id']+"Q"
      // var idm=Options[i]['id']+"B"
      // var clas='review_lbl'
      // var class2='review_lblB'
      // try{
      //     removeClass(clas, idQ)
      //     removeClass(class2, idm)
      // }catch(e){
      //     console.log(e)
      // }
      // answered.splice(answered.indexOf(recToRemove)) 
      // console.log('checked2')
    }
    // var recToRemove=currqsDis;
    // // answered.splice(answered.indexOf(recToRemove))
    // checked=true ;
    // console.log(answered)
    // var clas='review_lbl'
    // var class2='review_lblB'
    // var idQ=Options[i]['id']+"Q"
    // var idm=Options[i]['id']+"B"
    // removeClass(clas, idQ)
    // removeClass(class2, idm)
    // console.log(i)
  }

}
function reviewHandler(e) {
  // console.log(e)
  var uncheckedImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABkvfSiAAACfUlEQVRIDb1WPWgUQRR+b/bWWCpH1jtjEwTTCRaCP4hVQEFB8adQUMHKyjooFiJYWFlZScBCwUS0FKwkhYKFYuUVYmGSTS4cWHrZ233ON3e7t7fZHe/WMwN3+36+976d2Zl5j2mI0Ww2D4WBnCOWEyI8xUx7ESZCq8yyQsJLjstvPM/7/Ld0bAP4fvOiRPJAp56x4fo+brDiu/W6t9i3DUq5hGtrv6YlbD8XkiOD8OE0Jv7IzsSVWm3Xj2zEFkLf3zgpUfhKA6tZ8Ih6i5VzoV6ffJ+OGyAEGUn0TkTcNKiszMwBsZpNkyaEWMYo/P1JJ//XmWXfr6WcnYfj5VWxF9/sP5AhfbWX21CZGXZ3Y7RgLJm/l49d+v41ea+Md1DdfzCiy7eDQWNPY6UuYfdWoHe3fi7OkM09bec7M9aHNycylr7a41hUONTDn7N+gtElmQGXMjfI6NGlIsClcF2Vii4TpLkU7sYysWViwKXii7hMglFjwDXcfh81czFe9JLSarE/3xO0mYLNfJ/Nqrn8CuqZFg7YgGnfxrKi10/M8aXztzo0uS9Ku60yuBSKpxWVcn5ZcujFI5eOnwnNDzJsQw/NVUGl7gRyzxaEJXz7zKH1Zaarc5tUrYmB16YjM9uf35hOXQttKYwPXKrbFnDDhp6/71JFF6zrd4KEDHgQwwYfMPbBDXCZXYq2oAi82xM6djak0zc65O7YioINPmCALRoxR1IP/ZX1D2VbiiKS2I6Woz615yj05ByiB9F6KwaN8dnq5TYpE0JUZPQgpi0YExtyIWdc7ZE2IYRieg/dg2hxHDNtZfsZcCTfEEo8trVNjEnx3LZGOE0KeZyt/h/gqAEydACjTgAAAABJRU5ErkJggg=="
  var checkedImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABkvfSiAAACYElEQVRIDb2WP2gUQRTGv7e5qBCEk3RJlcrCykLRQqwsthCEaBOsbKxOLKwkKILYqIVeZWMhIoIKAYsVUgQRVFQQBAtFCIg5QTk8OI542ZzjfLOZYW+z3u3cHg7c7fx53/vtzM7Me4ICpRb+2h8AJ5SSI0owC6VmjEykIQprIurFH2CpHu15P8ydDDKoha2T2uFVBbV3kJ0dE8gn/UKL9aj62PZln7nAC8dbcxubeKCUOpQVFGmLyOsdFSzceFpdzdpvA9bC9lGo3hNATWeN/drShEzM16Pdz9O6PuAWbFnDJtNGo9cl1tBjaagDchm7Md6Wn1n29aS5cxIH7PLqzZcUfrPxw+hbTSe+E46ZIXej3uqPkq7+/7NXprDvYLEV/vgmxp3LnX4HtiVyirvXzJBb3/Znn0Vh1A2ytYyAh7roOcu+jE+bDHOB8AbxEZaxJSvgdVXGiY+WrMDcjT6qErZkBe4iLuGosFRf+u4cFhaVMBSBCqBDTAkfXlIF+R4wnnmpShiTFTB4+vjorivcu94xP9Z9ClkVRmotulRE2Fjt4e61Dn580ypdvn5u48zFKczMTRSRg6yAaQEj9TDFy2dd3DzfdjDaE8w+jg0rZJBVoSHTAijkXt4/Gz1E93/j3Uqc6zPeAB7eWseXD5sIT+/KtXEMXXHx8FzYejVqSvFPytYAU47bUfUwm+4cMgfR/OYwsf+4NBPfidIBTUTWOYiG5q+dP0krTIoxb6M9XTggGyb30DnIeGZqkqi+fGYb0EKZg3Dd2R6lUEsf6eTJ+nGbxnakn/8tEU5DWR9nqv8XEOPxNW4ruigAAAAASUVORK5CYII="
  // console.log(e.target.currentSrc)
  if (e.target.currentSrc == uncheckedImg) {
    if (reviewed.indexOf(e.target.id) == -1) {
      reviewed.push((e.target.id).split('i')[0])

    }
    document.getElementById(e.target.id).src = checkedImg;

  }
  else {
    document.getElementById(e.target.id).src = uncheckedImg;
    reviewed.splice(reviewed.indexOf((e.target.id).split('i')[0]), 1)
  }
  console.log(reviewed)
}

function reviewColor() {
  for (i in Options) {
    // console.log(Options[i])
    if (reviewed.indexOf(Options[i]['id']) == -1) {
      var idQ = Options[i]['id'] + "Q"
      // console.log(idQ)
      var idm = Options[i]['id'] + "B"
      var clas = 'isGussedAnswer'
      var class2 = 'isGussedAnswerB'
      try {
        removeClass(clas, idQ)
        removeClass(class2, idm)
      } catch (e) {
        console.log(e)
      }
    } else {
      var idQ = Options[i]['id'] + "Q"
      console.log(idQ)
      var idm = Options[i]['id'] + "B"
      var clas2 = ' isGussedAnswerB'
      var cssName = ' isGussedAnswer'

      addClass(cssName, idQ)
      addClass(clas2, idm)


    }




  }

}

var time = document.getElementById("timer")
console.log(time)
var timings = 60;
var i = 0;
var myInterval = setInterval(Timeout, 1000);
function Timeout() {
  document.querySelector("#timer").innerHTML = `${(timings * 60 - i) % 500}`
  // document.querySelector('#timer').insertAdjacentHTML("beforeend", `${(timings*60-i)%60}`)
  // time[0].innerHTML=;

  i++;
}
