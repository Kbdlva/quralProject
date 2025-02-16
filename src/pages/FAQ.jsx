
import React, { useState } from 'react';
import "../Components/UI//FAQ.css";
import arrowIcon from "../Assets/icons/arrowIcon.svg"
import ReactPlayer from 'react-player';


const faqs = [
    { 
      question: "What is your return policy?", 
      answer: "Our return policy allows you to return items within 30 days of purchase for a full refund." 
    },
    { 
      question: "How do I track my order?", 
      answer: "You can track your order by logging into your account and viewing your order history." 
    },
    { 
      question: "Do you offer international shipping?", 
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit." 
    },
    { 
      question: "How can I contact customer support?", 
      answer: "You can reach our customer support via email, phone, or live chat on our website." 
    },
    { 
      question: "What payment methods do you accept?", 
      answer: "We accept Visa, MasterCard, PayPal, and other major credit cards." 
    },
  ];



const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={"faq__wrap"}>
                <div className='intro'>
                <p>The FAQs</p>
                <div className={"price__title"}>Help center</div>
                <div className='desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit.
                </div>
            </div>

            <div className='main_part'>
                <div className='faq_left'>
                    <p>Support</p>
                    <div className='title_2'>FAQs</div>
                    <div className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation </div>
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
                <p className='title_2'>Promo video</p>
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url="https://youtu.be/ezbJwaLmOeM?si=taXmGzVUexdLmHjA"
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