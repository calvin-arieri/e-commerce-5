import React from 'react'
import './Description.css'

function Description() {
  return (
    <div>
        <h1 className="text-center">Description</h1>
        <section id="testimonials">
      <div className="testimonials">
        <div className="testimonial">
          <p>
          I recently traveled to Nairobi and used the tourism service for my trip, and I must say that they exceeded my expectations. 
          The team was extremely helpful in planning out my itinerary, and they made sure to take into account my specific interests and preferences. 
          The tours and activities they arranged were top-notch, and I felt like I got a true taste of Nairobi's culture and history. I highly recommend this tourism service to anyone planning a trip to Nairobi!
          </p>
          <div className="info">
            <img src='https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
             alt="" />
            <div className="details">
              <h4>Tim Reed</h4>
              <span>Regular User of Adventour</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          I traveled to Nairobi with a group of friends and we used the tourism service to help us plan our trip. 
          I have to say, I was really impressed with their level of professionalism and expertise. They were able to recommend the best restaurants, hotels, and activities for our group, and they even helped us navigate the local transportation system. 
          Thanks to their guidance, we had a fantastic time in Nairobi and I would definitely use their services again.
          </p>
          <div className="info">
            <img src='https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
             alt="" />
            <div className="details">
              <h4>Chris Brown</h4>
              <span>Regular User of Adventour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Description