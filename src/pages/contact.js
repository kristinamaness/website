import React from "react"
import "../assets/styles/global.css"

const Contact = () => {
  return (
    <form method="post" action="#">
      <div class="px-4 py-2 m-2">
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
      </div>
      <div class="px-4 py-2 m-2">
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
      </div>
      <div class="px-4 py-2 m-2">
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
      </div>
      <div class="px-4 py-2 m-2">
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
      </div>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  )
}

export default Contact
