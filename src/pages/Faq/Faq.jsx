import React, {useState} from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Faq.css'

function Faq() {
  const [selected, setSelected] = useState(null)
    
  const toggle = i => {
    if(selected === i) {
      return setSelected(null)
      console.log(i)
    }
    setSelected(i)
  }
  
  const data = [
    {
      question: "what services does magawtf offer?",
      answer:  " magawtf offers a range of creative services including styling, art direction, photography, and fashion design ",
    },
    {
      question:  " what types of clients does magawtf work with?",
      answer:     "magawtf works with a diverse range of clients, including individuals, brands, and businesses.",
    },
    {
      question:  " how can i request a quote for magawtf's services?",
      answer:     "you can request a quote by filling out the form on our website or by emailing us directly at contact@magawtf.com",
    },
    {
      question: " can i see examples of magawtf's past work?",
      answer:   " yes, you can view our portfolio on our website to see examples of our past work.",
    },
    {
      question:   "how long does a typical project take to complete?",
      answer:    " the timeline for each project varies depending on the scope and complexity of the project. we will work with you to establish a timeline that meets your needs.",
    },
    {
      question:  " how does magawtf handle revisions and feedback?",
      answer:    "we welcome feedback and revisions throughout the creative process to ensure the final product meets your vision and expectations. we will work with you to make any necessary adjustments until you are completely satisfied.",
    },
    {
      question:    " what is magawtf's cancellation policy?",
      answer:  " our cancellation policy varies depending on the project and stage of completion. we will work with you to establish a fair and reasonable policy that protects both parties." ,
    },
    {
      question:  "   how can i contact magawtf if i have further questions?",
      answer:    " you can contact us by emailing contact@magawtf.com or by filling out the contact form on our website. we will get back to you as soon as possible. ",
    },
  ]

  
  

  return (
    <div className='faq__container'>
      <Navbar />  
      <div className='faq__container-body'>
        <div className='faq__container-body_left'>
          <h1>faq`s.</h1>
          <div className='faq__container-body_left-buttons'>
            {data.map((item, i) => (
              <button className={selected == i ? "faq__container-button question_button" : "faq__container-button "}  onClick={() => toggle(i)}>{item.question}</button>
              ))}
          </div>
        </div>
        <div className='faq__container-body_right'>
          <h1>ans.</h1>
          <div className='faq__container-body_right-answers '>
            <img src="/logo2.png" alt="" />
            {data.map((item, i) => (
              <p className={selected === i ? "faq__container-answer show": "faq__container-answer"}>{item.answer}</p>
              ))}

          
          </div>
        </div>

        <div className='faq__container-media_query'>
          <h1>faq`s</h1>
          <div className='faq__container-media_query-qa_container'>
            {data.map((items, i) => (
              <div className={selected === i ? 'faq__container-media_query-qa show' : 'faq__container-media_query-qa' }>
                <div className='faq__container-media_query-qa_question' onClick={() => toggle(i)}>
                  <p className={selected === i ? "faq__container-media_query-qa_question-text show": "faq__container-media_query-qa_question-text"}>{items.question}</p>
                  <img src={selected === i ? "/arrowup.png" : "/arrowdown.png"} alt=""/>
                </div>
                <h4 className={selected === i? "faq__container-media_query-qa_answer show" : "faq__container-media_query-qa_answer"}>{items.answer}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Faq


