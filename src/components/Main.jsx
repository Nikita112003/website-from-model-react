import styles from '../styles/Main.module.css';
import '../styles/style.css';
import Module from './Module';
import leadershipIcon from '../images/build-leadership-and-culture 1.svg';
import financialIcon from '../images/financial-gain 1.svg';
import designThinkingIcon from '../images/enterprise-design-thinking-02 1.svg';
import thinkingIcon from '../images/path 2.svg';
import managementIcon from '../images/renew-team 1.svg';
import photo from '../images/image 242.png';
import msTeam from '../images/bxl_microsoft-teams.svg';
import outlook from '../images/vscode-icons_file-type-outlook.svg';

export default function() {
    let modules = [
        <Module key='Я лидер' n='1'
        heading={'Я лидер'}
        description={'Развитие лидерского мышления и управления своей эффективностью'}
        icon={leadershipIcon}
        />,
        <Module key='Финансы и банкинг' n='2'
        heading={'Финансы и банкинг'}
        description={'Финансовые модели, отчетности и их верная трактовка'}
        icon={financialIcon}
        />,
        <Module key='Дизайн мышление' n='3'
        heading={'Дизайн мышление'}
        description={'Создание продуктов и процессов, ориентированных на клиента'}
        icon={designThinkingIcon}
        />,
        <Module key='Системное мышление при принятии решений' n='4'
        heading={'Системное мышление при принятии решений'}
        description={'Мышление и принятии решений без когнитивных ошибок'}
        icon={thinkingIcon}
        />,
        <Module key='Управление в стиле коучинг' n='5'
        heading={'Управление в стиле коучинг'}
        description={'Развитие своей команды для новых достижений'}
        icon={managementIcon}
        />
    ]

    return (
    <section className={styles.main}>
        <h1>Middle Odyssey</h1>
        <h3>Программа для middle-руководителей</h3>
        <a>
            <button className={styles.assignButton}>ХОЧУ записаться!</button>
        </a>
        <div className={styles.aboutWhat}>
            <h1>О чем?</h1>
            <p className="b1">Современность диктует новые правила, нам ежедневно приходится 
          реагировать на изменения и принимать решения</p>
        </div>
        <div className={styles.now}>
            <h1>Сейчас...</h1>
            <p className="b1">...как никогда важны сильные и компетентные лидеры. 
          Для твоего развития мы открываем набор на программу для 
          middle-руководителей «Middle Odyssey lvl 1», состоящую из 5 модулей</p>
        </div>
        <div className={styles.modules}>
            {modules.map((module) => module)}
        </div>
        <div className={styles.programmForYou}>
            <h1>Это программа для тебя, если ты:</h1>
            <ul>
                <li className='p1'>middle-руководитель</li>
                <li className="p1">получил подтверждение необходимости обучения от своего руководителя,
                HR BP или HR D</li>
                <li className="p1">сможешь совмещать обучение с рабочими задачами</li>
            </ul>
        </div>
        <h2 className={styles.askQuestion}>задать вопрос</h2>
        <div className={styles.contacts}>
            {[...Array(2)].map(() => (
                <div>
                    <img src={photo} />
                    <div className={styles.contactLinks}>
                        <a href="mailto:example@example.com">
                            <img src={msTeam} />
                        </a>
                        <a href='mailto:example@example.com'>
                            <img src={outlook} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
    )
}