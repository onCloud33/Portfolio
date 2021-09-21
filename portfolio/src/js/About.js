import '../css/About.css'

function About() {
    return(
        <div className="About-wrap wrap">
            <div className="title">About Me</div>
            <div className="about-content">
                <img src='img/나.jpg' alt="" className="my-img"></img>
                <div className="bio">
                    <p>안녕하세요. 성장하는 웹 개발자 양효령입니다.</p>
                    <p>저는 문제 해결 과정을 좋아합니다. 
                        따라서 문제를 가장 빠르고 혁신적으로 해결할 수 있는 개발에 도전하게 되었고,
                         개발을 통해 다양한 문제를 해결할 때마다 행복을 느낍니다.</p>
                    <p>고려대학교 가정교육과 재학 중이고,
                        수학교육과(이중전공), 컴퓨터학과(부전공)를 통해 
                        CS지식과 수학 지식을 쌓고 있습니다. 
                        (2022.2 졸업 예정)</p>
                    <p>NEXT 9기에 들어가며 웹개발을 시작했습니다. 학회에서 만난 좋은 팀원들과 다양한 프로젝트를 하며 열심히, 또 즐겁게 성장하고 있습니다.</p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export {About}