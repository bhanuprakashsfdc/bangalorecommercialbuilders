import React from 'react'

const Message = () => {
  return (
    <div>
        <section class="messages-area-one">
            <div class="messages-area-one-bg">
                <div class="container">
                    <div class="messages-area-one-main">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="image pe-3">
                                    <img src="assets/img/messages/messages-image.png" alt="messages-image"
                                        class="img-fluid w-100" />
                                </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                                <div class="text">
                                    <div class="section-title-one">
                                        <span class="sub-title uppercase white">talk with us</span>
                                        <h2 class="title white">Building with passion precision and pride</h2>
                                    </div>
                                    <div class="messages-box">
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="input-group">
                                                        <input type="text" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="input-group">
                                                        <input type="text" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="input-group">
                                                        <input type="text" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="input-group">
                                                        <select>
                                                            <option selected>Choose a Option</option>
                                                            <option value="">Mymensingh</option>
                                                            <option value="">Dhaka</option>
                                                            <option value="">Khulna</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="input-group">
                                                        <textarea rows="4" placeholder="Message here.."></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button type="submit" class="submit-btn uppercase">Send Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Message
