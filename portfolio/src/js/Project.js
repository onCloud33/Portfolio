import { useState } from 'react';
import '../css/Project.css'

function Project() {
    let [projects, projects변경] = useState(
        [{   
            id : 0,
            title : '코독(Codok)',
            intro : '대학생 독강 친구 매칭 플랫폼',
            skill : 'Django',
            explanation : ['시간표 자동등록(블랙보드 연동)', '강의별 익명 게시판', '채팅'],
            my_role : ['시간표 자동 등록'],
            etc : ['NEXT-LikeLion 9기 해커톤 1등 수상', '고려대학교 크림슨 창업지원단 초기창업패키지'],
            term : '2021/5 ~',
            link : 'https://ykring.site',
            img: 'img/codok.png'
        },
        {
            id : 1,
            title : '연고링',
            intro : '대학생 랜덤 통화 서비스 (Beta 출시)',
            skill : 'Django',
            explanation : ['랜덤 통화', '익명 커뮤니티', '쪽지'],
            my_role : ['통화 프론트 개발', '익명 커뮤니티 기능 개발'],
            etc : [],
            term : '2021/7 ~ 2021/9',
            link : 'https://ykring.site',
            img: 'img/yonkoring.jpeg'
        },
        {
            id : 2,
            title : '링쿠(LINKU)',
            intro : '콘텐츠 기반 1:1 커리어 대화 플랫폼 (Alpha 출시)',
            skill : 'Django',
            explanation : ['시간표 자동등록(블랙보드 연동)', '강의별 익명 게시판', '채팅'],
            my_role : ['시간표 자동 등록'],
            etc : ['고려대학교 파이빌 입주'],
            term : '2021/8 ~ 2021/9',
            link : 'https://ykring.site',
            img: 'img/linku.png'
        },
        {
            id : 3,
            title : "Ryoung's Portfolio",
            intro : '저의 포트폴리오 사이트입니다.',
            skill : 'React',
            explanation : [],
            my_role : [],
            etc : [],
            term : '2021/9 ~',
            link : 'https://ykring.site',
            img: 'img/linku.png'
        }]
    )

    let [toggle, toggle변경] = useState([false, false, false, false])

    let [more, more변경] = useState('more')

    function toggleChange(i){
        let newArray = [...toggle]
        newArray[i] = !toggle[i];
        toggle변경(newArray);
    }


    return(
        <div className="Project-wrap wrap">
            
            <div className="title">Projects</div>
            <div className="Projects">
                {
                    projects.map(function(project, i){
                        return(
                            <div className="project-container">
                            <div className={"project"+i}>
                                <div className="background">
                                    <div className="pro-title">{project.title}</div>
                                    <div className="pro-intro">{project.intro}</div>
                                    <button onClick={()=>{toggleChange(i); more변경(more=='more'?'close':'more');}}>{more}</button>
                                </div>
                                {
                                    toggle[i] === true
                                    ? <Toggle project={project}/>
                                    : null
                                }
                            </div>
                            
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

function Toggle(props){
    return(
       <div className="toggle-wrap">
            <div className="toggle-title">{props.project.title}</div>
            <div className="toggle-intro">{props.project.intro}</div>
       </div>
    )
}


export {Project}