corAclass();

function corAclass() {
    var e = "https://learning.motion.ac.in/motioneducation/api/user/courses-and-classes";
    var t = new XMLHttpRequest;
    t.open("GET", e);
    t.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    t.onreadystatechange = function() {
        if (t.readyState === 4) {
            var e = JSON.parse(t.responseText);
            renderClassData(e);
            console.log(e)
        }
    };
    t.send()
}

function showCoursechanger() {
    document.getElementById("corsclas").style.display = "block";
    document.querySelector("#changeCourseButton").innerHTML = ""
}

function showCourseUpdater() {
    try {
        document.querySelector("#ChapterName").innerHTML = "";
        document.querySelector("#Chapters").innerHTML = "";
        document.querySelector("#subjectContent").innerHTML = "";
        document.querySelector("#tarmain").innerHTML = "";
        document.querySelector("#coursemain").innerHTML = "";
        document.getElementById("corsclas").style.display = "block";
        document.querySelector("#changeCourseButton2").innerHTML = "";
        document.querySelector("#changeCourseButton").innerHTML = "";
        document.getElementById("subjectChangebutton").style.display = "none";
        document.getElementById("subjectContent").style.display = "none";
        document.querySelector("#rdiv").innerHTML = "";
        document.querySelector("#Notesdiv").innerHTML = "";
        document.querySelector("#bdiv").innerHTML = "";
        document.getElementById("corsclass").style.display = "none";
        document.getElementById("subjectChangebutton2").style.display = "none"
    } catch (e) {
        console.log(e)
    }
}

function Showclass(e) {
    var t = "class" + e;
    document.getElementById(t).style.display = "block"
}

function Showmain(e) {
    document.querySelector("#tarmain").innerHTML = "";
    document.querySelector("#coursemain").innerHTML = "";
    document.querySelector("#changeCourseButton2").innerHTML = "";
    obj = JSON.parse(decodeURIComponent(e));
    console.log(obj);
    targetName = obj.target;
    let t = `\n    <h3>Class</h3>\n    `;
    document.querySelector("#tarmain").insertAdjacentHTML("beforeend", t);
    let n = `\n    \n    <button type="button" class="btn btn-outline-dark btn-sm"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" disabled>${targetName}</button>\n  \n       `;
    document.querySelector("#changeCourseButton2").insertAdjacentHTML("beforeend", n);
    for (let e in obj.classes) {
        var o = obj.classes[e].class;
        var a = encodeURIComponent(JSON.stringify(obj.classes[e]));
        let t = `\n        <button type="button" class="btn btn-primary" value="" onclick="ShowCourse('${a}','${targetName}');">${o}</button>\n       `;
        document.querySelector("#tarmain").insertAdjacentHTML("beforeend", t)
    }
}

function ShowCourse(e, t) {
    console.log(t);
    document.querySelector("#coursemain").innerHTML = "";
    document.querySelector("#changeCourseButton2").innerHTML = "";
    obj = JSON.parse(decodeURIComponent(e));
    className = obj.class;
    classid = obj.class_id;
    console.log(obj);
    let n = `\n    <div class="btn-group" role="group" aria-label="Basic outlined example">\n    <button type="button" class="btn btn-outline-dark btn-sm"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" disabled>${t}</button>\n    <button type="button" class="btn btn-outline-dark btn-sm"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" disabled>${className}</button>\n    </div>\n       `;
    document.querySelector("#changeCourseButton2").insertAdjacentHTML("beforeend", n);
    let o = `\n    <h3>Course</h3>\n       `;
    document.querySelector("#coursemain").insertAdjacentHTML("beforeend", o);
    for (let e in obj.course) {
        var a = obj.course[e].course;
        var r = obj.course[e].course_id;
        var i = "https://learning.motion.ac.in/motioneducation/api/user/UserSubject?course_id=" + r + "&class_id=" + classid;
        let n = `\n        <button type="button" class="btn btn-primary" value="" onclick="Showsubjects('${i}','${t}','${className}','${a}','${r}');">${a}</button>\n       `;
        document.querySelector("#coursemain").insertAdjacentHTML("beforeend", n)
    }
}

function renderClassData(e) {
    for (let i in e.data.target) {
        var t = e.data.target[i].target_id.toString();
        var n = e.data.target[i];
        var o = encodeURIComponent(JSON.stringify(n));
        var a = o.replace(/'/, "");
        var r = a.replace(/'/, "");
        let s = `\n        <button type="button" class="btn btn-primary" value="${e.data.target[i].target_id}" onclick="Showmain('${r}');">${e.data.target[i].target}</button>\n       `;
        document.querySelector("#target").insertAdjacentHTML("beforeend", s)
    }
}

function Showsubjects(e, t, n, o, a) {
    document.querySelector("#changeCourseButton2").innerHTML = "";
    let r = `<div class="btn-group" role="group" aria-label="Basic outlined example"id="buttongp">\n    <button type="button" class="btn btn-outline-dark btn-sm"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" disabled>${t}</button>\n    <button type="button" class="btn btn-outline-dark btn-sm"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" disabled>${n}</button>\n    <button type="button" class="btn btn-outline-dark btn-sm"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" disabled>${o}</button>\n    \n    </div>\n    `;
    document.querySelector("#changeCourseButton2").insertAdjacentHTML("beforeend", r);
    let i = `<div class="btn-group" role="group" aria-label="Basic outlined example" ">\n\n    <button type="button" class="btn btn-dark " onclick="showCourseUpdater()">UPDATE YOUR COURSE</button>\n    </div>\n    `;
    document.querySelector("#changeCourseButton").insertAdjacentHTML("beforeend", i);
    document.getElementById("corsclas").style.display = "none";
    var s = e;
    var c = new XMLHttpRequest;
    c.open("POST", s);
    c.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    c.setRequestHeader("Content-Type", "");
    c.onreadystatechange = function() {
        if (c.readyState === 4) {
            var e = JSON.parse(c.responseText);
            renderSubjectdata(e, a)
        }
    };
    c.send()
}

function ShowsubjectTopic(e, t) {
    document.getElementById("subjectContent").style.display = "block";
    document.querySelector("#subjectChangebutton").innerHTML = "";
    console.log(t);
    var n = "https://learning.motion.ac.in/motioneducation/api/user/UserSubjectTopic?course_id=" + e + "&subject_id=" + t;
    console.log(n);
    var o = n;
    var a = new XMLHttpRequest;
    a.open("POST", o);
    a.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    a.setRequestHeader("Content-Type", "");
    a.onreadystatechange = function() {
        if (a.readyState === 4) {
            console.log(a.status);
            var n = JSON.parse(a.responseText);
            renderSubjectTopicdata(n, e, t)
        }
    };
    a.send()
}

function ShowChapterName(e) {
    document.querySelector("#ChapterName").innerHTML = "";
    let t = `\n        <h3>${e}</h3>\n       `;
    document.querySelector("#ChapterName").insertAdjacentHTML("beforeend", t)
}

function Showvideolist(e, t, n) {
    ShowChapterName(t);
    document.getElementById("subject").style.display = "none";
    document.getElementById("subjectChangebutton2").style.display = "block";
    document.querySelector("#rdiv").innerHTML = "";
    document.querySelector("#Notesdiv").innerHTML = "";
    document.getElementById("corsclass").style.display = "block";
    solve(e);
    solveNotes(n)
}

function ShowFacultylist(e, t, n, o) {
    document.querySelector("#facultydiv").innerHTML = "";
    ShowChapterName(t);
    const a = new XMLHttpRequest;
    a.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var e = JSON.parse(a.responseText);
            console.log(e);
            for (i in e.data.VideoList) {
                var t = e.data.VideoList[i].thumnail;
                var r = e.data.VideoList[i].name;
                var s = "facultyName_" + r.toString();
                var c = e.data.VideoList[i].user_id;
                var d = (o + "&faculty_id=" + c).toString();
                if (i == 0) {
                    let e = `\n                    <div class="single_select_facultyName"><input type="radio" class="das" id="${s}"\n                        name="facultyName" value="${d}" checked="" onclick="ShowHideDiv(this)"><label\n                        for="${s}" ><span><img\n                                src="${t}"\n                                alt="icon"></span>${r}</label></div>\n                   `;
                    document.querySelector("#facultydiv").insertAdjacentHTML("beforeend", e);
                    solve(d);
                    solveNotes(n)
                } else {
                    let e = `\n                    <div class="single_select_facultyName"><input type="radio" class="das" id="${s}"\n                        name="facultyName" value="${d}" onclick="ShowHideDiv(this)" ><label\n                        for="${s}" ><span><img\n                                src="${t}"\n                                alt="icon"></span>${r}</label></div>\n                   `;
                    document.querySelector("#facultydiv").insertAdjacentHTML("beforeend", e)
                }
            }
        }
    };
    a.open("GET", e, true);
    a.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    a.send();
    document.getElementById("subject").style.display = "none";
    document.getElementById("subjectChangebutton2").style.display = "block";
    document.querySelector("#rdiv").innerHTML = "";
    document.getElementById("corsclass").style.display = "block"
}

function ShowHideDiv(e) {
    var t = e.value;
    solve(t)
}

function showsubjectChanger() {
    document.getElementById("subjectContent").style.display = "block";
    document.getElementById("subject").style.display = "block";
    document.querySelector("#chapters").innerHTML = "";
    document.getElementById("chapters").style.display = "none"
}

function showsubjectUpdater() {
    document.getElementById("subject").style.display = "block";
    document.querySelector("#rdiv").innerHTML = "";
    document.querySelector("#Notesdiv").innerHTML = "";
    document.querySelector("#chapters").innerHTML = "";
    document.getElementById("chapters").style.display = "none"
}

function renderSubjectdata(e, t) {
    document.getElementById("subjectChangebutton").style.display = "block";
    for (let a in e.data.subject) {
        var n = e.data.subject[a].sub_name.toString();
        var o = e.data.subject[a].sub_id;
        let r = `\n        <button type="button" class="btn btn-primary  " onclick="ShowsubjectTopic('${t}','${o}')" >${n}</button>\n       `;
        document.querySelector("#subject").insertAdjacentHTML("beforeend", r)
    }
}

function renderSubjectTopicdata(e, t, n) {
    document.querySelector("#rdiv").innerHTML = "";
    document.querySelector("#Notesdiv").innerHTML = "";
    document.querySelector("#chapters").innerHTML = "";
    document.getElementById("chapters").style.display = "block";
    document.getElementById("chapters").innerHTML = "<h3>Chapters</h3>";
    let o = `<div class="dropdown">\n    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Select Chapter\n    </button>\n    <ul class="dropdown-menu" id="Chapters">\n    </ul>\n   </div>\n     `;
    document.querySelector("#chapters").insertAdjacentHTML("beforeend", o);
    console.log(e);
    for (let o in e.data.topic) {
        var a = e.data.topic[o].topic_id.toString();
        var r = e.data.topic[o].topic_name;
        var i = ("https://learning.motion.ac.in/motioneducation/api/user/VideoFacultyList?page=1&search=&course_id=" + t + "&subject_id=" + n + "&topic_id=" + a).toString();
        var s = ("https://learning.motion.ac.in/motioneducation/api/user/VideoList?page=1&search=&course_id=" + t + "&subject_id=" + n + "&topic_id=" + a).toString();
        var c = ("https://learning.motion.ac.in/motioneducation/api/user/FacultyVideoListNew?page=1&search=&course_id=" + t + "&subject_id=" + n + "&topic_id=" + a).toString();
        var d = ("https://learning.motion.ac.in/motioneducation/api/user/NotesList?page=1&search=&course_id=" + t + "&subject_id=" + n + "&topic_id=" + a).toString();
        let l = `\n        <li><a class="dropdown-item" href="#" onclick="ShowFacultylist('${i}','${r}','${d}','${c}');">${r}</a></li>\n       \n       `;
        document.querySelector("#Chapters").insertAdjacentHTML("beforeend", l)
    }
} {}

function solve(e) {
    document.querySelector("#rdiv").innerHTML = "";
    var t = e.split("search=")[1];
    var n = e.split("search=")[1];
    const o = new XMLHttpRequest;
    o.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var e = JSON.parse(o.responseText);
            renderData(e);
            if (e.data.VideoList.next_page_url === null) {
                document.querySelector("#bdiv").innerHTML = ""
            } else {
                var n = e.data.VideoList.next_page_url;
                var a = n + "&search=" + t;
                document.querySelector("#bdiv").innerHTML = `<button class="btn btn-primary" type="button" id="button-addon2" onclick=getinputData2("${a}")>Next-Page</button>`
            }
            if (e.data.VideoList.prev_page_url === null) {
                document.querySelector("#pdiv").innerHTML = ""
            } else {
                var r = e.data.VideoList.prev_page_url;
                var i = r + "&search=" + t;
                document.querySelector("#pdiv").innerHTML = `<button class="btn btn-primary" type="button" id="button-addon2" onclick=getinputData2("${i}")>Previous-Page</button>`
            }
        }
    };
    o.open("GET", e, true);
    o.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    o.send()
}

function solveNotes(e) {
    var t = e.split("search=")[1];
    console.log(t);
    const n = new XMLHttpRequest;
    n.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var e = JSON.parse(n.responseText);
            renderNotesData(e);
            if (e.data.NotesList.next_page_url === null) {
                document.querySelector("#nbdiv").innerHTML = ""
            } else {
                var o = e.data.NotesList.next_page_url;
                console.log(o);
                var a = o + "&search=" + t;
                document.querySelector("#nbdiv").innerHTML = `<button class="btn btn-primary" type="button" id="button-addon2" onclick=getinputData3("${a}")>Next-Page</button>`
            }
            if (e.data.NotesList.prev_page_url === null) {
                document.querySelector("#npdiv").innerHTML = ""
            } else {
                var r = e.data.NotesList.prev_page_url;
                console.log(r);
                var i = r + "&search=" + t;
                document.querySelector("#npdiv").innerHTML = `<button class="btn btn-primary" type="button" id="button-addon2" onclick=getinputData4("${i}")>Previous-Page</button>`
            }
        }
    };
    n.open("GET", e, true);
    n.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    n.send()
}

function showNotes() {
    document.getElementById("Videos").style.display = "none";
    document.getElementById("Notes").style.display = "block"
}

function showVideos() {
    document.getElementById("Notes").style.display = "none";
    document.getElementById("Videos").style.display = "block"
}

function btoa_utf8(e) {
    return btoa(String.fromCharCode(...new TextEncoder("utf-8").encode(e)))
}

function atob_utf8(e) {
    const t = atob(e);
    return new TextDecoder("utf-8").decode(Uint8Array.from({
        length: t.length
    }, ((e, n) => t.charCodeAt(n))))
}

function getVideodetail(e, t) {
    showLectureNAme(t);
    var n = "https://learning.motion.ac.in/motioneducation/api/user/VideoDetail?video_id=" + e;
    const o = new XMLHttpRequest;
    o.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var e = JSON.parse(o.responseText);
            var t = e.data.VideoDetail.video_crypt_id;
            initApp(t)
        }
    };
    o.open("GET", n, true);
    o.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc0NjQsImV4cGlyZXNfYXQiOiIyMDIyLTEwLTA2IDA1OjUwOjUxIn0.zEUKKiuoB0JqLbfYGofAftUkHjvr4Fpm-hbUGRbbnV0");
    o.send()
}

function initApp(e) {
    shaka.polyfill.PatchedMediaKeysApple.install();
    if (shaka.Player.isBrowserSupported()) {
        initPlayer(e)
    } else {
        console.error("Browser not supported!")
    }
}
async function initPlayer(e) {
    const t = e;
    const n = new FormData;
    n.append("flag", "1");
    n.append("name", t);
    const o = {
        headers: {
            accessKey: "NUIzQVhZRDFGUkhFOU44UTcwTDI=",
            secretKey: "NS80OFJ5RUl0dz1CbE5VNmczYVRvTVN4dnVLY1haWW43MkhiVnJlVw==",
            "user-id": "TESTing_10000903_97",
            "device-type": "1",
            "device-id": "71d3548555586126ed7071102e663629",
            version: "2",
            "device-name": "ChromeCDM",
            "account-id": "10000903"
        }
    };
    try {
        const e = await axios.post("https://api.videocrypt.com/getVideoDetailsDrm", n, o);
        const t = e.data.data.link.file_url;
        const a = "https://license.videocrypt.com/validateLicense";
        const r = e.data.data.link.token;
        lightbox_open2();
        const i = document.getElementById("video");
        const s = new shaka.Player(i);
        s.configure({
            drm: {
                servers: {
                    "com.widevine.alpha": a + "?pallycon-customdata-v2=" + r
                }
            }
        });
        s.load(t).then((() => {
            console.log("The video has now been loaded!")
        })).catch((e => {
            console.log(e)
        }))
    } catch (e) {
        console.log(e)
    }
}

function renderData(e) {
    var t = e.data.VideoList.data.reverse();
    for (let e in t) {
        var n = t[e]["thumnail"];
        var o = t[e]["video_title"];
        var a = btoa_utf8(o);
        var r = t[e]["video_url"];
        var i = t[e]["video_id"];
        var s = t[e]["name"];
        var c = "url";
        var d = "nourl";
        if (r == null) {
            let e = `\n<div class="single_video_wrapper">\n<div class="left_side_content_wrapper">\n<div class="image_wrapper">\n<img src="${n}"></div></div>\n<div class="right_side_content_wrapper"><div class="right_side_content_wrapper_top">\n<div class="text_content_wrapper_1"><p class="text_content_1">${o}</p></div>\n<div class="image_wrapper"></div></div>\n<div class="text_content_wrapper_2"><p class="text_content_2">by ${s}</p>\n<div class="label_content_wrapper"><label><span>\n</span></label></div></div>\n<div class="sub_content_wrapper"><div class="right_side_content_wrapper">\n\n<button type="button" class="btn btn-primary" onclick=getHtml('${i}','${a}','${d}');>PLAY</button>\n\n\n</div></div></div></div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     `;
            document.querySelector("#rdiv").insertAdjacentHTML("afterbegin", e)
        } else {
            let e = `\n            <div class="single_video_wrapper">\n            <div class="left_side_content_wrapper">\n            <div class="image_wrapper">\n            <img src="${n}"></div></div>\n            <div class="right_side_content_wrapper"><div class="right_side_content_wrapper_top">\n            <div class="text_content_wrapper_1"><p class="text_content_1">${o}</p></div>\n            <div class="image_wrapper"></div></div>\n            <div class="text_content_wrapper_2"><p class="text_content_2">by ${s}</p>\n            <div class="label_content_wrapper"><label><span>\n            </span></label></div></div>\n            <div class="sub_content_wrapper"><div class="right_side_content_wrapper">\n            \n            <button type="button" class="btn btn-primary" onclick=getHtml('${r}','${a}','${c}');>PLAY</button>\n            \n            \n            </div></div></div></div>`;
            document.querySelector("#rdiv").insertAdjacentHTML("afterbegin", e)
        }
    }
}

function renderNotesData(e) {
    var t = e.data.NotesList.data.reverse();
    for (let e in t) {
        var n = t[e]["notes_title"];
        var o = t[e]["notes"];
        let a = `\n         \n        <div class="single_notes_wrapper">\n        <div class="notes_description_wrapper">\n        <div class="notes_details_wrapper">\n        <div class="text_content_wrapper_1">\n        <p class="text_content_1">${n}</p></div></div>\n        <div class="arrow">\n        <a href="${o}" target="_blank"><button type="button" class="btn btn-primary");>Open</button></a>\n        </div></div></div>\n\n\n\n\n\n\n\n       `;
        document.querySelector("#Notesdiv").insertAdjacentHTML("afterbegin", a)
    }
}

function lightbox_open(e) {
    window.scrollTo(0, 0);
    document.getElementById("light").style.display = "block";
    document.getElementById("fade").style.display = "block";
    playM3u8(e)
}

function lightbox_open2() {
    window.scrollTo(0, 0);
    document.getElementById("light").style.display = "block";
    document.getElementById("fade").style.display = "block"
}

function lightbox_close() {
    document.getElementById("light").style.display = "none";
    document.getElementById("fade").style.display = "none";
    var e = document.getElementById("video");
    e.pause();
    e.currentTime = 0
    document.querySelector("#light").innerHTML = ""
}

function getHtml(e, t, n) {
    if (n == "url") {
        var e = e;
        var o = new XMLHttpRequest;
        o.open("GET", e);
        o.setRequestHeader("Accept", "application/json");
        o.onreadystatechange = function() {
            if (o.readyState === 4) {
                getUrl(o.responseText, t)
            }
        };
        o.send()
    }
    if (n == "nourl") {
        getVideodetail(e, t)
    }
}

function showLectureNAme(e) {


    let vg=` <a class="boxclose" id="boxclose" onclick="lightbox_close();"></a>
       
    <video id="video" style="width: 100%; height: 100%;" controls></video>
    <div class="overlayText">
        <p id="vtitle"></p>
      </div>`
      document.querySelector("#light").insertAdjacentHTML("afterBegin", n)
    document.querySelector("#vtitle").innerHTML = "";
    var t = atob_utf8(e);
    let n = `<h5 class="lecHead">${t}</h5>\n     `;
    document.querySelector("#vtitle").insertAdjacentHTML("afterBegin", n)
}

function getUrl(e, t) {
    metaName = "twitter:image";
    var n = document.createElement("html");
    n.innerHTML = e;
    const o = n.getElementsByTagName("meta");
    showLectureNAme(t);
    for (let e = 0; e < o.length; e++) {
        if (o[e].getAttribute("name") === metaName) {
            lightbox_open(getVurl(o[e].getAttribute("content")))
        }
    }
    return ""
}

function getVurl(e) {
    var t = e;
    var n = t.split("thumbnails")[0];
    var o = n.split("/")[-1];
    var a = n + "playlist.m3u8";
    return a
}

function getinputData() {
    var e = document.getElementById("userData").value;
    event.preventDefault();
    document.querySelector("#rdiv").innerHTML = "";
    solve(e)
}

function getinputData2(e) {
    var e = e;
    event.preventDefault();
    document.querySelector("#rdiv").innerHTML = "";
    solve(e)
}

function getinputData3(e) {
    event.preventDefault();
    document.querySelector("#Notesdiv").innerHTML = "";
    solveNotes(e)
}

function getinputData4(e) {
    event.preventDefault();
    document.querySelector("#Notesdiv").innerHTML = "";
    solveNotes(e)
}

function playM3u8(e) {
    if (Hls.isSupported()) {
        var t = document.getElementById("video");
        t.volume = 1;
        var n = e.split("?");
        var o = n[0];
        var a = n[1];
        var r = new Hls;
        var i = decodeURIComponent(o);
        r.loadSource(i);
        r.attachMedia(t);
        r.on(Hls.Events.MANIFEST_PARSED, (function() {
            t.play()
        }));
        document.title = "MyM3U8player"
    }
}
