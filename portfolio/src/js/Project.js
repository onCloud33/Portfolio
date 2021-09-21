 /*eslint-disable*/

import { useState } from 'react';
import '../css/Project.css'

function Project() {
    let [projects, projects변경] = useState(
        [{   
            id : 0,
            title : '코독(Codok)',
            intro : '대학생 독강 친구 매칭 플랫폼',
            skill : ['Django', 'html', 'css', 'js'],
            explanation : ['시간표 자동등록(블랙보드 연동)', '강의별 익명 게시판', '채팅'],
            my_role : ['시간표 자동 등록'],
            etc : ['NEXT-LikeLion 9기 해커톤 1등 수상', '고려대학교 크림슨 창업지원단 초기창업패키지'],
            term : '2021/5 ~',
            link : 'https://www.youtube.com/watch?v=P3s6IbY5WIE',
            img: 'img/codok.png',
            final : '저는 셀레니움을 이용한 블랙보드 크롤링, 에브리타임 강의 목록 데이터 전처리와 DB생성을 통해 최종적으로 시간표를 블랙보드 로그인 한 번으로 자동으로 등록할 수 있는 기능을 개발했습니다. 해커톤에서 만든 프로젝트이기에 추후에 보완하여 NodeJS와 React로 개발할 예정입니다.'
        },
        {
            id : 1,
            title : '연고링',
            intro : '대학생 랜덤 통화 서비스 (Beta 출시)',
            skill : ['Django', 'AgoraAPI', 'html', 'css', 'js'],
            explanation : ['랜덤 통화', '익명 커뮤니티', '쪽지'],
            my_role : ['통화 프론트 개발', '익명 커뮤니티 기능 개발'],
            etc : [],
            term : '2021/7 ~ 2021/9',
            link : 'https://ykring.site',
            img: 'img/yonkoring.jpeg',
            final : 'AgoraAPI를 활용하여 통화 시간이 길어질수록 상대방의 프로필 정보들을 더 많이 보이도록 하는 기능을 개발했습니다. 또한 익명 커뮤니티를 개발하여 유저 입장에서 익숙한 게시판 형태와 사용법을 구현할 수 있도록 노력했습니다.'
        },
        {
            id : 2,
            title : '링쿠(LINKU)',
            intro : '콘텐츠 기반 1:1 커리어 대화 플랫폼 (Alpha 출시 예정)',
            skill : ['Django', 'html', 'css', 'js'],
            explanation : ['커리어 콘텐츠 업로드', '통화 예약'],
            my_role : ['통화 예약 기능 전반 개발'],
            etc : ['고려대학교 파이빌 입주'],
            term : '2021/8 ~ 2021/9',
            link : '',
            img: 'img/linku.png',
            final : '전반적인 통화 예약 기능을 개발하였고, 유저 입장에서 조금 더 편하게 느낄 수 있게 개발하려고 노력했습니다.'
        },
        {
            id : 3,
            title : "Ryoung's Portfolio",
            intro : '저의 포트폴리오 사이트입니다.',
            skill : ['React'],
            explanation : [],
            my_role : [],
            etc : [],
            term : '2021/9 ~',
            link : 'https://ykring.site',
            img: 'img/me.png',
            final : '현재 보고 계신 포트폴리오 사이트입니다. React로 처음 개발한 프로젝트입니다. 앞으로 저의 멋진 경험들을 업데이트할 예정입니다. 지켜봐주세요!'
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
            <div className="Projects" data-aos="fade-in" data-aos-duration="2000" >
                {
                    projects.map(function(project, i){
                        return(
                            <div className={toggle[i]===true? `toggle${i} project-container` :"project-container"}>
                            <div className={"project"+i}>
                                <div className="background">
                                    <div className="pro-title">{project.title}</div>
                                    <div className="pro-intro">{project.intro}</div>
                                    <button onClick={()=>{toggleChange(i);}}>{more}</button>
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
           <div className="toggle-header">
                <div className="toggle-title">{props.project.title}</div>
                <div className="toggle-intro">{props.project.intro}</div>
           </div>
            <ul>
                {
                    props.project.etc.map(function(a){
                        return(<li>{a}</li>)
                    })
                }
                <li>skills : 
                {
                    props.project.skill.map(function(a){
                        return(<span> {a}</span>)
                    })
                }
                </li>
                <li>기간 : {props.project.term}</li>
                {props.project.explanation[0]?<li>주요 기능</li> :null}
                <ul>
                {
                    props.project.explanation.map(function(a){
                        return(<li>{a}</li>)
                    })
                }
                </ul>
                {props.project.explanation[0]?<li>My role</li> :null}
                <ul>
                {
                    props.project.my_role.map(function(a){
                        return(<li>{a}</li>)
                    })
                }
                </ul>
                <li>{props.project.final}</li>
                {props.project.link?<li><a href={props.project.link} target='_blank'>{props.project.link}</a></li>:null}
            </ul>
       </div>
    )
}


export {Project}