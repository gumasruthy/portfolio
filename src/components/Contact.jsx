import React, { useState } from "react";
import "./Contact.css";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const emotions = [
    {
      title: "When I feel creative",
      image: i2,
      bgColor: "#FFECD1",
      activities: [
        "Building tech projects",
        "Learning new frameworks",
        "Solving Leetcode",
      ],
    },
    {
      title: "When I feel adventurous",
      image: i3,
      bgColor: "#E6FFFA",
      activities: [
        "Exploring opportunities",
        "Taking on challenges",
        "Trying new activities",
      ],
    },
    {
      title: "When I feel relaxed",
      image: i1,
      bgColor: "#E6FFE6",
      activities: [
        "Playing with pets",
        "Engaging in fun chess games",
        "Listening to music"
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for getting in touch!");
    setShowForm(false);
  };

  return (
    <div className="contact-section">
      <div className="love-doing-section">
        <div className="love-title-card">
          <h2>What I love doing?</h2>
        </div>

        <div className="emotions-layout">
          {emotions.map((emotion, index) => (
            <div
              key={index}
              className="emotion-card"
              style={{ backgroundColor: emotion.bgColor }}
            >
              <img
                src={emotion.image}
                alt={emotion.title}
                className="emotion-image"
              />
              <h3 className="emotion-title">{emotion.title}</h3>
              <ul className="emotion-list">
                {emotion.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="contact-header">
          <span>GET IN TOUCH</span>
          <button className="contact-button" onClick={() => setShowForm(true)}>
            CONTACT ME
          </button>
        </div>

        {showForm && (
          <div className="contact-form-container">
            <button
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              ✖
            </button>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
              />
              <button type="submit" className="send-button">
                SEND
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
