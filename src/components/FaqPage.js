// components/FaqPage.js
import React from 'react';

function FaqPage() {
  const faqs = [
    {
      question: 'Frequently Asked Question 1',
      answer: 'Answer to the question',
    },
    // Add more FAQs
  ];

  return (
    <div>
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FaqPage;