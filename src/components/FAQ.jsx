import React from 'react'

const FAQ = () => {
  return (
    <div>
              <section class="faq-area-one">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-title-one">
                            <span class="sub-title uppercase">Some FAQ</span>
                            <h2 class="title">construction at your service A passion precision pride</h2>
                        </div>
                        <div class="faq-body">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            What is the typical response time for IT support requests?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable an content of a
                                                page when looking at its layout. Many desktop publishing thre packages
                                                and web page editors</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            How do you ensure the security and confidentiality of our data?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable an content of a
                                                page when looking at its layout. Many desktop publishing thre packages
                                                and web page editors</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            What services does your IT company provide?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable an content of a
                                                page when looking at its layout. Many desktop publishing thre packages
                                                and web page editors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 ms-auto">
                        <div class="faq-image">
                            <div class="image-one">
                                <img src="assets/img/faqs/faq-image-one.png" alt="faq-image-one" />
                            </div>
                            <div class="image-two">
                                <img src="assets/img/faqs/faq-image-two.png" alt="faq-image-two"
                                    class="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FAQ
