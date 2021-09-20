import '../css/About.css'

function About() {
    return(
        <div className="About-wrap wrap">
            <div className="title">About Me</div>
            <div className="about-content">
                <img src='img/나.jpg' alt="" className="my-img"></img>
                <div className="bio">
                    <p>안녕하세요. 성장하는 웹 개발자 양효령입니다.</p>
                    <p>저는 아이디어를 구체화시켜 구현하고, 새로운 도전을 하는 것을 좋아합니다.</p>
                    <p>고려대학교 가정교육과 재학 중이고,
                        수학교육과(이중전공), 컴퓨터학과(부전공)를 통해 
                        CS지식과 수학 지식을 쌓고 있습니다. 
                        (2022.2 졸업 예정)</p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export {About}