import React, {useEffect, useState} from 'react';
import "../Components/UI//FAQ.css";
import arrowIcon from "../Assets/icons/arrowIcon.svg"
import ReactPlayer from 'react-player';
import useWindowWidth from "../utils/useWindowWidth";
import translations from "../utils/translates";
import mob from '../styles/FAQMobile.module.css'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const width = useWindowWidth();
    const [t, setT] = useState({});

    useEffect(() => {
        const lang = translations[localStorage.getItem('lang')];
        setT(lang)
    }, [])

    const faqs = [
        {
            question: t.faq_1_question,
            answer: t.faq_1_answer
        },
        {
            question: t.faq_2_question,
            answer: t.faq_2_answer
        },
        {
            question: t.faq_3_question,
            answer: t.faq_3_answer
        },
        {
            question: t.faq_4_question,
            answer: t.faq_4_answer
        },
        {
            question: t.faq_5_question,
            answer: t.faq_5_answer
        },
    ];

    if (width<400){
        return (
            <div className={mob.wrap}>
                <div className={mob.header}>
                    <span>
                        {t.faqs}
                    </span>
                    <p>
                        {t.help_center}
                    </p>
                    {t.help_center_description}
                </div>
                <div className={mob.video}>
                    {t.promo_video}
                    <div className={mob.player}>
                        <ReactPlayer
                            className="react-player"
                            url="https://youtu.be/xBh24baWQAI?si=QRznTHzffi4mjeZE"
                            width="100%"
                            height="100%"
                            controls={true}
                        />
                    </div>
                </div>
                <div className={mob.faqs}>
                    <div className={mob.text}>
                        <p>
                            <span>
                                {t.support}
                            </span>
                            {t.faqs}
                        </p>
                        {t.support_description}
                    </div>
                    <div className={mob.faq_section}>
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                    <span className="question-text">{faq.question}</span>
                                    <img
                                        src={arrowIcon}
                                        alt="arrow"
                                        className={`arrow ${openIndex === index ? 'open' : ''}`}
                                    />
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={"faq__wrap"}>
                <div className='intro'>
                <p>{t.faqs}</p>
                <div className={"price__title"}>{t.help_center}</div>
                <div className='desc'>
                    {t.help_center_description}
                </div>
            </div>

            <div className='main_part'>
                <div className='faq_left'>
                    <p>{t.support}</p>
                    <div className='title_2'>{t.faqs}</div>
                    <div className='desc'>{t.support_description} </div>
                </div>
                <div className='fag_right'>
                <div className="faq-section">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <span className="question-text">{faq.question}</span>
                            <img 
                                src={arrowIcon} 
                                alt="arrow" 
                                className={`arrow ${openIndex === index ? 'open' : ''}`} 
                            />
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                            {faq.answer}
                            </div>
                        )}
                        </div>
                    ))}
                </div>

                </div>
            </div>

            <div className='video'>
                <p className='title_2'>{t.promo_video}</p>
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url="https://youtu.be/xBh24baWQAI?si=QRznTHzffi4mjeZE"
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>

            </div>
            
        </div>
    );
};

export default FAQ;