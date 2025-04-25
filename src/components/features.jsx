import React from "react";
import './features.css'
export default function Features() {
    const features = [
      {
        icon: "🚀",
        title: "Fast Performance",
        text: "Lightning-fast loading times and smooth interactions"
      },
      {
        icon: "🛡️",
        title: "Secure",
        text: "Enterprise-grade security for your peace of mind"
      },
      {
        icon: "💡",
        title: "Innovative",
        text: "Cutting-edge features that set us apart"
      }
    ];
  
    return (
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }